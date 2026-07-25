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

  // If the item has children, render as dropdown trigger
  if (children && children.length > 0) {
    return (
      <NavDropdown
        label={label}
        children={children}
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
      />
    )
  }

  // Regular nav item (no children)
  const isActive = React.useMemo(() => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path!)
  }, [pathname, path])

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
          'group font-mono text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 transition-all duration-200 el-focus-styles inline-flex items-center gap-1.5',
          isActive
            ? 'text-foreground font-semibold'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {/* Blueprint bracket indicator */}
        <span
          className={cn(
            'transition-all duration-200 text-[10px]',
            isActive
              ? 'text-[hsl(var(--blueprint-line)/0.7)] opacity-100'
              : 'opacity-0 group-hover:opacity-40',
          )}
        >
          ▸
        </span>
        {label}
      </Link>

      {/* Active underline — dashed to match blueprint style */}
      {isActive && (
        <span className="absolute bottom-0 left-3 right-3 h-px bg-[hsl(var(--blueprint-line)/0.4)]" />
      )}
    </li>
  )
}

export default NavItem
