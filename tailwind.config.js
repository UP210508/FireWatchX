/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        primary: {
          DEFAULT: '#c92a2a',
          800: '#e03131',
          700: '#f03e3e',
          600: '#fa5252',
          500: '#ff6b6b',
          400: '#ff8787'
        },
        secondary: {
          DEFAULT: '#a61e4d',
          800: '#c2255c',
          700: '#d6336c',
          600: '#e64980',
          500: '#f06595',
          400: '#faa2c1'
        },
        text: {
          DEFAULT: '#212529',
          800: '#343a40',
          700: '#495057',
          600: '#868e96',
          500: '#adb5bd',
          400: '#ced4da',
        } 
      },

      fontFamily: {
        'poppins-black': ['Poppins-Black', 'sans-serif'],
        'poppins-bold': ['Poppins-Bold', 'sans-serif'],
        'poppins-regular': ['Poppins-Regular', 'sans-serif'],
      }

    },
  },
  plugins: [],
}