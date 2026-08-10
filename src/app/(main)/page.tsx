import dynamic from 'next/dynamic'
import AboutSection from '~/components/about-section'
import { SectionSequencer } from '~/components/ui/scroll-reveal'
import Skills from '~/components/skills'
import Experience from '~/components/experience'
import { EducationList } from '~/components/education'
import { ContactSkeleton, ProjectCarouselSkeleton } from '~/components/ui/blueprint-skeleton'
import CTASection from '~/components/cta-section'
import { projects } from '~/components/project/_project-mock'

const ProjectCarousel = dynamic(
  () => import('~/components/project/project-carousel'),
  {
    loading: () => <ProjectCarouselSkeleton />,
  },
)

const ContactUs = dynamic(
  () => import('~/components/contact-us'),
  {
    loading: () => <ContactSkeleton />,
  },
)

const HomePage = () => {
  return (
    <div className="space-y-0 relative pb-12">
      <AboutSection />

      {/* Sequenced section reveals with staggered blueprint entrance */}
      <SectionSequencer
        sectionInterval={0.15}
        initialDelay={0.1}
      >
        <section id="skills" className="pb-12 pt-8">
          <Skills />
        </section>

        <section id="experience" className="pb-12">
          <Experience />
        </section>

        <section id="education" className="pb-12">
          <EducationList />
        </section>



        <section id="projects" className="pb-12">
          <ProjectCarousel projects={projects} />
        </section>



       

        <div id="contact" className="pb-12">
          <ContactUs />
        </div>

 <div className="pb-12">
          <CTASection />
        </div>

      </SectionSequencer>
    </div>
  )
}

export default HomePage
