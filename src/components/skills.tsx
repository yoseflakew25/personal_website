'use client'
import React from 'react'
import { BACKEND_STACKS, FRONTEND_STACKS, stacksProps } from '~/constants/stack'
import SectionHeader from './ui/section-header'
import ScrollReveal from './ui/scroll-reveal'

const Skills = () => {
  return (
    <section aria-label="skills" className="space-y-8 bg-transparent">
      <ScrollReveal variant="fadeUp">
        <SectionHeader title="Tools & Technologies" sectionNumber="02" />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.2}>
        <div className="border border-[hsl(var(--border))] divide-y divide-[hsl(var(--border))] bg-card">
          <div className="p-3">
            <p className="text-blueprint-meta mb-3">FRONTEND / UI</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(FRONTEND_STACKS).map((stack, index) => {
                const Icon = FRONTEND_STACKS[stack].Icon
                const className = FRONTEND_STACKS[stack].className
                return (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase border border-[hsl(var(--border))] px-2 py-1 text-foreground/80 hover:border-[hsl(var(--blueprint-line)/0.5)] transition-colors duration-200"
                  >
                    <Icon className={className} aria-label={stack} />
                    <span>{stack}</span>
                  </span>
                )
              })}
            </div>
          </div>
          <div className="p-3">
            <p className="text-blueprint-meta mb-3">BACKEND / INFRA</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(BACKEND_STACKS).map((stack, index) => {
                const Icon = BACKEND_STACKS[stack].Icon
                const className = BACKEND_STACKS[stack].className
                return (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase border border-[hsl(var(--border))] px-2 py-1 text-foreground/80 hover:border-[hsl(var(--blueprint-line)/0.5)] transition-colors duration-200"
                  >
                    <Icon className={className} aria-label={stack} />
                    <span>{stack}</span>
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default Skills
