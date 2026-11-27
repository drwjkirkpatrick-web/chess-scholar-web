'use client';

import Link from 'next/link';

export default function HomePage() {
  const tiers = [
    { key: 'pawn', emoji: '♙', name: 'Pawn Tier', desc: 'The Foundation', color: 'text-tier-pawn', ages: '8–10', count: 10 },
    { key: 'knight', emoji: '♘', name: 'Knight Tier', desc: 'Tactics & Patterns', color: 'text-tier-knight', ages: '10–12', count: 10 },
    { key: 'bishop', emoji: '♗', name: 'Bishop Tier', desc: 'Strategy & Planning', color: 'text-tier-bishop', ages: '12–14', count: 10 },
    { key: 'rook', emoji: '♖', name: 'Rook Tier', desc: 'Calculation & Combinations', color: 'text-tier-rook', ages: '12–14', count: 10 },
    { key: 'queen', emoji: '♕', name: 'Queen Tier', desc: 'Mastery & Synthesis', color: 'text-tier-queen', ages: '14–16', count: 5 },
    { key: 'king', emoji: '♔', name: 'King Tier', desc: 'Wisdom & Teaching', color: 'text-tier-king', ages: '14–16', count: 5 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-chess-bark to-chess-accent text-chess-cream py-20">
        <div className="container-x text-center">
          <p className="text-6xl mb-4">♟️</p>
          <h1 className="text-5xl font-bold mb-4">Chess Scholar</h1>
          <p className="text-xl text-chess-gold mb-2">50 Lessons from Pawn to King</p>
          <p className="text-lg text-chess-cream/80 max-w-2xl mx-auto">
            A perfectly scaffolded chess curriculum. Each piece becomes a mentor.
            Every lesson builds on the last. From absolute beginner to master teacher.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/lessons/"
              className="bg-chess-gold text-chess-bark px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
            >
              Explore All 50 Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* Tiers Overview */}
      <section className="py-16">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-center mb-12">The Six Skill Tiers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <Link
                key={t.key}
                href={`/lessons/?tier=${t.key}`}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-current"
              >
                <div className={`text-4xl mb-2 ${t.color}`}>{t.emoji}</div>
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{t.desc}</p>
                <p className="text-xs text-gray-500">Ages {t.ages} · {t.count} lessons</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-chess-light/30">
        <div className="container-x max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How Chess Scholar Works</h2>
          <div className="space-y-6 text-left">
            <div className="flex gap-4">
              <span className="text-3xl">♙</span>
              <div>
                <h3 className="font-bold">Piece-Persona System</h3>
                <p className="text-gray-700">Each chess piece becomes a mentor. The Pawn teaches patience. The Knight teaches creativity. The King teaches wisdom.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">📐</span>
              <div>
                <h3 className="font-bold">One Concept Per Lesson</h3>
                <p className="text-gray-700">No lesson introduces more than one new idea. Concepts return in later lessons through spaced repetition.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">🧩</span>
              <div>
                <h3 className="font-bold">Puzzles Before Theory</h3>
                <p className="text-gray-700">Students encounter positions before memorizing rules. Every lesson includes interactive puzzles on the theme.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chess-bark text-chess-cream py-8 text-center">
        <p>Chess Scholar · Built with Next.js, react-chessboard & chess.js</p>
      </footer>
    </div>
  );
}
