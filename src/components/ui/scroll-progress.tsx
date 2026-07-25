'use client'

import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        el.style.width = `${Math.min((scrollTop / docHeight) * 100, 100)}%`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: '0%',
          background: 'hsl(var(--blueprint-line))',
          boxShadow: '0 0 6px 1px hsl(var(--blueprint-line) / 0.35)',
        }}
      />
    </div>
  )
}
