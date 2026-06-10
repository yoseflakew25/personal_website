import { ProjectList, projects } from '~/components/project'
import SearchInput from '~/components/search-input'
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
  const filteredProjects = projects
    .filter(project =>
      project.title.toLowerCase().includes(decodeURIComponent(searchParams.search || '')),
    )
    .map(({ Icon, ...rest }) => rest)

  return (
    <div className="relative h-[calc(100dvh-8rem)] overflow-hidden w-full">
      <ProjectList projects={filteredProjects} metadata={false} />
    </div>
  )
}

export default ProjectsPage
