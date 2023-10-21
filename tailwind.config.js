/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      whitePrimary: '#F0F2F5',
      whiteSecondary: '#ffffff',
      blackPrimary: '#161513',
      blackSecondary: '#1C1C22',
      gradientPurple: '#B16CEA',
      gradientCarrot: '#FF5E69',
      gradientOrange: '#FF8A56',
      gradientYellow: '#FFA84B',
      lightGrey: '#c5c3c3',
    },
    fontFamily: {
      baiJamjuree: ['Bai Jamjuree', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
