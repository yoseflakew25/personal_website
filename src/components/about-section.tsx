'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import dubaiCon from '~/assets/images/hero.jpg'
import Socials from './socials'
import ScrollReveal from './ui/scroll-reveal'

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
        }
      }, 60)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <span>
      {displayText}
      {showCursor && <span className="typewriter-cursor" />}
    </span>
  )
}

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <div
    className={`${className} animate-float`}
    style={{ animationDelay: `${delay}s`, animationDuration: '8s' }}
  />
)

const AboutSection = () => {
  return (
    <section className="grid md:grid-cols-3 gap-8 sm:gap-6 relative pt-8 " aria-label="About">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <FloatingShape
          className="absolute top-10 -left-20 w-32 h-32 border border-cyber-cyan/10 rotate-45"
          delay={0}
        />
        <FloatingShape
          className="absolute top-40 right-0 w-20 h-20 border border-cyber-magenta/10 rotate-12"
          delay={2}
        />
        <FloatingShape
          className="absolute bottom-20 left-1/4 w-16 h-16 border border-cyber-purple/10 rotate-[30deg]"
          delay={4}
        />
        <FloatingShape
          className="absolute top-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-cyber-cyan/20"
          delay={1}
        />
        <FloatingShape
          className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full bg-cyber-magenta/30"
          delay={3}
        />
      </div>

      <div className="space-y-6 md:col-span-2 order-2 sm:order-1 self-center">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-cyber-cyan/50" />
            <span className="font-jetbrains text-xs text-cyber-cyan/70 tracking-widest uppercase">
              Fullstack Engineer & UI/UX Designer
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <h1 className="font-orbitron font-bold text-4xl sm:text-6xl tracking-wide leading-tight">
            <TypewriterText text="Hello, I'm Yosef Lakew." delay={500} />
          </h1>
        </ScrollReveal>

        <div className="space-y-4 max-w-2xl">
          <ScrollReveal variant="fadeUp" delay={0.5}>
            <p className="text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
              I am a Fullstack Engineer & UI/UX Designer who is passionate about creating meaningful
              digital experiences. With a solid foundation in both{' '}
              <span className="text-cyber-cyan neon-text-cyan">front-end and back-end</span>{' '}
              development, I bring a holistic approach to software design and engineering.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.6}>
            <p className="text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
              I love building tools that are{' '}
              <span className="text-cyber-cyan neon-text-cyan">user friendly, simple</span> and{' '}
              <span className="text-cyber-magenta neon-text-magenta">delightful</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.7}>
            <p className="text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
              My expertise lies in developing intuitive{' '}
              <span className="text-cyber-cyan neon-text-cyan">
                user interfaces and robust back-end systems
              </span>
              .
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fadeUp" delay={0.9}>
          <div className="space-y-3 pt-4">
            <Socials />
          </div>
        </ScrollReveal>
      </div>

      {/* Hero Image with Cyberpunk Treatment */}
      <ScrollReveal variant="scaleIn" delay={0.3} className="relative block sm:hidden md:block order-1 sm:order-2 self-center">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-md bg-gradient-to-br from-cyber-cyan/30 via-transparent to-cyber-magenta/20 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />

          <div className="absolute -inset-2 pointer-events-none">
            <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyber-cyan/50 transition-all duration-300 group-hover:w-7 group-hover:h-7 group-hover:border-cyber-cyan" />
            <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-cyber-cyan/50 transition-all duration-300 group-hover:w-7 group-hover:h-7 group-hover:border-cyber-cyan" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-cyber-magenta/40 transition-all duration-300 group-hover:w-7 group-hover:h-7 group-hover:border-cyber-magenta" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyber-magenta/40 transition-all duration-300 group-hover:w-7 group-hover:h-7 group-hover:border-cyber-magenta" />
          </div>

          <div className="relative overflow-hidden rounded-md aspect-square mb-6">
            <Image
              alt="Speaking on stage at Dubai police station during a presentation"
              src={dubaiCon}
              placeholder="blur"
              className="rounded-md shadow-md size-full object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-cyber-cyan/10 pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background:
                  'repeating-linear-gradient(0deg, transparent, transparent 3px, hsla(180,100%,50%,0.03) 3px, hsla(180,100%,50%,0.03) 4px)',
              }}
            />
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Companies', value: '5+', color: 'cyan' },
              { label: 'Users Served', value: '2,000+', color: 'magenta' },
              { label: 'Projects Shipped', value: '6+', color: 'cyan' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="p-3 rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-sm relative group/stat overflow-hidden"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover/stat:opacity-10 transition-opacity duration-500 bg-cyber-${stat.color}`}
                />
                <p
                  className={`font-orbitron font-bold text-lg sm:text-xl text-cyber-${stat.color} mb-0.5`}
                >
                  {stat.value}
                </p>
                <p className="font-jetbrains text-[10px]  uppercase tracking-tighter leading-tight">
                  {stat.label}
                </p>
                {/* Micro-glow effect */}
                <div
                  className={`absolute -bottom-1 -right-1 size-8 blur-xl opacity-0 group-hover/stat:opacity-40 transition-opacity bg-cyber-${stat.color}`}
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default AboutSection
