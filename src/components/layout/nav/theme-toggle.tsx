'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="size-8" />
  }

  const activeTheme = theme === 'system' ? resolvedTheme : theme
  const isDark = activeTheme === 'dark'

  return (
    <button
      className="group/btn relative size-8 border border-[hsl(var(--border))] grid place-content-center hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))] transition-all duration-200 text-muted-foreground el-focus-styles"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {/* Corner bracket accents on hover */}
      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.3)] transition-colors duration-200" />
      <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.3)] transition-colors duration-200" />
      <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.3)] transition-colors duration-200" />
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.3)] transition-colors duration-200" />

      {isDark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  )
}

export default ThemeToggle
