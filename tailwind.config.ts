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
        "myyellow": "#F4D04E",
        "mygrayb": "#111111",
        "mygray": "#6B6B6B",
      },
      fontFamily: {
        "figtree": ["Figtree", "system-ui"]
      },
      fontSize: {
        "text1": "1.5em",
        "text2": "1em",
        "text3": "0.875em",
      },
      fontWeight: {
        "text13": "bold",
        "text23": "medium",
      },
      letterSpacing: {
        "text": "0px",
      },
      lineHeight: {
        "text": "1.5",
      },
      boxShadow: {
        'myshadow': '8px 8px 0px 0px #000', // Sombra personalizada
      },
    },
  },
  plugins: [],
};
export default config;
