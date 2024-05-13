/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#080d17',
        highlight: {
          light: '#000',
          dark: '#031b47',
        },
        grey: {
          1: 'var(--mauve-1)',
          2: 'var(--mauve-2)',
          3: 'var(--mauve-3)',
          4: 'var(--mauve-4)',
          5: 'var(--mauve-5)',
          6: 'var(--mauve-6)',
          7: 'var(--mauve-7)',
          8: 'var(--mauve-8)',
          9: 'var(--mauve-9)',
          10: 'var(--mauve-10)',
          11: 'var(--mauve-11)',
          12: 'var(--mauve-12)',
        },
      },
      fontFamily: {
        header: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        title: ['var(--font-brick)'],
      },
      animation: {
        text: 'text 15s ease-in-out infinite',
      },
      saturate: {
        125: '1.25',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '400% 100%',
            'background-position': 'left top',
          },
          '50%': {
            'background-size': '400% 100%',
            'background-position': 'right bottom',
          },
        },
      },
    },
  },
  plugins: [require('windy-radix-palette')],
};
