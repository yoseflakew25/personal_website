'use client'
import React from 'react'
import { motion, useScroll } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="h-[2px] origin-left fixed top-0 inset-x-0 z-50"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, hsl(180 100% 50%), hsl(320 100% 60%), hsl(50 100% 50%))',
        boxShadow: '0 0 10px hsl(180 100% 50% / 0.5), 0 0 30px hsl(180 100% 50% / 0.2)',
      }}
    />
  )
}

export default ScrollProgress
