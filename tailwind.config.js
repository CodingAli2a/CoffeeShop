/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html, js}"],
  theme: {
    extend: {

      fontFamily: {
        "morabaLight": 'morabaLight',
        "morabaMedium": 'morabaMedium',
        "morabaBold": 'morabaBold ',
      }

    },
  },
  plugins: [],
}

