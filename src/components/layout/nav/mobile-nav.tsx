'use client'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '~/components/ui/sheet'
import Logo from './logo'
import NavList from './nav-list'
import { useState } from 'react'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="group/btn relative size-8 border border-[hsl(var(--border))] grid place-content-center hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))] transition-all duration-200 text-muted-foreground el-focus-styles">
        <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.3)] transition-colors duration-200" />
        <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.3)] transition-colors duration-200" />
        <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.3)] transition-colors duration-200" />
        <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover/btn:border-[hsl(var(--blueprint-line)/0.3)] transition-colors duration-200" />
        <Menu size={16} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="px-6 border-l border-[hsl(var(--border))] bg-[hsl(var(--background))]"
      >
        {/* Corner accents on sheet */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.3)] z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.3)] z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.3)] z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.3)] z-10 pointer-events-none" />

        {/* Spec header */}
        <div className="border-b border-dashed border-[hsl(var(--border)/0.5)] pb-2 mb-4 -mx-6 px-6">
          <div className="flex items-center gap-2">
            <span className="text-blueprint-meta text-[8px] tracking-[0.2em]">NAV</span>
            <span className="h-2 w-px bg-[hsl(var(--border))]" aria-hidden="true" />
            <span className="text-blueprint-meta text-[8px] tracking-[0.2em]">MOBILE</span>
          </div>
        </div>

        <SheetHeader className="mt-2">
          <SheetTitle className="text-left">
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6">
          <NavList setOpen={setOpen} />
        </div>

        {/* Sheet footer */}
        <div className="absolute bottom-4 left-6 right-6 border-t border-dashed border-[hsl(var(--border)/0.5)] pt-2">
          <span className="text-blueprint-note text-[8px]">SITE NAV</span>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
