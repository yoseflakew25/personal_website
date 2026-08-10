'use client'
import React from 'react'
import { BACKEND_STACKS, FRONTEND_STACKS } from '~/constants/stack'
import SectionHeader from './ui/section-header'
import ScrollReveal from './ui/scroll-reveal'
import { CornerBrackets } from '~/components/ui/corner-brackets'

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
      <span className="font-mono text-[9px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.7)] uppercase shrink-0">
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
            <CornerBrackets size="0.375rem" colorClass="border-transparent" hoverColorClass="group-hover:border-[hsl(var(--blueprint-line)/0.4)]" transitionClass="transition-colors duration-200" renderTopRight={false} renderBottomLeft={false} renderBottomRight={false} />
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
      <ScrollReveal variant="blueprintReveal">
        <SectionHeader title="Tools & Technologies" sheet="SHEET 01/06" />
      </ScrollReveal>

      <ScrollReveal variant="blueprintReveal" delay={0.15}>
        <div className="relative border border-[hsl(var(--border))] bg-card divide-y divide-[hsl(var(--border))] transition-all duration-300 hover:border-[hsl(var(--blueprint-line)/0.5)] hover:shadow-[0_0_0_1px_hsl(var(--blueprint-line)/0.08)]">
          {/* Always-visible blueprint corner brackets */}
          <CornerBrackets />

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
