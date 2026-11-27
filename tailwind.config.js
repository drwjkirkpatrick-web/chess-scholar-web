/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        chess: {
          light: '#EBECD0',
          dark: '#779556',
          bark: '#2D1810',
          barkLight: '#5C3A28',
          gold: '#C9A227',
          goldLight: '#E5C555',
          cream: '#FFF8E7',
          creamDark: '#F5EDD8',
          sand: '#F0E6D2',
        },
      },
      fontFamily: {
        display: ['system-ui', '-apple-system', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
