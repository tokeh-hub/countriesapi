module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 8px 8px rgba(0, 0, 0, 0.2)",
        "4xl": "0 5px 8px rgba(0, 0, 0, 0.2)",
        "5xl": "0 0 8px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        "my-blue": "hsl(209, 23%, 22%)",
        "background-blue": "hsl(207, 26%, 17%)",
      },
      fontfamily: {
        Nunito: ["Nunito Sans", "sans-serif;"],
      },
      screens: {
        tablet: "450px",
        tablete: "492px",
        tab: "816px",
      },
    },
  },
  plugins: [],
};
