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

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest('a')
            if (!anchor) return
            
            // Check for standard left click without modifiers
            if (e.button !== 0 || e.ctrlKey || e.shiftKey || e.metaKey || e.altKey) return
            
            const href = anchor.getAttribute('href')
            if (!href) return

            // Ignore downloads, external targets, and protocol-specific links
            if (
                anchor.hasAttribute('download') ||
                anchor.target === '_blank' ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:') ||
                href.startsWith('javascript:')
            ) {
                return
            }

            try {
                const targetUrl = new URL(href, window.location.origin)
                // Only show progress for internal navigations that actually change the pathname
                if (targetUrl.origin === window.location.origin && targetUrl.pathname !== window.location.pathname) {
                    startProgress()
                }
            } catch (err) {
                // Safely ignore invalid URLs
            }
        }
        document.addEventListener('click', handleClick, true)
        return () => document.removeEventListener('click', handleClick, true)
    }, [startProgress])

    const isFirstMount = useRef(true)
    useEffect(() => {
        if (isFirstMount.current) { isFirstMount.current = false; return }
        completeProgress()
    }, [pathname, completeProgress])

    useEffect(() => () => clearTimers(), [clearTimers])

    return (
        <AnimatePresence>
            {isNavigating && (
                <motion.div
                    className="fixed top-0 left-0 right-0 z-[9999] h-[2px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                >
                    <motion.div
                        className="h-full bg-[hsl(var(--blueprint-line))]"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{
                            duration: 0.25,
                            ease: 'linear',
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default RouteProgress
