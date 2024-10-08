/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with the class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      fontFamily: {
        sans: ['var(--onestSans-font)'],
        sora: ['var(--soraSans-font)'],
        onest: ['var(--onestSans-font)'],
        code: ['var(--firaCode-font)'],
        emoji: ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      },
      colors:{
        "blue-bright":"#14b8a6",
        "blue-bright-darker-1": "#119a8d",
        "blue-bright-darker-2": "#0e7d73",
        "blue-bright-darker-3": "#0b615a",
        background:{
          light:{
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
            950: "#0d0d0d"
          },
          dark:{
            100:"#383838",
            200:"#363636",
            300:"#333333",
            400:"#2E2E2E",
            500:"#2C2C2C",
            600:"#272727",
            700:"#252525",
            800:"#232323",
            900:"#1E1E1E",
            950:"#121212"
          }
        },
        text: {
          light: '#1f2937', // Light mode text color
          dark: '#f9fafb',  // Dark mode text color
        },
      }
    },
  },
  plugins: [],
}

