/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      sm: {'max': '728px'},
      md: {'max': '991px'},
      lg: {'max': '1454px'},
      padding: {
        DEFAULT: '3.25rem',
        sm: '1.25rem',
        md: '3rem',
        lg: '3rem',
        xl: '5rem',
      }
    },
    screens: {
      'sm': { 'min': '320px', 'max': '767px' },
      // => @media (min-width: 320px and max-width: 767px) { ... }

      'md': { 'min': '768px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '1024px', 'max': '1600px' },
      // => @media (min-width: 1024px and max-width: 1600px) { ... }

      'xl': { 'min': '1600px' },
      // => @media (min-width: 1600px) { ... }

    },
    extend: {

      spacing: {
        'sp-big': '80px',
        'sp-small': '50px',
        '0': '0px',
        'xsp': '5px',
        '1': '10px',
        '2': '15px',
        '3': '20px',
        '4': '25px',
        '5': '30px',
        '6': '40px'
      },
      boxShadow: {
        'normal': '0 3px 15px rgba(0, 0, 0, 0.06)',
        'xl': '0px 10px 50px rgba(0, 0, 0, 0.16)'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-new': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 2s;'
      },
      fontSize: {
        xs: ['12px', '18px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        base2: ['18px', '26px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        textxl: ['26px', '34px'],
        xxl: ['28px', '40px'],
        heading1: ['44px', '60px'],
        heading2: ['32px', '45px'],
        headingSmall: ['18px', '22px'],
        headingbold: ['54px', '64px']
      },
      colors: {
        'brand': '#D9232D',
        'brandhover': '#b00e17',
        'secondary': '#333333',
        'gray': '#797979',
        'graybg': '#EFEFF4',
        'gray-light': '#d3dce6',

        'blue': '#1fb6ff',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'white':'#fff',
        'black':'#000',
        'bordercolor':'#D9D9D9',
        'grey-border':'#707070;',
        'progressColor1': '#F9C74F',
        'progressColor2': '#F8961E',
        'progressColor3': '#F3722C',
        'progressColor4': '#D9232D',
        'date-grey' :'#90909d',
        'anchor-blue' : '#2369D9'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '728px',
          },
          '@screen md': {
            maxWidth: '90%',
          },
          '@screen lg': {
            maxWidth: '1454px',
          },
          '@screen xl': {
            maxWidth: '1454px',
          },
         
        }
      })
    }
  ],
}
