import { SiFigma } from 'react-icons/si'
import { ArrowUpRight } from 'lucide-react'
import { DesignProject } from '~/constants/ui-designs'
import { cn } from '~/lib/utils'
import DesignImage from './design-image'
import { BlueprintMeasure } from '~/components/ui/blueprint-measure'

type DesignCardProps = {
  project: DesignProject
  priority?: boolean
}

const DesignCard = ({ project, priority = false }: DesignCardProps) => {
  const id = String(project.id).padStart(2, '0')

  return (
    <BlueprintMeasure
      widthLabel="CARD W"
      heightLabel="CARD H"
      specTag="UI DIM"
      offset={6}
      className="h-full"
    >
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full border border-[hsl(var(--border))] bg-card overflow-hidden transition-all duration-300 hover:border-[hsl(var(--blueprint-line)/0.45)] hover:shadow-[0_0_0_1px_hsl(var(--blueprint-line)/0.08)]"
    >

      {/* Spec-sheet header bar */}
      <div className="border-b border-[hsl(var(--border))] px-3 py-1.5 flex items-center justify-between shrink-0">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.7)] uppercase">
          DESIGN · {id}
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
          UI/UX
        </span>
      </div>

      {/* Image */}
      <div className="aspect-video relative overflow-hidden">
        <DesignImage
          src={project.img}
          alt={`${project.title} design preview`}
          priority={priority}
          className="transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Scan-line overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)',
          }}
        />

        {/* TL dimension bracket on image */}
        <div className="absolute top-2.5 left-2.5 pointer-events-none">
          <div className="w-4 h-px bg-[hsl(var(--blueprint-line)/0.45)]" />
          <div className="w-px h-4 bg-[hsl(var(--blueprint-line)/0.45)]" />
        </div>
        {/* BR dimension bracket on image */}
        <div className="absolute bottom-2.5 right-2.5 pointer-events-none flex flex-col items-end justify-end">
          <div className="w-px h-4 bg-[hsl(var(--blueprint-line)/0.45)]" />
          <div className="w-4 h-px bg-[hsl(var(--blueprint-line)/0.45)]" />
        </div>

        {/* Figma badge — bottom left on hover */}
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <span className="flex items-center gap-1.5 px-2 py-0.5 bg-background/90 backdrop-blur-sm border border-[hsl(var(--blueprint-line)/0.35)] text-[9px] font-mono text-[hsl(var(--blueprint-line))] uppercase tracking-wider">
            <SiFigma className="size-3" />
            Open in Figma
          </span>
        </div>

        {/* Arrow icon — top right */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
          <span className="flex items-center justify-center w-6 h-6 border border-[hsl(var(--blueprint-line)/0.4)] bg-background/80 text-[hsl(var(--blueprint-line))]">
            <ArrowUpRight size={12} />
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-mono text-xs uppercase tracking-wider text-foreground group-hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 line-clamp-2 leading-snug">
          {project.title}
        </h3>

        <p className="font-mono text-[10px] text-muted-foreground/75 leading-relaxed line-clamp-3 mt-2 flex-1">
          {project.des}
        </p>

        {/* Tags — sharp corners, no rounded-full */}
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-dashed border-[hsl(var(--border)/0.6)]">
          {project.tags.map(tag => (
            <span
              key={tag}
              className={cn(
                'px-2 py-0.5 text-[9px] font-mono font-medium border uppercase tracking-wider transition-all duration-200',
                tag === 'Figma'
                  ? 'bg-rose-500/8 text-rose-400 border-rose-500/20 group-hover:border-rose-500/40'
                  : 'text-muted-foreground border-[hsl(var(--border))] group-hover:border-[hsl(var(--blueprint-line)/0.25)]',
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
    </BlueprintMeasure>
  )
}

export default DesignCard
