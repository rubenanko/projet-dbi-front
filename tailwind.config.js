/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: 
    {
      fontFamily : {"inter": ["Inter","serif"]},
      colors: {default_text:"#faf7fc"}
    }
  },
  plugins: [],
}