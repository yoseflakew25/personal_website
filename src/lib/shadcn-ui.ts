import animatePlugin from 'tailwindcss-animate'
import plugin from 'tailwindcss/plugin'
import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        '--background': '240 15% 5%',
        '--foreground': '0 0% 95%',
        '--card': '240 12% 8%',
        '--card-foreground': '0 0% 95%',
        '--popover': '240 12% 8%',
        '--popover-foreground': '0 0% 95%',
        '--primary': '180 100% 50%',
        '--primary-foreground': '240 15% 5%',
        '--secondary': '240 8% 12%',
        '--secondary-foreground': '0 0% 95%',
        '--muted': '240 8% 14%',
        '--muted-foreground': '240 5% 55%',
        '--accent': '240 8% 14%',
        '--accent-foreground': '0 0% 95%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '240 8% 14%',
        '--input': '240 8% 14%',
        '--ring': '180 100% 45%',
        '--radius': '0.5rem',
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
          ubuntu: 'var(--font-ubuntu)',
          dank: 'var(--font-dank)',
          orbitron: 'var(--font-orbitron)',
          jetbrains: 'var(--font-jetbrains)',
          silkscreen: 'var(--font-silkscreen)',
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
          cyber: {
            cyan: 'hsl(180 100% 50%)',
            'cyan-dark': 'hsl(180 100% 35%)',
            'cyan-light': 'hsl(180 100% 65%)',
          },
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        boxShadow: {
          'neon-cyan': '0 0 5px hsl(180 100% 50% / 0.3), 0 0 20px hsl(180 100% 50% / 0.15), 0 0 40px hsl(180 100% 50% / 0.05)',
          'neon-sm': '0 0 5px hsl(180 100% 50% / 0.2), 0 0 10px hsl(180 100% 50% / 0.1)',
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
          'pulse-glow': {
            '0%, 100%': { opacity: '0.4' },
            '50%': { opacity: '1' },
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
          'float': 'float 6s ease-in-out infinite',
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
