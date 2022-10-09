/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat'],
      damion: ['Damion'],
      opensans: ['Open Sans'],
    },
    extend: {
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-25': 'span 25 / span 25',
        'span-30': 'span 30 / span 30',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
