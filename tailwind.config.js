module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      lavendel: "#C8B1F3",
      cream: "#FBFBFB",
      dark: "#232326",
    },
    extend: {
      fontFamily: {
        carme: "'Carme', sans serif",
        noto: "'Noto Serif', serif",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
