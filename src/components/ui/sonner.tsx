'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'
import { CheckCircle, Info, AlertTriangle, XCircle } from 'lucide-react'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      position="top-right"
      richColors
      icons={{
        success: <CheckCircle className="size-5" />,
        info: <Info className="size-5" />,
        warning: <AlertTriangle className="size-5" />,
        error: <XCircle className="size-5" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border group-[.toaster]:border-[hsl(var(--border))]',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-foreground group-[.toast]:text-background',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
