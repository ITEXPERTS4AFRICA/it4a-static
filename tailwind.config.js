const { heroui } = require("@heroui/react");
module.exports = {
    content:[
      "./src/**/*.{astro,js,jsx,ts,tsx}",
      "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    extend: [
      {
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
    {
      keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      },
    animation: {
      float: 'float 6s ease-in-out infinite',
    },
    }

  ]
  },
  darkmode:"class",
  plugins: [heroui()],
};