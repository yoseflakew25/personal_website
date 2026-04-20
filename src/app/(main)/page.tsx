import dynamic from 'next/dynamic'
import AboutSection from '~/components/about-section'
import { ProjectList } from '~/components/project'
import Skills from '~/components/skills'

const GithubProjects = dynamic(() => import('~/components/githubProjects'), {
  loading: () => <div className="h-96 animate-pulse bg-white/5 rounded-xl" />
})
const Experience = dynamic(() => import('~/components/experience'), {
  loading: () => <div className="h-96 animate-pulse bg-white/5 rounded-xl" />
})
const EducationList = dynamic(() => import('~/components/education').then(mod => mod.EducationList), {
  loading: () => <div className="h-64 animate-pulse bg-white/5 rounded-xl" />
})
const ContactUs = dynamic(() => import('../../components/contact-us'), {
  loading: () => <div className="h-96 animate-pulse bg-white/5 rounded-xl" />
})

const HomePage = () => {
  return (
    <div className="!mt-8 space-y-0 relative">
      {/* Hero / About */}
      <section className="pb-16">
        <AboutSection />
      </section>

      <div className="neon-divider" aria-hidden="true" />

      {/* Skills */}
      <section className="py-12">
        <Skills />
      </section>

      <div className="neon-divider" aria-hidden="true" />

      {/* Featured Projects */}
      <section className="py-12">
        <ProjectList metadata />
      </section>

      <div className="neon-divider" aria-hidden="true" />

      {/* Other Projects */}
      <section className="py-12">
        <GithubProjects />
      </section>

      <div className="neon-divider" aria-hidden="true" />

      {/* Experience */}
      <section className="py-12">
        <Experience />
      </section>

      <div className="neon-divider" aria-hidden="true" />

      {/* Education */}
      <section className="py-12">
        <EducationList />
      </section>

      <div className="neon-divider" aria-hidden="true" />

      {/* Contact */}
      <section className="py-12">
        <ContactUs />
      </section>
    </div>
  )
}

export default HomePage
