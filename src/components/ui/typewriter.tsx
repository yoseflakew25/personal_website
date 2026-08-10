'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '~/lib/utils'

interface TypewriterProps {
  /** Lines to type sequentially, each on its own `$` prompt row */
  lines: string[]
  /** Shell prompt glyph */
  prompt?: string
  /** Milliseconds per character */
  typeSpeed?: number
  /** Extra pause before typing begins */
  startDelay?: number
  className?: string
  promptClassName?: string
}

/**
 * Typewriter — console-style boot sequence. Types each line after a `$`
 * prompt with a glowing block caret, then holds a blinking caret on the final
 * empty prompt (like a live terminal). Skips straight to full output when the
 * user prefers reduced motion.
 */
const Typewriter = ({
  lines,
  prompt = '$',
  typeSpeed = 42,
  startDelay = 350,
  className,
  promptClassName,
}: TypewriterProps) => {
  const prefersReducedMotion = useReducedMotion()
  const [typed, setTyped] = useState<string[]>([])
  const [current, setCurrent] = useState('')
  const [index, setIndex] = useState(0)

  // Arm the sequence after startDelay (instantly for reduced motion)
  const [armed, setArmed] = useState(prefersReducedMotion || startDelay <= 0)
  useEffect(() => {
    if (armed) return
    const timer = setTimeout(() => setArmed(true), startDelay)
    return () => clearTimeout(timer)
  }, [armed, startDelay])

  useEffect(() => {
    if (!armed) return

    if (prefersReducedMotion) {
      setTyped(lines)
      setCurrent('')
      setIndex(lines.length)
      return
    }

    if (index >= lines.length) return

    let i = 0
    let advance: ReturnType<typeof setTimeout> | undefined

    const timer = setInterval(() => {
      i += 1
      setCurrent(lines[index].slice(0, i))

      if (i >= lines[index].length) {
        clearInterval(timer)
        setTyped(prev => [...prev, lines[index]])
        setCurrent('')
        advance = setTimeout(() => setIndex(index + 1), 300)
      }
    }, typeSpeed)

    return () => {
      clearInterval(timer)
      if (advance) clearTimeout(advance)
    }
  }, [armed, index, lines, prefersReducedMotion, typeSpeed])

  const renderRow = (line: string, key: number) => (
    <div key={key} className="flex items-baseline gap-1.5">
      <span className={cn('shrink-0 select-none text-[hsl(var(--blueprint-line))]', promptClassName)}>
        {prompt}
      </span>
      <span className="text-foreground/85">{line}</span>
    </div>
  )

  return (
    <div className={cn('font-mono text-[10px] sm:text-xs tracking-wider leading-relaxed', className)}>
      {typed.map((line, i) => renderRow(line, i))}

      {/* Active prompt row — caret blinks here even after all lines finish */}
      <div className="flex items-baseline gap-1.5" aria-live="polite">
        <span className={cn('shrink-0 select-none text-[hsl(var(--blueprint-line))]', promptClassName)}>
          {prompt}
        </span>
        <span className="text-foreground/85">
          {current}
          <span className="caret-blink" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}

export default Typewriter
