'use client'
import { useEffect, useState } from 'react'
import Logo from './logo'
import MobileNav from './mobile-nav'
import NavList from './nav-list'
import { ActiveSectionProvider } from './active-section-context'
import ThemeToggle from './theme-toggle'
import { cn } from '~/lib/utils'

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ActiveSectionProvider>
      <nav
        className={cn(
          'sticky top-4 z-40 mb-12 w-full px-5 py-3 rounded-xl border border-border/60 transition-colors duration-300',
          hasScrolled
            ? 'bg-background/65 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55'
            : 'bg-transparent'
        )}
        role="navigation"
      >
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden sm:flex items-center gap-1">
            <NavList />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1 sm:hidden">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </nav>
    </ActiveSectionProvider>
  )
}

export default Navbar
