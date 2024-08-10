/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      heading: ['"Exo", sans-serif;'],
      body: ['"Public Sans", sans-serif'],
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "3rem",
      "4xl": "4rem",
    },
    boxShadow: {
      small: "0px 4px 30px rgba(1, 19, 60, 0.08);",
      base: "0px 6px 30px rgba(7, 36, 95, 0.08)",
      large: "0px 6px 50px 0px rgba(0, 0, 0, 0.06);",
    },

    extend: {
      colors: {
        primary: "#FF5E14",
        title: "#0E121D",
        body: "#4D5765",
        border: "#E4E4E4",
      },
      keyframes: {
        footerLine: {
          "0%": {
            left: "40px",
          },
          "50%": {
            left: "0",
          },
          "100%": {
            left: "40px",
          },
        },
        ripple: {
          "0%": {
            "-webkit-transform": "scale(1)",
            transform: "scale(1)",
            opacity: 0,
          },
          "30%": {
            opacity: 0.4,
          },
          "100%": {
            "-webkit-transform": "scale(1.5)",
            transform: "scale(1.5)",
            opacity: 0,
          },
        },
      },
      animation: {
        footerLine: "footerLine 7s linear infinite",
        ripple: "ripple 2s linear infinite",
      },
    },
  },
  plugins: [],
};
