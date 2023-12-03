/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#181A1B',

        grey: {
          DEFAULT: 'var(--color-grey)',
          50: 'var(--color-grey-50)',
          100: 'var(--color-grey-100)',
          200: 'var(--color-grey-200)',
          300: 'var(--color-grey-300)',
          400: 'var(--color-grey-400)',
          500: 'var(--color-grey-500)',
          600: 'var(--color-grey-600)',
          700: 'var(--color-grey-700)',
          800: 'var(--color-grey-800)',
          900: 'var(--color-grey-900)',
          950: 'var(--color-grey-950)',
          rgb: 'var(--color-grey-rgb)',
          contrast: 'var(--color-grey-contrast)',
          'contrast-rgb': 'var(--color-grey-contrast-rgb)',
          shade: 'var(--color-grey-shade)',
          tint: 'var(--color-grey-tint)',
          disabled: 'rgba(var(--color-grey-rgb), 0.66)'
        },

        primary: {
          DEFAULT: 'var(--color-primary)',
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
          rgb: 'var(--color-primary-rgb)',
          contrast: 'var(--color-primary-contrast)',
          'contrast-rgb': 'var(--color-primary-contrast-rgb)',
          shade: 'var(--color-primary-shade)',
          tint: 'var(--color-primary-tint)',
          disabled: 'rgba(var(--color-primary-rgb), 0.66)'
        },
      },


      fontFamily: {
        content: ['Poppins', 'sans-serif']
      }
    },
  },

  plugins: [],
}
