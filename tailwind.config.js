/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':"linear-gradient(to bottom,  rgba(30,39,107,1) 21.8%, rgba(77,118,221,1) 100.2% )"
      },
      spacing: {
        'd&t-container': '80%',
        'm-container': '90%'
      }
    },
  },
  plugins: [],
}