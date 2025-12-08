/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#FAFBFB',
        'dark-blue': '#1B2847',
        'medium-blue': '#2B3A5C',
        'teal': '#2A9D90',
        'light-teal': '#EDF7F6',
        'red-opacity': '#FF000040',
        'red': '#FF0000',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(90deg, #1B2847 0%, #2B3A5C 100%)',
      },
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
