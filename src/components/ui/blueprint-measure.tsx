'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '~/lib/utils'

interface BlueprintMeasureProps {
  children: React.ReactNode
  className?: string
  showWidth?: boolean
  showHeight?: boolean
  widthLabel?: string
  heightLabel?: string
  /** Custom spec tag shown in top-left corner on hover */
  specTag?: string
  /** Offset from the element edge for the dimension lines (px) */
  offset?: number
}

/**
 * BlueprintMeasure — wraps any element and reveals animated engineering-style
 * dimension lines with measurement annotations on hover.
 *
 * Inspired by architectural blueprints: displays "W: ___px" above and
 * "H: ___px" to the right with arrow-capped lines, tick marks, and
 * corner crosshair brackets.
 */
export const BlueprintMeasure: React.FC<BlueprintMeasureProps> = ({
  children,
  className = '',
  showWidth = true,
  showHeight = true,
  widthLabel = 'W',
  heightLabel = 'H',
  specTag,
  offset = 8,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Measure the wrapped element's actual rendered size
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        setDimensions({ width: Math.round(width), height: Math.round(height) })
      }
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn('relative inline-block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {/* ── Spec tag — top-left corner on hover ── */}
      <AnimatePresence>
        {isHovered && specTag && (
          <motion.span
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute -top-5 left-0 pointer-events-none z-20"
          >
            <span className="font-mono text-[9px] tracking-[0.25em] text-[hsl(var(--blueprint-line)/0.6)] uppercase whitespace-nowrap">
              {specTag}
            </span>
          </motion.span>
        )}
      </AnimatePresence>

      {/* ── Top edge: Width dimension line ── */}
      <AnimatePresence>
        {isHovered && showWidth && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute pointer-events-none z-20"
            style={{
              left: -offset,
              right: -offset,
              top: -offset - 10,
              height: 10,
              transformOrigin: 'left center',
            }}
          >
            {/* Horizontal baseline */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
              <div className="h-px bg-[hsl(var(--blueprint-line)/0.5)]" />
            </div>

            {/* Left arrow cap */}
            <div
              className="absolute top-1/2 left-0 -translate-y-1/2"
              style={{ transform: 'translateY(-50%)' }}
            >
              <div className="w-[7px] h-[7px] border-t-[1.5px] border-l-[1.5px] border-[hsl(var(--blueprint-line)/0.6)] -translate-x-[0.5px] -rotate-45" />
            </div>

            {/* Right arrow cap */}
            <div
              className="absolute top-1/2 right-0 -translate-y-1/2"
              style={{ transform: 'translateY(-50%)' }}
            >
              <div className="w-[7px] h-[7px] border-t-[1.5px] border-r-[1.5px] border-[hsl(var(--blueprint-line)/0.6)] translate-x-[0.5px] rotate-45" />
            </div>

            {/* Tick mark at 25% */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-px h-2 bg-[hsl(var(--blueprint-line)/0.25)]" />

            {/* Tick mark at 50% */}
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-px h-2 bg-[hsl(var(--blueprint-line)/0.25)]" />

            {/* Tick mark at 75% */}
            <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-px h-2 bg-[hsl(var(--blueprint-line)/0.25)]" />

            {/* Width label */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2"
              style={{ transform: 'translate(-50%, -50%)' }}
            >              <span className="inline-block bg-background/90 backdrop-blur-sm px-1.5 font-mono text-[9px] tracking-wider text-[hsl(var(--blueprint-line))] whitespace-nowrap select-none border border-[hsl(var(--blueprint-line)/0.15)] leading-tight">
                {widthLabel}: {dimensions.width}px</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom edge: Width dimension line (mirror) ── */}
      <AnimatePresence>
        {isHovered && showWidth && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1], delay: 0.08 }}
            className="absolute pointer-events-none z-20"
            style={{
              left: -offset,
              right: -offset,
              bottom: -offset - 10,
              height: 10,
              transformOrigin: 'left center',
            }}
          >
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
              <div className="h-px bg-[hsl(var(--blueprint-line)/0.35)]" />
            </div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2">
              <div className="w-[7px] h-[7px] border-b-[1.5px] border-l-[1.5px] border-[hsl(var(--blueprint-line)/0.5)] -translate-x-[0.5px] rotate-45" />
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2">
              <div className="w-[7px] h-[7px] border-b-[1.5px] border-r-[1.5px] border-[hsl(var(--blueprint-line)/0.5)] translate-x-[0.5px] -rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Right edge: Height dimension line ── */}
      <AnimatePresence>
        {isHovered && showHeight && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1], delay: 0.04 }}
            className="absolute pointer-events-none z-20"
            style={{
              top: -offset,
              bottom: -offset,
              right: -offset - 10,
              width: 10,
              transformOrigin: 'top center',
            }}
          >
            {/* Vertical baseline */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
              <div className="w-px bg-[hsl(var(--blueprint-line)/0.5)] h-full" />
            </div>

            {/* Top arrow cap */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <div className="w-[7px] h-[7px] border-t-[1.5px] border-l-[1.5px] border-[hsl(var(--blueprint-line)/0.6)] -translate-y-[0.5px] rotate-[135deg]" />
            </div>

            {/* Bottom arrow cap */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
              <div className="w-[7px] h-[7px] border-b-[1.5px] border-l-[1.5px] border-[hsl(var(--blueprint-line)/0.6)] translate-y-[0.5px] -rotate-[135deg]" />
            </div>

            {/* Tick marks */}
            <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-px w-2 bg-[hsl(var(--blueprint-line)/0.25)]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 h-px w-2 bg-[hsl(var(--blueprint-line)/0.25)]" />
            <div className="absolute left-1/2 top-3/4 -translate-x-1/2 h-px w-2 bg-[hsl(var(--blueprint-line)/0.25)]" />

            {/* Height label — rotated for authentic engineering dimension look */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
              <span className="inline-block bg-background/90 backdrop-blur-sm px-1.5 py-0.5 font-mono text-[9px] tracking-wider text-[hsl(var(--blueprint-line))] whitespace-nowrap select-none border border-[hsl(var(--blueprint-line)/0.15)] leading-tight" style={{ transform: 'rotate(-90deg)' }}>
                {heightLabel}: {dimensions.height}px
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Left edge: Height dimension line (mirror) ── */}
      <AnimatePresence>
        {isHovered && showHeight && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1], delay: 0.12 }}
            className="absolute pointer-events-none z-20"
            style={{
              top: -offset,
              bottom: -offset,
              left: -offset - 10,
              width: 10,
              transformOrigin: 'top center',
            }}
          >
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
              <div className="w-px bg-[hsl(var(--blueprint-line)/0.35)] h-full" />
            </div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <div className="w-[7px] h-[7px] border-t-[1.5px] border-r-[1.5px] border-[hsl(var(--blueprint-line)/0.5)] -translate-y-[0.5px] -rotate-[135deg]" />
            </div>
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
              <div className="w-[7px] h-[7px] border-b-[1.5px] border-r-[1.5px] border-[hsl(var(--blueprint-line)/0.5)] translate-y-[0.5px] rotate-[135deg]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Corner crosshair brackets — appear on hover ── */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* TL */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 z-10 pointer-events-none"
            >
              <div className="w-3 h-px bg-[hsl(var(--blueprint-line)/0.45)]" />
              <div className="w-px h-3 bg-[hsl(var(--blueprint-line)/0.45)]" />
            </motion.div>
            {/* TR */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.02 }}
              className="absolute top-0 right-0 flex flex-col items-end z-10 pointer-events-none"
            >
              <div className="w-3 h-px bg-[hsl(var(--blueprint-line)/0.45)]" />
              <div className="w-px h-3 bg-[hsl(var(--blueprint-line)/0.45)]" />
            </motion.div>
            {/* BL */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.04 }}
              className="absolute bottom-0 left-0 flex flex-col justify-end z-10 pointer-events-none"
            >
              <div className="w-px h-3 bg-[hsl(var(--blueprint-line)/0.45)]" />
              <div className="w-3 h-px bg-[hsl(var(--blueprint-line)/0.45)]" />
            </motion.div>
            {/* BR */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.06 }}
              className="absolute bottom-0 right-0 flex flex-col items-end justify-end z-10 pointer-events-none"
            >
              <div className="w-px h-3 bg-[hsl(var(--blueprint-line)/0.45)]" />
              <div className="w-3 h-px bg-[hsl(var(--blueprint-line)/0.45)]" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Diagonal crosshair at center — subtle ── */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
          >
            <div className="relative w-3 h-3">
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px bg-[hsl(var(--blueprint-line)/0.2)]" />
              <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-[hsl(var(--blueprint-line)/0.2)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[hsl(var(--blueprint-line)/0.3)]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BlueprintMeasure
