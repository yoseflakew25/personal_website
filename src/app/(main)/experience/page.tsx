import dynamic from 'next/dynamic'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'

const Skills = dynamic(() => import('~/components/skills'), {
  loading: () => <div className="h-32 animate-pulse bg-card/30 rounded-xl" />,
})

const Experience = dynamic(() => import('~/components/experience'), {
    loading: () => <div className="h-96 animate-pulse bg-white/5 rounded-xl" />
})
const EducationList = dynamic(() => import('~/components/education').then(mod => mod.EducationList), {
    loading: () => <div className="h-64 animate-pulse bg-white/5 rounded-xl" />
})

export const metadata: ReturnType<typeof getSEOTags> = getSEOTags({
    title: `Experience & Skills - ${config.appName}`,
    description:
        'Detailed overview of my professional experience, technical skills, and educational background.',
    canonicalUrlRelative: '/experience',
    keywords: [
        'Software Engineer',
        'Experience',
        'Skills',
        'Education',
        'Resume',
        'Tech Stack',
    ],
})

const ExperiencePage = () => {
    return (
        <div className="!mt-8 space-y-0 relative">
            {/* Skills */}
            <section className="pb-12">
                <Skills />
            </section>

            {/* Experience */}
            <section className="pb-12">
                <Experience />
            </section>

            {/* Education */}
            <section className="pb-12">
                <EducationList />
            </section>
        </div>
    )
}

export default ExperiencePage
