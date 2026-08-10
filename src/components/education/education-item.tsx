import React from 'react'
import { GraduationCap, Calendar } from 'lucide-react'

export interface EducationItemProps {
    degree: string
    school: string
    date: string
    location?: string
    description: React.ReactNode
}

const EducationItem: React.FC<EducationItemProps> = ({
    degree,
    school,
    date,
    location,
    description,
}) => {
    return (
        <li role="listitem" className="relative border border-[hsl(var(--border))] bg-card group transition-all duration-300 hover:border-[hsl(var(--blueprint-line)/0.5)] hover:shadow-[0_0_0_1px_hsl(var(--blueprint-line)/0.08)]">
            {/* Spec-sheet header bar */}
            <div className="border-b border-[hsl(var(--border))] px-3 py-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shrink-0 bg-muted/20">
                <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.7)] uppercase">
                        EDU · RECORD
                    </span>
                    <span className="h-px w-3 bg-[hsl(var(--blueprint-line)/0.3)]" />
                    <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-1.5">
                        <GraduationCap size={14} />
                        {school}
                    </span>
                </div>
                
                <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-wider text-[hsl(var(--blueprint-line))] border border-[hsl(var(--blueprint-line)/0.3)] bg-[hsl(var(--blueprint-line)/0.05)] px-2 py-0.5 w-fit uppercase">
                    <Calendar size={12} />
                    <span>{date}</span>
                </div>
            </div>

            <div className="p-4 sm:p-5">
                <div className="flex flex-col gap-1 mb-4">
                    <h3 className="font-mono text-sm uppercase tracking-wider text-foreground group-hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200">
                        {degree}
                    </h3>
                    {location && (
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-[hsl(var(--blueprint-line)/0.6)] rotate-45" />
                            <span className="text-[hsl(var(--blueprint-line)/0.6)] text-[10px] sm:text-xs font-mono tracking-widest uppercase">{location}</span>
                        </div>
                    )}
                </div>

                <div className="mt-3">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="h-px flex-1 border-t border-dashed border-[hsl(var(--blueprint-line)/0.2)]" />
                        <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.4)] uppercase">ACADEMIC DETAILS</span>
                        <span className="h-px flex-1 border-t border-dashed border-[hsl(var(--blueprint-line)/0.2)]" />
                    </div>
                    <div className="education-text font-mono text-[10px] xs:text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                        {description}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EducationItem
