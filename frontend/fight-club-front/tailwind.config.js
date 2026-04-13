/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ufc-red': '#dc143c',
        'ufc-dark': '#0a0a0a',
        'ufc-gray': '#1a1a1a',
        'ufc-light': '#f5f5f5',
        'ufc-gold': '#ffd700',
      },
      fontFamily: {
        'ufc': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
