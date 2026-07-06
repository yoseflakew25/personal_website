import dynamic from 'next/dynamic'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'

const DesignProjects = dynamic(
  () => import('~/components/designs/design-projects'),
  {
    loading: () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-72 animate-pulse rounded-xl bg-card/40 border border-border/30" />
        ))}
      </div>
    ),
  },
)

export const metadata = getSEOTags({
  title: `UI / UX Designs - ${config.appName}`,
  description:
    'Explore my UI/UX design portfolio — mobile apps, landing pages, dashboards, and product experiences crafted with user-centered design principles.',
  canonicalUrlRelative: '/designs',
})

const DesignsPage = () => {
  return (
    <div className="!mt-8 relative pb-12">
      <DesignProjects />
    </div>
  )
}

export default DesignsPage
