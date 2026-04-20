'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { TProjectSerialized } from './_project-mock'
import { cn } from '~/lib/utils'

interface ProjectCarouselProps {
    projects: TProjectSerialized[]
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className="relative group/carousel">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {projects.map((project, index) => (
                        <div key={project.id} className="flex-[0_0_100%] min-w-0 min-h-[550px] flex flex-col md:flex-row gap-10 items-center px-4 pt-0 pb-4">
                            {/* Left Content */}
                            <div className="flex-[0.9] space-y-6">
                                <div className="space-y-2">
                                    <motion.span
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        key={`num-${index}`}
                                        className="block font-orbitron text-6xl md:text-8xl opacity-10 text-white stroke-text leading-none select-none"
                                        style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </motion.span>

                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        key={`title-${index}`}
                                        className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-cyan tracking-tight"
                                    >
                                        {project.title}
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        key={`subtitle-${index}`}
                                        className="text-cyber-cyan/60 font-jetbrains text-sm uppercase tracking-widest"
                                    >
                                        Fullstack Project
                                    </motion.p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    key={`desc-${index}`}
                                    className="space-y-4 max-w-xl"
                                >
                                    <div className="flex gap-3 text-muted-foreground/90 leading-relaxed font-sans text-base">
                                        <p className="line-clamp-4 md:line-clamp-none">{project.description}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-cyber-cyan font-jetbrains font-semibold text-sm uppercase tracking-wider">
                                        {project.stacks.slice(0, 4).map((stack) => (
                                            <span key={stack}>{stack}</span>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    key={`links-${index}`}
                                    className="flex gap-4 pt-4"
                                >
                                    <a
                                        href={project.deployedURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="size-12 grid place-content-center border border-white/10 rounded-lg hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300 backdrop-blur-sm bg-white/5"
                                    >
                                        <FaExternalLinkAlt />
                                    </a>
                                    {project.isRepo && (
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="size-12 grid place-content-center border border-white/10 rounded-lg hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300 backdrop-blur-sm bg-white/5"
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                    )}
                                </motion.div>
                            </div>

                            {/* Right Image */}
                            <div className="flex-[1.1] w-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    key={`img-${index}`}
                                    className="relative aspect-video rounded-xl overflow-hidden border-2 border-cyber-cyan/30 shadow-2xl group/img"
                                >
                                    <Image
                                        src={project.cover}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 1000px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                    <div className="absolute inset-0 scanline-overlay opacity-20" />
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 right-4 flex gap-4 z-10">
                <button
                    onClick={scrollPrev}
                    className="size-12 border border-white/10 rounded-lg grid place-content-center hover:bg-cyber-cyan hover:text-black hover:border-cyber-cyan transition-all duration-300 backdrop-blur-md"
                    aria-label="Previous Project"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={scrollNext}
                    className="size-12 border border-white/10 rounded-lg grid place-content-center hover:bg-cyber-cyan hover:text-black hover:border-cyber-cyan transition-all duration-300 backdrop-blur-md"
                    aria-label="Next Project"
                >
                    <FaChevronRight />
                </button>
            </div>

            {/* Progress Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {projects.map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "h-1 transition-all duration-300 rounded-full",
                            selectedIndex === i ? "w-8 bg-cyber-cyan shadow-neon-sm" : "w-4 bg-white/10"
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectCarousel
