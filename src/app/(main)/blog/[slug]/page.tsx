import { notFound } from 'next/navigation'
import { posts } from '#site/content'
import { ArrowLeft, Calendar, Timer } from 'lucide-react'
import Link from 'next/link'
import { MDXContent } from '~/components/mdx'
import { TableOfContent, JsonSchemaLD } from '~/components/post'

import BackToTop from '~/components/ui/back-to-top'
import ScrollProgress from '~/components/ui/scroll-progress'
import config from '~/config'
import { formatDate } from '~/lib/utils'
import { getSEOTags as getSEOTagsFn } from '~/lib/seo'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

async function getPostFromParams(params: { slug: string }) {
  const slug = params.slug
  const post = posts.find(post => post.slugAsParams === slug)
  return post
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostFromParams(params)
  if (!post) return {}

  return getSEOTagsFn({
    title: `${post.title} - ${config.appName}`,
    description: post.description,
    canonicalUrlRelative: `/blog/${post.slugAsParams}`,
  })
}

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slugAsParams }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <div className="mt-2 relative pb-12">
      <JsonSchemaLD post={post} />

      <ScrollProgress />

      <BackToTop />

      {/* ── Post header ── */}
      <div className="mb-8 pb-6 border-b border-[hsl(var(--border))]">
        <Link
          href="/blog"
          className="group/back inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 mb-4 border border-transparent hover:border-[hsl(var(--blueprint-line)/0.3)] px-2 py-1"
        >
          <ArrowLeft size={12} className="text-[hsl(var(--blueprint-line)/0.5)] group-hover/back:text-[hsl(var(--blueprint-line))] transition-colors duration-200" />
          Back to Blog
        </Link>

        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground uppercase leading-[1.1] tracking-tight mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-[hsl(var(--blueprint-line))] border border-[hsl(var(--blueprint-line)/0.3)] px-2 py-0.5">
            <Calendar size={10} />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
            <Timer size={10} />
            {post.metadata.readingTime} min read
          </span>
        </div>

        {post.description && (
          <p className="font-mono text-xs text-muted-foreground/80 leading-relaxed max-w-2xl mt-3">
            {post.description}
          </p>
        )}
      </div>

      {/* ── Content + TOC layout ── */}
      <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
        {/* Main content */}
        <article className="relative border border-[hsl(var(--border))] bg-card p-5 md:p-8">
          <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[hsl(var(--blueprint-line)/0.25)] pointer-events-none" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[hsl(var(--blueprint-line)/0.25)] pointer-events-none" />
          <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[hsl(var(--blueprint-line)/0.25)] pointer-events-none" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[hsl(var(--blueprint-line)/0.25)] pointer-events-none" />
          <div className="mdx-content max-w-none">
            <MDXContent code={post.body} />
          </div>

        </article>

        {/* ── Sidebar — TOC ── */}
        <aside className="hidden lg:block sticky top-24">
          <div className="relative border border-[hsl(var(--border))] bg-card p-4">
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[hsl(var(--blueprint-line)/0.3)] pointer-events-none" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[hsl(var(--blueprint-line)/0.3)] pointer-events-none" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[hsl(var(--blueprint-line)/0.3)] pointer-events-none" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[hsl(var(--blueprint-line)/0.3)] pointer-events-none" />

            <div className="border-b border-[hsl(var(--border))] pb-2 mb-3">
              <p className="text-blueprint-meta">ON THIS PAGE</p>
              <p className="text-blueprint-meta">SECTIONS</p>
            </div>

            <nav aria-label="Table of Contents">
              <TableOfContent toc={post.toc} />
            </nav>

            <div className="border-t border-[hsl(var(--border))] pt-2 mt-3 flex justify-between">
              <span className="text-blueprint-meta">TOP</span>
              <a href="#" className="text-blueprint-meta hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200">
                ↑ Back to top
              </a>
            </div>
          </div>
        </aside>

        {/* ── Mobile TOC ── */}
        <div className="lg:hidden">
          <TableOfContent toc={post.toc} />
        </div>
      </div>

    </div>
  )
}
