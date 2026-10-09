/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bodoni Moda', 'serif'],
        geist: ['Geist', 'sans-serif'],
      },
      colors: {
        rasus: {
          ink: '#211916',
          muted: '#756b65',
          paper: '#f7f3ee',
          cream: '#fffdf9',
          copper: '#956747',
          line: '#e4d9cf',
        },
      },
    },
  },
  plugins: [],
}
