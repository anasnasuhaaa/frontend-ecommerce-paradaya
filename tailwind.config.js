/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#104D80",
      secondary: "#FCF0E4",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
