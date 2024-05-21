/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "responsive-h1": "6vw",
        "responsive-h2": "5vw",
        "responsive-h3": "3vw",
        "responsive-p": "1.5vw",
        "responsive-p-mobile": "3vw",
      },
      height: {
        card: "700px",
        cardMobile: "570px",
      },
      minHeight: {
        "600px": "600px",
      },
      screens: {
        md: "900px",
      },
    },
  },
  plugins: [],
};
