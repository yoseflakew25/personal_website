import React from 'react'
import { cn } from '~/lib/utils'

export interface CornerBracketsProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number | string
  thickness?: number | string
  colorClass?: string
  /** Optional hover color class applied to every corner, e.g. "group-hover/btn:border-[hsl(var(--blueprint-line)/0.3)]". Pass the full literal class so Tailwind's JIT can detect it. The parent element must carry the matching group class (e.g. `group/btn`) for the hover to take effect. */
  hoverColorClass?: string
  /** Transition classes applied to corners when hoverColorClass is set. */
  transitionClass?: string
  offset?: number | string
  renderTopLeft?: boolean
  renderTopRight?: boolean
  renderBottomLeft?: boolean
  renderBottomRight?: boolean
}

export const CornerBrackets: React.FC<CornerBracketsProps> = ({
  className,
  size = '0.75rem', // w-3 h-3
  thickness = '1px', // border-width
  colorClass = 'border-[hsl(var(--blueprint-line)/0.5)]',
  hoverColorClass,
  transitionClass = 'transition-colors duration-200',
  offset = 0,
  renderTopLeft = true,
  renderTopRight = true,
  renderBottomLeft = true,
  renderBottomRight = true,
  ...props
}) => {
  const cornerClassName = cn(
    'absolute',
    colorClass,
    hoverColorClass && transitionClass,
    hoverColorClass,
  )

  if (!renderTopLeft && !renderTopRight && !renderBottomLeft && !renderBottomRight) {
    return null
  }

  return (
    <span
      className={cn('pointer-events-none absolute inset-0 z-10', className)}
      aria-hidden="true"
      {...props}
    >
      {renderTopLeft && (
        <span
          className={cn('border-t border-l', cornerClassName)}
          style={{
            width: size,
            height: size,
            borderTopWidth: thickness,
            borderLeftWidth: thickness,
            top: offset,
            left: offset,
          }}
        />
      )}
      {renderTopRight && (
        <span
          className={cn('border-t border-r', cornerClassName)}
          style={{
            width: size,
            height: size,
            borderTopWidth: thickness,
            borderRightWidth: thickness,
            top: offset,
            right: offset,
          }}
        />
      )}
      {renderBottomLeft && (
        <span
          className={cn('border-b border-l', cornerClassName)}
          style={{
            width: size,
            height: size,
            borderBottomWidth: thickness,
            borderLeftWidth: thickness,
            bottom: offset,
            left: offset,
          }}
        />
      )}
      {renderBottomRight && (
        <span
          className={cn('border-b border-r', cornerClassName)}
          style={{
            width: size,
            height: size,
            borderBottomWidth: thickness,
            borderRightWidth: thickness,
            bottom: offset,
            right: offset,
          }}
        />
      )}
    </span>
  )
}
