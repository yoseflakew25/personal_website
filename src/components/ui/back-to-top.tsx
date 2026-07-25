'use client'

import { useEffect, useState } from 'react'
import { cn } from '~/lib/utils'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'flex items-center justify-center',
        'w-8 h-8',
        'border border-[hsl(var(--border))]',
        'bg-card/90 backdrop-blur-sm',
        'font-mono text-[10px] tracking-wider text-muted-foreground',
        'hover:text-[hsl(var(--blueprint-line))] hover:border-[hsl(var(--blueprint-line)/0.5)]',
        'hover:shadow-[0_0_12px_1px_hsl(var(--blueprint-line)/0.1)]',
        'transition-all duration-300 ease-out',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none',
      )}
    >
      <span className="absolute top-px left-px w-1.5 h-1.5 border-t border-l border-[hsl(var(--blueprint-line)/0.2)] pointer-events-none" />
      <span className="absolute top-px right-px w-1.5 h-1.5 border-t border-r border-[hsl(var(--blueprint-line)/0.2)] pointer-events-none" />
      <span className="absolute bottom-px left-px w-1.5 h-1.5 border-b border-l border-[hsl(var(--blueprint-line)/0.2)] pointer-events-none" />
      <span className="absolute bottom-px right-px w-1.5 h-1.5 border-b border-r border-[hsl(var(--blueprint-line)/0.2)] pointer-events-none" />
      ↑
    </button>
  )
}
