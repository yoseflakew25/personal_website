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

  return (
    <div className="relative group/carousel">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => {
            const isActive = selectedIndex === index
            const shouldLoadImage = isNearSelected(index, selectedIndex, projects.length)

            return (
              <div
                key={project.id}
                className="flex-[0_0_100%] min-w-0 min-h-[550px] flex flex-col md:flex-row gap-10 items-center px-4 pt-0 pb-4"
              >
                <div
                  className={cn(
                    'flex-[0.9] space-y-6 transition-opacity duration-300',
                    isActive ? 'opacity-100' : 'opacity-40',
                  )}
                >
                  <div className="space-y-2">
                    <span
                      className="block font-sans font-bold text-6xl md:text-8xl leading-none select-none"
                      style={{
                        WebkitTextStroke: '2px hsl(var(--foreground) / 0.15)',
                        color: 'transparent',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h2 className="text-4xl md:text-5xl font-pixel font-bold text-foreground tracking-wider lowercase">
                      {project.title}
                    </h2>

                    <p className="text-primary/70 font-mono font-medium text-sm uppercase tracking-widest">
                      Fullstack Project
                    </p>
                  </div>

                  <div className="space-y-4 max-w-xl">
                    <div className="flex gap-3 text-muted-foreground/90 leading-relaxed font-sans text-base">
                      <p className="line-clamp-4 md:line-clamp-none">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-primary font-mono font-medium text-sm uppercase tracking-wider">
                      {project.stacks.slice(0, 4).map(stack => (
                        <span key={stack}>{stack}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.deployedURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-12 grid place-content-center border border-border/60 rounded-lg hover:border-primary hover:text-primary hover:shadow-[0_0_12px_hsl(var(--primary)/0.25)] hover:bg-primary/[0.04] transition-all duration-300 bg-transparent"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    {project.isRepo && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-12 grid place-content-center border border-border/60 rounded-lg hover:border-primary hover:text-primary hover:shadow-[0_0_12px_hsl(var(--primary)/0.25)] hover:bg-primary/[0.04] transition-all duration-300 bg-transparent"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-[1.1] w-full">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-border/40 shadow-2xl group/img bg-card/30">
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
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-4 z-10">
        <button
          onClick={scrollPrev}
          className="size-12 border border-border/60 rounded-lg grid place-content-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
          aria-label="Previous Project"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={scrollNext}
          className="size-12 border border-border/60 rounded-lg grid place-content-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
          aria-label="Next Project"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-1 transition-all duration-300 rounded-full',
              selectedIndex === i ? 'w-8 bg-primary shadow-sm' : 'w-4 bg-border',
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectCarousel
