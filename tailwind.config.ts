import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      translate: {
        "2": "0.5rem", // Ajusta translate-y-2 para 8px
        "6px": "6px", // Adiciona uma tradução de 6px (usada nas transformações)
      },
      rotate: {
        45: "45deg", // Garante que rotate-45 funcione corretamente
        "-45": "-45deg", // Garante que -rotate-45 funcione corretamente
      },
    },
  },
  plugins: [],
} satisfies Config;
