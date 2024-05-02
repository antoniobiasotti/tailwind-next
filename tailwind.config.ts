import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: { 
        antoniobia: "#A8EB12"
      },
    },
  },
  plugins: [],
};
export default config;
