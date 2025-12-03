/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Use class-based dark mode (works with 'dark' class)
  theme: {
    extend: {
      colors: {
        primary: '#004080',
      },
    },
  },
  plugins: [],
}

