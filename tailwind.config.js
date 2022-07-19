/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        libre: "Libre Franklin",
      },
      colors: {
        pblue: "#4f7df3",
        pale: "#c2d3ff",
        lred: "#ff5263",
        ngray: "#969696",
        vdblue: "#151f29",
      },
    },
  },
  plugins: [],
};
