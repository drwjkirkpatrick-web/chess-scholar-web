import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { Chess } from 'chess.js';

/**
 * Build-time lesson content pipeline.
 * Reads the lesson markdown from content/lessons/<slug>.md, renders it to
 * HTML segments, and converts board material into interactive board specs:
 *  - ASCII board diagrams  -> FEN (validated with chess.js)
 *  - ```pgn fenced games   -> replayable PGN
 *  - bare move sequences   -> replayable PGN (original text kept below)
 *  - everything else      -> styled text (prose-chess / <pre>)
 * Lessons with no board material get a starting-position board so every
 * lesson page has a chessboard to explore.
 */

const CONTENT_DIR = path.join(process.cwd(), 'content', 'lessons');

const FENCE_RE = /```(\w*)\n([\s\S]*?)```/g;
const RANK_ROW_RE = /^[ \t]*([1-8])[ \t]*\|[ \t]*(.+?)[ \t]*$/;
const PIECE_CHARS = new Set('kqrbnpKQRBNP'.split(''));

function parsePgn(text) {
  try {
    const chess = new Chess();
    // chess.js 1.x loadPgn returns undefined (it throws on failure),
    // so rely on the parsed history instead of a return value.
    chess.loadPgn(text);
    const history = chess.history();
    return history.length > 0 ? history : null;
  } catch {
    return null;
  }
}

function tryFenLine(body) {
  const line = body.trim().split('\n')[0];
  if (line.split(/\s+/).length < 2 || !line.includes('/')) return null;
  try {
    new Chess(line);
    return line;
  } catch {
    return null;
  }
}

/**
 * ASCII diagrams come in two shapes:
 *   8 | r . b q k b n r          (compact: cells space-separated)
 *   8 |   |   | Q |   | k | ...  (table: cells pipe-separated)
 * Rows are prefixed with the rank number and a pipe; a column header line
 * (a b c d e f g h) may precede them, plus a caption line.
 */
function parseDiagram(body) {
  const ranks = {};
  const captions = [];
  for (const rawLine of body.split('\n')) {
    const line = rawLine.replace(/\r$/, '');
    const m = line.match(RANK_ROW_RE);
    if (m) {
      const rank = parseInt(m[1], 10);
      if (rank < 1 || rank > 8 || ranks[rank]) continue;
      const rest = m[2];
      let cells;
      if (rest.includes('|')) {
        // "8 |   |   | Q | ..." — cells sit BETWEEN the pipes; a trailing
        // pipe yields one extra empty element, so slice(0, 8) keeps files a-h.
        cells = rest.split('|').map((c) => c.trim()).slice(0, 8);
      } else {
        cells = rest.trim().split(/\s+/);
      }
      const row = [];
      for (let i = 0; i < 8; i += 1) {
        const cell = cells[i] || '';
        const pieceChars = cell.split('').filter((c) => PIECE_CHARS.has(c));
        if (pieceChars.length === 1 && cell.replace(/[^a-zA-Z]/g, '').length === 1) {
          row.push(cell);
        } else if (pieceChars.length === 1 && cell.length <= 3) {
          row.push(pieceChars[0]);
        } else {
          row.push('');
        }
      }
      ranks[rank] = row;
    } else {
      const t = line.trim();
      if (!t) continue;
      if (/^[a-h](\s+[a-h]){5,}/.test(t)) continue; // column header
      if (t.length <= 220) captions.push(t);
    }
  }

  const rankNums = Object.keys(ranks).map(Number);
  if (rankNums.length < 8) return null;

  let totalPieces = 0;
  const fenRanks = [];
  for (let r = 8; r >= 1; r -= 1) {
    const row = ranks[r] || new Array(8).fill('');
    let fenRow = '';
    let empty = 0;
    for (const cell of row) {
      if (cell) {
        totalPieces += 1;
        if (empty) {
          fenRow += String(empty);
          empty = 0;
        }
        fenRow += cell;
      } else {
        empty += 1;
      }
    }
    if (empty) fenRow += String(empty);
    fenRanks.push(fenRow);
  }
  if (totalPieces === 0) return null;

  const placement = fenRanks.join('/');
  let caption = captions.join(' ').trim() || null;
  if (caption && caption.length > 220) caption = `${caption.slice(0, 217)}...`;

  // chess.js rejects positions without both kings (common in tactic
  // diagrams) — those still render as free-setup boards.
  try {
    const fen = `${placement} w - - 0 1`;
    new Chess(fen); // throws if the position is invalid for play
    return { fen, caption };
  } catch {
    return { freePosition: placement, caption };
  }
}

export function getLessonContent(slug) {
  if (!/^lesson-\d{2,3}-[a-z0-9-]+$/.test(slug || '')) return null;
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  let md = fs.readFileSync(file, 'utf8');

  // Tagline: first "*...*" blockquote line in the file header
  const headerLines = md.split('\n').slice(0, 15).join('\n');
  const leadMatch = headerLines.match(/^>[ \t]*\*(.+?)\*[ \t]*$/m);
  const lead = leadMatch ? leadMatch[1].trim() : null;

  // The page hero already renders the title, metadata, Learning Outcomes and
  // Key Inquiry Question (from lessons.json) — start the body at the first
  // h2 section that is not one of those duplicated blocks.
  let cut = -1;
  for (const h of md.matchAll(/^## (.+)$/gm)) {
    const t = h[1].trim().toLowerCase();
    if (t !== 'learning outcomes' && t !== 'key inquiry question') {
      cut = h.index;
      break;
    }
  }
  if (cut > 0) md = md.slice(cut);
  else md = md.replace(/^#\s.*\n/, '');

  const segments = [];
  let boardIdx = 0;
  let cursor = 0;
  let mdBuffer = '';

  const flushMd = () => {
    if (mdBuffer.trim()) {
      segments.push({ type: 'html', html: marked.parse(mdBuffer) });
    }
    mdBuffer = '';
  };

  FENCE_RE.lastIndex = 0;
  let m;
  while ((m = FENCE_RE.exec(md)) !== null) {
    mdBuffer += md.slice(cursor, m.index);
    cursor = m.index + m[0].length;
    const lang = (m[1] || '').toLowerCase();
    const body = m[2].replace(/\n+$/, '');
    const fenceText = `\`\`\`${m[1] || ''}\n${body}\n\`\`\``;

    let board = null;
    let keepText = false;

    if (lang === 'pgn') {
      if (parsePgn(body)) board = { pgn: body };
    } else {
      const rankRows = (body.match(/^[ \t]*[1-8][ \t]*\|/gm) || []).length;
      const fenLine = body.trim() && !body.includes('\n') ? tryFenLine(body) : null;
      if (fenLine) {
        board = { fen: fenLine };
      } else if (rankRows >= 6) {
        const parsed = parseDiagram(body);
        if (parsed) {
          board = { ...parsed };
        } else {
          keepText = true; // diagram could not be parsed — keep the ASCII art
        }
      } else {
        const history = parsePgn(body);
        if (history && history.length >= 4) {
          board = { pgn: body };
          keepText = true; // annotated move lists keep their commentary text
        }
      }
    }

    if (board && board.pgn && !board.moveCount) {
      const hist = parsePgn(board.pgn);
      board.moveCount = hist ? hist.length : 0;
    }

    if (board) {
      flushMd();
      segments.push({ type: 'board', ...board, id: boardIdx });
      boardIdx += 1;
    }
    if (!board || keepText) {
      mdBuffer += `${fenceText}\n\n`;
    }
  }
  mdBuffer += md.slice(cursor);
  flushMd();

  // Every lesson page gets at least one board: lessons that describe
  // positions in prose still get a starting position to explore.
  if (boardIdx === 0) {
    segments.push({
      type: 'board',
      fen: null,
      caption: 'Starting position — drag the pieces to follow along with the lesson.',
    });
  }

  return { lead, segments };
}

export function hasLessonContent(slug) {
  if (!/^lesson-\d{2,3}-[a-z0-9-]+$/.test(slug || '')) return false;
  return fs.existsSync(path.join(CONTENT_DIR, `${slug}.md`));
}
