/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
    },
    screens: {
      "xxs": "280px",
      "xs": "320px",      
      'sm': '481px',
      // => @media (min-width: 640px) { ... }

      'md': '769px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1201px',
      // => @media (min-width: 1280px) { ... }
      
    }
  },
  plugins: [],
}