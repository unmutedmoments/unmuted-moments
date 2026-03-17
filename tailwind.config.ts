import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f7f2ea",
        gold: "#c8973a",
        rust: "#b84a2e",
        "rust-dark": "#8f3520",
        ink: "#0f0c09",
        warm: "#f0e8d8",
        sand: "#d9c9a8",
        charcoal: "#2c2825",
        muted: "#6b5e4e",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
