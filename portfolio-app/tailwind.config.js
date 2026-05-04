/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          primary:   '#0a0a0f',
          secondary: '#111118',
          card:      '#16161e',
          border:    '#1e1e2e',
        },
        accent: {
          purple:  '#7c3aed',
          violet:  '#8b5cf6',
          pink:    '#ec4899',
          cyan:    '#06b6d4',
          glow:    'rgba(124,58,237,0.25)',
        },
        text: {
          primary:   '#f4f4f8',
          secondary: '#a0a0b8',
          muted:     '#5a5a7a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.3) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow-sm':  '0 0 15px rgba(124,58,237,0.2)',
        'glow-md':  '0 0 30px rgba(124,58,237,0.25)',
        'glow-lg':  '0 0 60px rgba(124,58,237,0.3)',
        'card':     '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(124,58,237,0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
