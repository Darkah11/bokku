/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          10: "#001DDD",
        },
        primary: {
          10: "rgb(255 240 1)",
        },
        dark: {
          10: "#374151",
        },
      },
    },
  },
  plugins: [],
};
