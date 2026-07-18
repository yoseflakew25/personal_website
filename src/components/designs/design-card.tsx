import { SiFigma } from 'react-icons/si'
import { DesignProject } from '~/constants/ui-designs'
import { cn } from '~/lib/utils'
import DesignImage from './design-image'

type DesignCardProps = {
  project: DesignProject
  priority?: boolean
}

const DesignCard = ({ project, priority = false }: DesignCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full border border-[hsl(var(--border))] bg-card overflow-hidden transition-all duration-200 hover:border-[hsl(var(--blueprint-line)/0.5)]"
    >
      <div className="aspect-video relative overflow-hidden">
        <DesignImage
          src={project.img}
          alt={`${project.title} design preview`}
          priority={priority}
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center gap-1.5 px-2 py-0.5 border border-[hsl(var(--border))] text-[10px] font-mono text-[hsl(var(--blueprint-line))]">
            <SiFigma className="size-3.5" />
            View in Figma
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-mono text-sm uppercase tracking-wider text-foreground group-hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 line-clamp-2">
          {project.title}
        </h3>

        <p className="font-mono text-xs text-muted-foreground/80 leading-relaxed line-clamp-3 mt-2 flex-1">
          {project.des}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className={cn(
                'px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border transition-all duration-300',
                tag === 'Figma'
                  ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  : 'text-muted-foreground border-[hsl(var(--border))]',
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default DesignCard
