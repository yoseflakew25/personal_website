'use client'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { NavItemType } from './_nav-mock'
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/utils'
import NavDropdown from './nav-dropdown'

const NavItem: React.FC<NavItemType & { setOpen?: Dispatch<SetStateAction<boolean>> }> = ({
  label,
  path,
  children,
  setOpen,
}) => {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const isActive = React.useMemo(() => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path!)
  }, [pathname, path])

  // If the item has children, render as dropdown trigger
  if (children && children.length > 0) {
    return (
      <NavDropdown
        label={label}
        isOpen={dropdownOpen}
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
        onToggleClick={() => setDropdownOpen(prev => !prev)}
        onChildClick={() => {
          if (typeof setOpen === 'function') {
            setOpen(false)
          }
          setDropdownOpen(false)
        }}
      >
        {children}
      </NavDropdown>
    )
  }

  const onClickHandler = () => {
    if (typeof setOpen === 'function') {
      setOpen(false)
    }
  }

  return (
    <li
      role="listitem"
      className="relative"
      onClick={onClickHandler}
    >
      <Link
        href={path!}
        role="link"
        aria-label={label}
        className={cn(
          'group font-mono text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 transition-all duration-200 el-focus-styles inline-flex items-center gap-1.5 border border-transparent',
          isActive
            ? 'border-[hsl(var(--blueprint-line)/0.55)] bg-[hsl(var(--blueprint-line)/0.07)] text-[hsl(var(--blueprint-line))] font-semibold'
            : 'text-muted-foreground hover:bg-[hsl(var(--blueprint-line)/0.08)] hover:text-[hsl(var(--blueprint-line))]',
        )}
      >
        {/* Blueprint bracket indicator */}
        <span
          className={cn(
            'transition-all duration-200 text-[10px]',
            isActive
              ? 'text-[hsl(var(--blueprint-line)/0.8)] opacity-100'
              : 'opacity-0 group-hover:opacity-60',
          )}
        >
          ▸
        </span>
        {label}
      </Link>
    </li>
  )
}

export default NavItem
