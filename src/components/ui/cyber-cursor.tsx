'use client'

import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CyberCursor = () => {
    const [isVisible, setIsVisible] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const onMouseEnter = () => setIsVisible(true)
        const onMouseLeave = () => setIsVisible(false)

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseenter', onMouseEnter)
        window.addEventListener('mouseleave', onMouseLeave)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseenter', onMouseEnter)
            window.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [cursorX, cursorY])

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                x: '-50%',
                y: '-50%',
            }}
        >
            {/* Outer Glow Ring */}
            <motion.div
                className="absolute inset-0 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5"
                animate={{
                    scale: isVisible ? [1, 1.2, 1] : 0,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    opacity: { duration: 0.3 }
                }}
            />

            {/* Target Crosshair / Dot */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyber-cyan rounded-full shadow-neon-cyan"
                animate={{
                    scale: isVisible ? 1 : 0,
                }}
            />

            {/* Trailing Hexagon (Cyber Ornament) */}
            <motion.div
                className="absolute -top-1 -right-1"
                animate={{
                    rotate: 360,
                    opacity: isVisible ? 0.6 : 0,
                }}
                transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
                    opacity: { duration: 0.3 }
                }}
            >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 0L9.33013 2.5V7.5L5 10L0.669873 7.5V2.5L5 0Z" fill="hsl(180 100% 50%)" fillOpacity="0.4" />
                </svg>
            </motion.div>
        </motion.div>
    )
}

export default CyberCursor
