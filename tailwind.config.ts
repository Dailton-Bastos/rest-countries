import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        gray: {
          50: 'hsl(0, 0%, 98%)',
        },
        blue: {
          800: 'hsl(209, 23%, 22%)',
          900: 'hsl(207, 26%, 17%)',
          950: 'hsl(200, 15%, 8%)',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
