'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '~/lib/utils'
import SectionHeader from './ui/section-header'
import ScrollReveal from './ui/scroll-reveal'
import { CornerBrackets } from './ui/corner-brackets'
import './experience.css'

interface TimelineItemProps {
  title: string
  date: string
  organization?: string
  description: React.ReactNode
  initialExpanded?: boolean
}

const TimelineItem = ({
  title,
  date,
  organization,
  description,
  initialExpanded = false,
}: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded)

  return (
    <li className="timeline-item">
      {/* BR corner accent */}
      <CornerBrackets size="0.625rem" colorClass="border-[hsl(var(--blueprint-line)/0)]" hoverColorClass="group-hover/item:border-[hsl(var(--blueprint-line)/0.4)]" transitionClass="transition-colors duration-300" renderTopLeft={false} renderTopRight={false} renderBottomLeft={false} />

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group/item"
        aria-expanded={isExpanded}
      >
        <div className="flex items-start gap-3 pr-6 relative">
          {/* Chevron toggle */}
          <ChevronDown
            size={13}
            className={cn(
              'absolute right-0 top-0.5 text-muted-foreground transition-transform duration-300 shrink-0',
              isExpanded ? 'rotate-180 text-[hsl(var(--blueprint-line))]' : 'group-hover/item:text-foreground',
            )}
          />

          <div className="flex-1 space-y-0.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h4 className="font-mono text-sm uppercase tracking-wider text-foreground group-hover/item:text-[hsl(var(--blueprint-line))] transition-colors duration-200">
                {title}
              </h4>
              {/* Date badge */}
              <span className="font-mono text-[9px] xs:text-[10px] tracking-wider text-[hsl(var(--blueprint-line))] border border-[hsl(var(--blueprint-line)/0.3)] bg-[hsl(var(--blueprint-line)/0.05)] px-2 py-0.5 shrink-0 self-start">
                {date}
              </span>
            </div>
            {organization && (
              <p className="font-mono text-[10px] xs:text-[11px] text-muted-foreground tracking-wide">
                {organization}
              </p>
            )}
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {/* Dashed separator — blueprint spec divider */}
            <div className="mt-3 mb-2 flex items-center gap-2">
              <span className="h-px flex-1 border-t border-dashed border-[hsl(var(--blueprint-line)/0.2)]" />
              <span className="font-mono text-[9px] tracking-[0.2em] text-[hsl(var(--blueprint-line)/0.4)] uppercase">DETAILS</span>
              <span className="h-px flex-1 border-t border-dashed border-[hsl(var(--blueprint-line)/0.2)]" />
            </div>
            <div className="timeline-text text-muted-foreground text-xs leading-relaxed">
              {description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

const Experience = () => {
  return (
    <article className="space-y-8" id="experience">
      <section className="timeline space-y-10">
        <ScrollReveal variant="blueprintReveal">
          <SectionHeader title="Professional Experience" sheet="SHEET 02/06" />
        </ScrollReveal>

        <ScrollReveal variant="blueprintReveal" delay={0.15}>
          <ol className="timeline-list space-y-8">
            <TimelineItem
              title="Full-Stack Engineer"
              date="11/2025 – 04/2026"
              organization="Yuba, Addis Ababa"
              initialExpanded={true}
              description={
                <ul className="space-y-2">
                  <li>
                    Built an AI-powered venture-building platform helping
                    early-stage African founders validate problems, design value
                    propositions, develop MVPs, and test market assumptions.
                  </li>
                  <li>
                    Developed multi-tenant organizational workflows, including
                    invitations, RBAC, team management, onboarding, analytics
                    dashboards, and credit allocation systems.
                  </li>
                  <li>
                    Engineered AI-driven research and problem discovery modules
                    that improved founder validation efficiency by 65%.
                  </li>
                  <li>
                    Designed structured value proposition systems that reduced
                    value proposition creation time by 45%.
                  </li>
                  <li>
                    Implemented secure backend-integrated infrastructure with
                    tenant-aware authorization and workspace isolation for
                    scalable organizational management.
                  </li>
                </ul>
              }
            />

            <TimelineItem
              title="Lead Full-Stack Developer"
              date="12/2024 – 10/2025"
              organization="Akil (by A2SV), Addis Ababa"
              description={
                <ul className="space-y-2">
                  <li>
                    Led the technical architecture and development of Akil&apos;s web
                    platform, ensuring scalability, performance, and security.
                  </li>
                  <li>
                    Audited 37 route files and 150+ endpoints, implementing 38
                    concurrency optimizations, 9 bug fixes, and multiple
                    caching/query improvements to reduce latency and strengthen
                    API reliability.
                  </li>
                  <li>
                    Resolved and documented 90+ high-priority and 35+ moderate
                    bugs on the web, improving system stability and reliability.
                  </li>
                  <li>
                    Cut page load time by 5 seconds and enhanced SEO by
                    redesigning state management with server-side components and
                    URL-based state handling.
                  </li>
                  <li>
                    Upgraded legacy web applications and dependencies to current
                    versions, addressing known security vulnerabilities and
                    improving long-term stability.
                  </li>
                  <li>
                    Owned the full development cycle for both backend services
                    and web applications; partnered with clients to refine
                    requirements.
                  </li>
                </ul>
              }
            />

            <TimelineItem
              title="UI/UX Designer & Web Developer"
              date="10/2023 – 11/2024"
              organization="Eskalate (by A2SV), Addis Ababa"
              description={
                <ul className="space-y-2">
                  <li>
                    Architected a scalable web dashboard and business account
                    system, leading to a 25% increase in business user
                    registrations.
                  </li>
                  <li>
                    Accelerated web app performance by 50% through server-side
                    rendering, decreasing TTFB from 1.6s to 0.8s.
                  </li>
                  <li>
                    Deployed a centralized logging and monitoring pipeline on
                    GCP, enabling error detection and alerting; reduced issue
                    resolution time by 50% through automated incident
                    notifications.
                  </li>
                  <li>
                    Delivered UI prototypes for 5+ new features, integrating
                    feedback from 20+ beta testers to improve usability and
                    reduce friction before launch.
                  </li>
                  <li>
                    Fostered an inclusive team via 70+ code reviews and 10+
                    walkthroughs.
                  </li>
                </ul>
              }
            />
          </ol>
        </ScrollReveal>
      </section>
    </article>
  )
}

export default Experience
