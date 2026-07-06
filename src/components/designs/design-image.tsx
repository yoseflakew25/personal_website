'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { cn } from '~/lib/utils'

type DesignImageProps = {
  src: StaticImageData | string
  alt: string
  className?: string
  fill?: boolean
  priority?: boolean
  sizes?: string
}

const DesignImage = ({
  src,
  alt,
  className,
  fill = true,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: DesignImageProps) => {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div
        className={cn(
          'bg-gradient-to-br from-primary/15 via-card/50 to-primary/5',
          fill && 'absolute inset-0',
          className,
        )}
        aria-hidden
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      placeholder={typeof src !== 'string' ? 'blur' : undefined}
      className={cn('object-cover', className)}
      onError={() => setHasError(true)}
    />
  )
}

export default DesignImage
