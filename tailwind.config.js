/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "MainPurple": "#644C79",
        "MainBlue": "#003479",
        "MainGray": "#F4F4F4",
        "MainLightBlue": "#00a0df",
      } ,

      spacing: {

        '15': '60px',
        '17.5': '70px',
        '23': '90px',
        '47': '188px',
        '69': '276px',
        '88': '352px',
        '82.5': '330px',
        '130': '520px',
        '157.5': '630px',
        '207.5': '830px',
       
      }

    },
  },
  plugins: [],
}