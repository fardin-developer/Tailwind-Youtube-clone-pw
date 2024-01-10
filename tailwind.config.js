/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        customColor: 'rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}

