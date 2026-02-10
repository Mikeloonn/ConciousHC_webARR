import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D362F', // --colora3
        secondary: '#C5AC96', // --colora0
        accent: '#90806F', // --colora4
        dark: '#28241F', // --colora5
        light: '#f4f7f9', // --colora1
        textGray: '#555555', // --colora6
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-1000px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
    },
  },
  plugins: [],
} satisfies Config
