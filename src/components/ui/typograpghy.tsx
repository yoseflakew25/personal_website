import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/lib/utils'

const typography = cva(['font-bold inline-block'], {
  variants: {
    variant: {
      h2: 'font-orbitron text-lg tracking-wider uppercase inline-block',
      paragraph: 'text-muted-foreground font-normal block text-base font-sans',
    },
    size: {
      sm: 'text-sm',
    },
    font: {
      sans: 'font-sans',
      dank: 'font-dank',
      ubuntu: 'font-ubuntu',
      orbitron: 'font-orbitron',
    },
  },
  defaultVariants: {
    variant: 'h2',
  },
})

export interface ButtonVariants extends VariantProps<typeof typography> { }

export const typo = (variants: ButtonVariants) => cn(typography(variants))
