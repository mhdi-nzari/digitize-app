const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontSize: {
      title: "2.4rem",
      one: "1.6rem",
    },

    screens: {
      xs: "280px",
      ...defaultTheme.screens,

      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
      xl: "1536px",
      // => @media (min-width: 1280px) { ... }
    },

    // borderRadius: {
    //   filter: "15px",
    // },
  },
  plugins: [],
};
