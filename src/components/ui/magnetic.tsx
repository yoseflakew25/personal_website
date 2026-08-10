'use client'

import React, { ReactNode, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '~/lib/utils'

interface MagneticProps {
  children: ReactNode
  /** How strongly the element is pulled toward the cursor (0–1) */
  strength?: number
  className?: string
}

/**
 * Magnetic — the wrapped element gently gravitates toward the cursor while
 * hovered and springs back on leave. Disabled automatically for reduced
 * motion.
 */
const Magnetic = ({ children, strength = 0.25, className }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || prefersReducedMotion) return

    const rect = el.getBoundingClientRect()
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * strength,
      y: (e.clientY - (rect.top + rect.height / 2)) * strength,
    })
  }

  const reset = () => setOffset({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 16, mass: 0.6 }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  )
}

export default Magnetic
