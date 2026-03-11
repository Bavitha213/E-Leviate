/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        periwinkle: '#A79EF7',
        plum: '#4A0F20',
        ivory: '#F3ECE1',
        slate: '#212120',
        lavender: '#A454FF',
        coral: '#FF7373',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
