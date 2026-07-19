'use client'

import dynamic from 'next/dynamic'
import ContentNotFound from '../ui/content-not-found'
import { projects as defaultProjects } from './_project-mock'
import type { TProjectSerialized } from './_project-mock'

import { ProjectCarouselSkeleton } from '~/components/ui/blueprint-skeleton'

const ProjectCarousel = dynamic(() => import('./project-carousel'), {
  ssr: false,
  loading: () => <ProjectCarouselSkeleton />,
})

type ProjectListProps = {
  projects?: readonly TProjectSerialized[]
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const displayProjects = projects || defaultProjects

  return (
    <div className="h-full relative flex flex-col">
      <section aria-label="projects" id="main-content" className="flex-1 min-h-0">
        {displayProjects.length > 0 ? (
          <div className="h-full">
            <ProjectCarousel projects={displayProjects} />
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <ContentNotFound text="No Projects Found" />
          </div>
        )}
      </section>
    </div>
  )
}

export default ProjectList
