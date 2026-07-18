import { posts } from '#site/content'
import { Rss } from 'lucide-react'
import Link from 'next/link'
import { PostList } from '~/components/post'
import SearchInput from '~/components/search-input'
import { Tag } from '~/components/tags'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'
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
  const filteredPosts = searchParams?.search
    ? allPosts.filter(post =>
        post.title.toLowerCase().includes(decodeURIComponent(searchParams.search).toLowerCase())
      )
    : allPosts
  const tags = getAllTags(posts)
  const sortedTags = sortedTagsCount(tags)
  const totalPosts = allPosts.length
  const totalTags = Object.keys(tags).length

  return (
    <div className="!mt-8 relative pb-12">
      {/* ── Breadcrumb back link ── */}
      <Link
        href="/"
        className="group/back inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 mb-4 border border-transparent hover:border-[hsl(var(--blueprint-line)/0.3)] px-2 py-1"
      >
        <span className="text-[hsl(var(--blueprint-line)/0.5)] group-hover/back:text-[hsl(var(--blueprint-line))] transition-colors duration-200">◂</span>
        Home
        <span className="text-[hsl(var(--blueprint-line)/0.3)] group-hover/back:text-[hsl(var(--blueprint-line)/0.6)] transition-colors duration-200">▸</span>
      </Link>

      {/* ── Blueprint Header ── */}
      <div className="relative border border-[hsl(var(--border))] bg-card p-4 mb-6">
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.5)]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.5)]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.5)]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.5)]" />

        <div className="border-b border-[hsl(var(--border))] pb-2 mb-3">
          <p className="text-blueprint-meta">BLOG INDEX</p>
          <p className="text-blueprint-meta">ALL ARTICLES</p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.6)] uppercase shrink-0">
              ARTICLES
            </span>
            <h1 className="font-mono text-lg md:text-xl uppercase tracking-wider text-foreground font-bold">
              Latest Posts
            </h1>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <SearchInput />
            <Link
              href="/feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase border border-[hsl(var(--border))] px-2.5 py-1.5 text-muted-foreground hover:text-[hsl(var(--blueprint-line))] hover:border-[hsl(var(--blueprint-line)/0.5)] transition-all duration-200 shrink-0"
            >
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-200" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-200" />
              <Rss size={12} />
              <span className="hidden sm:inline">RSS</span>
            </Link>
          </div>
        </div>

        <div className="blueprint-title-block mt-2">
          <div>
            <dt>Total Posts</dt>
            <dd>{totalPosts}</dd>
          </div>
          <div>
            <dt>Categories</dt>
            <dd>{totalTags}</dd>
          </div>
          <div>
            <dt>Latest</dt>
            <dd>{allPosts[0]?.date?.slice(0, 7) ?? 'N/A'}</dd>
          </div>
          <div>
            <dt>Reading</dt>
            <dd>~{Math.round(allPosts.reduce((acc, p) => acc + (p.metadata?.readingTime ?? 5), 0) / allPosts.length)} min avg</dd>
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
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[hsl(var(--blueprint-line)/0.4)]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[hsl(var(--blueprint-line)/0.4)]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[hsl(var(--blueprint-line)/0.4)]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[hsl(var(--blueprint-line)/0.4)]" />

            <div className="border-b border-[hsl(var(--border))] pb-2 mb-3">
              <p className="text-blueprint-meta">BROWSE BY TAG</p>
              <p className="text-blueprint-meta">INDEX</p>
            </div>

            <ul role="list" className="flex flex-wrap gap-2">
              {sortedTags.map((tag) => (
                <Tag key={tag} tag={tag} count={tags[tag]} />
              ))}
            </ul>

            {totalTags === 0 && (
              <p className="font-mono text-xs text-muted-foreground">No tags found.</p>
            )}

            <div className="border-t border-[hsl(var(--border))] pt-2 mt-3 flex justify-between">
              <span className="text-blueprint-meta">TOTAL: {totalTags}</span>
              <span className="text-blueprint-meta">ALL</span>
            </div>
          </div>
        </aside>
      </div>

      {/* ── Page footer ── */}
      <div className="border-t border-dashed border-[hsl(var(--border))] mt-10 pt-3 flex items-center justify-between">
        <span className="text-blueprint-note">END OF BLOG INDEX</span>
        <span className="text-blueprint-note">{totalPosts} POSTS · {totalTags} TAGS</span>
      </div>
    </div>
  )
}

export default BlogPage
