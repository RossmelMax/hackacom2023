/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#4D331F',
        'secondary': '#E6B17E',
        'accent': '#EDC9A7'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
