/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "linear-gradient(to right, rgb(0,0,0,0.9), rgb(0,0,0,0.7)), url('/src/assets/images/hero.jpg')",  
      },
      colors:{
        // "primary" : "rgb(239,222,15)",
        "primary" : "#c9a750",
        // "primary" : "#c9a750",
        "secondary": "#e7e8eb",
        // "secondary": "rgb(17,18,22)",
        "tertiary" : "rgb(150,100,0)"
      }
    },
  },
  plugins: [],
}

