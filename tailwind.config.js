/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#f8fafc",
          "base-content": "#1f2937",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#1e293b",
          "base-200": "#273449",
          primary: "#818cf8",
          "primary-content": "#ffffff",
        },
      },
    ],
  },
};
