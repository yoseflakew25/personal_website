'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { CornerBrackets } from '~/components/ui/corner-brackets'
import {
  Briefcase,
  CornerDownLeft,
  FileText,
  FolderGit2,
  Github,
  GraduationCap,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Moon,
  Palette,
  Search,
  Send,
  Sun,
  Twitter,
  User,
  Wrench,
} from 'lucide-react'
import config from '~/config'
import { cn } from '~/lib/utils'

export const COMMAND_PALETTE_OPEN_EVENT = 'command-palette:open'

type PaletteAction = {
  id: string
  group: string
  label: string
  hint: string
  icon: React.ReactNode
  keywords?: string
  run: () => void
}

/* ─────────────────────────────────────────
   Trigger — dispatches the global open event
   so a single palette instance can be mounted
   once and opened from any trigger location.
───────────────────────────────────────── */
export const CommandPaletteTrigger: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COMMAND_PALETTE_OPEN_EVENT))}
      aria-label="Open command palette"
      title="Command palette (⌘K / Ctrl+K)"
      className={cn(
        'group/btn relative size-8 border border-[hsl(var(--border))] grid place-content-center hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))] transition-all duration-200 text-muted-foreground el-focus-styles',
        className,
      )}
    >
      <CornerBrackets
        size="0.375rem"
        colorClass="border-transparent"
        hoverColorClass="group-hover/btn:border-[hsl(var(--blueprint-line)/0.3)]"
        transitionClass="transition-colors duration-200"
      />
      <span className="font-mono text-[10px] tracking-wider">⌘K</span>
    </button>
  )
}

/* ─────────────────────────────────────────
   Palette — overlay + ⌘K shortcut + actions
───────────────────────────────────────── */
const CommandPalette = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const router = useRouter()
  const { theme, setTheme, resolvedTheme } = useTheme()

  const isDark = theme === 'system' ? resolvedTheme === 'dark' : theme === 'dark'

  /* Global shortcut + open event */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    const onOpen = () => setOpen(true)

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener(COMMAND_PALETTE_OPEN_EVENT, onOpen)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener(COMMAND_PALETTE_OPEN_EVENT, onOpen)
    }
  }, [])

  /* Reset + focus when opened */
  useEffect(() => {
    if (!open) return
    setQuery('')
    setActiveIndex(0)
    const t = setTimeout(() => inputRef.current?.focus(), 10)
    return () => clearTimeout(t)
  }, [open])

  /* Lock body scroll while open */
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const jumpToSection = useCallback(
    (id: string) => {
      if (window.location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        router.push(`/#${id}`)
      }
    },
    [router],
  )

  const goTo = useCallback(
    (path: string) => {
      router.push(path)
    },
    [router],
  )

  const actions: PaletteAction[] = useMemo(() => {
    return [
      /* ── Navigate ── */
      { id: 'nav-home', group: 'NAVIGATE', label: 'Home', hint: '/', icon: <Home size={14} />, run: () => goTo('/') },
      { id: 'nav-projects', group: 'NAVIGATE', label: 'Projects', hint: '/projects', icon: <FolderGit2 size={14} />, run: () => goTo('/projects') },
      { id: 'nav-designs', group: 'NAVIGATE', label: 'Designs', hint: '/designs', icon: <Palette size={14} />, run: () => goTo('/designs') },
      { id: 'nav-blog', group: 'NAVIGATE', label: 'Blog', hint: '/blog', icon: <FileText size={14} />, run: () => goTo('/blog') },
      { id: 'nav-github', group: 'NAVIGATE', label: 'GitHub', hint: '/github', icon: <Github size={14} />, run: () => goTo('/github') },
      { id: 'nav-contact', group: 'NAVIGATE', label: 'Contact', hint: '/contact', icon: <Mail size={14} />, run: () => goTo('/contact') },

      /* ── Home sections ── */
      { id: 'sec-about', group: 'HOME SECTIONS', label: 'About', hint: 'SECTION', icon: <User size={14} />, keywords: 'intro hero', run: () => jumpToSection('about') },
      { id: 'sec-skills', group: 'HOME SECTIONS', label: 'Skills', hint: 'SECTION', icon: <Wrench size={14} />, keywords: 'tools technologies stack', run: () => jumpToSection('skills') },
      { id: 'sec-experience', group: 'HOME SECTIONS', label: 'Experience', hint: 'SECTION', icon: <Briefcase size={14} />, keywords: 'work job career', run: () => jumpToSection('experience') },
      { id: 'sec-education', group: 'HOME SECTIONS', label: 'Education', hint: 'SECTION', icon: <GraduationCap size={14} />, keywords: 'school degree', run: () => jumpToSection('education') },
      { id: 'sec-projects', group: 'HOME SECTIONS', label: 'Projects', hint: 'SECTION', icon: <FolderGit2 size={14} />, run: () => jumpToSection('projects') },
      { id: 'sec-contact', group: 'HOME SECTIONS', label: 'Get in Touch', hint: 'SECTION', icon: <Mail size={14} />, keywords: 'contact email form', run: () => jumpToSection('contact') },

      /* ── Socials ── */
      { id: 'soc-github', group: 'SOCIALS', label: 'GitHub Profile', hint: 'github.com/yoseflakew25', icon: <Github size={14} />, run: () => window.open(config.social.github, '_blank', 'noopener,noreferrer') },
      { id: 'soc-linkedin', group: 'SOCIALS', label: 'LinkedIn', hint: 'linkedin.com/in/yosef-lakeww', icon: <Linkedin size={14} />, run: () => window.open(config.social.linkedin, '_blank', 'noopener,noreferrer') },
      { id: 'soc-instagram', group: 'SOCIALS', label: 'Instagram', hint: 'instagram.com/jovion__', icon: <Instagram size={14} />, run: () => window.open(config.social.instagram, '_blank', 'noopener,noreferrer') },
      { id: 'soc-x', group: 'SOCIALS', label: 'X (Twitter)', hint: 'x.com/YOSEFLAKEW48676', icon: <Twitter size={14} />, run: () => window.open(config.social.x, '_blank', 'noopener,noreferrer') },
      { id: 'soc-telegram', group: 'SOCIALS', label: 'Telegram', hint: 't.me/Josscy', icon: <Send size={14} />, run: () => window.open(config.social.telegram, '_blank', 'noopener,noreferrer') },
      { id: 'soc-email', group: 'SOCIALS', label: 'Email', hint: config.social.email, icon: <Mail size={14} />, run: () => window.open(`mailto:${config.social.email}`) },

      /* ── Actions ── */
      {
        id: 'act-theme',
        group: 'ACTIONS',
        label: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode',
        hint: isDark ? 'LIGHT' : 'DARK',
        icon: isDark ? <Sun size={14} /> : <Moon size={14} />,
        keywords: 'theme color mode',
        run: () => setTheme(isDark ? 'light' : 'dark'),
      },
    ]
  }, [goTo, jumpToSection, isDark, setTheme])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return actions
    return actions.filter(
      a => a.label.toLowerCase().includes(q) || (a.keywords ?? '').toLowerCase().includes(q),
    )
  }, [query, actions])

  const groups = useMemo(() => {
    const result: { name: string; items: PaletteAction[] }[] = []
    for (const action of filtered) {
      const last = result[result.length - 1]
      if (!last || last.name !== action.group) {
        result.push({ name: action.group, items: [action] })
      } else {
        last.items.push(action)
      }
    }
    return result
  }, [filtered])

  /* Keep the active row in view */
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, open, filtered.length])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      filtered[activeIndex]?.run()
      setOpen(false)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close command palette"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default"
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-lg border border-[hsl(var(--blueprint-line)/0.4)] bg-[hsl(var(--background))] shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
        onKeyDown={handleKeyDown}
      >
        <CornerBrackets colorClass="border-[hsl(var(--blueprint-line)/0.4)]" />

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] px-4 py-2 flex items-center justify-between">
          <span className="text-blueprint-meta">COMMAND PALETTE</span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.7)] uppercase">
            ⌘K NAVIGATOR
          </span>
        </div>

        {/* Search input */}
        <div className="flex items-center gap-2.5 border-b border-[hsl(var(--border))] px-4 py-3">
          <Search size={14} className="text-[hsl(var(--blueprint-line))] shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => {
              setQuery(e.target.value)
              setActiveIndex(0)
            }}
            placeholder="Type to filter — pages, sections, socials…"
            className="w-full bg-transparent font-mono text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
            aria-label="Filter commands"
          />
        </div>

        {/* Results */}
        <div className="max-h-[40vh] overflow-y-auto py-1.5">
          {groups.length === 0 ? (
            <p className="px-4 py-6 font-mono text-xs text-muted-foreground text-center">
              NO MATCHES — <span className="text-[hsl(var(--blueprint-line)/0.7)]">CHECK SPELLING</span>
            </p>
          ) : (
            <ul ref={listRef} role="listbox" aria-label="Commands">
              {groups.map(group => (
                <li key={group.name} role="presentation">
                  <p className="px-4 pt-2 pb-1 font-mono text-[9px] tracking-[0.25em] text-muted-foreground/70 uppercase">
                    {group.name}
                  </p>
                  {group.items.map(action => {
                    const flatIndex = filtered.indexOf(action)
                    const isActive = flatIndex === activeIndex
                    return (
                      <button
                        key={action.id}
                        type="button"
                        role="option"
                        aria-selected={isActive}
                        data-index={flatIndex}
                        onClick={() => {
                          action.run()
                          setOpen(false)
                        }}
                        onMouseMove={() => setActiveIndex(flatIndex)}
                        className={cn(
                          'w-full flex items-center gap-3 px-4 py-2 text-left transition-colors duration-100',
                          isActive
                            ? 'bg-[hsl(var(--blueprint-line)/0.1)] text-[hsl(var(--blueprint-line))]'
                            : 'text-foreground/80 hover:bg-[hsl(var(--blueprint-line)/0.05)]',
                        )}
                      >
                        <span className={cn('shrink-0', isActive ? 'text-[hsl(var(--blueprint-line))]' : 'text-muted-foreground')}>
                          {action.icon}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider">{action.label}</span>
                        <span className="ml-auto font-mono text-[9px] tracking-wider text-muted-foreground/70 uppercase truncate max-w-[40%]">
                          {action.hint}
                        </span>
                        {isActive && <CornerDownLeft size={12} className="shrink-0 text-[hsl(var(--blueprint-line)/0.7)]" />}
                      </button>
                    )
                  })}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-[hsl(var(--border))] px-4 py-2 flex items-center gap-3">
          <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
            ↑↓ NAVIGATE
          </span>
          <span className="h-2 w-px bg-[hsl(var(--border))]" aria-hidden="true" />
          <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
            ↵ OPEN
          </span>
          <span className="h-2 w-px bg-[hsl(var(--border))]" aria-hidden="true" />
          <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
            ESC CLOSE
          </span>
          <span className="ml-auto font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
            REV A
          </span>
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
