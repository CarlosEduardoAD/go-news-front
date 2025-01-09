import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00ADD8",
        primaryHover: "#0099B0",
      },
      textColor: {
        primary: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
