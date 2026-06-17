import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#EDE6D8",
        ink: "#16130E",
        oxide: "#A6431F",
        verdigris: "#3F5E4E",
        ochre: "#C8943B",
        ash: "#928A7A",
      },
      fontFamily: {
        display: ["'PP Editorial New'", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "'SF Mono'", "monospace"],
      },
      letterSpacing: {
        ultrawide: "0.35em",
      },
      cursor: {
        none: "none",
      },
    },
  },
  plugins: [],
};

export default config;
