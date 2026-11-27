import Link from 'next/link';

export default function LessonCard({ lesson }) {
  const tierClass = `tier-badge-${lesson.tier}`;
  return (
    <Link href={`/lessons/${lesson.slug}`} className="group block">
      <div className="card group-hover:-translate-y-1 transition-transform h-full flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <span className="text-4xl">{lesson.piece?.emoji || '♟️'}</span>
          <span className={`badge ${tierClass}`}>#{String(lesson.number).padStart(2, '0')}</span>
        </div>
        <h3 className="text-lg font-bold text-chess-bark mb-1 group-hover:text-chess-gold transition-colors">
          {lesson.title}
        </h3>
        <p className="text-sm text-chess-barkLight mb-3">
          {lesson.piece?.name || 'Chess'} <span className="text-chess-gold">({lesson.piece?.trait || 'Strategy'})</span>
        </p>
        <div className="mt-auto flex flex-wrap gap-2 text-xs">
          {lesson.duration && (
            <span className="badge bg-chess-gold/10 text-chess-bark">⏱ {lesson.duration}</span>
          )}
          {lesson.ageGroup && (
            <span className="badge bg-chess-dark/10 text-chess-dark">👦 {lesson.ageGroup}</span>
          )}
          {lesson.category === 'openings' && (
            <span className="badge bg-chess-bark/10 text-chess-bark">📖 Opening</span>
          )}
        </div>
      </div>
    </Link>
  );
}
