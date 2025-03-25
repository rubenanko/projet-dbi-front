/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: 
    {
      fontFamily: {
        inter: ["Inter", "serif"],
        coiny: ['Coiny', 'system-ui'],
      },
      colors: {default_text:"#ffffff"},
      maxHeight: {
        '128': '32rem', // 512px
        '160': '40rem', // 640px
        // Add more custom values as needed
      }
    }
  },
  plugins: [],
}