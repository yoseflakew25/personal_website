'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { Linkedin } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import config from '~/config'

const SocialSidebar = () => {
    const socials = [
        { icon: <FiGithub size={20} />, href: config.social.github, label: 'GitHub' },
        { icon: <Linkedin size={20} />, href: config.social.linkedin, label: 'LinkedIn' },
        { icon: <FaInstagram size={20} />, href: config.social.instagram, label: 'Instagram' },
        { icon: <SiGmail size={20} />, href: `mailto:${config.social.email}`, label: 'Gmail' },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="fixed bottom-0 left-4 md:left-8 z-50 hidden lg:flex flex-col items-center gap-0"
        >
            <div className="flex flex-col items-center gap-6 before:content-[''] before:w-px before:h-24 before:bg-gradient-to-t before:from-cyber-cyan before:to-transparent after:content-[''] after:w-px after:h-24 after:bg-gradient-to-b after:from-cyber-cyan after:to-transparent mb-0">
                <div className="flex flex-col items-center gap-5 py-6">
                    {socials.map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-cyber-cyan hover:-translate-y-1 transition-all duration-300"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default SocialSidebar
