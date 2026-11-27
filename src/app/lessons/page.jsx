'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const tiers = {
  pawn: { emoji: '♙', name: 'Pawn Tier', label: 'Foundation', ages: '8–10' },
  knight: { emoji: '♘', name: 'Knight Tier', label: 'Tactics', ages: '10–12' },
  bishop: { emoji: '♗', name: 'Bishop Tier', label: 'Strategy', ages: '12–14' },
  rook: { emoji: '♖', name: 'Rook Tier', label: 'Calculation', ages: '12–14' },
  queen: { emoji: '♕', name: 'Queen Tier', label: 'Mastery', ages: '14–16' },
  king: { emoji: '♔', name: 'King Tier', label: 'Wisdom', ages: '14–16' },
};

function LessonsContent() {
  const searchParams = useSearchParams();
  const selectedTier = searchParams.get('tier') && tiers[searchParams.get('tier')] ? searchParams.get('tier') : 'all';

  // In a real app, this would import from data/lessons.json
  // For now, we return a placeholder grid
  const lessons = Array.from({ length: 50 }, (_, i) => ({
    number: i + 1,
    slug: `lesson-${String(i + 1).padStart(2, '0')}`,
    title: `Lesson ${i + 1}`,
    tier: Object.keys(tiers)[Math.min(Math.floor(i / 10), 5)],
    piece: { emoji: '♟️', name: 'Piece' },
  }));

  const filtered = selectedTier === 'all' ? lessons : lessons.filter((l) => l.tier === selectedTier);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-chess-bark to-chess-accent text-white py-12">
        <div className="container-x text-center">
          <p className="text-5xl mb-3">📚</p>
          <h1 className="text-4xl font-bold mb-2">All 50 Lessons</h1>
          <p className="text-lg text-white/90">Filter by tier and explore every chess concept.</p>
        </div>
      </section>

      {/* Tier Filter */}
      <section className="sticky top-0 z-40 bg-chess-cream border-b border-chess-bark/20 shadow-sm py-4">
        <div className="container-x flex flex-wrap justify-center gap-2">
          <Link
            href="/lessons/"
            className={`badge px-4 py-2 text-sm transition-colors ${
              selectedTier === 'all'
                ? 'bg-chess-bark text-chess-cream'
                : 'bg-white text-chess-bark hover:bg-chess-light'
            }`}
          >
            All (50)
          </Link>
          {Object.entries(tiers).map(([key, tier]) => {
            const count = lessons.filter((l) => l.tier === key).length;
            const isActive = selectedTier === key;
            return (
              <Link
                key={key}
                href={`/lessons/?tier=${key}`}
                className={`badge px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-chess-bark text-chess-cream'
                    : 'bg-white text-chess-bark hover:bg-chess-light'
                }`}
              >
                {tier.emoji} {tier.name} ({count})
              </Link>
            );
          })}
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="py-12">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((lesson) => (
              <Link
                key={lesson.number}
                href={`/lessons/${lesson.slug}/`}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition border-l-4 border-chess-gold"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{lesson.piece.emoji}</span>
                  <span className="text-xs bg-chess-light px-2 py-1 rounded text-chess-bark">
                    #{lesson.number}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1">{lesson.title}</h3>
                <p className="text-sm text-gray-600">{tiers[lesson.tier]?.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-chess-bark text-chess-cream py-6 text-center">
        <p>Chess Scholar · 50 Lessons from Pawn to King</p>
      </footer>
    </div>
  );
}

export default function LessonsPage() {
  return (
    <Suspense fallback={<div className="container-x py-20 text-center text-chess-bark">Loading lessons…</div>}>
      <LessonsContent />
    </Suspense>
  );
}
