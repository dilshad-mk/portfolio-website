/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },

      backgroundImage: {
        hero: "url('/images/profile pic.jpeg')",
      },

      screens: {
        'xl-custom': '1150px',
        'md-custom': '965px',
      },
    },
  },
  plugins: [],
}