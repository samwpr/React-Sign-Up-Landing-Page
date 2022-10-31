/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b90e3",
      }
    },
    fontFamily:{
      sans:['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}
