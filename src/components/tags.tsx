import {slug} from 'github-slugger'
import Link from 'next/link'

const Tags = ({tags}: {tags: string[]}) => {
  return (
    <ul className="flex flex-wrap gap-1.5" role="list">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </ul>
  )
}

export default Tags

export const Tag = ({tag, count}: {tag: string; count?: number}) => {
  return (
    <li key={tag} role="listitem" className="inline-block">
      <Link
        className="inline-flex items-center gap-1 font-mono text-[10px] tracking-wider uppercase border border-[hsl(var(--border))] px-2 py-0.5 text-muted-foreground hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))] transition-all duration-200"
        href={`/tags/${slug(tag)}`}
        aria-label={`Explore tag ${tag}`}
      >
        <span>#{tag}</span>
        {count !== undefined && <span className="text-[9px] opacity-60">{count}</span>}
      </Link>
    </li>
  )
}
