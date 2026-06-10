'use client'
import SectionHeader from '../ui/section-header'
import ScrollReveal from '../ui/scroll-reveal'
import { TProjectSerialized } from './_project-mock'
import ContentNotFound from '../ui/content-not-found'
import ProjectCarousel from './project-carousel'
import mockProjects from './_project-mock'

const ProjectList = ({
  metadata,
  projects,
}: {
  metadata?: boolean
  projects?: TProjectSerialized[]
}) => {
  const displayProjects = projects || mockProjects
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
