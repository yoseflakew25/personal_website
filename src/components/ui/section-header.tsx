import React from 'react'
import { cn } from '~/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
  titleClassName?: string
  sectionNumber?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = '',
  align = 'left',
  titleClassName = '',
  sectionNumber,
}) => {
  return (
    <div className={cn('space-y-2', align === 'center' && 'text-center', className)}>
      <div
        className={cn(
          'flex items-center gap-3',
          align === 'center' && 'justify-center',
        )}
      >
        {sectionNumber && (
          <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.6)] uppercase shrink-0">
            {sectionNumber}
          </span>
        )}
        <h2
          className={cn(
            'font-mono text-sm md:text-base tracking-wider text-foreground uppercase font-medium',
            titleClassName,
          )}
        >
          {title}
        </h2>
        <span className="flex-1 h-px bg-[hsl(var(--border))]" aria-hidden="true" />
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
