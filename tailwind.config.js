/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customLato: ['"Lato", "sans-serif"'],
        customPlaywrite: ['"Playwrite NG Modern", "cursive"'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}