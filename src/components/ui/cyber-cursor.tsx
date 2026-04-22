'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CyberCursor = () => {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const dotRef = useRef<HTMLDivElement>(null)

    // Tight spring for the outer ring
    const springConfig = { damping: 28, stiffness: 600 }
    const x = useSpring(cursorX, springConfig)
    const y = useSpring(cursorY, springConfig)

    useEffect(() => {
        // Use raw DOM update for the inner dot (avoids React re-render on every mousemove)
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
            }
        }

        window.addEventListener('mousemove', moveCursor, { passive: true })
        return () => window.removeEventListener('mousemove', moveCursor)
    }, [cursorX, cursorY])

    return (
        <>
            {/* Outer lagging ring — uses spring for smooth trail */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block rounded-full border border-cyber-cyan/25 bg-cyber-cyan/4"
                style={{ translateX: x, translateY: y, x: '-50%', y: '-50%' }}
            />

            {/* Inner dot — direct DOM update, zero React overhead */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9999] hidden md:block rounded-full bg-cyber-cyan shadow-[0_0_6px_hsl(180,100%,50%)]"
                style={{ transform: 'translate(-50%,-50%)' }}
                aria-hidden="true"
            />
        </>
    )
}

export default CyberCursor
