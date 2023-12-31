/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      maxWidth: {
        brandLg: '500px'
      },

      fontFamily: {
        inter: ['Inter', 'san-serif'],
        montserrat: ['Montserrat', 'san-serif'],
        sen: ['Sen', 'san-serif'],
      },

      fontSize: {
        '8xl': ['80px', '104px']
      },

      spacing: {
        25: '100px'
      },

      colors: {
        brand: {
          gray: {
            DEFAULT: '#121212',
            400: '#9CA3AF',
            600: '#4B5563',
            700: '#374151',
            800: '#1F1F1F',
            800: '#0E0E0E',
            light: '#909192',
            border: '#23262A',
          },
          red: '#EA0202',
          yellow: '#EAA902',
          green: {
            400: '#31C48D',
            500: '#0E9F6E',
          },
          input: '#1D1D1D'
        },
        primary: {
          DEFAULT: '#FF4370',
          dark: '#FF4E78'
        }
      },

      boxShadow: {
        brand: '4px 4px 32px 4px rgba(0, 0, 0, 0.10)'
      },

      backgroundImage: {
        tick: 'url(/tick.svg)',
      }
    },
  },
  plugins: [],
}

