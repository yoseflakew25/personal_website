'use client'

import React, { useEffect, useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const RouteProgress = () => {
    const pathname = usePathname()
    const [isNavigating, setIsNavigating] = useState(false)
    const [progress, setProgress] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const isNavigatingRef = useRef(false)

    const clearTimers = useCallback(() => {
        if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
        if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null }
    }, [])

    const startProgress = useCallback(() => {
        clearTimers()
        isNavigatingRef.current = true
        setIsNavigating(true)
        setProgress(0)

        let current = 0
        intervalRef.current = setInterval(() => {
            current += Math.random() * 15
            if (current > 90) current = 90
            setProgress(current)
        }, 200)
    }, [clearTimers])

    const completeProgress = useCallback(() => {
        clearTimers()
        isNavigatingRef.current = false
        setProgress(100)
        timeoutRef.current = setTimeout(() => {
            setIsNavigating(false)
            setProgress(0)
        }, 400)
    }, [clearTimers])

    // Start progress on link click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest('a')
            if (!anchor) return
            const href = anchor.getAttribute('href')
            if (href && href.startsWith('/') && !anchor.hasAttribute('download') && anchor.target !== '_blank') {
                startProgress()
            }
        }
        document.addEventListener('click', handleClick, true)
        return () => document.removeEventListener('click', handleClick, true)
    }, [startProgress])

    // Complete when pathname actually changes — this is the reliable signal
    const isFirstMount = useRef(true)
    useEffect(() => {
        if (isFirstMount.current) { isFirstMount.current = false; return }
        completeProgress()
    }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

    // Cleanup on unmount
    useEffect(() => () => clearTimers(), [clearTimers])

    return (
        <AnimatePresence>
            {isNavigating && (
                <motion.div
                    className="fixed top-0 left-0 right-0 z-[9999] h-[3px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Background track */}
                    <div className="absolute inset-0 bg-primary/10" />

                    {/* Progress bar */}
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary via-primary to-primary/60 relative"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* Glow effect at the tip */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-8 bg-primary/30 blur-xl rounded-full" />
                        <div className="absolute right-0 top-0 w-2 h-full bg-white/80 rounded-full shadow-[0_0_12px_hsl(var(--primary))]" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default RouteProgress
