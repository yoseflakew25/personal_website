import Image from 'next/image'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { TProjectSerialized } from './_project-mock'
import { CornerBrackets } from '~/components/ui/corner-brackets'

type ProjectItemProps = TProjectSerialized & {
  index: number
  total: number
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  deployedURL,
  cover,
  stacks,
  isRepo,
  repoUrl,
  index,
  total,
}) => {
  const id = String(index + 1).padStart(2, '0')

  return (
    <div className="group relative border border-[hsl(var(--border))] bg-card transition-all duration-300 hover:border-[hsl(var(--blueprint-line)/0.5)] hover:shadow-[0_0_0_1px_hsl(var(--blueprint-line)/0.08)]">
      {/* Corner accents */}
      <CornerBrackets colorClass="border-[hsl(var(--blueprint-line)/0.4)]" hoverColorClass="group-hover:border-[hsl(var(--blueprint-line)/0.7)]" transitionClass="transition-colors duration-300" />

      {/* Spec header */}
      <div className="border-b border-[hsl(var(--border))] px-3 py-1.5 flex items-center justify-between">
        <p className="text-blueprint-meta">PROJECT SPEC · {id}</p>
        <p className="text-blueprint-meta">{stacks[0]?.toUpperCase() ?? 'N/A'}</p>
      </div>

      {/* Image */}
      <div className="aspect-video relative overflow-hidden border-b border-[hsl(var(--border))]">
        <Image
          alt={`${title} project cover`}
          loading="lazy"
          placeholder="blur"
          src={cover}
          className="size-full object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Blueprint centerline through the figure */}
        <span aria-hidden="true" className="blueprint-centerline" />
        <span aria-hidden="true" className="blueprint-centerline-dot" />
        {/* Scanline sweep — drafting-table light pass on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1/3 -translate-y-full bg-gradient-to-b from-transparent via-[hsl(var(--blueprint-line)/0.1)] to-[hsl(var(--blueprint-line)/0.4)] opacity-0 group-hover:opacity-100 group-hover:translate-y-[350%] transition-all duration-[1100ms] ease-in-out pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />

        {/* Number overlay */}
        <span
          className="absolute bottom-2 right-2 font-mono font-bold text-4xl md:text-5xl leading-none select-none pointer-events-none"
          style={{
            WebkitTextStroke: '1.5px hsl(var(--foreground) / 0.12)',
            color: 'transparent',
          }}
        >
          {id}
        </span>
      </div>

      {/* Figure caption — blueprint figure annotation */}
      <div className="px-3 py-1 border-b border-[hsl(var(--border)/0.5)] flex items-center justify-between">
        <span className="text-blueprint-meta">FIG. {id}</span>
        <span className="text-blueprint-meta max-w-[60%] truncate">{title}</span>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 space-y-3">
        <div>
          <h3 className="font-mono text-sm uppercase tracking-wider text-foreground group-hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-[9px] xs:text-[10px] text-[hsl(var(--blueprint-line)/0.6)] font-mono uppercase tracking-widest mt-0.5">
            Fullstack Project
          </p>
        </div>

        <p className="text-muted-foreground text-[11px] xs:text-xs font-mono leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5">
          {stacks.map(stack => (
            <span
              key={stack}
              className="px-2 py-0.5 border border-[hsl(var(--border))] text-[9px] font-mono text-muted-foreground uppercase tracking-wider transition-colors duration-200 hover:border-[hsl(var(--blueprint-line)/0.4)] hover:text-[hsl(var(--blueprint-line))]"
            >
              {stack}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-1 border-t border-[hsl(var(--border)/0.4)]">
          <a
            href={deployedURL}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 uppercase"
          >
            <FaExternalLinkAlt size={10} />
            <span>Live Preview</span>
            <span className="text-[9px] text-muted-foreground/40">↗</span>
          </a>

          {isRepo && (
            <a
              href={repoUrl as string}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 uppercase"
            >
              <FaGithub size={10} />
              <span>Source</span>
              <span className="text-[9px] text-muted-foreground/40">→</span>
            </a>
          )}
        </div>
      </div>

      {/* Spec footer */}
      <div className="border-t border-dashed border-[hsl(var(--border)/0.6)] px-3 py-1 flex items-center justify-between">
        <span className="text-blueprint-note text-[9px]">REV A</span>
        <span className="text-blueprint-note text-[9px]">SHEET {id}/{String(total).padStart(2, '0')}</span>
        <span className="text-blueprint-note text-[9px]">NOT TO SCALE</span>
      </div>
    </div>
  )
}

export default ProjectItem
