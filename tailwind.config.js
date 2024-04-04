/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,vue}"
  ],
  plugins: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: '90px repeat(9, 50px) 90px'
      },
      gridTemplateRows: {
        custom: '90px repeat(9, 50px) 90px'
      }
    },
    colors:{
      main: '#1B1B1B',
      secondary: '#303030',
      white: '#fff',
    },
    container: {
      center: true,
      padding: '2rem'
    },
    screens: {
      none: '1200px'
    }
  }
}

