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
      className="group flex flex-col h-full rounded-xl border border-border/40 bg-transparent overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(var(--primary)/0.08)]"
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
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 text-[11px] font-mono text-primary">
            <SiFigma className="size-3.5" />
            View in Figma
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-foreground font-sans font-semibold text-lg tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-muted-foreground/80 text-[13px] leading-relaxed font-sans line-clamp-3 mt-2 flex-1">
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
                  : 'bg-primary/5 text-primary border-primary/20',
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
