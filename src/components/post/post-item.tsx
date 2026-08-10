import {Post} from '#site/content'
import React from 'react'

import Link from 'next/link'
import {Timer, ArrowUpRight} from 'lucide-react'
import {formatDate} from '~/lib/utils'
import Tags from '../tags'
import {CornerBrackets} from '~/components/ui/corner-brackets'

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
        <CornerBrackets size="0.625rem" colorClass="border-[hsl(var(--blueprint-line)/0.3)]" hoverColorClass="group-hover:border-[hsl(var(--blueprint-line)/0.6)]" transitionClass="transition-colors duration-300" />

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
            <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-muted-foreground transition-colors duration-300 group-hover:text-[hsl(var(--blueprint-line))]" />
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
