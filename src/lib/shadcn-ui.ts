import animatePlugin from 'tailwindcss-animate'
import plugin from 'tailwindcss/plugin'
import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        '--background': '0 0% 100%',
        '--foreground': '222.2 84% 4.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '222.2 84% 4.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '222.2 84% 4.9%',
        '--primary': '185 100% 35%',
        '--primary-foreground': '0 0% 100%',
        '--secondary': '210 40% 96.1%',
        '--secondary-foreground': '222.2 47.4% 11.2%',
        '--muted': '210 40% 96.1%',
        '--muted-foreground': '215.4 16.3% 46.9%',
        '--accent': '210 40% 96.1%',
        '--accent-foreground': '222.2 47.4% 11.2%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '214.3 31.8% 91.4%',
        '--input': '214.3 31.8% 91.4%',
        '--ring': '185 100% 35%',
        '--radius': '0.5rem',
      },
      '.dark': {
        '--background': '240 6% 7%',
        '--foreground': '0 0% 93%',
        '--card': '240 6% 9%',
        '--card-foreground': '0 0% 93%',
        '--popover': '240 6% 9%',
        '--popover-foreground': '0 0% 93%',
        '--primary': '185 100% 50%',
        '--primary-foreground': '240 6% 7%',
        '--secondary': '240 8% 12%',
        '--secondary-foreground': '0 0% 93%',
        '--muted': '240 8% 14%',
        '--muted-foreground': '240 5% 50%',
        '--accent': '240 8% 14%',
        '--accent-foreground': '0 0% 93%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '240 8% 14%',
        '--input': '240 8% 14%',
        '--ring': '185 100% 50%',
      },
    }),
      addBase({
        '*': {
          '@apply border-border': {},
        },
        body: {
          '@apply bg-background text-foreground': {},
        },
      })
  },

  {
    theme: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '72rem',
        },
      },
      extend: {
        typography: {
          DEFAULT: {
            css: {
              maxWidth: '100ch',
            },
          },
        },
        fontFamily: {
          sans: ['var(--font-sans)', ...fontFamily.sans],
          mono: ['var(--font-jetbrains)', ...fontFamily.mono],
          dank: 'var(--font-dank)',
          jetbrains: 'var(--font-jetbrains)',
          pixel: ['var(--font-pixel)', 'monospace'],
        },
        screens: {
          xs: '380px',
          sm: '500px',
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
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        boxShadow: {
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
  },
)

export const shadcnPreset = {
  prefix: '',
  darkMode: ['selector'],
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config
