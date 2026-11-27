import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import { getAllLessons, getLessonBySlug, getTiers } from '@/lib/data-client';

export function generateStaticParams() {
  return getAllLessons().map((lesson) => ({
    slug: lesson.slug,
  }));
}

export function generateMetadata({ params }) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) return { title: 'Lesson Not Found — Chess Scholar' };
  return {
    title: `Lesson ${String(lesson.number).padStart(2, '0')}: ${lesson.title} — Chess Scholar`,
    description: `${lesson.piece?.emoji || '♟️'} ${lesson.title} — ${lesson.piece?.name || 'Chess'}. ${lesson.duration}, ages ${lesson.ageGroup}.`,
  };
}

export default function LessonPage({ params }) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) notFound();

  const tiers = getTiers();
  const tier = tiers[lesson.tier];

  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((l) => l.slug === lesson.slug);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <PageShell>
      {/* Lesson Hero */}
      <section className="bg-gradient-to-br from-chess-bark to-chess-barkLight text-white py-10">
        <div className="container-x">
          <Link href="/lessons" className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm mb-4">
            ← Back to All Lessons
          </Link>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-7xl md:text-8xl flex-shrink-0">{lesson.piece?.emoji || '♟️'}</div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="badge bg-white/20 text-white backdrop-blur-sm">
                  Lesson {String(lesson.number).padStart(2, '0')}
                </span>
                <span className="badge bg-white/20 text-white backdrop-blur-sm">
                  {tier.emoji} {tier.name} ({tier.label})
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{lesson.title}</h1>
              <div className="flex flex-wrap gap-3 text-sm">
                {lesson.duration && <span className="bg-white/15 px-3 py-1 rounded-full">⏱ {lesson.duration}</span>}
                {lesson.ageGroup && <span className="bg-white/15 px-3 py-1 rounded-full">👦 Ages {lesson.ageGroup}</span>}
                {lesson.tool && <span className="bg-white/15 px-3 py-1 rounded-full">🛠 {lesson.tool}</span>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="container-x py-10 max-w-4xl">
        {/* Piece Spotlight */}
        <div className="card bg-chess-gold/5 border-l-4 border-chess-gold mb-8">
          <h2 className="text-xl font-bold text-chess-gold mb-2 flex items-center gap-2">
            <span className="text-3xl">{lesson.piece?.emoji || '♟️'}</span>
            {lesson.piece?.name || 'Chess'} — {lesson.piece?.trait || 'Strategy'}
          </h2>
          <p className="text-sm text-chess-barkLight">
            <strong>Value:</strong> {lesson.piece?.value || '—'}
          </p>
        </div>

        {/* Learning Outcomes */}
        {lesson.learningOutcomes && lesson.learningOutcomes.length > 0 && (
          <div className="card bg-chess-dark/5 border-l-4 border-chess-dark mb-8">
            <h2 className="text-lg font-bold text-chess-dark mb-3">🎯 Learning Outcomes</h2>
            <ol className="list-decimal list-inside space-y-2 text-chess-bark">
              {lesson.learningOutcomes.map((outcome, i) => (
                <li key={i} className="leading-relaxed">{outcome}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Key Inquiry Question */}
        {lesson.inquiryQuestion && (
          <div className="card bg-chess-gold/5 border-l-4 border-chess-gold mb-8">
            <h2 className="text-lg font-bold text-chess-gold mb-2">❓ Key Inquiry Question</h2>
            <blockquote className="italic text-chess-barkLight leading-relaxed">
              {lesson.inquiryQuestion}
            </blockquote>
          </div>
        )}

        {/* Content placeholder */}
        <div className="card mb-8">
          <p className="text-chess-barkLight text-center py-8">
            📖 Full lesson content coming soon. This lesson plan is available in the 
            <a href="https://github.com/drwjkirkpatrick-web/chess-scholar" className="text-chess-bishop underline">Chess Scholar curriculum repo</a>.
          </p>
        </div>

        {/* Prev/Next Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
          {prevLesson ? (
            <Link href={`/lessons/${prevLesson.slug}`} className="card flex-1 group hover:bg-chess-creamDark">
              <span className="text-xs text-chess-barkLight">← Previous Lesson</span>
              <p className="font-bold text-chess-bark group-hover:text-chess-gold text-sm mt-1">
                {prevLesson.piece?.emoji || '♟️'} {prevLesson.title}
              </p>
            </Link>
          ) : <div className="flex-1" />}
          {nextLesson ? (
            <Link href={`/lessons/${nextLesson.slug}`} className="card flex-1 group hover:bg-chess-creamDark text-right">
              <span className="text-xs text-chess-barkLight">Next Lesson →</span>
              <p className="font-bold text-chess-bark group-hover:text-chess-gold text-sm mt-1">
                {nextLesson.title} {nextLesson.piece?.emoji || '♟️'}
              </p>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </article>
    </PageShell>
  );
}
