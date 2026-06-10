'use client'
import { ReactNode } from 'react'

import { ThemeProvider } from '~/components/ui/theme-provider'
import { TooltipProvider } from '~/components/ui/tooltip'
import ReactQueryProvider from './react-query'
import { Toaster } from '~/components/ui/sonner'

const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ReactQueryProvider>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  )
}

export default RootProviders
