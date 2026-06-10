'use client'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '~/components/ui/sheet'
import Logo from './logo'
import NavList from './nav-list'
import { useState } from 'react'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="p-2 rounded-md border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-all active:scale-95">
        <Menu size={20} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="px-6 border-l border-border bg-background/95 backdrop-blur-2xl"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <SheetHeader className="mt-4">
          <SheetTitle className="text-left">
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8">
          <NavList setOpen={setOpen} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
