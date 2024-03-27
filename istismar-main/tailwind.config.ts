import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%", // Small screens (e.g., phones)
        md: "720px", // Medium screens (e.g., tablets)
        lg: "1024px", // Large screens (e.g., laptops)
        xl: "1190px", // Extra-large screens (e.g., desktops)
        "2xl": "1310px", // Extra-large screens (e.g., desktops)
      },
    },
    extend: {
      colors: {
        mold: "#4babae",
        cusGreen: "#4bae5f",
        cusRed: "#db3030",
      },
    },
  },
  plugins: [],
};
export default config;
