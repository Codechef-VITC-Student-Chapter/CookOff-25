/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/sections/**/*.{js,ts,jsx,tsx,mdx}', // For your homepage sections
  ],
  theme: {
    extend: {
      colors: {
        'background': '#111111',
        'primary-text': '#FFFFFF',
        'gold': '#FFD700',
        'silver': '#C0C0C0',
        'bronze': '#CD7F32',
        'gray-light': '#333333',
        'gray-dark': '#222222',
      },
    },
  },
  plugins: [],
};

export default config;