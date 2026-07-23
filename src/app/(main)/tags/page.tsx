import {Post, posts} from '#site/content'
import {Rss} from 'lucide-react'
import Link from 'next/link'
import {CustomLink} from '~/components/mdx'
import {PostList} from '~/components/post'
import SearchInput from '~/components/search-input'
import {Tag} from '~/components/tags'
import SectionHeader from '~/components/ui/section-header'
import config from '~/config'
import {getSEOTags} from '~/lib/seo'
import {getAllTags, sortedTagsCount} from '~/lib/utils'

export const metadata: ReturnType<typeof getSEOTags> = getSEOTags({
  title: `All Posts - ${config.appName}`,
  canonicalUrlRelative: '/tags',
})

type OrganizedPost = Record<string, Post[]>

const TagsPage = () => {
  const tags = getAllTags(posts)
  const sortedTags = sortedTagsCount(tags)

  function organizePostsByTag(posts: Post[]): OrganizedPost {
    const organizedPosts: {[key: string]: Post[]} = {}

    posts.forEach(post => {
      post.tags.forEach(tag => {
        if (!organizedPosts[tag]) {
          organizedPosts[tag] = []
        }
        organizedPosts[tag].push(post)
      })
    })

    const sortedKeys = Object.keys(organizedPosts).sort()
    const result: OrganizedPost = {}

    sortedKeys.forEach(key => {
      result[key] = organizedPosts[key]
    })

    return result
  }

  const result: OrganizedPost = organizePostsByTag(posts)

  return (
    <div className="!mt-8 relative pb-12">
      {/* Header with search + RSS */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <SectionHeader title="All Posts" />
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <SearchInput />
          <Link
            href="/feed.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase border border-[hsl(var(--border))] px-2.5 py-1.5 text-muted-foreground hover:text-[hsl(var(--blueprint-line))] hover:border-[hsl(var(--blueprint-line)/0.5)] transition-all duration-200 shrink-0"
          >
            <Rss size={12} />
            <span className="hidden sm:inline">RSS</span>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        <main className="md:col-span-2 order-2 md:order-1 space-y-10">
          {/* Latest Posts — grid layout, limited to 6 */}
          <PostList posts={posts} showRss={true} maxPosts={6} layout="grid" />

          {/* Posts by Tag */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="font-mono text-sm tracking-wider uppercase text-foreground">Posts by Tag</h3>
              <span className="flex-1 h-px bg-[hsl(var(--border))]" aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-3">
              {Object.keys(result).map(tag => (
                <section
                  key={tag}
                  aria-labelledby={`posts-by-tag ${tag}-title`}
                  className="border border-[hsl(var(--border))] bg-card p-3"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.6)] uppercase shrink-0">
                      TAG
                    </span>
                    <h3 id={`${tag}-title`} className="font-mono text-xs uppercase tracking-wider text-foreground">
                      {tag}
                    </h3>
                    <span className="flex-1 h-px bg-[hsl(var(--border))]" aria-hidden="true" />
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {result[tag].length}
                    </span>
                  </div>

                  <ul role="list" className="space-y-1">
                    {result[tag].map((post) => (
                      <li key={post.slug}>
                        <CustomLink href={`/blog/${post.slugAsParams}`}>
                          <span className="font-mono text-xs text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200">
                            {post.title}
                          </span>
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </main>

        {/* Sidebar — All Tags Card */}
        <div className="order-1 md:order-2 relative border border-[hsl(var(--border))] bg-card p-4 sticky top-4">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[hsl(var(--blueprint-line)/0.4)]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[hsl(var(--blueprint-line)/0.4)]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[hsl(var(--blueprint-line)/0.4)]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[hsl(var(--blueprint-line)/0.4)]" />

          <div className="border-b border-[hsl(var(--border))] pb-2 mb-3">
            <p className="text-blueprint-meta">BROWSE BY TAG</p>
            <p className="text-blueprint-meta">INDEX · ALL</p>
          </div>

          <ul role="list" className="flex flex-wrap gap-2">
            {sortedTags.map((tag) => (
              <Tag key={tag} tag={tag} count={tags[tag]} />
            ))}
          </ul>

          <div className="border-t border-[hsl(var(--border))] pt-2 mt-3 flex justify-between">
            <span className="text-blueprint-meta">TOTAL: {Object.keys(tags).length}</span>
            <span className="text-blueprint-meta">ALL</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TagsPage
