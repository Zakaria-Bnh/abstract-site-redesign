/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':"linear-gradient(to bottom, #1D69E9, #003366);"
      }
    }
  },
  plugins: [],
}