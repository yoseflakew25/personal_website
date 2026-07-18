'use client'
import { useEffect, useState } from 'react'
import Logo from './logo'
import MobileNav from './mobile-nav'
import NavList from './nav-list'
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
    <nav
      className={cn(
        'sticky top-0 z-50 w-full border border-[hsl(var(--border))] transition-all duration-300',
        hasScrolled
          ? 'bg-background/85 backdrop-blur-lg shadow-[0_1px_0_0_hsl(var(--blueprint-line)/0.12)]'
          : 'bg-card',
      )}
      role="navigation"
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.4)] z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.4)] z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.4)] z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.4)] z-10 pointer-events-none" />

      {/* Main nav row */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5">
        <Logo />

        <div className="hidden sm:flex items-center gap-1">
          <NavList />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1.5 sm:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
