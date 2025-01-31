/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#29303D",
        gray: {
          900: "#29303D",
          800: "#4A576E",
          700: "#6B7D9D",
          600: "#9DA9BD",
          500: "#CDD3DD",
          400: "#F0F2F5",
          100: "#FFFFFF",
        },
        brand: {
          DEFAULT: "#264653",
          light: "#2A9D8F",
          lighter: "#E6EFFE",
          dark: "#00415C",
          darkGradient: "linear-gradient(180deg, #020C1B 68%, #0D4B64 100%)",
          secondary: {
            DEFAULT: "#F4A261",
            light: "#E9C46A",
            dark: "#E76F51",
          },
        },
        info: {
          DEFAULT: "#5C96FA",
          dark: "#1F60D1",
          light: "#CEDFFD",
        },
        success: {
          DEFAULT: "#68CC55",
          dark: "#3A6732",
          light: "#DCF3D8",
        },
        danger: {
          DEFAULT: "#DA2F37",
          dark: "#A51D24",
          light: "#F7D4D6",
        },
        warning: {
          DEFAULT: "#F8BB59",
          dark: "#D5880B",
          light: "#FDEBCE",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen-Sans",
          "Ubuntu",
          "Cantarell",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      fontSize: {
        s3: ["0.664rem", { lineHeight: "1.5" }],
        s2: ["0.761rem", { lineHeight: "1.5" }],
        s1: ["0.873rem", { lineHeight: "1.5" }],
        p: ["1rem", { lineHeight: "1.5" }],
        h6: ["1rem", { lineHeight: "1.5" }],
        h5: ["1.123rem", { lineHeight: "1.25" }],
        h4: ["1.313rem", { lineHeight: "1.54" }],
        h3: ["1.92rem", { lineHeight: "1.25" }],
        h2: ["2.4rem", { lineHeight: "1.25" }],
        h1: ["3rem", { lineHeight: "1.25" }],
      },
      spacing: {
        d6: "0.25rem",
        d5: "0.3rem",
        d4: "0.375rem",
        d3: "0.5rem",
        d2: "0.75rem",
        d1_2: "1rem",
        x1: "1.5rem",
        x1_2: "2.25rem",
        x2: "3rem",
        x3: "4.5rem",
        x4: "6rem",
        x5: "7.5rem",
        x6: "9rem",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      screens: {
        xl: { max: "1440px" }, // Ultrawide
        lg: { max: "1024px" }, // Laptops y tablets grandes
        md: { max: "768px" }, // Tablets y móviles grandes
        sm: { max: "480px" }, // Móviles pequeños
      },
    },
  },
  plugins: [],
};
