/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'afaq-blue': '#31369F',
        'afaq-green': '#009640',
        'afaq-light': '#4FACFE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        urdu: ['Noto Nastaliq Urdu', 'serif'],
      },
    },
  },
  plugins: [],
}
