import {Post} from '#site/content'
import React from 'react'

import Link from 'next/link'
import {Timer, ArrowUpRight} from 'lucide-react'
import {formatDate} from '~/lib/utils'
import Tags from '../tags'
import {cn} from '~/lib/utils'

interface PostItemProps extends Post {
  index?: number
}

const PostItem: React.FC<PostItemProps> = ({
  date,
  title,
  description,
  metadata,
  slugAsParams,
  tags,
  index = 0,
}) => {
  return (
    <li role="listitem">
      <Link
        href={`/blog/${slugAsParams}`}
        className="group block relative border border-[hsl(var(--border))] bg-card transition-all duration-200 hover:border-[hsl(var(--blueprint-line)/0.5)] hover:shadow-[0_0_0_1px_hsl(var(--blueprint-line)/0.08)]"
      >
        {/* Visible corner brackets (always shown, brighter on hover) */}
        <span className={cn(
          'absolute top-0 left-0 w-2.5 h-2.5 border-t border-l z-10 transition-colors duration-300',
          'border-[hsl(var(--blueprint-line)/0.3)] group-hover:border-[hsl(var(--blueprint-line)/0.6)]',
        )} />
        <span className={cn(
          'absolute top-0 right-0 w-2.5 h-2.5 border-t border-r z-10 transition-colors duration-300',
          'border-[hsl(var(--blueprint-line)/0.3)] group-hover:border-[hsl(var(--blueprint-line)/0.6)]',
        )} />
        <span className={cn(
          'absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l z-10 transition-colors duration-300',
          'border-[hsl(var(--blueprint-line)/0.3)] group-hover:border-[hsl(var(--blueprint-line)/0.6)]',
        )} />
        <span className={cn(
          'absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r z-10 transition-colors duration-300',
          'border-[hsl(var(--blueprint-line)/0.3)] group-hover:border-[hsl(var(--blueprint-line)/0.6)]',
        )} />

        {/* ── Spec header ── */}
        <div className="flex items-center justify-between border-b border-[hsl(var(--border))] px-4 py-1.5">
          <div className="flex items-center gap-2">
            <span className="text-blueprint-meta text-[9px]">
              POST · {String(index + 1).padStart(2, '0')}
            </span>
            <span className="h-2.5 w-px bg-[hsl(var(--border))]" aria-hidden="true" />
            <span className="font-mono text-[9px] tracking-wider text-muted-foreground uppercase">
              {formatDate(date)}
            </span>
          </div>
          <span className="flex items-center gap-1 font-mono text-[9px] text-muted-foreground">
            <Timer size={9} />
            {metadata.readingTime} min
          </span>
        </div>

        {/* ── Content ── */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-mono text-sm uppercase tracking-wider text-foreground group-hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 flex-1 leading-snug font-semibold">
              {title}
            </h3>
            <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-muted-foreground transition-all duration-300 group-hover:text-[hsl(var(--blueprint-line))] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </div>

          <p className="font-mono text-xs text-muted-foreground/80 leading-relaxed line-clamp-2 mt-2">
            {description}
          </p>

          <div className="mt-3 pt-3 border-t border-dashed border-[hsl(var(--border)/0.4)]">
            <Tags tags={tags} asLink={false} />
          </div>
        </div>

        {/* ── Spec footer ── */}
        <div className="border-t border-dashed border-[hsl(var(--border)/0.5)] px-4 py-1 flex items-center justify-between">
          <span className="text-blueprint-note text-[9px]">ARTICLE</span>
          <span className="text-blueprint-note text-[9px]">{metadata.readingTime} MIN READ</span>
        </div>
      </Link>
    </li>
  )
}

export default PostItem
