/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.jsx',
    './components/**/*.jsx',
    './features/**/*.jsx',
    './pages/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#131723',
        'secondary-color': '#1d232f',
        'accent-color': '#359c6e',
        'dark-accent-color': '#13392a',
      },
      fontFamily: {
        sans: 'Poppins',
      },
      textColor: {
        white: '#fff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
