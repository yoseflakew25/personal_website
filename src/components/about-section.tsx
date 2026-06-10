'use client'
import Image from 'next/image'
import dubaiCon from '~/assets/images/hero.jpg'
import Socials from './socials'
import ScrollReveal from './ui/scroll-reveal'

const AboutSection = () => {
  return (
    <section
      className="grid md:grid-cols-5 gap-8 sm:gap-12 relative pt-8 !border-b-0"
      aria-label="About"
    >
      <div className="space-y-6 md:col-span-3 order-2 sm:order-1 self-center">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-primary/50" />
            <span className="font-sans text-xs text-primary/70 tracking-widest uppercase font-medium">
              Fullstack Engineer & UI/UX Designer
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <h1 className="font-pixel font-bold text-4xl sm:text-6xl tracking-wider leading-tight text-foreground lowercase">
            hello, i&apos;m yosef lakew.
          </h1>
        </ScrollReveal>

        <div className="space-y-4 max-w-2xl">
          <ScrollReveal variant="fadeUp" delay={0.5}>
            <p className="text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
              I am a Fullstack Engineer & UI/UX Designer who is passionate about creating meaningful
              digital experiences. With a solid foundation in both{' '}
              <span className="text-foreground font-medium">front-end and back-end</span>{' '}
              development, I bring a holistic approach to software design and engineering.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.6}>
            <p className="text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
              I love building tools that are{' '}
              <span className="text-foreground font-medium">user friendly, simple</span> and{' '}
              <span className="text-foreground font-medium">delightful</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.7}>
            <p className="text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
              My expertise lies in developing intuitive{' '}
              <span className="text-foreground font-medium">
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

      <div className="relative block sm:hidden md:block md:col-span-2 order-1 sm:order-2 self-center max-w-[340px] mx-auto">
        <div className="relative group">
          <div className="relative overflow-hidden rounded-xl aspect-square mb-6 border border-border/30 bg-card/50">
            <Image
              alt="Speaking on stage at Dubai police station during a presentation"
              src={dubaiCon}
              placeholder="blur"
              className="rounded-xl shadow-sm size-full object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Companies', value: '5+' },
              { label: 'Users Served', value: '2,000+' },
              { label: 'Projects Shipped', value: '6+' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-3 rounded-lg border border-border/30 bg-card/40 backdrop-blur-sm relative group/stat overflow-hidden transition-all duration-500 hover:bg-card/70 hover:border-primary/30 hover:shadow-[0_0_15px_hsl(var(--primary)/0.1)]"
              >
                <p className="font-sans font-bold text-lg sm:text-xl text-primary mb-0.5 tracking-tight">
                  {stat.value}
                </p>
                <p className="font-sans text-[11px] text-muted-foreground font-medium leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection