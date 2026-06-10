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
        <li role="listitem" className="last:!border-b-0 border-b border-white/5 pb-6">
            <div className="p-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-card/40 hover:shadow-[0_0_15px_hsl(var(--primary)/0.08)] transition-all duration-500 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-sans text-base font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {degree}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-primary font-mono font-medium bg-primary/5 border border-primary/20 px-2.5 py-1 rounded-full w-fit">
                        <Calendar size={12} />
                        <span>{date}</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm font-medium text-foreground/80 font-sans">
                    <div className="flex items-center gap-1.5">
                        <GraduationCap size={14} className="text-primary/60" />
                        <span>{school}</span>
                    </div>
                    {location && (
                        <span className="text-muted-foreground text-xs font-mono">{location}</span>
                    )}
                </div>

                <div className="text-muted-foreground text-sm leading-relaxed font-sans mt-2">
                    {description}
                </div>
            </div>
        </li>
    )
}

export default EducationItem
