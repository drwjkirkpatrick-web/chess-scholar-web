import Link from 'next/link';
import PageShell from '@/components/PageShell';
import LessonCard from '@/components/LessonCard';
import { getAllLessons, getTiers, getFeaturedLessons } from '@/lib/data-client';

export default function HomePage() {
  const lessons = getAllLessons();
  const tiers = getTiers();
  const featured = getFeaturedLessons();

  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-chess-bark via-chess-barkLight to-chess-gold text-white">
        <div className="absolute inset-0 opacity-10 text-9xl flex items-center justify-center select-none pointer-events-none">
          ♟️♞♝♜♛♚
        </div>
        <div className="container-x relative py-20 md:py-28 text-center">
          <p className="text-5xl md:text-7xl mb-4 animate-bounce-slow">♟️</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Chess Scholar
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-medium drop-shadow">
            100 Lessons from Pawn to King
          </p>
          <p className="text-base md:text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            A perfectly scaffolded chess curriculum. Volume 1: Foundations (Lessons 1–50).
            Volume 2: Opening Encyclopedia (Lessons 51–100). Every piece becomes a mentor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/lessons" className="btn-primary bg-white text-chess-bark hover:bg-chess-cream">
              📚 Explore 100 Lessons
            </Link>
          </div>
        </div>
        {/* Wavy bottom */}
        <div className="h-8 bg-chess-cream" style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }} />
      </section>

      {/* Stats Bar */}
      <section className="bg-chess-cream py-8">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="card !shadow-none bg-chess-creamDark">
            <p className="text-4xl font-bold text-chess-gold">100</p>
            <p className="text-sm text-chess-barkLight">Lesson Plans</p>
          </div>
          <div className="card !shadow-none bg-chess-creamDark">
            <p className="text-4xl font-bold text-chess-dark">6</p>
            <p className="text-sm text-chess-barkLight">Skill Tiers</p>
          </div>
          <div className="card !shadow-none bg-chess-creamDark">
            <p className="text-4xl font-bold text-chess-bark">50+</p>
            <p className="text-sm text-chess-barkLight">Opening Systems</p>
          </div>
          <div className="card !shadow-none bg-chess-creamDark">
            <p className="text-4xl font-bold text-chess-gold">8–16</p>
            <p className="text-sm text-chess-barkLight">Age Range</p>
          </div>
        </div>
      </section>

      {/* Tier Overview */}
      <section className="py-16">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-center text-chess-bark mb-2">
            🎯 Six Tiers of Mastery
          </h2>
          <p className="text-center text-chess-barkLight mb-10 max-w-2xl mx-auto">
            From learning how the Pawn moves to teaching others — every chess player
            starts somewhere and grows at their own pace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(tiers).map(([key, tier]) => {
              const count = lessons.filter((l) => l.tier === key).length;
              return (
                <Link key={key} href={`/lessons?tier=${key}`} className="card text-center group hover:-translate-y-1 transition-transform">
                  <p className="text-5xl mb-3">{tier.emoji}</p>
                  <h3 className="text-xl font-bold text-chess-bark mb-1">{tier.name}</h3>
                  <p className="text-chess-gold font-semibold mb-2">{tier.label}</p>
                  <p className="text-xs text-chess-barkLight mb-3">Ages {tier.ages} · {count} lessons</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Lessons */}
      <section className="py-16 bg-chess-creamDark/50">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-center text-chess-bark mb-2">
            ⭐ Featured Lessons
          </h2>
          <p className="text-center text-chess-barkLight mb-10">
            One lesson from each tier to get you started.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/lessons" className="btn-primary">
              See All 100 Lessons →
            </Link>
          </div>
        </div>
      </section>

      {/* Volume Overview */}
      <section className="py-16">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-center text-chess-bark mb-2">
            📚 Two Volumes, One Journey
          </h2>
          <p className="text-center text-chess-barkLight mb-10 max-w-2xl mx-auto">
            Volume 1 teaches you how to play. Volume 2 teaches you what to play.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card border-l-4 border-chess-gold">
              <h3 className="text-xl font-bold text-chess-bark mb-2">Volume 1: Foundations</h3>
              <p className="text-sm text-chess-barkLight mb-3">Lessons 1–50</p>
              <p className="text-chess-barkLight">
                The complete game: pieces, tactics, strategy, endgames, psychology, and teaching.
                Piece-persona system scaffolds every concept.
              </p>
            </div>
            <div className="card border-l-4 border-chess-dark">
              <h3 className="text-xl font-bold text-chess-bark mb-2">Volume 2: Opening Encyclopedia</h3>
              <p className="text-sm text-chess-barkLight mb-3">Lessons 51–100</p>
              <p className="text-chess-barkLight">
                50 opening systems: Open Games, Sicilian, Semi-Open, Closed Games, Indian Defenses,
                Flank Openings, and Opening Mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-chess-bark to-chess-barkLight text-white text-center">
        <div className="container-x">
          <p className="text-5xl mb-4">♟️</p>
          <h2 className="text-3xl font-bold mb-4">The Board Is Your Classroom</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Every grandmaster started with Lesson 1. Every opening was once a mystery.
            Start your chess journey today.
          </p>
          <Link href="/lessons" className="btn-primary bg-white text-chess-bark hover:bg-chess-cream">
            Start Your Journey →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
