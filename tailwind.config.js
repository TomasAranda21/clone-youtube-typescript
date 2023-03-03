/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackBase: '#0f0f0f',
      },
      screens:{
        '1xl': '1480px',
        '3xl': '1920px',
        '2xs': '550px',
        'xs': '450px',
      }
    },
  },
  plugins: [],
}
