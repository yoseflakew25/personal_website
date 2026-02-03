import AboutSection from '~/components/about-section'
import Experience from '~/components/experience'
import { ProjectList, projects } from '~/components/project'
import Skills from '~/components/skills'
import GithubProjects from '~/components/githubProjects'
import { EducationList } from '~/components/education'
import ContactUs from '../../components/contact-us'


const HomePage = () => {
  return (
    <div className="!mt-8 space-y-14">
      <AboutSection />
      <Skills />
      <ProjectList projects={projects} metadata />
      <GithubProjects />
      <Experience />
      <EducationList />
      <ContactUs />
    </div>
  )
}

export default HomePage
