/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C8102E',
          'red-dark': '#8B0000',
          black: '#0A0A0A',
          'gray-dark': '#1A1A1A',
          'gray-mid': '#2D2D2D',
          'gray-light': '#8A8F98',
          white: '#F9FAFB',
          gold: '#D4AF37',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        heading: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #C8102E 0%, #8B0000 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};
