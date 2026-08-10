'use client'

import { useEffect, useState } from 'react'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const GRID = 80

/**
 * BlueprintSheetFrame — makes the viewport read as one printed blueprint
 * sheet. Renders the frame border (CSS), four corner registration marks,
 * 80px edge ticks (CSS), and grid coordinate labels (A,B,C / 01,02,03)
 * computed from the actual viewport size. Desktop-only labels; the frame
 * itself shows on all sizes. Pure decoration — pointer-events-none.
 */
const BlueprintSheetFrame = () => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const columns = Math.max(0, Math.floor((size.width - 30) / GRID))
  const rows = Math.max(0, Math.floor((size.height - 30) / GRID))

  return (
    <div aria-hidden="true" className="blueprint-sheet-frame">
      {/* Edge ticks */}
      <span className="edge-tick-x" />
      <span className="edge-tick-y" />

      {/* Corner registration marks */}
      <span className="absolute top-[9px] left-[9px] size-4 border-t-2 border-l-2 border-[hsl(var(--blueprint-line)/0.4)]" />
      <span className="absolute top-[9px] right-[9px] size-4 border-t-2 border-r-2 border-[hsl(var(--blueprint-line)/0.4)]" />
      <span className="absolute bottom-[9px] left-[9px] size-4 border-b-2 border-l-2 border-[hsl(var(--blueprint-line)/0.4)]" />
      <span className="absolute bottom-[9px] right-[9px] size-4 border-b-2 border-r-2 border-[hsl(var(--blueprint-line)/0.4)]" />

      {/* Coordinate labels — bottom edge (letters) */}
      <div className="hidden lg:block absolute bottom-[9px] left-[14px]">
        {Array.from({ length: columns }, (_, i) => (
          <span
            key={`x-${i}`}
            className="absolute font-mono text-[7px] tracking-[0.25em] text-muted-foreground/50 select-none"
            style={{ left: i * GRID }}
          >
            {LETTERS[i % LETTERS.length]}
          </span>
        ))}
      </div>

      {/* Coordinate labels — left edge (numbers) */}
      <div className="hidden lg:block absolute top-[14px] left-[9px]">
        {Array.from({ length: rows }, (_, i) => (
          <span
            key={`y-${i}`}
            className="absolute font-mono text-[7px] tracking-[0.25em] text-muted-foreground/50 select-none"
            style={{ top: i * GRID }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
        ))}
      </div>
    </div>
  )
}

export default BlueprintSheetFrame
