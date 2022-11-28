/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920PX",
        // print: { raw: "print" },
      },
      gridTemplateRows: {
        twoRows: "80px 1fr",
        threeRows: "56px 1fr 56px",
        twoRowsReverse: "1fr 44px",
      },
      gridTemplateColumns: {
        layout: "240px 1fr",
      },
      backgroundImage: {
        sbanner: "url('/banner.jpg')",
      },
      colors: {
        primary: "#273238",
        primarydark: "#20292e",
        secondary: "#eaedf7",
        success: "#19b159",
        danger: "#f16d75",
        info: "#01b8ff",
        warning: "#ff9b21",
        darker: "#111827",
        dark: "#1f2937",
        lighter: "#f3f4f6",
        light: "#e2e4e8",
        orange: "#ff7722",
        yam: "#CC5801",
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["hover", "focus"],
      transitionDuration: ["hover", "focus"],
      transitionDelay: ["hover", "focus"],
      animation: ["group-hover", "hover", "focus"],
      fontWeight: ["hover", "focus"],
      display: ["group-hover"],
      opacity: ["group-hover"],
      translate: ["active", "group-hover", "hover", "focus"],
      transform: ["group-hover", "hover", "focus"],
      width: ["group-hover", "hover"],
      height: ["group-hover", "hover"],
      padding: ["group-hover", "hover"],
      scale: ["group-hover", "hover"],
      backgroundColor: ["checked", "odd", "even"],
      borderColor: ["checked"],
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
