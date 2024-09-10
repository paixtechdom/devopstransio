/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary" : "#c9a750",
        "secondary": "#e7e8eb",
        "tertiary" : "rgb(150,100,0)"
      },
      boxShadow:{
        "around": "0px 0px 10px 1.5px rgba(0,0,0,0.3)"
      },
      backgroundImage: {
        "hero" : "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/src/assets/images/xhero.jpg')",
        "heroSm" : "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/src/assets/images/xhero.jpg')",
      }
    },
  },
  plugins: [],
}

