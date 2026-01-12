/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617'
        }
      },
      backgroundImage: {
        'gradient-gold-orange': 'linear-gradient(to right, theme("colors.orange.400"), theme("colors.amber.500"), theme("colors.yellow.600"))'
      }
    }
  },
  plugins: []
}