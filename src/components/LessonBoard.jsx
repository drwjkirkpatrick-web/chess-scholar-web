'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

function makeChess(fen) {
  try {
    return fen ? new Chess(fen) : new Chess();
  } catch {
    return new Chess();
  }
}

/** FEN placement field -> react-chessboard position object ({ e4: 'wK', ... }) */
function placementToObject(placement) {
  const files = 'abcdefgh';
  const obj = {};
  const rows = placement.split('/');
  for (let r = 0; r < 8 && r < rows.length; r += 1) {
    let file = 0;
    for (const ch of rows[r]) {
      if (/[1-8]/.test(ch)) {
        file += parseInt(ch, 10);
      } else if (file < 8) {
        const color = ch === ch.toUpperCase() ? 'w' : 'b';
        obj[`${files[file]}${8 - r}`] = color + ch.toUpperCase();
        file += 1;
      }
    }
  }
  return obj;
}

/**
 * Interactive chessboard for lesson pages.
 *  - `fen`          : free-play board from a legal diagram position (chess.js validates moves)
 *  - `freePosition` : setup board from a diagram chess.js rejects (e.g. no kings) —
 *                     pieces can be dragged anywhere, no rule enforcement
 *  - `pgn`          : replay board with first/prev/next/last controls; free play unlocks at the end
 *  - neither        : starting position
 */
export default function LessonBoard({ fen, freePosition, pgn, caption, moveCount }) {
  const wrapRef = useRef(null);
  const [width, setWidth] = useState(0);

  const moves = useMemo(() => {
    if (!pgn) return [];
    try {
      const c = new Chess();
      // chess.js 1.x loadPgn returns undefined (throws on failure)
      c.loadPgn(pgn);
      const history = c.history();
      return history.length > 0 ? history : [];
    } catch {
      return [];
    }
  }, [pgn]);

  const isReplay = moves.length > 0;
  const isSetup = Boolean(freePosition);
  const [freePos, setFreePos] = useState(() =>
    freePosition ? placementToObject(freePosition) : null
  );
  const [game, setGame] = useState(() => makeChess(fen));
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => {
      const w = Math.floor(Math.min(el.clientWidth, 480));
      setWidth(w > 0 ? w : 0);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const replayTo = (n) => {
    if (!isReplay) return;
    const target = Math.max(0, Math.min(n, moves.length));
    const c = new Chess();
    for (let i = 0; i < target; i += 1) {
      try {
        c.move(moves[i]);
      } catch {
        break;
      }
    }
    setGame(c);
    setStep(target);
  };

  const onPieceDrop = (sourceSquare, targetSquare, piece) => {
    if (isSetup) {
      // Setup mode: move pieces freely, no rule enforcement
      if (!targetSquare || sourceSquare === targetSquare) return false;
      const next = { ...freePos };
      const moving = next[sourceSquare] || piece || null;
      delete next[sourceSquare];
      if (moving) next[targetSquare] = moving;
      setFreePos(next);
      return true;
    }
    if (isReplay && step < moves.length) return false; // finish the replay first
    try {
      const g = new Chess(game.fen());
      const isPawn = piece && piece.length >= 2 && piece[1] === 'P';
      const move = g.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: isPawn ? 'q' : undefined,
      });
      if (!move) return false;
      setGame(g);
      return true;
    } catch {
      return false;
    }
  };

  const position = isSetup ? freePos : game.fen();
  const lastMove = isReplay && step > 0 ? moves[step - 1] : null;

  return (
    <figure className="my-8 flex flex-col items-center">
      <div ref={wrapRef} className="w-full max-w-[480px] mx-auto">
        {width > 0 && (
          <Chessboard
            id={`lesson-board-${fen || 'replay'}`}
            position={position}
            boardWidth={width}
            onPieceDrop={onPieceDrop}
            animationDuration={200}
            customLightSquareStyle={{ backgroundColor: '#EBECD0' }}
            customDarkSquareStyle={{ backgroundColor: '#779556' }}
            customBoardStyle={{
              borderRadius: '0.5rem',
              boxShadow: '0 6px 16px rgba(22, 50, 79, 0.25)',
            }}
            customNotationStyle={{ fontSize: '11px', color: '#16324F' }}
          />
        )}
      </div>

      {isReplay && (
        <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
          <button
            type="button"
            onClick={() => replayTo(0)}
            className="board-btn"
            disabled={step === 0}
            aria-label="Back to start"
          >
            ⏮
          </button>
          <button
            type="button"
            onClick={() => replayTo(step - 1)}
            className="board-btn"
            disabled={step === 0}
            aria-label="Previous move"
          >
            ◀
          </button>
          <span className="text-xs text-chess-barkLight font-semibold px-1 whitespace-nowrap">
            Move {step}/{moves.length}
            {lastMove ? ` · ${lastMove}` : ''}
          </span>
          <button
            type="button"
            onClick={() => replayTo(step + 1)}
            className="board-btn"
            disabled={step >= moves.length}
            aria-label="Next move"
          >
            ▶
          </button>
          <button
            type="button"
            onClick={() => replayTo(moves.length)}
            className="board-btn"
            disabled={step >= moves.length}
            aria-label="Skip to end"
          >
            ⏭
          </button>
        </div>
      )}

      {!isReplay && (
        <p className="text-xs text-chess-barkLight/70 mt-2 text-center">
          {isSetup ? 'Drag pieces to explore the diagram' : 'Drag pieces to explore the position'}
        </p>
      )}

      {caption && (
        <figcaption className="text-sm text-chess-barkLight mt-3 text-center max-w-xl">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
