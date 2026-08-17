'use client'

import { useEffect, useRef } from 'react'

interface ReadingProgressProps {
  /** id of the element to track scroll progress through */
  targetId: string
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({ targetId }) => {
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fill = fillRef.current
    const target = document.getElementById(targetId)
    if (!fill || !target) return

    const update = () => {
      const rect = target.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 1
      fill.style.width = `${progress * 100}%`
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [targetId])

  return (
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none overflow-hidden"
    >
      <div
        ref={fillRef}
        className="h-full"
        style={{
          width: '0%',
          background: 'hsl(var(--blueprint-line))',
          boxShadow: '0 0 6px 1px hsl(var(--blueprint-line) / 0.35)',
        }}
      />
    </div>
  )
}

export default ReadingProgress
