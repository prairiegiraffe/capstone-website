/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Deep patriotic navy - "I've testified before Congress" energy
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1929',
        },
        // Presidential gold - "my signature is on important documents"
        gold: {
          50: '#fffdf7',
          100: '#fef9e7',
          200: '#fdf0c4',
          300: '#fbe59e',
          400: '#f7d070',
          500: '#e9b949',
          600: '#c99a2e',
          700: '#a67c23',
          800: '#84641e',
          900: '#5c4813',
          950: '#3d2f0a',
        },
        // Slate grays - boardroom gravitas
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Deep red accent - American flag, power ties
        crimson: {
          500: '#b91c1c',
          600: '#991b1b',
          700: '#7f1d1d',
          800: '#651a1a',
        },
      },
      fontFamily: {
        // Serif for that "established institution" feel
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
