/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: '#87CBB9',
        },
        background: {
          white: '#E7E6E1',
        },
        green: {
          DEFAULT: '#11CC99',
        },
        yellow: {
          DEFAULT: '#F5C200',
        },
        red: {
          DEFAULT: '#FE6C5E',
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms")
  ],
};

