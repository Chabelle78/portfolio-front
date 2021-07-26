module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        stix: ["STIX Two Math", "serif"],
        noto: ["Noto Sans TC", "sans-serif"],
      },
      backgroundImage: {
        bgImg: "url('src/pictures/bg-portfolio.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
