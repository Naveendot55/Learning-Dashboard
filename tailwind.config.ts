import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#07070a", 900: "#0b0b10", 800: "#111118", 700: "#1a1a24", 600: "#252533" },
        accent: { violet: "#8b5cf6", cyan: "#22d3ee", pink: "#f472b6", lime: "#a3e635" },
      },
      fontFamily: { sans: ["ui-sans-serif", "system-ui", "Inter", "sans-serif"] },
      boxShadow: { glow: "0 0 40px -10px rgba(139,92,246,0.45)" },
    },
  },
  plugins: [],
};
export default config;
