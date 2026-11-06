import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#09090b", // zinc-950
        surface: "#18181b",    // zinc-900
        border: "#27272a",     // zinc-800
        muted: "#a1a1aa",      // zinc-400
      },
    },
  },
  plugins: [],
};

export default config;