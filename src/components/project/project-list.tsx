'use client'

import dynamic from 'next/dynamic'
import SectionHeader from '../ui/section-header'
import ScrollReveal from '../ui/scroll-reveal'
import { TProjectSerialized } from './_project-mock'
import ContentNotFound from '../ui/content-not-found'
import { projects as defaultProjects } from './_project-mock'

const ProjectCarousel = dynamic(() => import('./project-carousel'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[550px] flex items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  ),
})

const ProjectList = ({
  metadata,
  projects,
}: {
  metadata?: boolean
  projects?: readonly TProjectSerialized[]
}) => {
  const displayProjects = projects || defaultProjects

  return (
    <section aria-label="projects" className="space-y-6 pt-0 relative" id="main-content">
      {metadata && (
        <ScrollReveal variant="fadeUp">
          <SectionHeader title="Featured Projects" titleClassName="text-primary" />
        </ScrollReveal>
      )}

      <div className="backdrop-shadow rounded-3xl border border-border/40 bg-transparent hover:border-border/70 hover:shadow-[0_0_30px_hsl(var(--primary)/0.03)] transition-all duration-500">
        {displayProjects.length > 0 ? (
          <ScrollReveal variant="scaleIn" delay={0.2}>
            <ProjectCarousel projects={displayProjects} />
          </ScrollReveal>
        ) : (
          <ContentNotFound text="No Projects Found" />
        )}
      </div>
    </section>
  )
}

export default ProjectList
