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
      }
    },
  },
  plugins: [],
} satisfies Config
