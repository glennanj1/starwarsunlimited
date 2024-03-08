/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        // Define your text shadow styles here
        'default': '3px 3px 6px rgba(0, 0, 0, 0.8)',
      },
      fontFamily: {
        'star-wars': ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
