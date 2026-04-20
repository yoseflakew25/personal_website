'use client'

import React from 'react'
import { motion } from 'framer-motion'

const EmailSidebar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-0 right-4 md:right-8 z-50 hidden lg:flex flex-col items-center gap-0"
        >
            <div className="flex flex-col items-center gap-0 before:content-[''] before:w-px before:h-24 before:bg-gradient-to-t before:from-cyber-cyan before:to-transparent after:content-[''] after:w-px after:h-24 after:bg-gradient-to-b after:from-cyber-cyan after:to-transparent">
                <a
                    href="mailto:yoseflakewdev@gmail.com"
                    className="font-jetbrains text-[11px] tracking-[0.25em] text-foreground hover:text-cyber-cyan hover:-translate-y-1 transition-all duration-300 vertical-text py-8"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    yoseflakewdev@gmail.com
                </a>
            </div>
        </motion.div>
    )
}

export default EmailSidebar
