'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { CornerBrackets } from '~/components/ui/corner-brackets'

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
      <CornerBrackets size="0.375rem" colorClass="border-transparent" hoverColorClass="group-hover/btn:border-[hsl(var(--blueprint-line)/0.3)]" transitionClass="transition-colors duration-200" />

      {isDark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  )
}

export default ThemeToggle
