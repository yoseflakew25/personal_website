import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
      href="/"
      role="link"
      aria-label="Home"
      className="group flex items-center gap-3 el-focus-styles"
    >
      {/* Small spec bracket */}
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="text-[9px] tracking-[0.2em] text-muted-foreground font-mono uppercase leading-none">PORTFOLIO</span>
        <span className="text-[9px] tracking-[0.2em] text-muted-foreground font-mono uppercase leading-none">V1.0</span>
      </span>

      {/* Logo mark */}
      <span className="font-mono text-sm sm:text-base tracking-[0.15em] text-foreground uppercase group-hover:text-[hsl(var(--blueprint-line))] transition-colors duration-200 font-bold">
        <span className="text-[hsl(var(--blueprint-line)/0.5)]">{'<'}</span>
        YL
        <span className="text-[hsl(var(--blueprint-line)/0.5)]">{'/>'}</span>
      </span>

      {/* Small vertical divider */}
      <span className="hidden sm:block h-4 w-px bg-[hsl(var(--border))]" aria-hidden="true" />

      <span className="hidden sm:block font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
        Yosef Lakew
      </span>
    </Link>
  )
}

export default Logo
