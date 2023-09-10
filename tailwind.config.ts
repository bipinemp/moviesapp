import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      foot: "550px",
      sm: "640px",
      md: "768px",
      emd: "950px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#FB3B44",
        darkprimary: "red",
        light: "rgba(255,255,255,0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
