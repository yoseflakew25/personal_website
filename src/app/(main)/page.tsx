import dynamic from 'next/dynamic'
import AboutSection from '~/components/about-section'
import { ProjectList } from '~/components/project'
import Skills from '~/components/skills'

const Experience = dynamic(() => import('~/components/experience'), {
  loading: () => <div className="h-96 animate-pulse bg-white/5 rounded-xl" />
})
const EducationList = dynamic(() => import('~/components/education').then(mod => mod.EducationList), {
  loading: () => <div className="h-64 animate-pulse bg-white/5 rounded-xl" />
})


const HomePage = () => {
  return (
    <div className="!mt-8 space-y-0 relative">
      {/* Hero / About */}
      <section className="pb-16">
        <AboutSection />
      </section>

    
    </div>
  )
}


export default HomePage
