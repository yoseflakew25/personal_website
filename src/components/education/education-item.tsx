import React from 'react'
import { GraduationCap, Calendar } from 'lucide-react'
import { Card } from '~/components/ui/card'

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
        <li role="listitem" className="last:!border-b-0 border-b pb-6">
            <Card className="p-0 border-0 shadow-none rounded-none bg-transparent">
                <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-ubuntu text-lg font-semibold text-ring">
                            {degree}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded-md w-fit">
                            <Calendar size={12} />
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm font-medium text-foreground/90">
                        <div className="flex items-center gap-1">
                            <GraduationCap size={14} className="text-ring" />
                            <span>{school}</span>
                        </div>
                        {location && (
                            <span className="text-muted-foreground text-xs">{location}</span>
                        )}
                    </div>

                    <div className="text-muted-foreground text-sm leading-relaxed font-ubuntu mt-2">
                        {description}
                    </div>
                </div>
            </Card>
        </li>
    )
}

export default EducationItem
