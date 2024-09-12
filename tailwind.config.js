/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html, js}"],
  darkMode: 'class',
  theme: {
    extend: {

      fontFamily: {
        "morabaLight": 'morabaLight',
        "morabaMedium": 'morabaMedium',
        "morabaBold": 'morabaBold ',
        "danaMedium": "danaMedium",
        "danaRegular": "danaRegular"
      },

      borderRadius: {
        "4xl": "2rem"
      },

      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#D8C1AC",
          600: "#967259",
          900: "#634832",
        }
      },

      boxShadow: {
        "normal": "0px 1px 10px rgba(0,0,0, 0.5)",
      },

      letterSpacing:{
        "tightest": "-0.068em"
      }

    },
  },
  plugins: [
    function({addVariant}){
      addVariant("child","&>*");
      addVariant("child-hover","&>*:hover");
    }
  ],
  }

