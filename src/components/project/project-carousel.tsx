'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TProjectSerialized } from './_project-mock'
import { cn } from '~/lib/utils'
import { BlueprintMeasure } from '~/components/ui/blueprint-measure'

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

  // ── Keyboard navigation ──
  useEffect(() => {
    if (!emblaApi) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); emblaApi.scrollPrev(); setInteracted(n => n + 1) }
      else if (e.key === 'ArrowRight') { e.preventDefault(); emblaApi.scrollNext(); setInteracted(n => n + 1) }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [emblaApi])

  // ── Auto-play ──
  const [isHovered, setIsHovered] = useState(false)
  const [interacted, setInteracted] = useState(0)
  const handleManualInteraction = useCallback(() => setInteracted(n => n + 1), [])

  useEffect(() => {
    if (!emblaApi || isHovered || projects.length <= 1) return
    const interval = setInterval(() => emblaApi.scrollNext(), 5000)
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
      {/* Outer corner accents — larger for more presence */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[hsl(var(--blueprint-line)/0.6)] z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[hsl(var(--blueprint-line)/0.6)] z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[hsl(var(--blueprint-line)/0.6)] z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[hsl(var(--blueprint-line)/0.6)] z-20 pointer-events-none" />

      {/* ── Carousel Viewport ── */}
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
                  isActive ? 'opacity-100' : 'opacity-20',
                )}
              >
                {/* ── Spec Header ── */}
                <div className="border-b border-[hsl(var(--border))] px-4 sm:px-6 py-2 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <span className="text-blueprint-meta">PROJECT_SPEC · {id}</span>
                    <span className="h-3 w-px bg-[hsl(var(--border))]" aria-hidden="true" />
                    {/* Primary stack as a styled badge */}
                    <span className="font-mono text-[8px] xs:text-[9px] px-1.5 py-0.5 border border-[hsl(var(--blueprint-line)/0.3)] text-[hsl(var(--blueprint-line))] uppercase tracking-wider">
                      {project.stacks[0] ?? 'N/A'}
                    </span>
                    {/* Pulsing live status dot */}
                    <span className="hidden sm:flex items-center gap-1 font-mono text-[9px] text-emerald-500/80 uppercase tracking-wider">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      PRODUCTION
                    </span>
                  </div>
                  <span className="text-blueprint-meta tabular-nums">
                    {String(index + 1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}
                  </span>
                </div>

                {/* ── Main Content ── */}
                <div className="flex-1 flex flex-col md:flex-row gap-4 sm:gap-6 items-center px-4 sm:px-8 py-4 sm:py-6 min-h-0">

                  {/* Left: Text */}
                  <div className="flex-[0.95] space-y-3 sm:space-y-4 w-full">

                    {/* Large outlined watermark number */}
                    <span
                      className="font-mono font-bold text-4xl sm:text-6xl md:text-7xl leading-none select-none block"
                      style={{
                        WebkitTextStroke: '3px hsl(var(--blueprint-line))',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {id}
                    </span>

                    <div className="space-y-1">
                      <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-wider uppercase leading-tight">
                        {project.title}
                      </h2>
                      {/* Blueprint classification tag line */}
                      <div className="flex items-center gap-2">
                        <span className="h-px w-4 bg-[hsl(var(--blueprint-line)/0.4)]" />
                        <p className="text-[8px] xs:text-[9px] text-[hsl(var(--blueprint-line)/0.7)] font-mono uppercase tracking-[0.2em]">
                          Fullstack · Web Application
                        </p>
                      </div>
                    </div>

                    <div className="font-mono text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-xl">
                      <p className="line-clamp-4 md:line-clamp-none">{project.description}</p>
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5">
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
                        className="group/btn relative inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider uppercase bg-foreground text-background border border-foreground hover:bg-[hsl(var(--blueprint-line))] hover:border-[hsl(var(--blueprint-line))] hover:text-[hsl(var(--accent-foreground))] transition-all duration-200"
                      >
                        <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.5)] transition-colors duration-200" />
                        <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.5)] transition-colors duration-200" />
                        <FaExternalLinkAlt size={10} />
                        <span>Live Preview</span>
                      </a>
                      {project.isRepo && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative inline-flex items-center gap-2 px-3 py-1.5 border border-[hsl(var(--border))] font-mono text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground hover:text-[hsl(var(--blueprint-line))] hover:border-[hsl(var(--blueprint-line)/0.5)] hover:bg-[hsl(var(--blueprint-line)/0.04)] transition-all duration-200"
                        >
                          <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.5)] transition-colors duration-200" />
                          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.5)] transition-colors duration-200" />
                          <FaGithub size={13} />
                          <span>Source</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Image panel — with interactive dimensions on hover */}
                  <div className="flex-[1.1] w-full">
                    <BlueprintMeasure
                      widthLabel="IMG W"
                      heightLabel="IMG H"
                      specTag="VISUAL DIM"
                      offset={4}
                    >
                      <div className="relative group/img">
                      {/* Blueprint corner accents */}
                      <div className="absolute top-0 left-0 pointer-events-none z-10">
                        <div className="w-5 h-px bg-[hsl(var(--blueprint-line)/0.4)]" />
                        <div className="w-px h-5 bg-[hsl(var(--blueprint-line)/0.4)]" />
                      </div>
                      <div className="absolute top-0 right-0 pointer-events-none flex flex-col items-end z-10">
                        <div className="w-5 h-px bg-[hsl(var(--blueprint-line)/0.4)]" />
                        <div className="w-px h-5 bg-[hsl(var(--blueprint-line)/0.4)]" />
                      </div>
                      <div className="absolute bottom-0 left-0 pointer-events-none flex flex-col justify-end z-10">
                        <div className="w-px h-5 bg-[hsl(var(--blueprint-line)/0.4)]" />
                        <div className="w-5 h-px bg-[hsl(var(--blueprint-line)/0.4)]" />
                      </div>
                      <div className="absolute bottom-0 right-0 pointer-events-none flex flex-col items-end justify-end z-10">
                        <div className="w-px h-5 bg-[hsl(var(--blueprint-line)/0.4)]" />
                        <div className="w-5 h-px bg-[hsl(var(--blueprint-line)/0.4)]" />
                      </div>

                      {/* VISUAL REF label */}
                      <div className="absolute top-0 left-6 pointer-events-none z-10">
                        <span className="font-mono text-[9px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.5)] uppercase">
                          VISUAL · REF
                        </span>
                      </div>

                      {shouldLoadImage ? (
                        <a
                          href={project.deployedURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block cursor-pointer group/img-link"
                          aria-label={`View ${project.title} live preview`}
                        >
                          <Image
                            src={project.cover}
                            alt={project.title}
                            width={1200}
                            height={900}
                            quality={90}
                            placeholder="blur"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            priority={index === 0}
                            className="w-full h-auto object-contain transition-transform duration-700 group-hover/img-link:scale-[1.04]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 1000px"
                          />
                          {/* Click overlay hint */}
                          <div className="absolute inset-0 bg-[hsl(var(--blueprint-line)/0.04)] opacity-0 group-hover/img-link:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          <div className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2 py-1 bg-background/80 backdrop-blur-sm border border-[hsl(var(--blueprint-line)/0.3)] opacity-0 group-hover/img-link:opacity-100 translate-y-1 group-hover/img-link:translate-y-0 transition-all duration-300 pointer-events-none">
                            <FaExternalLinkAlt size={9} className="text-[hsl(var(--blueprint-line))]" />
                            <span className="font-mono text-[8px] tracking-[0.2em] text-[hsl(var(--blueprint-line))] uppercase">Open Live</span>
                          </div>
                        </a>
                      ) : null}
                    </div>

                    {/* Dimension annotation below image */}
                    <div className="flex items-center gap-0 mt-1">
                      <div className="h-px flex-1 bg-[hsl(var(--blueprint-line)/0.2)]" />
                      <span className="font-mono text-[9px] tracking-widest text-[hsl(var(--blueprint-line)/0.45)] uppercase px-2">
                        SCALE 1:1
                      </span>
                      <div className="h-px flex-1 bg-[hsl(var(--blueprint-line)/0.2)]" />
                    </div>
                    </BlueprintMeasure>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Footer bar: ruler ticks + nav buttons ── */}
      <div className="border-t border-[hsl(var(--border))] px-4 sm:px-6 py-0 flex items-stretch shrink-0">

        {/* Prev button */}
        <button
          onClick={() => { scrollPrev(); handleManualInteraction() }}
          className="group/btn flex items-center gap-1.5 px-3 py-2.5 border-r border-[hsl(var(--border))] font-mono text-[9px] tracking-wider uppercase text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 shrink-0"
          aria-label="Previous Project"
        >
          <ChevronLeft size={11} className="transition-transform duration-200 group-hover/btn:-translate-x-0.5" />
          PREV
        </button>

        {/* Tick-mark ruler progress */}
        <div className="flex-1 flex items-center justify-center gap-1 px-4">
          {/* Ruler baseline */}                  <div className="flex items-end gap-1">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => { emblaApi?.scrollTo(i); setInteracted(n => n + 1) }}
                aria-label={`Go to project ${i + 1}`}
                className="flex flex-col items-center gap-0.5 group/tick"
              >
                {/* Tick mark — taller when active */}
                <div className={cn(
                  'w-px transition-all duration-300',
                  selectedIndex === i
                    ? 'h-3 bg-[hsl(var(--blueprint-line))]'
                    : 'h-1.5 bg-[hsl(var(--border))] group-hover/tick:bg-[hsl(var(--blueprint-line)/0.4)]',
                )} />
                {/* Dot at base — warm glow on active */}
                <div className={cn(
                  'w-1 h-1 transition-all duration-300',
                  selectedIndex === i
                    ? 'bg-[hsl(var(--blueprint-line))] shadow-[0_0_4px_1px_hsl(var(--blueprint-line)/0.4),0_0_8px_2px_hsl(var(--blueprint-line)/0.2)]'
                    : 'bg-[hsl(var(--border))] group-hover/tick:bg-[hsl(var(--blueprint-line)/0.4)]',
                )} />
              </button>
            ))}
          </div>
          <span className="font-mono text-[9px] tracking-wider text-muted-foreground ml-2 tabular-nums">
            {String(selectedIndex + 1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}
          </span>
        </div>

        {/* Next button */}
        <button
          onClick={() => { scrollNext(); handleManualInteraction() }}
          className="group/btn flex items-center gap-1.5 px-3 py-2.5 border-l border-[hsl(var(--border))] font-mono text-[9px] tracking-wider uppercase text-muted-foreground hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 shrink-0"
          aria-label="Next Project"
        >
          NEXT
          <ChevronRight size={11} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </button>
      </div>
    </div>
  )
}

export default ProjectCarousel
