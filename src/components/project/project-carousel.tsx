'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { TProjectSerialized } from './_project-mock'
import { cn } from '~/lib/utils'

interface ProjectCarouselProps {
  projects: readonly TProjectSerialized[]
}

const isNearSelected = (index: number, selected: number, total: number) => {
  const direct = Math.abs(index - selected)
  const wrapped = Math.min(
    Math.abs(index - selected + total),
    Math.abs(index - selected - total),
  )
  return Math.min(direct, wrapped) <= 1
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  // ── Keyboard navigation (also resets auto-play timer) ──
  useEffect(() => {
    if (!emblaApi) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        emblaApi.scrollPrev()
        setInteracted(n => n + 1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        emblaApi.scrollNext()
        setInteracted(n => n + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [emblaApi])

  // ── Auto-play (pauses on hover, resets on manual interaction) ──
  const [isHovered, setIsHovered] = useState(false)
  const [interacted, setInteracted] = useState(0)

  const handleManualInteraction = useCallback(() => {
    setInteracted(n => n + 1)
  }, [])

  useEffect(() => {
    if (!emblaApi || isHovered || projects.length <= 1) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [emblaApi, isHovered, interacted, projects.length])

  return (
    <div
      className="relative h-full flex flex-col border border-[hsl(var(--border))] bg-card"
      tabIndex={0}
      role="region"
      aria-label="Project carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.5)] z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.5)] z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.5)] z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.5)] z-20 pointer-events-none" />

      {/* ── Carousel Viewport (flex-1 to fill remaining space) ── */}
      <div className="flex-1 overflow-hidden min-h-0" ref={emblaRef}>
        <div className="flex h-full">
          {projects.map((project, index) => {
            const isActive = selectedIndex === index
            const shouldLoadImage = isNearSelected(index, selectedIndex, projects.length)
            const id = String(index + 1).padStart(2, '0')

            return (
              <div
                key={project.id}
                className={cn(
                  'flex-[0_0_100%] min-w-0 h-full relative flex flex-col transition-opacity duration-500',
                  isActive ? 'opacity-100' : 'opacity-30',
                )}
              >
                {/* ── Spec Header ── */}
                <div className="border-b border-[hsl(var(--border))] px-4 sm:px-6 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-blueprint-meta">PROJECT SPEC · {id}</span>
                    <span className="h-3 w-px bg-[hsl(var(--border))]" aria-hidden="true" />
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      {project.stacks[0] ?? 'N/A'}
                    </span>
                  </div>
                  <span className="text-blueprint-meta">{index + 1}/{projects.length}</span>
                </div>

                {/* ── Main Content (two columns) ── */}
                <div className="flex-1 flex flex-col md:flex-row gap-4 sm:gap-6 items-center px-4 sm:px-8 py-4 sm:py-6">
                  {/* Left: Text */}
                  <div className="flex-[0.95] space-y-3 sm:space-y-4 w-full">
                    {/* Large outlined number */}
                    <span
                      className="font-mono font-bold text-4xl sm:text-6xl md:text-7xl leading-none select-none block"
                      style={{
                        WebkitTextStroke: '2px hsl(var(--foreground) / 0.12)',
                        color: 'transparent',
                      }}
                    >
                      {id}
                    </span>

                    <div className="space-y-1">
                      <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-wider uppercase">
                        {project.title}
                      </h2>
                      <p className="text-[10px] sm:text-xs text-[hsl(var(--blueprint-line)/0.65)] font-mono uppercase tracking-widest">
                        Fullstack Project
                      </p>
                    </div>

                    <div className="font-mono text-xs sm:text-sm text-foreground/75 font-medium leading-relaxed max-w-xl">
                      <p className="line-clamp-4 md:line-clamp-none">{project.description}</p>
                    </div>

                    {/* Blueprint metadata grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-0.5 py-1.5 border-t border-dashed border-[hsl(var(--border)/0.5)]">
                      <div>
                        <span className="text-blueprint-meta text-[8px]">CLASSIFICATION</span>
                        <p className="font-mono text-[10px] sm:text-xs text-foreground">Fullstack Web App</p>
                      </div>
                      <div>
                        <span className="text-blueprint-meta text-[8px]">STATUS</span>
                        <p className="font-mono text-[10px] sm:text-xs text-foreground">Production</p>
                      </div>
                      <div>
                        <span className="text-blueprint-meta text-[8px]">REVISION</span>
                        <p className="font-mono text-[10px] sm:text-xs text-foreground">A</p>
                      </div>
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.stacks.map(stack => (
                        <span
                          key={stack}
                          className="px-2 py-0.5 border border-[hsl(var(--border))] text-[9px] sm:text-[10px] font-mono text-muted-foreground uppercase tracking-wider transition-colors duration-200 hover:border-[hsl(var(--blueprint-line)/0.4)] hover:text-[hsl(var(--blueprint-line))]"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex gap-3 pt-1">
                      <a
                        href={project.deployedURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center gap-2 px-3 py-1.5 border border-[hsl(var(--border))] font-mono text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground hover:text-[hsl(var(--blueprint-line))] hover:border-[hsl(var(--blueprint-line)/0.5)] transition-all duration-200"
                      >
                        <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-200" />
                        <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-200" />
                        <FaExternalLinkAlt size={11} />
                        <span>Live Preview</span>
                      </a>
                      {project.isRepo && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative inline-flex items-center gap-2 px-3 py-1.5 border border-[hsl(var(--border))] font-mono text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground hover:text-[hsl(var(--blueprint-line))] hover:border-[hsl(var(--blueprint-line)/0.5)] transition-all duration-200"
                        >
                          <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-200" />
                          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-200" />
                          <FaGithub size={14} />
                          <span>Source</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="flex-[1.1] w-full">
                    <div className="relative aspect-video overflow-hidden border border-[hsl(var(--border))] group/img">
                      {shouldLoadImage ? (
                        <Image
                          src={project.cover}
                          alt={project.title}
                          fill
                          loading={index === 0 ? 'eager' : 'lazy'}
                          priority={index === 0}
                          className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 1000px"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent dark:from-black/60 opacity-60 dark:opacity-70" />

                      {/* Image overlay crosshair */}
                      <div className="absolute top-2 left-2 size-4 pointer-events-none">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-[hsl(var(--blueprint-line)/0.15)]" />
                        <div className="absolute left-1/2 top-0 h-full w-px bg-[hsl(var(--blueprint-line)/0.15)]" />
                      </div>

                      {/* Number badge on image */}
                      <span
                        className="absolute bottom-2 right-2 font-mono font-bold text-3xl sm:text-4xl md:text-5xl leading-none select-none pointer-events-none"
                        style={{
                          WebkitTextStroke: '1.5px hsl(var(--foreground) / 0.15)',
                          color: 'transparent',
                        }}
                      >
                        {id}
                      </span>
                    </div>
                  </div>
                </div>


              </div>
            )
          })}
        </div>
      </div>

      {/* ── Navigation Buttons (repositioned) ── */}
      <div className="absolute top-2 right-4 sm:right-6 flex gap-2 z-20">
        <button
          onClick={() => { scrollPrev(); handleManualInteraction(); }}
          className="group/btn relative size-8 border border-[hsl(var(--border))] grid place-content-center hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))] transition-all duration-200 bg-card/80 backdrop-blur-sm"
          aria-label="Previous Project"
        >
          <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-200" />
          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-200" />
          <FaChevronLeft size={12} />
        </button>
        <button
          onClick={() => { scrollNext(); handleManualInteraction(); }}
          className="group/btn relative size-8 border border-[hsl(var(--border))] grid place-content-center hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))] transition-all duration-200 bg-card/80 backdrop-blur-sm"
          aria-label="Next Project"
        >
          <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-200" />
          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-200" />
          <FaChevronRight size={12} />
        </button>
      </div>

      {/* ── Progress Indicator (dimension tick marks) ── */}
      <div className="border-t border-[hsl(var(--border))] px-4 sm:px-6 py-2 flex items-center justify-center gap-2 shrink-0">
        {projects.map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-0.5 transition-all duration-300',
              selectedIndex === i
                ? 'w-8 bg-foreground'
                : 'w-4 bg-[hsl(var(--border))] hover:bg-[hsl(var(--blueprint-line)/0.3)] cursor-pointer',
            )}
            onClick={() => { emblaApi?.scrollTo(i); setInteracted(n => n + 1); }}
          />
        ))}
        <span className="font-mono text-[8px] tracking-wider text-muted-foreground ml-2 uppercase">
          {selectedIndex + 1}/{projects.length}
        </span>
      </div>
    </div>
  )
}

export default ProjectCarousel
