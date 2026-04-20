'use client'
import React from 'react'
import { cn } from '~/lib/utils'

interface SectionHeaderProps {
    title: string
    subtitle?: string
    className?: string
    align?: 'left' | 'center'
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    className = '',
    align = 'left',
}) => {
    return (
        <div className={cn('space-y-2', align === 'center' && 'text-center', className)}>
            <div
                className={cn(
                    'flex items-center gap-3',
                    align === 'center' && 'justify-center',
                )}
            >
                <span className="hidden sm:block h-px w-8 bg-gradient-to-r from-transparent to-cyber-cyan/60" />
                <h2 className="font-orbitron font-bold text-lg tracking-wider uppercase text-foreground">
                    <span className="text-cyber-cyan/70 mr-1 font-jetbrains text-sm">{'// '}</span>
                    {title}
                </h2>
                <span className="hidden sm:block h-px flex-1 bg-gradient-to-r from-cyber-cyan/30 to-transparent max-w-[200px]" />
            </div>
            {subtitle && (
                <p className="text-muted-foreground text-sm font-ubuntu max-w-2xl italic pl-0 sm:pl-11">
                    {subtitle}
                </p>
            )}
        </div>
    )
}

export default SectionHeader
