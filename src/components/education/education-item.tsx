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
        <li role="listitem" className="last:!border-b-0 border-b border-[hsl(var(--border)/0.3)] pb-6">
            <div className="p-4 border border-transparent hover:border-[hsl(var(--blueprint-line)/0.3)] transition-all duration-200 space-y-2 bg-card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-mono text-sm uppercase tracking-wider text-foreground group-hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200">
                        {degree}
                    </h3>
                    <div className="flex items-center gap-1 font-mono text-[10px] tracking-wider text-[hsl(var(--blueprint-line))] border border-[hsl(var(--blueprint-line)/0.3)] px-2 py-0.5 w-fit">
                        <Calendar size={12} />
                        <span>{date}</span>
                    </div>
                </div>

                <div className="font-mono text-xs text-foreground/80">
                    <div className="flex items-center gap-1.5">
                        <GraduationCap size={12} className="text-[hsl(var(--blueprint-line)/0.6)]" />
                        <span>{school}</span>
                    </div>
                    {location && (
                        <span className="text-muted-foreground text-xs font-mono">{location}</span>
                    )}
                </div>

                <div className="font-mono text-xs text-muted-foreground leading-relaxed mt-2">
                    {description}
                </div>
            </div>
        </li>
    )
}

export default EducationItem
