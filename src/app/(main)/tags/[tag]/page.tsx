import {posts} from '#site/content'
import {slug} from 'github-slugger'
import React from 'react'
import {ArrowLeft} from 'lucide-react'
import {CustomLink} from '~/components/mdx'
import {PostList} from '~/components/post'
import config from '~/config'
import {getSEOTags} from '~/lib/seo'
import {getAllTags, getPostsByTagSlug} from '~/lib/utils'
import {CornerBrackets} from '~/components/ui/corner-brackets'

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
      {/* Tag header card */}
      <div className="relative border border-[hsl(var(--border))] bg-card p-4 mb-8">
        <CornerBrackets />

        <div className="border-b border-[hsl(var(--border))] pb-2 mb-3">
          <p className="text-blueprint-meta">TAG INDEX</p>
          <p className="text-blueprint-meta">FILTER · {tag.toUpperCase()}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.6)] uppercase shrink-0">
            POSTS TAGGED
          </span>
          <h2 className="font-mono text-sm uppercase tracking-wider text-foreground">
            {title}
          </h2>
          <span className="flex-1 h-px bg-[hsl(var(--border))]" aria-hidden="true" />
          <span className="font-mono text-[10px] text-muted-foreground shrink-0">{displayPosts.length} POSTS</span>
        </div>

        <div className="border-t border-[hsl(var(--border))] pt-2 mt-3">
          <CustomLink href="/tags">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200">
              <ArrowLeft size={12} />
              Back to all tags
            </span>
          </CustomLink>
        </div>
      </div>

      <PostList posts={displayPosts} showRss={false} layout="grid" />
    </div>
  )
}

export default TagDetailPage
