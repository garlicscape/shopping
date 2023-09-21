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
        appear: {
          '0%': { opacity: 0.2 },
          '100%': { opacity: 1 },
        },
        down: {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '70%': { opacity: 0 },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        up: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '40%': { opacity: 0 },
          '100%': { opacity: 0, transform: 'translateY(-50%)' },
        },
        rotate: {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'appear-alert': 'alert 2s ease-out infinite',
        'appear-menu': 'appear 500ms ease-out',
        'slide-down': 'down 300ms ease-out',
        'slide-up': 'up 300ms ease-out',
        'rotate-half': 'rotate 300ms ease-out',
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
