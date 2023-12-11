/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bluemagenta: "#4F3BE5",
        caddiessilk: "#403A53",
        platinateblue: "#263FDE",
        midnightblue: "#20187B",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
