import dynamic from 'next/dynamic'
import AboutSection from '~/components/about-section'
import CTASection from '~/components/cta-section'
import { SkillsSkeleton, ExperienceSkeleton, EducationSkeleton } from '~/components/ui/blueprint-skeleton'

const Skills = dynamic(() => import('~/components/skills'), {
  loading: () => <SkillsSkeleton />,
})

const Experience = dynamic(() => import('~/components/experience'), {
  loading: () => <ExperienceSkeleton />,
})

const EducationList = dynamic(() => import('~/components/education').then(mod => mod.EducationList), {
  loading: () => <EducationSkeleton />,
})

const HomePage = () => {
  return (
    <div className="space-y-0 relative pb-12">
      <AboutSection />

      {/* Skills */}
      <section id="skills" className="pb-12 pt-8">
        <Skills />
      </section>

      {/* Experience */}
      <section id="experience" className="pb-12">
        <Experience />
      </section>

      {/* Education */}
      <section id="education" className="pb-12">
        <EducationList />
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}

export default HomePage
