'use client'
import React, { ReactNode, useRef } from 'react'
import { motion, useInView, useReducedMotion, Variants } from 'framer-motion'

type RevealVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fadeDown' | 'scaleIn' | 'blueprintReveal'

interface ScrollRevealProps {
    children: ReactNode
    variant?: RevealVariant
    delay?: number
    duration?: number
    once?: boolean
    className?: string
    threshold?: number
}

const variants: Record<RevealVariant, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -24 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -24 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 24 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.94 },
        visible: { opacity: 1, scale: 1 },
    },
    blueprintReveal: {
        hidden: {
            opacity: 0,
            x: -8,
            y: 12,
            scale: 0.97,
            filter: 'brightness(1.8) saturate(0.3)',
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: 'brightness(1) saturate(1)',
            transition: {
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1],
                filter: {
                    duration: 0.5,
                    ease: 'easeOut',
                },
            },
        },
    },
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 0.6,
    once = true,
    className = '',
    threshold = 0.15,
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once, amount: threshold })
    const prefersReducedMotion = useReducedMotion()

    // Skip all animation when user prefers reduced motion
    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    // Use the variant-specific transition if provided, otherwise use the default
    const getTransition = () => {
        if (variant === 'blueprintReveal') {
            // Extract only the transition config from the variant's visible state
            const vis = variants[variant].visible as Record<string, unknown>
            return (vis.transition as object) || {}
        }
        return {
            duration,
            delay,
            ease: [0.25, 0.4, 0.25, 1],
        }
    }

    return (
        <motion.div
            ref={ref}
            variants={variants[variant]}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={getTransition()}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default ScrollReveal

/* ===== Stagger Children Wrapper ===== */
interface StaggerListProps {
    children: ReactNode
    className?: string
    staggerDelay?: number
    once?: boolean
}

const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] },
    },
}

export const StaggerList: React.FC<StaggerListProps> = ({
    children,
    className = '',
    staggerDelay = 0.1,
    once = true,
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once, amount: 0.1 })

    const containerVariant: Variants = {
        ...container,
        visible: {
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            variants={containerVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const StaggerItem: React.FC<{ children: ReactNode; className?: string }> = ({
    children,
    className = '',
}) => {
    return (
        <motion.div variants={item} className={className}>
            {children}
        </motion.div>
    )
}

/* ===== Sequential Section Reveal (for page-level stagger) ===== */
interface SectionSequencerProps {
    children: ReactNode[]
    className?: string
    /** Delay between each section appearing (seconds) */
    sectionInterval?: number
    /** Initial delay before first section (seconds) */
    initialDelay?: number
}

export const SectionSequencer: React.FC<SectionSequencerProps> = ({
    children,
    className = '',
    sectionInterval = 0.15,
    initialDelay = 0.1,
}) => {
    const prefersReducedMotion = useReducedMotion()

    // When user prefers reduced motion, render children without staggering
    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    const sectionItemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    }

    return (
        <div className={className}>
            {React.Children.map(children, (child, i) => (
                <motion.div
                    key={i}
                    variants={sectionItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{
                        duration: 0.7,
                        delay: initialDelay + i * sectionInterval,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    )
}
