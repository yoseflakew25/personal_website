'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname()

  return (
    <div key={pathname} className="w-full animate-page-enter">
      {children}
    </div>
  )
}

export default PageTransition
