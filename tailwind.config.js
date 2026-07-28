/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          50: '#f4f6fb',
          100: '#e4e7f1',
          200: '#cbd2e3',
          300: '#a4b1cf',
          400: '#7588b5',
          500: '#53679c',
          600: '#3f5080',
          700: '#344167',
          800: '#1b233a',
          900: '#0d1222',
          950: '#07090e',
        },
        emeraldAcc: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 20px 60px -24px rgba(7, 9, 14, 0.7)',
        glow: '0 0 35px -5px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        blob: 'blob 10s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.06)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.95)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

