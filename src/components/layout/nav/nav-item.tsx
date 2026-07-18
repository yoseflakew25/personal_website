'use client'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { NavType } from './_nav-mock'
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/utils'

const NavItem: React.FC<NavType[0] & { setOpen?: Dispatch<SetStateAction<boolean>> }> = ({
  label,
  path,
  setOpen,
}) => {
  const pathname = usePathname()

  const isActive = React.useMemo(() => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
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
        href={path}
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
