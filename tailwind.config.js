/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // Add paths to your HTML and JS/JSX/TS/TSX files
    './public/index.html', 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#022364"
      }
    },
  },
  plugins: [],
}

