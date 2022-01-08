module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff4e6',
          100: '#fee9cc',
          200: '#feddb3',
          300: '#fdd29a',
          400: '#fdc781',
          500: '#fcbc67',
          600: '#fcb14e',
          700: '#fba535',
          800: '#fb9a1b',
          900: '#fa8f02',
        },
      },
    },
    screens: {
      xs: '500px',
      // => @media (min-width: 640px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
