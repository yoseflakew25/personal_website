'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/utils'

const SECTIONS = [
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
]

const NAV_OFFSET = 72

/**
 * SectionSpy — fixed right-edge readout on the homepage. Tracks which section
 * is in the middle band of the viewport and renders `SECTION 01/06` with
 * clickable tick marks that smooth-scroll to each section (offset for the
 * sticky nav).
 */
const SectionSpy = () => {
  const pathname = usePathname()
  const [active, setActive] = useState(0)

  useEffect(() => {
    // Only meaningful on the homepage, where the section ids exist
    if (pathname !== '/') return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(entry => entry.isIntersecting)
        if (visible.length === 0) return

        // Prefer the section nearest the top of the viewport band
        visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        )
        const index = SECTIONS.findIndex(
          section => section.id === visible[0].target.id,
        )
        if (index >= 0) setActive(index)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )

    SECTIONS.forEach(section => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  if (pathname !== '/') return null

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
  }

  return (
    <aside
      aria-label="Section navigation"
      className="hidden lg:flex fixed right-4 xl:right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 print:hidden"
    >
      <span className="font-mono text-[8px] tracking-[0.3em] text-muted-foreground/60 uppercase">
        SHEET
      </span>

      {SECTIONS.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-2.5"
          aria-current={active === index ? 'true' : undefined}
          aria-label={`Go to ${section.label}`}
        >
          <span
            className={cn(
              'font-mono text-[8px] tracking-[0.2em] uppercase transition-colors duration-200',
              active === index
                ? 'text-[hsl(var(--blueprint-line))]'
                : 'text-muted-foreground/50 group-hover:text-muted-foreground',
            )}
          >
            {section.label}
          </span>
          <span
            className={cn(
              'h-px transition-all duration-300',
              active === index
                ? 'w-6 bg-[hsl(var(--blueprint-line))] shadow-[0_0_4px_1px_hsl(var(--blueprint-line)/0.3)]'
                : 'w-3 bg-[hsl(var(--border))] group-hover:w-5 group-hover:bg-[hsl(var(--blueprint-line)/0.4)]',
            )}
          />
        </button>
      ))}

      <span className="font-mono text-[8px] tracking-[0.3em] text-muted-foreground/60 uppercase tabular-nums">
        {String(active + 1).padStart(2, '0')} / 06
      </span>
    </aside>
  )
}

export default SectionSpy
