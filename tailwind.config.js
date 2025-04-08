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
        "responsive-h1": "clamp(2rem, 4vw, 4rem)",
        "responsive-h2": "clamp(1.75rem, 3.5vw, 3.5rem)",
        "responsive-h3": "clamp(1.5rem, 2.5vw, 2.5rem)",
        "responsive-p": "clamp(1rem, 1.2vw, 1.25rem)",
        "responsive-p-mobile": "clamp(1rem, 2vw, 1.5rem)",
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
