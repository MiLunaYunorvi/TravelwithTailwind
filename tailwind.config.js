/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./public/index.html", "./public/index2.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'mycolor' : '#fb7185',
      },
      backgroundImage:   {    
        "LA": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/LA.jpg')",
        "bali": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/bali.jpg')",
        "chicago": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/chicago.jpg')",
        "europe": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/europe.jpg')",
        "iceland": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/iceland.jpg')",
        "miami": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/miami.jpg')",
        "new_york": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/new_york.jpg')",
        "norway": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/norway.jpg')",
        'sanFrancisco': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFrancisco.jpg')",
        "sanFranciscoDesktop": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFranciscoDesktop.jpg')",
        "seattle": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/seattle.jpg')",
        "switzerland": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/switzerland.jpg')",
        "sidney": "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sidney.jpg')",
        'yosemite': "url('../public/images/yosemite.jpg')"
      },
      
      
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      }),
      textColor : {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
      fontFamily:{
        Montserrat: ["Montserrat", "sans-serif"],
      }
    },
    
  },
  variants:{
    extend :{},
    width : ["responsive","hover","focus"],
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    
    plugin(({ addBase, theme }) => {
      addBase({
          '.scrollbar': {
              overflowY: 'auto',
              scrollbarColor: `${theme('colors.blue.600')} ${theme('colors.blue.200')}`,
              scrollbarWidth: 'medium',
          },
          '.scrollbar::-webkit-scrollbar': {
              height: '4px',
              width: '4px',
          },
          '.scrollbar::-webkit-scrollbar-thumb': {
              backgroundColor: theme('colors.blue.600'),
          },
          '.scrollbar::-webkit-scrollbar-track-piece': {
              backgroundColor: theme('colors.blue.200'),
          },
      });
  }),
  ],
};