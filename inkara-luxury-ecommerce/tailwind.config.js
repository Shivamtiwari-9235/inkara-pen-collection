/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'inkara-black': '#101010',
        'inkara-charcoal': '#1B1B1B',
        'inkara-slate': '#161616',
        'inkara-card': '#181818',
        'inkara-gold': '#C4A477',
        'inkara-champagne': '#E1C79C',
        'inkara-ivory': '#EEE9DF',
        'inkara-grey': '#A9A39A',
        'inkara-gold-border': 'rgba(196, 164, 119, 0.22)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(196, 164, 119, 0.25)',
        'gold-subtle': '0 4px 20px -2px rgba(196, 164, 119, 0.12)',
      }
    },
  },
  plugins: [],
};
