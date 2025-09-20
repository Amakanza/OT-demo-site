import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--brand)',
          600: 'var(--brand-600)',
        },
        accent: 'var(--accent)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 10px 40px -4px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
