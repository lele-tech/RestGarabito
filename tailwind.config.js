/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-purple': '#2a1d45',
        'storm-gray': '#75797E',
        'frost-gray': '#D3D3D3',
        'deep-red': '#8A2C2A',
        'midnight-blue': '#003c71',
        'forest-green': '#046307',
        'golden-amber': '#BDAA2D',
        'espresso-brown': '#211A10',
        'earth-olive': '#46460E',
        'warm-beige': '#DDC2AA',
        'dusty-tan': '#BB9F87',
        'cocoa-bark': '#362419',
        'deep-moss': '#5D5C26',
        'soft-sand': '#D9CEBC',
      },

      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        poppins: ['Poppins', 'sans-serif'], 
      },
    },

  },
  plugins: [],
}

