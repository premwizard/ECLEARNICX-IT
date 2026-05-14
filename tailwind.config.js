/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3D00B8',
        secondary: '#A8DAFF',
        heading: '#0A0820',
        bodyText: '#8899BB',
        light: '#C8D5FF',
        background: '#F5F7FF',
        dark: '#070515',
        darkBg: '#0A0820',
        accent: '#A8DAFF',
        surface: '#EEEEF8',
        darkSurface: '#130D35',
        secondaryGradient: '#6B35E8',
      },
      // ADD THIS FONT FAMILY SECTION
      fontFamily: {
        heading: ['"Sora"', 'sans-serif'],
        body: ['"Sora"', 'sans-serif'],
        sans: ['"Sora"', 'sans-serif'],
      },
      fontSize: {
        // Custom size scale
        'hero':    ['clamp(36px, 5vw, 64px)', { lineHeight: '1.1' }],
        'section': ['clamp(26px, 3.5vw, 42px)', { lineHeight: '1.2' }],
        'card':    ['clamp(18px, 2vw, 24px)', { lineHeight: '1.3' }],
        'small-h': ['clamp(15px, 1.5vw, 18px)', { lineHeight: '1.4' }],
        'label':   ['12px', { lineHeight: '1.5', letterSpacing: '4px' }],
        'body':    ['15px', { lineHeight: '1.9' }],
        'btn':     ['13px', { lineHeight: '1', letterSpacing: '2px' }],
      },
      maxWidth: {
        container: '1800px',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'gradient-text': 'gradient-text 5s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-text': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
