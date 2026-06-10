'use client'
import React from 'react'
import { cn } from '~/lib/utils'

interface SectionHeaderProps {
    title: string
    subtitle?: string
    className?: string
    align?: 'left' | 'center'
    titleClassName?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
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
                <h2 className={cn("font-pixel font-bold text-2xl tracking-wider text-foreground lowercase", titleClassName)}>
                    {title}
                </h2>
            </div>
            {subtitle && (
                <p className="text-muted-foreground text-sm font-sans max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    )
}

export default SectionHeader
