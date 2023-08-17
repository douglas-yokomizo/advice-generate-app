/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'title': '#52ffa8',
        'quote': '#cee3e9',
        'card': '#323a49',
        'dark-grey': '#1f2632'
      },
      dropShadow: {
        'green': '0px 0px 20px rgba(82, 255, 168, .80)'
      }
    },
  },
  plugins: [],
}
