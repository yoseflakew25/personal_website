import * as React from 'react'

import {cn} from '~/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, ...props}, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full lowercase border border-[hsl(var(--border))] bg-transparent px-3 py-2 font-mono text-xs ring-offset-background file:border-0 file:bg-transparent file:text-xs file:font-mono placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        autoComplete="off"
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export {Input}
