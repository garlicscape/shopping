/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      ml: '930px',
      lg: '1035px',
      xl: '1280px',
      mxl: '1385px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        alert: {
          '0%': { transform: 'translateY(-3px)' },
          '10%': { transform: 'translateY(0)' },
          '90%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0.7, transform: 'translateY(-3px)' },
        },
      },
      animation: {
        'appear-alert': 'alert 2s ease-out infinite',
      },
      backgroundImage: {
        banner1: `url('../public/images/banner2.jpg')`,
        banner2: `url('../public/images/banner1.jpg')`,
        banner3: `url('../public/images/banner3.jpg')`,
      },
    },
  },
  plugins: [],
};
