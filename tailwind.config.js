/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        paper: "#FFFFFF",
        red: {
          DEFAULT: "#E4032E",
          deep: "#7A0012",
          bright: "#FF0A33",
        },
        redDeep: "#7A0012",
        slate: {
          DEFAULT: "#54565A",
          light: "#9A9A9C",
        },
      },
      fontFamily: {
        display: ["'Archivo Black'", "sans-serif"],
        displayx: ["'Archivo Expanded'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        red: "0 0 0 1px rgba(228,3,46,0.4), 0 24px 48px -12px rgba(228,3,46,0.35)",
        ink: "0 24px 48px -12px rgba(0,0,0,0.5)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scan: "scan 2.8s cubic-bezier(0.16,1,0.3,1) infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
}
