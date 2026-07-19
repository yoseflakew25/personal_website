import dynamic from 'next/dynamic'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'

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
