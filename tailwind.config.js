/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge:[
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
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.25rem',
        md:'1.25rem',
        lg: '1.25rem',
        xl: '1.25rem',
      }
    },
    screens: {
      sm: '767px',
      md: '100%',
      lg: '1536px',
    },
    fontSize: {
      xs:['12px','18px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    colors: {
      'brand': '#D9232D',
      'secondary':'#333333',
      'gray':'#797979',
      'graybg': '#EFEFF4',
      'gray-light':'#E1E1E8',

      'blue': '#1fb6ff',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'white':'#fff',
      'black':'#000',
      'bordercolor':'#D9D9D9'
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
    extend: {
      spacing: {
        'sp-big': '80px',
        'sp-small': '50px',
        '1': '10px',
        '2': '15px',
        '3': '20px',
        '4': '25px',
        '5': '30px',
        '6': '40px'
      },
      boxShadow: {
        'normal': '0 3px 15px rgba(0, 0, 0, 0.06)',
        'xl':'0px 10px 50px rgba(0, 0, 0, 0.16)'
      }
    },
  },
  plugins: [],
}
