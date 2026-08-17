import Link from 'next/link'
import { Rss } from 'lucide-react'
import { posts } from '#site/content'
import { PostList } from '~/components/post'
import SearchInput from '~/components/search-input'
import { Tag } from '~/components/tags'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'
import { CornerBrackets } from '~/components/ui/corner-brackets'
import SectionHeader from '~/components/ui/section-header'
import ScrollReveal from '~/components/ui/scroll-reveal'
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
    <div className="!mt-8 relative pb-12">
      {/* ── Header — matches other pages (SectionHeader + search + RSS) ── */}
      <ScrollReveal variant="blueprintReveal">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <SectionHeader
            title="Latest Posts"
            subtitle={`Thoughts on software, design, and building meaningful products. · ${totalPosts} article${totalPosts !== 1 ? 's' : ''}`}
            sheet="SHEET 06/06"
          />
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
      </ScrollReveal>

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

            <div className="border-b border-[hsl(var(--border))] pb-2 mb-3">
              <p className="text-blueprint-meta">BROWSE BY TAG</p>
              <p className="text-blueprint-meta">INDEX · ALL</p>
            </div>

            {totalTags > 0 ? (
              <ul role="list" className="flex flex-wrap gap-2">
                {sortedTags.map((tag) => (
                  <Tag key={tag} tag={tag} count={tags[tag]} />
                ))}
              </ul>
            ) : (
              <p className="font-mono text-xs text-muted-foreground">No tags found.</p>
            )}

            <div className="border-t border-[hsl(var(--border))] pt-2 mt-3 flex justify-between">
              <span className="text-blueprint-meta">TOTAL: {totalTags}</span>
              <span className="text-blueprint-meta">ALL</span>
            </div>
          </div>
        </aside>
      </div>

    </div>
  )
}

export default BlogPage
