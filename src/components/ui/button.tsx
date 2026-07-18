import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-mono text-xs tracking-wider uppercase el-focus-styles transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[0.5px]',
  {
    variants: {
      variant: {
        default:
          'bg-foreground text-background border border-foreground hover:bg-foreground/90',
        destructive:
          'bg-destructive text-destructive-foreground border border-destructive hover:bg-destructive/90',
        outline:
          'bg-transparent text-foreground border border-[hsl(var(--border))] hover:border-[hsl(var(--blueprint-line)/0.5)] hover:bg-[hsl(var(--blueprint-line)/0.05)]',
        secondary:
          'bg-[hsl(var(--secondary))] text-secondary-foreground border border-[hsl(var(--border))] hover:bg-[hsl(var(--secondary)/0.8)]',
        ghost:
          'bg-transparent text-foreground hover:bg-[hsl(var(--blueprint-line)/0.05)]',
        link:
          'text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3',
        lg: 'h-10 px-6',
        xs: 'h-6 px-2 text-[9px]',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
