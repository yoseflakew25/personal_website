import dynamic from 'next/dynamic'
import Skills from '~/components/skills'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'

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
        </div>
    )
}

export default ExperiencePage
