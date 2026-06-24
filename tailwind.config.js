/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Лесной зелёный — основной бренд
        forest: {
          50: '#f3f6f3',
          100: '#e2eae3',
          200: '#c6d6c8',
          300: '#9db5a1',
          400: '#6f8f74',
          500: '#4e7155',
          600: '#3a5a41',
          700: '#2d4a3a',
          800: '#243a2f',
          900: '#1f2421',
        },
        // Тёплый песок / закат
        sand: {
          50: '#fbf8f2',
          100: '#f4efe6',
          200: '#e9dfcd',
          300: '#dac8a9',
          400: '#c8ab7e',
          500: '#c08a4e',
          600: '#a8703a',
          700: '#895831',
          800: '#6f482e',
          900: '#5c3d29',
        },
        ink: '#1f2421',
        cream: '#f4efe6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      maxWidth: {
        content: '1200px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
