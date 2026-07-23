import React from 'react'
import { cn } from '~/lib/utils'

export interface CornerBracketsProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string
  thickness?: number | string
  colorClass?: string
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
  offset = 0,
  renderTopLeft = true,
  renderTopRight = true,
  renderBottomLeft = true,
  renderBottomRight = true,
  ...props
}) => {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 z-10', className)}
      aria-hidden="true"
      {...props}
    >
      {renderTopLeft && (
        <div
          className={cn('absolute border-t border-l', colorClass)}
          style={{ width: size, height: size, borderWidth: thickness, top: offset, left: offset }}
        />
      )}
      {renderTopRight && (
        <div
          className={cn('absolute border-t border-r', colorClass)}
          style={{ width: size, height: size, borderWidth: thickness, top: offset, right: offset }}
        />
      )}
      {renderBottomLeft && (
        <div
          className={cn('absolute border-b border-l', colorClass)}
          style={{ width: size, height: size, borderWidth: thickness, bottom: offset, left: offset }}
        />
      )}
      {renderBottomRight && (
        <div
          className={cn('absolute border-b border-r', colorClass)}
          style={{ width: size, height: size, borderWidth: thickness, bottom: offset, right: offset }}
        />
      )}
    </div>
  )
}
