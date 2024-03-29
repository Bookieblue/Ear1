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
        green: {
          50: '#00BF69'
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/hero-bg.svg')",
        'bg-img-2': "url('/footer-bg.svg')",
      },
      screens: {
        xs: '400px',
        'ms' : "680px",
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};