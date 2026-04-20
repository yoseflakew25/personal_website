import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GlitchText from '~/components/ui/glitch-text'

const Logo = () => {
  return (
    <Link
      href="/"
      role="link"
      aria-label="Home"
      className="el-focus-styles rounded-md flex items-center gap-2.5 group"
    >
      <GlitchText
        text="YL"
        className="font-orbitron text-xl font-bold tracking-[0.2em] text-cyber-cyan group-hover:text-white transition-colors duration-300"
      />
    </Link>
  )
}

export default Logo
