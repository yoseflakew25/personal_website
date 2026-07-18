'use client'

import React from 'react'
import { FiGithub } from 'react-icons/fi'
import SectionHeader from './ui/section-header'
import ScrollReveal from './ui/scroll-reveal'
import { StaggerList, StaggerItem } from './ui/scroll-reveal'
import { notableProjects } from '~/constants/github-projects'

const GithubProjects = ({ title = "Other Notable Projects", titleClassName = "" }: { title?: string, titleClassName?: string }) => {
  return (
    <section id="github" className="space-y-8 bg-transparent scroll-mt-24">
      <ScrollReveal variant="fadeUp">
        <SectionHeader title={title} titleClassName={titleClassName} sectionNumber="07" />
      </ScrollReveal>

      <StaggerList className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
        {notableProjects.map((project, index) => (
          <StaggerItem key={index}>
            <div className="group flex flex-col justify-between p-4 border border-[hsl(var(--border))] bg-card transition-all duration-200 hover:border-[hsl(var(--blueprint-line)/0.5)]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-foreground group-hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200"
                    >
                      <FiGithub className="size-[18px]" />
                    </a>
                  </div>
                </div>
                <p className="font-mono text-xs text-muted-foreground/80 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 border border-[hsl(var(--border))] text-[10px] font-mono text-muted-foreground uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-[hsl(var(--border)/0.4)]">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[10px] font-mono uppercase tracking-wider text-muted-foreground/60 hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200"
                >
                  <span>Source Code</span>
                  <span className="ml-1">→</span>
                </a>

                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[10px] font-mono uppercase tracking-wider text-muted-foreground/60 hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200"
                >
                  <span>Live Demo</span>
                  <span className="ml-1">↗</span>
                </a>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  )
}

export default GithubProjects
