import { projects } from '~/components/project'
import { ProjectList } from '~/components/project'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'

export const metadata: ReturnType<typeof getSEOTags> = getSEOTags({
  title: `All Projects - ${config.appName}`,
  description:
    'Explore a digital garden of my projects, where I showcase insights on shipping exceptional products, advancing as a developer, and thriving in the tech industry',
  canonicalUrlRelative: '/projects',
  keywords: [
    'JavaScript',
    'TypeScript',
    'React',
    'Testing',
    'Career',
    'Software Development',
  ],
})

const ProjectsPage = ({ searchParams }: { searchParams: { search: string | undefined } }) => {
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(decodeURIComponent(searchParams.search || '')),
  )

  return (
    <div className="h-full overflow-hidden">
      <ProjectList projects={filteredProjects} />
    </div>
  )
}

export default ProjectsPage
