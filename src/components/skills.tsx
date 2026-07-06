'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { useTheme } from 'next-themes'
import { BACKEND_STACKS, FRONTEND_STACKS, stacksProps } from '~/constants/stack'
import SectionHeader from './ui/section-header'
import ScrollReveal from './ui/scroll-reveal'

const Skills = () => {
  const { resolvedTheme } = useTheme()
  const gradientColor = resolvedTheme === 'dark' ? '#0a0a0f' : '#ffffff'

  return (
    <section aria-label="skills" className="my-4 space-y-8 bg-transparent">
      <ScrollReveal variant="fadeUp">
        <SectionHeader title="Tools & Technologies" titleClassName="text-primary" />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.2}>
        <div className="space-y-5 w-full">
          <Marquee pauseOnHover speed={20} gradient gradientColor={gradientColor} gradientWidth={80}>
            <SkillsList stacks={FRONTEND_STACKS} />
            <SkillsList stacks={FRONTEND_STACKS} aria-hidden />
          </Marquee>

          <Marquee pauseOnHover direction="right" speed={20} gradient gradientColor={gradientColor} gradientWidth={80}>
            <SkillsList stacks={BACKEND_STACKS} />
            <SkillsList stacks={BACKEND_STACKS} aria-hidden />
          </Marquee>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default Skills

const SkillsList = ({ stacks, ...props }: { stacks: stacksProps } & React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className="flex items-center" role="list" {...props}>
      {Object.keys(stacks).map((stack, index) => {
        const Icon = stacks[stack].Icon
        const className = stacks[stack].className
        return (
          <li
            role="listitem"
            key={index}
            className="mr-2.5 flex w-max items-center gap-2 rounded-md border px-3 py-2 text-[14px] shadow-sm border-border/40 bg-card/50 text-foreground/80 backdrop-blur-sm hover:border-border hover:text-primary transition-all duration-300 font-sans font-medium"
          >
            {<Icon className={className} aria-label={stack} />}
            <span className="whitespace-nowrap">{stack}</span>
          </li>
        )
      })}
    </ul>
  )
}
