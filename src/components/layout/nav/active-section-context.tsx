'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const ActiveSectionContext = createContext<string>('')

export const ActiveSectionProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const [activeSection, setActiveSection] = useState<string>('')

    useEffect(() => {
        if (pathname !== '/') {
            setActiveSection('')
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id)
                })
            },
            { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 },
        )

        const sections = ['github', 'contact']
        sections.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        const handleScroll = () => {
            if (window.scrollY < 100) setActiveSection('home')
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [pathname])

    return (
        <ActiveSectionContext.Provider value={activeSection}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export const useActiveSection = () => useContext(ActiveSectionContext)
