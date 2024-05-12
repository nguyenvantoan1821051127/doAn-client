/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    extend: {
      width:{
        '1100':'1100px'
      },
      backgroundColor:{
        prinary:'#F5F5F5',
        secondary1:'#1266dd',
        secondary2:'#f173859'
      },
      maxWidth:{
        '600':'600px'
      }
    },
  },
  plugins: [],
}

