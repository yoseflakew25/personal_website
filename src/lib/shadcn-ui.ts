import animatePlugin from 'tailwindcss-animate'
import plugin from 'tailwindcss/plugin'
import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

const blueprintPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        /* ===== Blueprint Light (paper) ===== */
        '--background': '45 8% 95%',
        '--foreground': '0 0% 10%',
        '--card': '45 6% 92%',
        '--card-foreground': '0 0% 10%',
        '--popover': '45 6% 92%',
        '--popover-foreground': '0 0% 10%',
        '--primary': '0 0% 10%',
        '--primary-foreground': '45 8% 95%',
        '--secondary': '45 5% 88%',
        '--secondary-foreground': '0 0% 10%',
        '--muted': '45 5% 88%',
        '--muted-foreground': '0 0% 27%',
        '--accent': '28 90% 50%',
        '--accent-foreground': '45 8% 95%',
        '--destructive': '0 70% 40%',
        '--destructive-foreground': '45 8% 95%',
        '--border': '45 5% 55%',
        '--input': '45 5% 55%',
        '--ring': '28 90% 48%',
        '--radius': '0rem',
        /* Orange-specific tokens */
        '--grid-color': '45 5% 75%',
        '--grid-sub-color': '45 5% 82%',
        '--blueprint-line': '28 90% 50%',
        '--blueprint-accent': '28 90% 55%',
      },
      '.dark': {
        /* ===== Dark (true black with warm accents) ===== */
        '--background': '0 0% 4%',
        '--foreground': '0 0% 87%',
        '--card': '0 0% 6%',
        '--card-foreground': '0 0% 87%',
        '--popover': '0 0% 6%',
        '--popover-foreground': '0 0% 87%',
        '--primary': '0 0% 87%',
        '--primary-foreground': '0 0% 4%',
        '--secondary': '0 0% 10%',
        '--secondary-foreground': '0 0% 87%',
        '--muted': '0 0% 10%',
        '--muted-foreground': '0 0% 52%',
        '--accent': '28 95% 60%',
        '--accent-foreground': '0 0% 4%',
        '--destructive': '0 60% 45%',
        '--destructive-foreground': '0 0% 4%',
        '--border': '0 0% 22%',
        '--input': '0 0% 22%',
        '--ring': '28 95% 60%',
        /* Orange-specific tokens */
        '--grid-color': '0 0% 12%',
        '--grid-sub-color': '0 0% 9%',
        '--blueprint-line': '28 95% 62%',
        '--blueprint-accent': '28 95% 65%',
      },
    }),
      addBase({
        '*': {
          '@apply border-border': {},
        },
        body: {
          '@apply bg-background text-foreground font-mono': {},
        },
      })
  },

  {
    theme: {
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          xl: '80rem',
        },
      },
      extend: {
        fontFamily: {
          mono: ['var(--font-mono)', ...fontFamily.mono],
          sans: ['var(--font-mono)', ...fontFamily.mono],
          display: ['var(--font-display)', ...fontFamily.sans],
        },
        screens: {
          xs: '380px',
        },
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          blueprint: {
            grid: 'hsl(var(--grid-color))',
            'grid-sub': 'hsl(var(--grid-sub-color))',
            line: 'hsl(var(--blueprint-line))',
          },
        },
        borderRadius: {
          none: '0',
          sm: '0',
          DEFAULT: '0',
          md: '0',
          lg: '0',
          xl: '0',
          '2xl': '0',
          '3xl': '0',
        },
        borderWidth: {
          '1': '1px',
        },
        keyframes: {
          'draw-line': {
            '0%': { width: '0%' },
            '100%': { width: '100%' },
          },
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          'blueprint-reveal': {
            '0%': { opacity: '0', filter: 'invert(100%)' },
            '100%': { opacity: '1', filter: 'invert(0%)' },
          },
          'blueprint-draw': {
            '0%': { clipPath: 'inset(0 100% 100% 0)' },
            '50%': { clipPath: 'inset(0 0% 100% 0)' },
            '100%': { clipPath: 'inset(0 0% 0% 0)' },
          },
          'scan-line': {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100vh)' },
          },
          'grid-fade': {
            '0%': { opacity: '0' },
            '50%': { opacity: '0.3' },
            '100%': { opacity: '1' },
          },
        },
        animation: {
          'draw-line': 'draw-line 0.8s ease-out forwards',
          'fade-in': 'fade-in 0.5s ease-out forwards',
          'blueprint-reveal': 'blueprint-reveal 0.6s ease-out forwards',
          'blueprint-draw': 'blueprint-draw 1.2s cubic-bezier(0.25, 0.4, 0.25, 1) forwards',
          'scan-line': 'scan-line 2s linear infinite',
          'grid-fade': 'grid-fade 1.5s ease-out forwards',
        },
      },
    },
  },
)

export const shadcnPreset = {
  prefix: '',
  darkMode: ['selector'],
  content: [],
  plugins: [animatePlugin, blueprintPlugin],
} satisfies Config
