/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scissors-gradient-from': 'hsl(39, 89%, 49%)',
        'scissors-gradient-to': 'hsl(29, 80%, 31%)',
        'paper-gradient-from': 'hsl(230, 89%, 62%)',
        'paper-gradient-to': 'hsl(230, 71%, 31%)',
        'rock-gradient-from': 'hsl(349, 71%, 52%)',
        'rock-gradient-to': 'hsl(349, 83%, 27%)',
        'lizard-gradient-from': 'hsl(261, 73%, 60%)',
        'lizard-gradient-to': 'hsl(261, 42%, 46%)',
        'spock-gradient-from': 'hsl(189, 59%, 53%)',
        'spock-gradient-to': 'hsl(189, 44%, 41%)',
        'text-dark': 'hsl(229, 25%, 31%)',
        'text-score': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'bg-from': 'hsl(214, 47%, 23%)',
        'bg-to': 'hsl(237, 49%, 15%)'
      },
      fontSize: {
        '900': 'clamp(5rem, 8vw + 1rem, 9.375rem)',
        '800': '3.5rem',
        '700': '2.5rem',
        '600': '2rem',
        '500': '1.5rem',
        '400': '1rem',
        '300': '0.9375rem',
        '200': '0.85rem',
        '100': '0.8rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      boxShadow: {
        'scissors': '0 0 0 5px hsl(39, 89%, 49%,0.1), 0 0 0 8px hsl(39, 89%, 49%,0.05), 0 0 0 12px hsl(39, 89%, 49%,0.1), 0 0 0 15px hsl(39, 89%, 49%,0.05)',
        'paper': '0 0 0 5px hsl(230, 89%, 62%,0.1), 0 0 0 8px hsl(230, 89%, 62%,0.05), 0 0 0 12px hsl(230, 89%, 62%,0.1), 0 0 0 15px hsl(230, 89%, 62%,0.05)',
        'rock': '0 0 0 5px hsl(349, 71%, 52%,0.1), 0 0 0 8px hsl(349, 71%, 52%,0.05), 0 0 0 12px hsl(349, 71%, 52%,0.1), 0 0 0 15px hsl(349, 71%, 52%,0.05)',
        'lizard': '0 0 0 5px hsl(261, 73%, 60%,0.1), 0 0 0 8px hsl(261, 73%, 60%,0.05), 0 0 0 12px hsl(261, 73%, 60%,0.1), 0 0 0 15px hsl(261, 73%, 60%,0.05)',
        'spock': '0 0 0 5px hsl(189, 59%, 53%,0.1), 0 0 0 8px hsl(189, 59%, 53%,0.05), 0 0 0 12px hsl(189, 59%, 53%,0.1), 0 0 0 15px hsl(189, 59%, 53%,0.05)',
        'won': '0 0 0 25px rgba(255,255,255,0.05), 0 0 0 60px rgba(255,255,255,0.025), 0 0 0 100px rgba(255,255,255,0.015)'
      },
      keyframes: {
        /* Loved this transition, starts from the center, goes down and finally goes up scalling */
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0) translateY(100%)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInHalf: 'fadeIn 0.25s ease-in-out'
      }
    },
  },
  plugins: [],
}