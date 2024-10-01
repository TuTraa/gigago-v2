import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#4600B9',
        secondary: '#0094FF',
        heading: '#000000',
        heading2: '#0C1941',
        text: '#222222',
        text2: '#0C1941',
        background: '#ffffff',
        border: '#F5F5F8',
        white: '#ffffff',
        black02: '#404963',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
