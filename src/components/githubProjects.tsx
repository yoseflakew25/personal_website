'use client'

import React from 'react'
import { FiGithub } from 'react-icons/fi'
import SectionHeader from './ui/section-header'
import ScrollReveal from './ui/scroll-reveal'
import { StaggerList, StaggerItem } from './ui/scroll-reveal'
import { notableProjects } from '~/constants/github-projects'

const GithubProjects = ({ title = "Other Notable Projects" }: { title?: string }) => {
  return (
    <section id="github" className="my-12 space-y-8 bg-transparent scroll-mt-24">
      <ScrollReveal variant="fadeUp">
        <SectionHeader
          title={title}
        />
      </ScrollReveal>


      <StaggerList className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
        {notableProjects.map((project, index) => (
          <StaggerItem key={index}>
            <div className="gradient-border-card group flex flex-col justify-between p-5 rounded-xl border border-white/5 bg-card/40 backdrop-blur-sm hover:bg-card/70 transition-all duration-400 hover:border-cyber-cyan/20 hover:shadow-neon-sm">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-cyber-cyan/80 font-orbitron font-medium text-sm tracking-wide group-hover:text-cyber-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300"
                    >
                      <FiGithub className="size-[18px]" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground/80 text-[13px] leading-relaxed font-sans line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-sm bg-cyber-cyan/5 text-cyber-cyan neon-text-cyan text-[10px] font-jetbrains font-medium border border-cyber-cyan/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between pt-3 border-t border-white/5">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[11px] font-jetbrains font-medium uppercase tracking-wider text-muted-foreground/60 hover:text-cyber-cyan transition-colors duration-300"
                >
                  <span>Source Code</span>
                  <span className="ml-1">→</span>
                </a>

                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[11px] font-jetbrains font-medium uppercase tracking-wider text-muted-foreground/60 hover:text-cyber-cyan transition-colors duration-300"
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
