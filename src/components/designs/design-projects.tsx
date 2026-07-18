'use client'

import { designProjects } from '~/constants/ui-designs'
import SectionHeader from '../ui/section-header'
import ScrollReveal from '../ui/scroll-reveal'
import { StaggerItem, StaggerList } from '../ui/scroll-reveal'
import DesignCard from './design-card'

const DesignProjects = () => {
  return (
    <section className="space-y-8">
      <ScrollReveal variant="fadeUp">
        <SectionHeader
          title="Featured Designs"
          subtitle="A selection of UI/UX work — from mobile apps to landing pages and dashboards."
          sectionNumber="04"
        />
      </ScrollReveal>

      <StaggerList
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        staggerDelay={0.08}
      >
        {designProjects.map((project, index) => (
          <StaggerItem key={project.id}>
            <DesignCard project={project} priority={index < 3} />
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  )
}

export default DesignProjects
