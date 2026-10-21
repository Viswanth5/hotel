/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false, // Prevents Tailwind default container from conflicting with site's bespoke .container
  },
  theme: {
    extend: {
      colors: {
        ink: '#1E120C',
        maroon: {
          DEFAULT: '#5C1A18',
          deep: '#3E100F',
          ink: '#240A09',
        },
        turmeric: '#C98A2B',
        gold: {
          DEFAULT: '#B98B3F',
          soft: '#D9BC84',
        },
        leaf: {
          DEFAULT: '#2F5233',
          deep: '#1B3520',
        },
        sand: {
          DEFAULT: '#F4EADA',
          2: '#E9DBBF',
        },
        cream: '#FBF6EC',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', "'Times New Roman'", 'serif'],
        sans: ['Jost', '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
        tamil: ["'Noto Serif Tamil'", "'Cormorant Garamond'", 'serif'],
      },
      transitionTimingFunction: {
        marutham: 'cubic-bezier(.22,1,.36,1)',
        'marutham-2': 'cubic-bezier(.76,0,.24,1)',
      },
      maxWidth: {
        site: '1440px',
      },
    },
  },
  plugins: [],
}
