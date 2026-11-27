/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chess: {
          light: '#EBECD0',
          dark: '#779556',
          bark: '#5D4037',
          gold: '#D4AF37',
          cream: '#F5F5DC',
          accent: '#8B4513',
        },
        tier: {
          pawn: '#A0A0A0',
          knight: '#CD853F',
          bishop: '#4169E1',
          rook: '#8B0000',
          queen: '#9932CC',
          king: '#FFD700',
        }
      },
    },
  },
  plugins: [],
};
