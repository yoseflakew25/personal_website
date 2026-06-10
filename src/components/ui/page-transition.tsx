'use client'

import React, { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
    children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition
