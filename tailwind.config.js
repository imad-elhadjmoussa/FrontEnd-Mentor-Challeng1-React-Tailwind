/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      md:'600px',
      lg:'900px',
    },
    
    extend: {
      colors:{
        pink:'#FE52C0',
        'dark-green':'#00252E',
        'dark-text':'#00222E',
        'light-gray':'#878E96',
        'dark-text-h':'#032831',
      },
    },
  },
  plugins: [],
}

