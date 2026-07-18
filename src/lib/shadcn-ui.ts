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
        '--muted-foreground': '0 0% 40%',
        '--accent': '210 20% 40%',
        '--accent-foreground': '45 8% 95%',
        '--destructive': '0 70% 40%',
        '--destructive-foreground': '45 8% 95%',
        '--border': '45 5% 80%',
        '--input': '45 5% 80%',
        '--ring': '0 0% 10%',
        '--radius': '0rem',
        /* Blueprint-specific tokens */
        '--grid-color': '45 5% 85%',
        '--grid-sub-color': '45 5% 88%',
        '--blueprint-line': '210 25% 30%',
        '--blueprint-accent': '210 25% 35%',
      },
      '.dark': {
        /* ===== Blueprint Dark (blueprint paper) ===== */
        '--background': '220 30% 8%',
        '--foreground': '210 10% 85%',
        '--card': '220 28% 10%',
        '--card-foreground': '210 10% 85%',
        '--popover': '220 28% 10%',
        '--popover-foreground': '210 10% 85%',
        '--primary': '210 10% 85%',
        '--primary-foreground': '220 30% 8%',
        '--secondary': '220 25% 14%',
        '--secondary-foreground': '210 10% 85%',
        '--muted': '220 25% 14%',
        '--muted-foreground': '215 15% 55%',
        '--accent': '210 40% 55%',
        '--accent-foreground': '220 30% 8%',
        '--destructive': '0 60% 45%',
        '--destructive-foreground': '220 30% 8%',
        '--border': '220 25% 18%',
        '--input': '220 25% 18%',
        '--ring': '210 10% 85%',
        /* Blueprint-specific tokens */
        '--grid-color': '220 30% 16%',
        '--grid-sub-color': '220 30% 13%',
        '--blueprint-line': '210 40% 50%',
        '--blueprint-accent': '210 50% 60%',
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
            accent: 'hsl(var(--blueprint-accent))',
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
        },
        animation: {
          'draw-line': 'draw-line 0.8s ease-out forwards',
          'fade-in': 'fade-in 0.5s ease-out forwards',
          'blueprint-reveal': 'blueprint-reveal 0.6s ease-out forwards',
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
