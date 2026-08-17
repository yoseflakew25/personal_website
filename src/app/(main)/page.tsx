import dynamic from 'next/dynamic'
import AboutSection from '~/components/about-section'
import { SectionSequencer } from '~/components/ui/scroll-reveal'
import Skills from '~/components/skills'
import Experience from '~/components/experience'
import { EducationList } from '~/components/education'
import { ContactSkeleton, ProjectCarouselSkeleton } from '~/components/ui/blueprint-skeleton'
import CTASection from '~/components/cta-section'
import { projects } from '~/components/project/_project-mock'
import StackMarquee from '~/components/stack-marquee'

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
    <div className="space-y-16 relative pb-12">
      <AboutSection />

      {/* Sequenced section reveals with staggered blueprint entrance */}
      <SectionSequencer
        sectionInterval={0.15}
        initialDelay={0.1}
        className='space-y-16'
      >
        <section aria-label="Tech stack marquee" className="pb-12 pt-8">
          <StackMarquee />
        </section>

        <section id="skills" className="pb-12 pt-8 scroll-mt-24">
          <Skills />
        </section>

        <section id="experience" className="pb-12 scroll-mt-24">
          <Experience />
        </section>

        <section id="education" className="pb-12 scroll-mt-24">
          <EducationList />
        </section>



        <section id="projects" className="pb-12 scroll-mt-24">
          <ProjectCarousel projects={projects} />
        </section>



       

        <div className="pb-12">
          <CTASection />
        </div>

        <div id="contact" className="pb-12 scroll-mt-24">
          <ContactUs />
        </div>

      </SectionSequencer>
    </div>
  )
}

export default HomePage
