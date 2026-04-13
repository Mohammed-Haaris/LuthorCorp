/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#10b981',
          mint: '#34d399',
          navy: '#0f172a',
          slate: '#1e293b',
          silver: '#e2e8f0',
          steel: '#94a3b8',
          chrome: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
