'use client'
import Link from 'next/link'
import React from 'react'
import { NavChildItem } from './_nav-mock'
import { cn } from '~/lib/utils'
import { FiGithub } from 'react-icons/fi'
import { Linkedin } from 'lucide-react'
import { CornerBrackets } from '~/components/ui/corner-brackets'

interface NavDropdownProps {
  label: string
  children: NavChildItem[]
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onToggleClick: () => void
  onChildClick?: () => void
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  children,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onToggleClick,
  onChildClick,
}) => {
  return (
    <li
      role="listitem"
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Dropdown trigger */}
      <button
        className={cn(
          'group font-mono text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 transition-all duration-200 el-focus-styles inline-flex items-center gap-1.5',
          'text-muted-foreground hover:text-foreground',
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={onToggleClick}
      >
        <span className="transition-all duration-200 text-[10px] opacity-0 group-hover:opacity-40">
          ▸
        </span>
        {label}
        <svg
          className={cn(
            'size-3 transition-transform duration-200',
            isOpen ? 'rotate-180' : '',
          )}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        className={cn(
          'absolute top-full left-1/2 -translate-x-1/2 mt-1 min-w-[180px]',
          'border border-[hsl(var(--border))] bg-[hsl(var(--background))]',
          'shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
          'transition-all duration-200 origin-top',
          isOpen
            ? 'opacity-100 visible translate-y-0 scale-y-100'
            : 'opacity-0 invisible -translate-y-0.5 scale-y-95 pointer-events-none',
        )}
      >
        {/* Corner accents */}
        <CornerBrackets size="0.5rem" colorClass="border-[hsl(var(--blueprint-line)/0.3)]" />

        {/* Spec header */}
        <div className="border-b border-dashed border-[hsl(var(--border)/0.5)] px-4 py-2">
          <span className="text-blueprint-meta text-[9px] tracking-[0.2em]">QUICK LINKS</span>
        </div>

        {/* Menu items */}
        <div className="py-1" role="menu">
          {children.map((child) => {
            const icon = child.label.toLowerCase() === 'github'
              ? <FiGithub className="size-3.5" />
              : child.label.toLowerCase() === 'linkedin'
                ? <Linkedin className="size-3.5" />
                : null

            const content = (
              <span className="flex items-center gap-2.5 px-4 py-2 font-mono text-[11px] tracking-[0.1em] text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--blueprint-line)/0.04)] transition-all duration-200">
                {icon && (
                  <span className="text-[hsl(var(--blueprint-line))] shrink-0">
                    {icon}
                  </span>
                )}
                {!icon && (
                  <span className="size-3.5 shrink-0 flex items-center justify-center text-[hsl(var(--blueprint-line))]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                )}
                <span>{child.label}</span>
                {child.external && (
                  <svg
                    className="size-2.5 ml-auto shrink-0 opacity-40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                )}
              </span>
            )

            if (child.external) {
              return (
                <a
                  key={child.id}
                  href={child.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  onClick={onChildClick}
                  className="block"
                >
                  {content}
                </a>
              )
            }

            return (
              <Link
                key={child.id}
                href={child.path}
                role="menuitem"
                onClick={onChildClick}
                className="block"
              >
                {content}
              </Link>
            )
          })}
        </div>

        {/* Footer note */}
        <div className="border-t border-dashed border-[hsl(var(--border)/0.5)] px-4 py-1.5">
          <span className="text-blueprint-note text-[8px] tracking-[0.2em]">NAV · CONTACT</span>
        </div>
      </div>
    </li>
  )
}

export default NavDropdown
