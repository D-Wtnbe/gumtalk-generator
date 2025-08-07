module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    {
      options: {
        safelist: {
          standard: [/^bg-/, /^text-/],
        },
      },
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        zenMaru: ["Zen Maru Gothic"],
      },
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fde6e6',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f48888',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        }
      },
      animation: {
        'flip': 'flip 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'perspective(400px) rotateY(0deg)' },
          '40%': { transform: 'perspective(400px) rotateY(-90deg)' },
          '60%': { transform: 'perspective(400px) rotateY(-90deg)' },
          '100%': { transform: 'perspective(400px) rotateY(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
