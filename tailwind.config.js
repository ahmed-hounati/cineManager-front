/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Afacad Flux', 'sans-serif'],
      },
      backgroundImage: {
        'login-bg': "url('/login-bg.jpg')",
      }
    },
    plugins: [],
  }
}