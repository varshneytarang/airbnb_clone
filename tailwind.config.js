/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'airbnb-red': '#FF385C',
        'airbnb-red-dark': '#E31C5F',
        'airbnb-gray': '#F7F7F7',
        'airbnb-gray-light': '#FAFAFA',
        'airbnb-gray-dark': '#484848',
        'airbnb-border': '#DDDDDD',
      },
      fontFamily: {
        'sans': ['Circular', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'airbnb': '0 6px 16px rgba(0, 0, 0, 0.12)',
        'airbnb-hover': '0 6px 20px rgba(0, 0, 0, 0.20)',
      },
      borderRadius: {
        'xl': '12px',
      },
    },
  },
  plugins: [],
}