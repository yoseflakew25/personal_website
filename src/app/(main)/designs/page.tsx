import config from '~/config'
import { getSEOTags } from '~/lib/seo'
import DesignProjects from '~/components/designs/design-projects'

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
