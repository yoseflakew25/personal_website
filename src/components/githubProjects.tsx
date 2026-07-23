'use client'

import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { ExternalLink } from 'lucide-react'
import SectionHeader from './ui/section-header'
import ScrollReveal from './ui/scroll-reveal'
import { StaggerList, StaggerItem } from './ui/scroll-reveal'
import { BlueprintMeasure } from './ui/blueprint-measure'
import { notableProjects } from '~/constants/github-projects'

const GithubProjects = ({
  title = 'Other Notable Projects',
  titleClassName = '',
}: {
  title?: string
  titleClassName?: string
}) => {
  return (
    <section id="github" className="space-y-8 bg-transparent scroll-mt-24">
      <ScrollReveal variant="blueprintReveal">
        <SectionHeader title={title} titleClassName={titleClassName} />
      </ScrollReveal>

      <StaggerList className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.06}>
        {notableProjects.map((project, index) => {
          const id = String(index + 1).padStart(2, '0')
          const hasLive = project.livePreview && project.livePreview !== '#'

          return (
            <StaggerItem key={index}>
              <BlueprintMeasure
                widthLabel="PROJ W"
                heightLabel="PROJ H"
                specTag="GITHUB"
                offset={6}
                className="h-full"
              >
              <div className="group relative flex flex-col h-full border border-[hsl(var(--border))] bg-card transition-all duration-300 hover:border-[hsl(var(--blueprint-line)/0.4)] hover:shadow-[0_0_0_1px_hsl(var(--blueprint-line)/0.06)]">

                {/* Blueprint corner accents */}
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[hsl(var(--blueprint-line)/0.25)] z-10 pointer-events-none transition-colors duration-300 group-hover:border-[hsl(var(--blueprint-line)/0.65)]" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[hsl(var(--blueprint-line)/0.25)] z-10 pointer-events-none transition-colors duration-300 group-hover:border-[hsl(var(--blueprint-line)/0.65)]" />
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[hsl(var(--blueprint-line)/0.25)] z-10 pointer-events-none transition-colors duration-300 group-hover:border-[hsl(var(--blueprint-line)/0.65)]" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[hsl(var(--blueprint-line)/0.25)] z-10 pointer-events-none transition-colors duration-300 group-hover:border-[hsl(var(--blueprint-line)/0.65)]" />

                {/* Spec-sheet header bar */}
                <div className="border-b border-[hsl(var(--border))] px-3 py-1.5 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.7)] uppercase">
                      PROJ · {id}
                    </span>
                    <span className="h-px w-3 bg-[hsl(var(--blueprint-line)/0.25)]" />
                    <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                      OPEN SOURCE
                    </span>
                  </div>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200"
                  >
                    <FiGithub size={14} />
                  </a>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-4">
                  {/* Title row with watermark number */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider text-foreground group-hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 leading-snug">
                      {project.title}
                    </h3>
                    {/* Watermark index */}
                    <span
                      className="font-mono font-bold text-2xl leading-none select-none shrink-0 mt-0.5"
                      style={{
                        WebkitTextStroke: '1px hsl(var(--blueprint-line) / 0.15)',
                        color: 'transparent',
                      }}
                    >
                      {id}
                    </span>
                  </div>

                  <p className="font-mono text-[10px] xs:text-[11px] text-muted-foreground/75 leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                    {project.stack.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 border border-[hsl(var(--border))] text-[9px] font-mono text-muted-foreground uppercase tracking-wider transition-colors duration-200 group-hover:border-[hsl(var(--blueprint-line)/0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono text-muted-foreground uppercase tracking-wider">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer: action links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-dashed border-[hsl(var(--border)/0.6)]">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 border border-[hsl(var(--border))] px-2 py-1 hover:border-[hsl(var(--blueprint-line)/0.4)]"
                    >
                      <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-transparent group-hover/link:border-[hsl(var(--blueprint-line)/0.5)] transition-colors duration-200" />
                      <FiGithub size={11} />
                      Source
                    </a>

                    {hasLive && (
                      <a
                        href={project.livePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link relative inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 border border-[hsl(var(--border))] px-2 py-1 hover:border-[hsl(var(--blueprint-line)/0.4)]"
                      >
                        <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-transparent group-hover/link:border-[hsl(var(--blueprint-line)/0.5)] transition-colors duration-200" />
                        <ExternalLink size={10} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
              </BlueprintMeasure>
            </StaggerItem>
          )
        })}
      </StaggerList>
    </section>
  )
}

export default GithubProjects
