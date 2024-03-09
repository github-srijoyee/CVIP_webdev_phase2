/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray':'#496D92',
        'custom-blue':'#00d4ff'
      }
    },
  },
  plugins: [require("daisyui")],
}
