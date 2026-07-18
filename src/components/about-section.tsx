'use client'
import Image from 'next/image'
import { FiGithub } from 'react-icons/fi'
import { Linkedin } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import { TbBrandX, TbBrandTelegram } from 'react-icons/tb'
import { SiGmail } from 'react-icons/si'
import heroImg from '~/assets/images/hero.jpg'

const socialLinks = [
  { icon: <FiGithub size={18} />, label: 'GITHUB', href: 'https://github.com/yoseflakew25' },
  { icon: <Linkedin size={18} />, label: 'LINKEDIN', href: 'https://www.linkedin.com/in/yosef-lakeww/' },
  { icon: <FaInstagram size={18} />, label: 'INSTAGRAM', href: 'https://www.instagram.com/jovion__/' },
  { icon: <TbBrandX size={18} />, label: 'X', href: 'https://x.com/YOSEFLAKEW48676' },
  { icon: <TbBrandTelegram size={18} />, label: 'TELEGRAM', href: 'https://t.me/Josscy' },
  { icon: <SiGmail size={18} />, label: 'EMAIL', href: 'mailto:yoseflakewdev@gmail.com' },
]

const AboutSection = () => {
  return (
    <section
      className="relative"
      aria-label="About"
    >
      {/* Hero — two column: left text, right card */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 min-h-[calc(100dvh-10rem)] py-12">
        {/* Left: Text */}
        <div className="flex-1 space-y-8 w-full">
          <span className="font-mono block text-xs sm:text-sm tracking-[0.25em] text-muted-foreground uppercase font-medium">
            HELLO THERE, MY NAME IS
          </span>

          <div className="space-y-0">
            <h1 className="font-display block text-[13vw] tracking-tight sm:text-[10vw] md:text-[7.5rem] lg:text-[8rem] font-bold text-foreground leading-[0.95] uppercase">
              YOSEF
            </h1>
            <h1 className="font-display block text-[13vw] tracking-tight sm:text-[10vw] md:text-[7.5rem] lg:text-[8rem] font-bold text-foreground leading-[0.95] uppercase">
              LAKEW
            </h1>
          </div>

          <div className="pt-1">
            <span
              className="font-display block text-[6vw] tracking-tight sm:text-[4.5vw] md:text-[2.25rem] lg:text-[2.5rem] font-bold leading-[1.1] select-none uppercase"
              style={{
                WebkitTextStroke: '1.5px hsl(var(--foreground) / 0.78)',
                color: 'transparent',
              }}
            >
              FULLSTACK ENGINEER & UI/UX DESIGNER
            </span>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <span className="h-px w-12 bg-[hsl(var(--blueprint-line)/0.4)]" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">
              BASED IN ADDIS ABABA, ETHIOPIA
            </span>
          </div>
        </div>

        {/* Right: Blueprint Spec Card */}
        <div className="w-full max-w-md lg:max-w-[540px] border border-[hsl(var(--border))] bg-card">
          <div className="relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.5)] z-10" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.5)] z-10" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.5)] z-10" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.5)] z-10" />

            {/* Card header */}
            <div className="border-b border-[hsl(var(--border))] px-3 py-1.5">
              <p className="text-blueprint-meta">SPECIFICATION SHEET</p>
              <p className="text-blueprint-meta">PERSON · 001</p>
            </div>

            {/* Image + Social Grid — bigger */}
            <div className="grid grid-cols-2 border-b border-[hsl(var(--border))]">
              {/* Image */}
              <div className="border-r border-[hsl(var(--border))] p-1.5 flex items-center justify-center group">
                <div className="aspect-square w-full max-w-[240px] relative overflow-hidden">
                  <Image alt="Yosef Lakew" src={heroImg} placeholder="blur" className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" priority sizes="240px" />
                </div>
              </div>

              {/* Social Links */}
              <div className="p-1.5 space-y-1.5">
                <p className="text-blueprint-meta mb-2">CONNECT</p>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-2.5 font-mono text-xs tracking-wider text-muted-foreground uppercase transition-all duration-300 ease-out border border-[hsl(var(--border))] px-2.5 py-1.5 hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_hsl(var(--blueprint-line)/0.15)] active:translate-x-0 active:shadow-none"
                    aria-label={social.label}
                  >
                    {/* Corner accent */}
                    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-transparent group-hover:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-300" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-hover:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-300" />
                    {/* Icon */}
                    <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">{social.icon}</span>
                    {/* Label */}
                    <span className="transition-all duration-300 group-hover:tracking-[0.15em]">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="px-3 py-1.5 border-b border-[hsl(var(--border))]">
              <p className="text-blueprint-meta mb-0.5">PROFILE</p>
              <p className="font-mono text-xs font-semibold text-foreground/85 leading-relaxed">
                Fullstack Engineer & UI/UX Designer passionate about creating meaningful digital experiences. With a solid foundation in both front-end and back-end development, I bring a holistic approach to software design and engineering. I love building tools that are user friendly, simple and delightful.
              </p>
            </div>

            {/* Stats */}
            <div className="px-3 py-1.5">
              <p className="text-blueprint-meta mb-0.5">STATISTICS</p>
              <div className="grid grid-cols-3 gap-1">
                {[
                  { label: 'COMPANIES', value: '5+' },
                  { label: 'USERS', value: '2K+' },
                  { label: 'PROJECTS', value: '6+' },
                ].map((stat) => (
                  <div key={stat.label} className="border border-[hsl(var(--border))] p-1 text-center">
                    <p className="font-mono text-xs font-bold text-foreground">{stat.value}</p>
                    <p className="font-mono text-[7px] tracking-wider text-muted-foreground uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card footer */}
            <div className="border-t border-[hsl(var(--border))] px-3 py-1 flex justify-between">
              <span className="text-blueprint-meta">REV A</span>
              <span className="text-blueprint-meta">NOT TO SCALE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dashed border-[hsl(var(--border))] mt-8" />
    </section>
  )
}

export default AboutSection