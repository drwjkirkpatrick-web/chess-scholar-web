import lessonsData from '@/data/lessons.json';

export function getAllLessons() {
  return lessonsData.lessons;
}

export function getLessonBySlug(slug) {
  return lessonsData.lessons.find((l) => l.slug === slug) || null;
}

export function getTiers() {
  return {
    pawn: { emoji: '♙', name: 'Pawn Tier', label: 'Foundation', ages: '8–10' },
    knight: { emoji: '♘', name: 'Knight Tier', label: 'Tactics', ages: '10–12' },
    bishop: { emoji: '♗', name: 'Bishop Tier', label: 'Strategy', ages: '12–14' },
    rook: { emoji: '♖', name: 'Rook Tier', label: 'Calculation', ages: '12–14' },
    queen: { emoji: '♕', name: 'Queen Tier', label: 'Mastery', ages: '14–16' },
    king: { emoji: '♔', name: 'King Tier', label: 'Wisdom', ages: '14–16' },
  };
}

export function getFeaturedLessons() {
  // One featured lesson per tier (first lesson of each tier)
  const tiers = ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king'];
  return tiers.map(t => lessonsData.lessons.find(l => l.tier === t)).filter(Boolean);
}

export function getLessonsByTier(tierKey) {
  return lessonsData.lessons.filter((l) => l.tier === tierKey);
}
