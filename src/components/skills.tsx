'use client'
import React from 'react'
import { BACKEND_STACKS, FRONTEND_STACKS } from '~/constants/stack'
import SectionHeader from './ui/section-header'
import ScrollReveal from './ui/scroll-reveal'

const SkillSector = ({
  label,
  code,
  stacks,
}: {
  label: string
  code: string
  stacks: Record<string, { Icon: React.ElementType; className: string }>
}) => (
  <div className="relative p-4">
    {/* Sector header row */}
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[9px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.5)] uppercase shrink-0">
        [{code}]
      </span>
      <span className="h-px flex-1 border-t border-dashed border-[hsl(var(--border)/0.6)]" />
      <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </span>
    </div>

    <div className="flex flex-wrap gap-2">
      {Object.keys(stacks).map((stack) => {
        const Icon = stacks[stack].Icon
        const className = stacks[stack].className
        return (
          <span
            key={stack}
            className="group relative inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase border border-[hsl(var(--border))] px-2 py-1 text-foreground/75 hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))] hover:bg-[hsl(var(--blueprint-line)/0.04)] transition-all duration-200 cursor-default"
          >
            {/* TL corner accent on hover */}
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-200" />
            <Icon className={className} aria-label={stack} />
            <span>{stack}</span>
          </span>
        )
      })}
    </div>
  </div>
)

const Skills = () => {
  return (
    <section aria-label="skills" className="space-y-8 bg-transparent">
      <ScrollReveal variant="fadeUp">
        <SectionHeader title="Tools & Technologies" sectionNumber="02" />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.2}>
        {/* Outer container with corner accents */}
        <div className="relative border border-[hsl(var(--border))] bg-card divide-y divide-[hsl(var(--border))]">
          {/* TL corner */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.5)] z-10 pointer-events-none" />
          {/* TR corner */}
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.5)] z-10 pointer-events-none" />
          {/* BL corner */}
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.5)] z-10 pointer-events-none" />
          {/* BR corner */}
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.5)] z-10 pointer-events-none" />

          {/* Spec sheet top bar */}
          <div className="px-4 py-1.5 flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase">
              TECHNICAL_SCHEMATICS.dwg
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              REV A
            </span>
          </div>

          <SkillSector
            label="Frontend / UI"
            code="SECTOR_A"
            stacks={FRONTEND_STACKS as Record<string, { Icon: React.ElementType; className: string }>}
          />
          <SkillSector
            label="Backend / Infra"
            code="SECTOR_B"
            stacks={BACKEND_STACKS as Record<string, { Icon: React.ElementType; className: string }>}
          />

          {/* Bottom annotation bar */}
          <div className="px-4 py-1.5 flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              NOT TO SCALE
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              SHEET 1 / 1
            </span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default Skills
