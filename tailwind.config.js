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
        'coral-reef': '#C5B9A6',
        'dawn-pink': '#F3ECE1',
      },
      fontFamily: {
        islandMoments: ['Island Moments', 'cursive'],
        righteous: ['Righteous', 'cursive'],
        poppins: ['Poppins', 'sans-serif'], 
      },
      screens: {
        'xs': '480px',   
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}