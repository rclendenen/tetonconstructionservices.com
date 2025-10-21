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
        // Teton Construction Brand Colors
        primary: {
          50: '#fff8e5',
          100: '#ffefcc',
          200: '#ffe299',
          300: '#ffd666',
          400: '#ffc933',
          500: '#FFB733', // Sunset Orange (light)
          600: '#FFA500', // Sunset Orange (main)
          700: '#e69500',
          800: '#cc8400',
          900: '#b37300',
        },
        accent: {
          50: '#e6f9ed',
          100: '#ccf3db',
          200: '#99e7b7',
          300: '#66db93',
          400: '#33cf6f',
          500: '#2ECC71', // Mountain Green (light)
          600: '#0A662A', // Mountain Green (dark)
          700: '#095520',
          800: '#074418',
          900: '#053310',
        },
        forest: {
          50: '#e6f4ed',
          100: '#cce9db',
          200: '#99d3b7',
          300: '#66bd93',
          400: '#33a76f',
          500: '#007A3D', // Forest Green (main)
          600: '#006834',
          700: '#00562b',
          800: '#004422',
          900: '#003319',
        },
        sunshine: {
          50: '#fffef5',
          100: '#fffce0',
          200: '#fff9c2',
          300: '#fff6a3',
          400: '#fff385',
          500: '#FFD43B', // Sun Yellow
          600: '#f0c000',
          700: '#c29c00',
          800: '#947800',
          900: '#665400',
        },
        neutral: {
          50: '#F9F9F9', // Off-White
          100: '#f2f2f2',
          200: '#E0E0E0', // Light Gray
          300: '#c7c7c7',
          400: '#adadad',
          500: '#949494',
          600: '#7a7a7a',
          700: '#616161',
          800: '#474747',
          900: '#333333', // Charcoal Gray
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

