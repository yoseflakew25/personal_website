import React from 'react'
import { cn } from '~/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  /** Blueprint sheet reference, e.g. "SHEET 01/06" — drawn on the right of the header line */
  sheet?: string
  className?: string
  align?: 'left' | 'center'
  titleClassName?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  sheet,
  className = '',
  align = 'left',
  titleClassName = '',
}) => {
  return (
    <div className={cn('space-y-2', align === 'center' && 'text-center', className)}>
      <div
        className={cn(
          'flex items-center gap-3',
          align === 'center' && 'justify-center',
        )}
      >
        <h2
          className={cn(
            'font-mono text-[10px] sm:text-xs tracking-wider text-[hsl(var(--blueprint-line))] border border-[hsl(var(--blueprint-line)/0.3)] bg-[hsl(var(--blueprint-line)/0.05)] px-2 py-0.5 w-fit uppercase font-medium',
            titleClassName,
          )}
        >
          {title}
        </h2>
        {sheet && (
          <>
            <span className="h-px flex-1 min-w-[1.5rem] border-t border-dashed border-[hsl(var(--border)/0.6)]" aria-hidden="true" />
            <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase shrink-0">
              {sheet}
            </span>
          </>
        )}
      </div>
      {subtitle && (
        <p className="font-mono text-xs text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
