import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bg: '#151c2c',
      'bg-light': "#182237",
      white: '#fff',
      'white-dark': "#b7bac1",
      'bg-hover': '#2e374a',
      'transparent': 'transparent',
      green: '#32CD32',
      red: '#d21f3c',
      brown: '#f7cb7375',
      purple: '#5d57c9',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-rightbar': 'linear-gradient(to top, #182237, #253352, var(--tw-gradient-stops))',

      },
      flex: {
        '3': '3 0 0%',
        '4': '4 0 0%',
      },
      fontSize: {
        xs: ['12px', '18px']
      }
    },
  },
  plugins: [],
}
export default config
