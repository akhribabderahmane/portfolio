/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with the class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--onestSans-font)'],
        sora: ['var(--soraSans-font)'],
        onest: ['var(--onestSans-font)'],
        code: ['var(--firaCode-font)'],
        emoji: ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      },
      colors:{
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

