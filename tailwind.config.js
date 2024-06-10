/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-body": "#0A0812",
        "primary-blue-200": "#243BB9",
        "primary-blue-250": "#3F57DA",
        "primary-blue-400": "#172136",
        blured: "#141C48",
        "secondary-gray": "#BDC4D1",
        "card-blur": "#0054FF",
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #6D9CF6 10%, #C3D6FB 15%, #FFFFFF 20%, #D0DFFC 85%, #6D9CF6 100%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
