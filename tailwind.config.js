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
          bark: '#16324F',
          barkLight: '#2C5B8F',
          gold: '#C9A227',
          goldLight: '#E5C555',
          cream: '#DDEEFA',
          creamDark: '#C4DFF4',
          sand: '#EBF5FB',
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
