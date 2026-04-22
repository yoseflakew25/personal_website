'use client'
import { ReactNode } from 'react'

import { TooltipProvider } from '~/components/ui/tooltip'
import ReactQueryProvider from './react-query'
import { Toaster } from '~/components/ui/sonner'
import CyberCursor from '~/components/ui/cyber-cursor'

const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryProvider>
      <TooltipProvider>
        <CyberCursor />
        {children}
        <Toaster />
      </TooltipProvider>
    </ReactQueryProvider>
  )
}

export default RootProviders
