/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Required Rich Agency Palette
        charcoal: {
          DEFAULT: '#171717',
          pure: '#171717',
          card: '#1F1F1F',
          soft: '#262626',
          border: '#333333',
        },
        dark: {
          DEFAULT: '#101010',
          pure: '#0A0A0A',
          card: '#141414',
          border: '#242424',
        },
        orange: {
          DEFAULT: '#FF6B35',
          vibrant: '#FF6B35',
          hover: '#E85824',
          light: '#FFF0EA',
          glow: 'rgba(255, 107, 53, 0.35)',
        },
        coral: {
          DEFAULT: '#FF8066',
          hover: '#FF6F52',
          light: '#FFF2EF',
        },
        cream: {
          DEFAULT: '#FFF4E8',
          soft: '#FAF1E6',
          deep: '#F2E3D0',
          border: '#E8D5BF',
        },
        lime: {
          DEFAULT: '#C7F464',
          electric: '#C7F464',
          hover: '#B5E64E',
          dark: '#1B240C',
        },
        muted: {
          DEFAULT: '#AAA8A3',
          light: '#D3D1CC',
          dark: '#73716D',
        },
        // Compatibility Aliases for smoothly upgrading existing components
        ivory: { DEFAULT: '#FFF4E8', deep: '#F2E3D0' },
        ember: { DEFAULT: '#FF6B35', deep: '#FF6B35' },
        stone: { DEFAULT: '#AAA8A3', line: 'rgba(255, 255, 255, 0.12)' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Bricolage Grotesque Variable"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Instrument Sans Variable"', 'sans-serif'],
      },
      maxWidth: { page: '80rem' },
      boxShadow: {
        'glow-orange': '0 0 30px -5px rgba(255, 107, 53, 0.3)',
        'glow-lime': '0 0 30px -5px rgba(199, 244, 100, 0.3)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'card-cream': '0 20px 40px -15px rgba(150, 110, 80, 0.08)',
      },
    },
  },
  plugins: [],
}
