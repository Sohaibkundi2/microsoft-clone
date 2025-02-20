/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        microsoft: {
          blue: '#0078D4',
          black: '#000000',
          gray: '#4C4C51',
        }
      },
    },
  },
  plugins: [],
}