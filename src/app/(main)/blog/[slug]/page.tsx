import { notFound } from 'next/navigation'
import { posts } from '#site/content'
import { Calendar, Timer, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { MDXContent } from '~/components/mdx'
import { TableOfContent, PostComments, JsonSchemaLD } from '~/components/post'
import Tags from '~/components/tags'
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
    <div className="!mt-8 relative py-12">
      <JsonSchemaLD post={post} />

      {/* ── Back link with blueprint bracket hover ── */}
      <Link
        href="/blog"
        className="group/back inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 mb-6 border border-transparent hover:border-[hsl(var(--blueprint-line)/0.3)] px-2 py-1"
      >
        <span className="text-[hsl(var(--blueprint-line)/0.5)] group-hover/back:text-[hsl(var(--blueprint-line))] transition-colors duration-200">◂</span>
        Back to all posts
        <span className="text-[hsl(var(--blueprint-line)/0.3)] group-hover/back:text-[hsl(var(--blueprint-line)/0.6)] transition-colors duration-200">▸</span>
      </Link>

      {/* ── Post header card ── */}
      <div className="relative border border-[hsl(var(--border))] bg-card mb-8">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.5)]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.5)]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.5)]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.5)]" />

        {/* Spec header */}
        <div className="border-b border-[hsl(var(--border))] px-5 py-2">
          <p className="text-blueprint-meta">BLOG POST</p>
          <p className="text-blueprint-meta">ARTICLE · {post.slugAsParams.toUpperCase()}</p>
        </div>

        {/* Title & metadata */}
        <div className="p-5 space-y-4">
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground uppercase leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-[hsl(var(--blueprint-line))] border border-[hsl(var(--blueprint-line)/0.3)] px-2 py-0.5">
              <Calendar size={10} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
              <Timer size={10} />
              {post.metadata.readingTime} min read
            </span>
            {post.tags && post.tags.length > 0 && (
              <span className="font-mono text-[10px] text-muted-foreground">
                Tags: {post.tags.join(', ')}
              </span>
            )}
          </div>

          <p className="font-mono text-xs text-muted-foreground/80 leading-relaxed max-w-2xl">
            {post.description}
          </p>
        </div>

        {/* Stats title block */}
        <div className="border-t border-dashed border-[hsl(var(--border)/0.5)] mx-5 py-2 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1">
          <div>
            <span className="text-blueprint-meta text-[8px]">SECTION</span>
            <p className="font-mono text-[10px] text-foreground">Blog Article</p>
          </div>
          <div>
            <span className="text-blueprint-meta text-[8px]">STATUS</span>
            <p className="font-mono text-[10px] text-foreground">Published</p>
          </div>
          <div>
            <span className="text-blueprint-meta text-[8px]">REVISION</span>
            <p className="font-mono text-[10px] text-foreground">A</p>
          </div>
          <div>
            <span className="text-blueprint-meta text-[8px]">READ TIME</span>
            <p className="font-mono text-[10px] text-foreground">{post.metadata.readingTime} min</p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[hsl(var(--border))] px-5 py-1.5 flex justify-between">
          <span className="text-blueprint-meta">SHEET 1/1</span>
          <span className="text-blueprint-meta">NOT TO SCALE</span>
        </div>
      </div>

      {/* ── Content + TOC layout ── */}
      <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
        {/* Main content */}
        <article className="relative border border-[hsl(var(--border))] bg-card p-5 md:p-8">
          {/* Corner accents on content card */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.3)] pointer-events-none" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.3)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.3)] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.3)] pointer-events-none" />

          {/* Content header */}
          <div className="border-b border-dashed border-[hsl(var(--border)/0.5)] pb-2 mb-6 -mx-5 md:-mx-8 px-5 md:px-8">
            <span className="text-blueprint-meta text-[8px] tracking-[0.2em]">ARTICLE BODY</span>
          </div>

          <div className="mdx-content max-w-none">
            <MDXContent code={post.body} />
          </div>

          {/* End of article mark */}
          <div className="mt-8 pt-4 border-t border-dashed border-[hsl(var(--border)/0.5)] flex justify-center">
            <span className="text-blueprint-note text-[8px] tracking-[0.3em]">— END OF ARTICLE —</span>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="relative mt-8 pt-6 border-t border-[hsl(var(--border))]">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[hsl(var(--blueprint-line)/0.3)]" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[hsl(var(--blueprint-line)/0.3)]" />
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.6)] uppercase shrink-0">
                  TAGS
                </span>
                <span className="flex-1 h-px bg-[hsl(var(--border))]" aria-hidden="true" />
              </div>
              <Tags tags={post.tags} />
            </div>
          )}

          {/* Comments */}
          <div className="relative mt-8 pt-6 border-t border-[hsl(var(--border))]">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[hsl(var(--blueprint-line)/0.3)]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[hsl(var(--blueprint-line)/0.3)]" />
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.6)] uppercase shrink-0">
                DISCUSSION
              </span>
              <span className="flex-1 h-px bg-[hsl(var(--border))]" aria-hidden="true" />
            </div>
            <PostComments />
          </div>
        </article>

        {/* ── Sidebar — TOC ── */}
        <aside className="hidden lg:block sticky top-4">
          <div className="relative border border-[hsl(var(--border))] bg-card p-4">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[hsl(var(--blueprint-line)/0.4)]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[hsl(var(--blueprint-line)/0.4)]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[hsl(var(--blueprint-line)/0.4)]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[hsl(var(--blueprint-line)/0.4)]" />

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
