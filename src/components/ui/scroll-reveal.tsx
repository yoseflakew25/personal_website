'use client'
import React, { ReactNode, useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

type RevealVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fadeDown' | 'scaleIn' | 'glitchIn'

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
        hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -40, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
        visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 40, filter: 'blur(4px)' },
        visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9, filter: 'blur(6px)' },
        visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    },
    glitchIn: {
        hidden: { opacity: 0, x: -10, skewX: -5 },
        visible: { opacity: 1, x: 0, skewX: 0 },
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

    return (
        <motion.div
            ref={ref}
            variants={variants[variant]}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
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
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
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
