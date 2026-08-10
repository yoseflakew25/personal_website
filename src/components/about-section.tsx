'use client'
import Image from 'next/image'
import { FiGithub } from 'react-icons/fi'
import { Linkedin } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import { TbBrandX, TbBrandTelegram } from 'react-icons/tb'
import { SiGmail } from 'react-icons/si'
import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'
import heroImg from '~/assets/images/hero.jpg'
import { CornerBrackets } from '~/components/ui/corner-brackets'
import CountUp from '~/components/ui/count-up'

const socialLinks = [
  { icon: <FiGithub size={18} />, label: 'GITHUB', href: 'https://github.com/yoseflakew25' },
  { icon: <Linkedin size={18} />, label: 'LINKEDIN', href: 'https://www.linkedin.com/in/yosef-lakeww/' },
  { icon: <FaInstagram size={18} />, label: 'INSTAGRAM', href: 'https://www.instagram.com/jovion__/' },
  { icon: <TbBrandX size={18} />, label: 'X', href: 'https://x.com/YOSEFLAKEW48676' },
  { icon: <TbBrandTelegram size={18} />, label: 'TELEGRAM', href: 'https://t.me/Josscy' },
  { icon: <SiGmail size={18} />, label: 'EMAIL', href: 'mailto:yoseflakewdev@gmail.com' },
]

const stats = [
  { label: 'COMPANIES', value: 5, suffix: '+' },
  { label: 'USERS', value: 2, suffix: 'K+' },
  { label: 'PROJECTS', value: 6, suffix: '+' },
]

/* ===== Staggered load-in helper — fade-slide reveal =====
   Note: a clip-path variant was tried but framer-motion leaves the SSR'd
   initial clipPath in place after hydration (element stuck invisible), so
   all hero elements use opacity + transform, which animate reliably. */
const HeroFade = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const AboutSection = () => {
  return (
    <section
      className="relative"
      aria-label="About"
    >
      {/* Cover sheet tag — hero is sheet 00 */}
      <HeroFade delay={0.05}>
        <span className="hidden md:inline absolute top-0 right-0 font-mono text-[9px] tracking-[0.25em] text-muted-foreground/60 uppercase">
          SHEET 00/06 · COVER
        </span>
      </HeroFade>

      {/* Hero — two column: left text, right card */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 min-h-[calc(100dvh-10rem)] py-6">
        {/* Left: Text */}
        <div className="flex-1 space-y-8 w-full">
          <HeroFade delay={0.2}>
            <span className="font-mono text-[10px] sm:text-xs tracking-wider text-[hsl(var(--blueprint-line))] border border-[hsl(var(--blueprint-line)/0.3)] bg-[hsl(var(--blueprint-line)/0.05)] px-2 py-0.5 w-fit uppercase">
              HELLO THERE, MY NAME IS
            </span>
          </HeroFade>

          <div className="space-y-0">
            <HeroFade delay={0.3}>
              <h1 className="font-display block text-[14vw] xs:text-[13vw] sm:text-[10vw] md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-bold text-foreground leading-[0.95] uppercase">
                YOSEF
              </h1>
            </HeroFade>
            <HeroFade delay={0.4}>
              <h1 className="font-display block text-[14vw] xs:text-[13vw] sm:text-[10vw] md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-bold text-foreground leading-[0.95] uppercase">
                LAKEW
              </h1>
            </HeroFade>
          </div>

          <HeroFade delay={0.5}>
            <div className="pt-1">
              <span
                className="font-display block text-[5.5vw] xs:text-[6vw] sm:text-[4.5vw] md:text-[1.8rem] lg:text-[2.25rem] xl:text-[2.5rem] font-bold leading-[1.1] select-none uppercase"
                style={{
                  WebkitTextStroke: '1.5px hsl(var(--foreground) / 0.78)',
                  color: 'transparent',
                }}
              >
                FULLSTACK ENGINEER & UI/UX DESIGNER
              </span>
            </div>
          </HeroFade>

          <HeroFade delay={0.6}>
            <p className="font-mono text-xs sm:text-sm text-muted-foreground/90 leading-relaxed max-w-[42rem] border-l-2 border-[hsl(var(--blueprint-line)/0.3)] pl-4">
              Full-stack engineer building production systems world wide. I <span className="text-[hsl(var(--blueprint-line)/0.85)] font-semibold">ship fast</span>, <span className="text-[hsl(var(--blueprint-line)/0.85)] font-semibold">optimize relentlessly</span>, and thrive in cross-functional teams.
            </p>
          </HeroFade>

        </div>

        {/* Right: Blueprint Spec Card */}
        <HeroFade delay={0.35} className="w-full max-w-md lg:max-w-[540px]">
          <div className="border border-[hsl(var(--border))] bg-card transition-all duration-300 hover:border-[hsl(var(--blueprint-line)/0.5)] hover:shadow-[0_0_0_1px_hsl(var(--blueprint-line)/0.08)]">
            <div className="relative">
              {/* Always-visible blueprint corner brackets */}
              <CornerBrackets />

              {/* Card header */}
              <div className="border-b border-[hsl(var(--border))] px-3 py-1.5">
                <p className="text-blueprint-meta">SPECIFICATION SHEET</p>
                <p className="text-blueprint-meta">PERSON · 001</p>
              </div>

              {/* Image + Social Grid — bigger */}
              <div className="grid grid-cols-1 xs:grid-cols-2 border-b border-[hsl(var(--border))]">
                {/* Image */}
                <div className="xs:border-r border-b xs:border-b-0 border-[hsl(var(--border))] p-2 xs:p-1.5 flex items-center justify-center group">                    <div className="aspect-square w-full max-w-[200px] xs:max-w-[240px] relative overflow-hidden">
                      <Image alt="Yosef Lakew" src={heroImg} placeholder="blur" className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" priority sizes="240px" />
                      {/* Blueprint centerline through the portrait */}
                      <span aria-hidden="true" className="blueprint-centerline" />
                      <span aria-hidden="true" className="blueprint-centerline-dot" />
                    </div>
                </div>

                {/* Social Links */}
                <div className="p-1.5 space-y-1.5">
                  <span className="font-mono text-[9px] tracking-wider text-[hsl(var(--blueprint-line))] border border-[hsl(var(--blueprint-line)/0.3)] bg-[hsl(var(--blueprint-line)/0.05)] px-2 py-0.5 w-fit mb-2 block uppercase">CONNECT</span>
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
                      <CornerBrackets size="0.5rem" colorClass="border-transparent" hoverColorClass="group-hover:border-[hsl(var(--blueprint-line)/0.4)]" transitionClass="transition-colors duration-300" renderTopRight={false} renderBottomLeft={false} />
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
                <span className="font-mono text-[9px] tracking-wider text-[hsl(var(--blueprint-line))] border border-[hsl(var(--blueprint-line)/0.3)] bg-[hsl(var(--blueprint-line)/0.05)] px-2 py-0.5 w-fit mb-1.5 block uppercase">PROFILE</span>
                <p className="font-mono text-xs font-semibold text-foreground/85 leading-relaxed">
                  Fullstack Engineer & UI/UX Designer passionate about creating meaningful digital experiences. With a solid foundation in both front-end and back-end development, I bring a holistic approach to software design and engineering. I love building tools that are user friendly, simple and delightful.
                </p>
              </div>

            {/* Stats */}
            <div className="px-3 py-1.5">
              <span className="font-mono text-[9px] tracking-wider text-[hsl(var(--blueprint-line))] border border-[hsl(var(--blueprint-line)/0.3)] bg-[hsl(var(--blueprint-line)/0.05)] px-2 py-0.5 w-fit mb-1.5 block uppercase">STATISTICS</span>
              <div className="grid grid-cols-3 gap-1.5">
                {stats.map((stat) => (
                  <div key={stat.label} className="border border-[hsl(var(--blueprint-line)/0.3)] bg-[hsl(var(--blueprint-line)/0.05)] p-1.5 xs:p-1.5 text-center hover:border-[hsl(var(--blueprint-line)/0.5)] transition-colors duration-300">
                    <p className="font-mono text-xs font-bold text-[hsl(var(--blueprint-line))] tabular-nums">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="font-mono text-[9px] tracking-wider text-[hsl(var(--blueprint-line)/0.7)] uppercase">{stat.label}</p>
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
        </HeroFade>
      </div>


    </section>
  )
}

export default AboutSection