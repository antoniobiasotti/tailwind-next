import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        lenitabia: "#A8EB12"
      },
    },
  },
  plugins: [],
};
export default config;
