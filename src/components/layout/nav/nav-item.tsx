'use client'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { NavType } from './_nav-mock'
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/utils'
import { motion } from 'framer-motion'

const NavItem: React.FC<NavType[0] & { setOpen?: Dispatch<SetStateAction<boolean>> }> = ({
  label,
  path,
  setOpen,
}) => {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = React.useState<string>('')

  React.useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    const sections = ['github', 'contact']
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Special case for "Home" (top of the page)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home')
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const isActive = React.useMemo(() => {
    if (path === '/') {
      return pathname === '/' && (activeSection === 'home' || activeSection === '')
    }
    if (path.startsWith('/#')) {
      const sectionId = path.split('#')[1]
      return pathname === '/' && activeSection === sectionId
    }
    return pathname.startsWith(path)
  }, [pathname, path, activeSection])

  const onClickHandler = () => {
    if (typeof setOpen === 'function') {
      setOpen(false)
    }
  }

  return (
    <li
      role="listitem"
      className={cn(
        'relative h-7 px-2 flex items-center sm:px-0 font-medium rounded-md transition-all duration-300 font-jetbrains text-sm tracking-wide',
        {
          'text-cyber-cyan sm:text-cyber-cyan': isActive,
          'text-muted-foreground hover:text-foreground': !isActive,
        },
      )}
      onClick={onClickHandler}
    >
      <Link
        href={path}
        role="link"
        aria-label={label}
        className="relative z-10 el-focus-styles rounded-sm"
      >
        {label}
      </Link>

      {isActive && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: 'spring', duration: 0.4, bounce: 0, delay: 0.1 }}
          className="hidden sm:flex absolute left-0 top-1 size-full h-full w-full items-end justify-center"
        >
          <span className="z-0 h-[2px] w-full bg-gradient-to-r from-cyber-cyan to-cyber-cyan/30 shadow-neon-cyan" />
        </motion.span>
      )}
    </li>
  )
}

export default NavItem
