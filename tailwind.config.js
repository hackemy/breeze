/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Manrope"', 'Inter', 'sans-serif']
      },
      colors: {
        breeze: {
          blue: '#122e59',
          teal: '#1f5d6a',
          cream: '#f6f3ed',
          gold: '#c7a46b'
        }
      },
      boxShadow: {
        card: '0 20px 45px rgba(0, 27, 65, 0.1)'
      }
    }
  },
  plugins: []
}
