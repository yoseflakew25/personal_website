import GithubProjects from '~/components/githubProjects'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'

export const metadata = getSEOTags({
    title: `GitHub Projects - ${config.appName}`,
    description: 'A collection of my other notable projects and open-source contributions on GitHub.',
    canonicalUrlRelative: '/github',
})

const GithubPage = () => {
    return (
        <div className="!mt-8 space-y-0 relative">
            <section className="pb-12">
                <GithubProjects title="Notable Repositories" titleClassName="text-primary" />
            </section>
        </div>
    )
}

export default GithubPage
