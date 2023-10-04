/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "myPoppins": ["'Poppins', sans-serif"]
      },
      backgroundImage:{
        'adds-bg': "url('/src/assets/img/bg.png')"
      }
    }
  },
  plugins: [
    require("daisyui")
  ]
}

