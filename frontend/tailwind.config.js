/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo-black': ['"Archivo Black"', 'sans-serif'],
        'qwitcher': ['Qwitcher Grypen', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
