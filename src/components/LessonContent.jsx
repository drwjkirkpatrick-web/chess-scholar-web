import LessonBoard from '@/components/LessonBoard';
import BoardsProvider from '@/components/BoardsProvider';
import { getLessonContent } from '@/lib/lesson-content';

/**
 * Server component: renders the full lesson plan (markdown -> HTML with
 * prose-chess styling) with interactive boards interleaved where the
 * lesson has diagrams, PGNs or move sequences.
 */
export default function LessonContent({ slug }) {
  const content = getLessonContent(slug);
  if (!content || (!content.lead && content.segments.length === 0)) return null;

  const hasBoards = content.segments.some((s) => s.type === 'board');

  const body = (
    <>
      {content.lead && (
        <p className="text-lg italic text-chess-barkLight mb-6 pl-4 border-l-4 border-chess-gold">
          {content.lead}
        </p>
      )}
      {content.segments.map((seg, i) =>
        seg.type === 'html' ? (
          <div
            key={`h-${i}`}
            className="prose-chess"
            // Safe: HTML is generated at build time by marked from our own
            // lesson markdown files (scanned: no scripts/handlers/urls).
            dangerouslySetInnerHTML={{ __html: seg.html }}
          />
        ) : (
          <LessonBoard
            key={`b-${i}`}
            fen={seg.fen}
            freePosition={seg.freePosition}
            pgn={seg.pgn}
            caption={seg.caption}
            moveCount={seg.moveCount}
          />
        )
      )}
    </>
  );

  return hasBoards ? <BoardsProvider>{body}</BoardsProvider> : body;
}
