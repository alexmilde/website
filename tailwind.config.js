/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sofia-light': ['Sofia Sans Semi Condensed Light'],
        'sofia-medium': ['Sofia Sans Semi Condensed Medium'],
      }
    },

  },
  plugins: [require("@tailwindcss/typography")],
};
