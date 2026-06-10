import { CodeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
      href="/"
      role="link"
      aria-label="Home"
      className="el-focus-styles rounded-md flex items-center gap-2 group"
    >
      <span className="font-pixel text-xl font-bold tracking-widest text-foreground group-hover:text-primary transition-colors duration-300 ">
       Yosef <span className="text-primary">Codes <CodeIcon     className="size-6 inline-block text-primary" /></span>
      </span>
    </Link>
  )
}

export default Logo
