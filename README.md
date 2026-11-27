# ♟️ Chess Scholar Web

The interactive home of the [Chess Scholar](https://github.com/drwjkirkpatrick-web/chess-scholar) curriculum — **100 complete lesson plans**, from a pawn's first step to teaching your own students, every one of them playable on a real chessboard.

**Live:** https://chess-scholar-web.vercel.app

## What's on the site

- **All 100 lessons, fully built out** — not summaries. Every lesson page carries the complete plan: piece persona, resources, lesson development, assessments, differentiation, teacher reflection, and the Elo cross-reference.
- **An interactive board on every lesson.** Lesson diagrams become real boards you can drag pieces on; famous games (Morphy's Opera Game, Kasparov–Kramnik, the Fried Liver…) replay move by move with ⏮ ◀ ▶ ⏭ controls; annotated opening lines keep their commentary right below the board.
- **Six tiers, one journey** — Pawn through King, with Volume 1 (Foundations, lessons 1–50) and Volume 2 (Opening Encyclopedia, lessons 51–100).

## How boards are born

The build pipeline (`src/lib/lesson-content.js`) reads each lesson's markdown at build time and turns its chess material into components:

- ASCII board diagrams → draggable position boards (setup mode where a diagram shows an informal position)
- ` ```pgn ` games → replay boards with move stepping
- Annotated move lists → replay board **plus** the original annotated text
- Lessons that teach without a diagram still get a starting position to follow along with

## Content source

Lesson markdown lives in `content/lessons/` — a mirror of the [chess-scholar curriculum repo](https://github.com/drwjkirkpatrick-web/chess-scholar), which is the source of truth. Re-sync by copying `lessons/*.md` from that repo and rebuilding.

## Tech

Next.js 14 (static export) · Tailwind CSS · react-chessboard · chess.js · marked

## Develop & deploy

```bash
npm install
npm run dev        # local dev at http://localhost:3000
npm run build      # static export to out/
vercel --prod      # deploy to production
```

## License

MIT — same as the curriculum.
