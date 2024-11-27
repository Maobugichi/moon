/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue-machina': ['Neue Machina', 'sans-serif'],
        "raleway": ["Raleway", "sans-serif"],
        "roboto": [  "Roboto", "sans-serif"],
        "firacode": ["Fira Code", "monospace"]
      },
      keyframes: {
        customKeyframe: {
          "0": {transform: "scale(1)"},
          '100%': { transform: 'scale(0.9)' },
        },
        fade: {
          "0": {transform: "translateX(400px)"},
          '100%': { transform: "translateX(0)"},
        },
        fade2: {
          "0": {transform: "translateX(0)"},
          '100%': {transform: "translateX(1000px)"},
        },
        grow:{
          "0": {
            height:"0px", fontSize:"0%", display: "none"
          },
          "100%": {
            height: "50px",fontSize:"90%", display: "block"
          }
        }
      },
      animation: {
        customKeyframe:"customKeyframe .5s ease-in forwards",
        fade:"fade .5s ease-in forwards",
        fade2:"fade2 .5s ease-in forwards",
        grow:"grow .5s ease-in forwards"
      }
    },
  },
  plugins: [],
}