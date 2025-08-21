/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "300px",
      imd: "725px",
      md: "830px",
      lg: "976px",
      xl: "1530px",
    },
    // screens: {
    //   xs: "475px",
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },
    extend: {
      colors: {
        primary: "#3a86ff",
        secondary: "#8338ec",
        accent: "#ff006e",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
