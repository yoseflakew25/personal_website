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
      <SheetTrigger className="p-2 rounded-md border border-cyber-cyan/20 bg-cyber-cyan/5 text-cyber-cyan hover:bg-cyber-cyan/10 transition-all active:scale-95">
        <Menu size={20} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="px-6 border-l border-cyber-cyan/20 bg-background/95 backdrop-blur-2xl"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent" />

        <SheetHeader className="mt-4">
          <SheetTitle className="text-left">
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8">
          <NavList setOpen={setOpen} />
        </div>

        {/* Cyber Decorative bottom element */}
        <div className="absolute bottom-8 left-6 right-6 opacity-20 pointer-events-none">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-cyber-cyan to-transparent" />
            <div className="w-1 h-1 rounded-full bg-cyber-cyan" />
          </div>
          <p className="font-jetbrains text-[8px] uppercase tracking-[0.2em] mt-2 text-cyber-cyan">
            System.Access_Granted
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
