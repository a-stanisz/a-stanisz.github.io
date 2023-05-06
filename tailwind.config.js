/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F893AD',
          200: '#E66688',
          300: '#D34469',
          400: '#C03056',
          500: '#AE2247',
          600: '#9B183A',
          700: '#891130',
          800: '#760B27',
          900: '#63071F',
        },
        secondary: {
          100: '#FFB652',
          200: '#F1A43B',
          300: '#E2942B',
          400: '#D48621',
          500: '#C57B1A',
          600: '#B76F14',
          700: '#A9640F',
          800: '#9A5A0B',
          900: '#8C5009',
        },
        neutral: {
          100: '#89A6BA',
          200: '#6E94AD',
          300: '#59819B',
          400: '#476E88',
          500: '#385A71',
          600: '#274356',
          700: '#1B313F',
          800: '#12222D',
          900: '#0C1820',
        },
      },
    },
  },
  plugins: [],
};
