module.exports = {
  // purge: [],
  darkMode: "class", // or 'media' or 'class'
  content: ["./**/*.tsx"],
  theme: {
    fontFamily: {
      "space-mono": ["space-mono"],
    },
    extend: {
      colors: {
        mainYellow: "#FEB031",
        mainBlue: "#3359DF",
        blueDarker: "#1F3586",
        blueDark: "#2947B2",
        blueSubtle: "#D6DEF9",
        blueLightest: "#F5F7FD",
        yellowDarker: "#986A1D",
        yellowDark: "#CB8D27",
        yellowSubtle: "#FFDFAD",
        yellowLightest: "#FFF7EA",
        info: "#007FFF",
        error: "#E32636",
        warning: "#FFD700",
        success: "#1DB954",
        grayishBackground: "#E5E5E5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    boxShadow: false,
    translate: false,
    transform: false,
    ringWidth: false,
  },
};
