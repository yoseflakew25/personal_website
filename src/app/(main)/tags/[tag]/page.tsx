import {posts} from '#site/content'
import {slug} from 'github-slugger'
import React from 'react'
import {ArrowLeft} from 'lucide-react'
import {CustomLink} from '~/components/mdx'
import {PostList} from '~/components/post'
import SectionHeader from '~/components/ui/section-header'
import ScrollReveal from '~/components/ui/scroll-reveal'
import config from '~/config'
import {getSEOTags} from '~/lib/seo'
import {getAllTags, getPostsByTagSlug} from '~/lib/utils'

interface TagPageProps {
  params: {
    tag: string
  }
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<ReturnType<typeof getSEOTags>> {
  const {tag} = params

  return getSEOTags({
    title: `Tagged “${tag}” - ${config.appName}`,
    description: `Posts on the topic of ${tag}`,
    canonicalUrlRelative: `/tags/${slug(tag)}`,
  })
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts)
  const paths = Object.keys(tags).map(tag => ({tag: slug(tag)}))
  return paths
}

const TagDetailPage: React.FC<TagPageProps> = ({params}) => {
  const {tag} = params
  const title = tag.split('-').join(' ')

  const displayPosts = getPostsByTagSlug(posts, tag)

  return (
    <div className="!mt-8 relative pb-12">
      {/* Back to all tags */}
      <ScrollReveal variant="blueprintReveal">
        <CustomLink href="/tags">
          <span className="group/back inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 mb-4 border border-transparent hover:border-[hsl(var(--blueprint-line)/0.3)] px-2 py-1">
            <ArrowLeft size={12} className="text-[hsl(var(--blueprint-line)/0.5)] group-hover/back:text-[hsl(var(--blueprint-line))] transition-colors duration-200" />
            Back to all tags
          </span>
        </CustomLink>

        {/* Header — shared SectionHeader conventions */}
        <div className="mb-8">
          <SectionHeader
            title={title}
            subtitle={`${displayPosts.length} post${displayPosts.length !== 1 ? 's' : ''} tagged "${title}"`}
            sheet="SHEET 06/06"
          />
        </div>
      </ScrollReveal>

      <PostList posts={displayPosts} showRss={false} layout="grid" />
    </div>
  )
}

export default TagDetailPage
