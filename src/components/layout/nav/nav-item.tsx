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
  const isActive = pathname === path

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
          <span className="z-0 h-[2px] w-full bg-gradient-to-r from-cyber-cyan to-cyber-magenta/60 shadow-neon-cyan" />
        </motion.span>
      )}
    </li>
  )
}

export default NavItem
