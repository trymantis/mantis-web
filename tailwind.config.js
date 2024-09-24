/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': '#172603',
      'lemon': '#B1EB30',
      'white': '#FFFFFF',
      'gwhite': '#F9FFE6',
      'black': '#172603',
      'tgrey': '#475467',
      'bgrey': '#E5E2E0',
      'grey1': '#FAF7F5',
      'grey2': '#F2F1E9',
      'grey3': '#616459',
      'grey4': '#F7F7F6',
      'cream': '#F9F8F2'
    },
    extend: {
      fontFamily:{
        'bag': ['BagossStandardTRIAL-Regular', 'serif'],
        'SF': ['SF UI Display', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '.0333em'
      },
      lineHeight: {
        'tight': '1.125'
      },
      spacing: {
        '7.4': '7.4vw',
      }
    },
  },
  plugins: [],
}
