'use client'
import { useEffect, useState } from 'react'
import Logo from './logo'
import MobileNav from './mobile-nav'
import NavList from './nav-list'
import ThemeToggle from './theme-toggle'
import { cn } from '~/lib/utils'
import { CornerBrackets } from '~/components/ui/corner-brackets'

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
        'w-full border border-[hsl(var(--border))] transition-all duration-300',
        hasScrolled
          ? 'bg-background/85 backdrop-blur-lg shadow-[0_1px_0_0_hsl(var(--blueprint-line)/0.12)]'
          : 'bg-card',
      )}
      role="navigation"
    >
      {/* Corner accents */}
      <CornerBrackets colorClass="border-[hsl(var(--blueprint-line)/0.4)]" />

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
