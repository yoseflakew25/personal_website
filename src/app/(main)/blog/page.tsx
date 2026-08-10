import { posts } from '#site/content'
import { PostList } from '~/components/post'
import SearchInput from '~/components/search-input'
import { Tag } from '~/components/tags'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'
import { CornerBrackets } from '~/components/ui/corner-brackets'
import { getAllTags, sortedTagsCount, sortPosts } from '~/lib/utils'

export const metadata = getSEOTags({
  title: `Blog - ${config.appName}`,
  description:
    'Thoughts on software engineering, UI/UX design, and building meaningful digital experiences.',
  canonicalUrlRelative: '/blog',
  keywords: ['Blog', 'Software', 'Engineering', 'UI/UX', 'Design', 'Technology'],
})

const BlogPage = ({ searchParams }: { searchParams: { search: string | undefined } }) => {
  const allPosts = sortPosts(posts)
  const search = searchParams?.search
  const filteredPosts = search
    ? allPosts.filter(post =>
        post.title.toLowerCase().includes(decodeURIComponent(search).toLowerCase())
      )
    : allPosts
  const tags = getAllTags(posts)
  const sortedTags = sortedTagsCount(tags)
  const totalPosts = allPosts.length
  const totalTags = Object.keys(tags).length

  return (
    <div className="mt-2 relative pb-12">
      {/* ── Clean Header ── */}
      <div className="mb-8 pb-5 border-b border-[hsl(var(--border))]">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.6)] uppercase border border-[hsl(var(--blueprint-line)/0.3)] bg-[hsl(var(--blueprint-line)/0.05)] px-2 py-0.5">
            BLOG
          </span>
          <span className="h-3 w-px bg-[hsl(var(--border))]" aria-hidden="true" />
          <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
            {totalPosts} ARTICLE{totalPosts !== 1 ? 'S' : ''}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-mono text-xl md:text-2xl uppercase tracking-wider text-foreground font-bold">
              Latest Posts
            </h1>
            <p className="font-mono text-xs text-muted-foreground/70 mt-1">
              Thoughts on software, design, and building meaningful products.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <SearchInput />
          </div>
        </div>
      </div>

      {/* ── Main layout: posts + sidebar ── */}
      <div className="grid md:grid-cols-3 gap-6 items-start">
        {/* Posts */}
        <main className="md:col-span-2 order-2 md:order-1">
          <PostList posts={filteredPosts} />
        </main>

        {/* Sidebar — Tags */}
        <aside className="order-1 md:order-2 sticky top-24">
          <div className="relative border border-[hsl(var(--border))] bg-card p-4">
            <CornerBrackets size="0.5rem" colorClass="border-[hsl(var(--blueprint-line)/0.3)]" />
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[hsl(var(--border))]">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.6)] uppercase shrink-0">
                TAGS
              </span>
              <span className="flex-1" />
              <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
                {totalTags}
              </span>
            </div>

            {totalTags > 0 ? (
              <ul role="list" className="flex flex-wrap gap-1.5">
                {sortedTags.map((tag) => (
                  <Tag key={tag} tag={tag} count={tags[tag]} />
                ))}
              </ul>
            ) : (
              <p className="font-mono text-xs text-muted-foreground">No tags found.</p>
            )}
          </div>
        </aside>
      </div>

    </div>
  )
}

export default BlogPage
