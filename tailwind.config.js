/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#33FF33',
        'terminal-blue': '#3daee9',
        'terminal-text': '#E0E0E0',
        'terminal-gray-light': '#999999',
        'terminal-bg': '#1E1E1E', // already used in Terminal.tsx
        terminal: {
          bg: '#0a0e14',
          text: '#b3b1ad',
          green: '#aad94c',
          yellow: '#ffd580',
          blue: '#59c2ff',
          purple: '#d2a6ff',
          cyan: '#95e6cb',
          red: '#f07178',
          orange: '#ff8f40',
          pink: '#ff3333',
          gray: {
            dark: '#1a1e24',
            DEFAULT: '#2d3139',
            light: '#626873'
          }
        }
      },
      fontFamily: {
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'typing': 'typing 2s steps(20)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      boxShadow: {
        'terminal': '0 0 10px rgba(170, 217, 76, 0.2), 0 0 20px rgba(170, 217, 76, 0.1)',
      },
    },
  },
  plugins: [],
};