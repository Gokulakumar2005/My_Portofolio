/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#070b22',
          950: '#040716',
          900: '#070b22',
          850: '#0a1030',
          800: '#0f1744',
          700: '#162058',
        },
        surface: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          hover: 'rgba(255, 255, 255, 0.09)',
          strong: 'rgba(13, 19, 38, 0.88)',
          border: 'rgba(255, 255, 255, 0.12)',
        },
        neon: {
          cyan: '#00f0ff',
          blue: '#3b82f6',
          purple: '#a855f7',
          violet: '#8b5cf6',
          pink: '#ec4899',
          rose: '#f43f5e',
          green: '#10b981',
          lime: '#22c55e',
          amber: '#f59e0b',
          orange: '#fb923c',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(0, 240, 255, 0.45)',
        'glow-purple': '0 0 35px -5px rgba(168, 85, 247, 0.45)',
        'glow-green': '0 0 35px -5px rgba(16, 185, 129, 0.45)',
        'glow-pink': '0 0 35px -5px rgba(236, 72, 153, 0.45)',
        'glow-amber': '0 0 35px -5px rgba(245, 158, 11, 0.45)',
        'terminal': '0 25px 60px -20px rgba(0, 0, 0, 0.9)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
