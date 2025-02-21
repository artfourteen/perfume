import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        dynalight: ["var(--font-dynalight)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
