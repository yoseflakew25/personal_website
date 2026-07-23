'use client'
import { ReactNode } from 'react'

import { ThemeProvider } from '~/components/ui/theme-provider'
import { Toaster } from '~/components/ui/sonner'

const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}

export default RootProviders
