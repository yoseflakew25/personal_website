'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '~/lib/utils'
import SectionHeader from './ui/section-header'
import ScrollReveal from './ui/scroll-reveal'
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
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[hsl(var(--blueprint-line)/0)] group-hover/item:border-[hsl(var(--blueprint-line)/0.4)] transition-colors duration-300 pointer-events-none" />

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
          <SectionHeader title="Professional Experience" />
        </ScrollReveal>

        <ScrollReveal variant="blueprintReveal" delay={0.15}>
          <ol className="timeline-list space-y-8">
            <TimelineItem
              title="Full-Stack Developer"
              date="09/2025 – Present"
              organization="Yuba Now, Addis Ababa"
              initialExpanded={true}
              description={
                <ul className="space-y-2">
                  <li>
                    Design and develop end-to-end web solutions that empower
                    African founders to navigate their entrepreneurial
                    journeys—from problem discovery to market validation, working
                    across the stack using Next.js, Tailwind CSS, and FastAPI.
                  </li>
                  <li>
                    Led the full-stack development of Yuba&apos;s core web platform,
                    enabling founders to access AI-powered venture-building
                    modules across discovery, validation, and business modeling
                    stages.
                  </li>
                  <li>
                    Crafted responsive, mobile-first interfaces using Next.js and
                    Tailwind CSS, ensuring seamless navigation and accessibility
                    for early-stage founders across Africa.
                  </li>
                  <li>
                    Integrated FastAPI services to handle data-driven workflows,
                    improving response times and enabling personalized, context-aware recommendations.
                  </li>
                  <li>
                    Improved platform load times by 45% and optimized rendering
                    performance through code-splitting, caching, and image
                    optimization strategies.
                  </li>
                  <li>
                    Collaborated closely with venture builders, designers, and
                    product leads to translate business goals into technical
                    solutions that align with Yuba&apos;s mission.
                  </li>
                  <li>
                    Deployed modular, reusable components and implemented API
                    integrations to support rapid feature expansion across modules
                    like Problem Validator and MVP Builder.
                  </li>
                  <li>
                    Adopted Agile practices, reducing sprint turnaround times by
                    30%, and maintained clean, maintainable code through peer
                    reviews and CI/CD pipelines.
                  </li>
                </ul>
              }
            />
            <TimelineItem
              title="Technical Lead"
              date="05/2025 – Present"
              organization="Masar (by A2SV), Addis Ababa"
              description={
                <ul className="space-y-2">
                  <li>
                    Led a team of developers in creating a robust web application
                    that supports recruitment and talent acquisition efforts,
                    resulting in a 35% increase in user engagement.
                  </li>
                  <li>
                    Developed tailored web solutions that align with Qatar&apos;s
                    Vision 2030, enhancing service delivery and user experience.
                  </li>
                  <li>
                    Implemented user-centric design principles, improving
                    navigation and accessibility, contributing to a 40% increase
                    in client satisfaction ratings.
                  </li>
                  <li>
                    Enhanced site performance and loading speeds by 50% through
                    regular audits and optimization strategies.
                  </li>
                  <li>
                    Adopted agile methodologies, resulting in a 25% reduction in
                    project timelines and improved team collaboration.
                  </li>
                  <li>
                    Provided ongoing mentorship to junior developers, fostering a
                    culture of continuous learning and professional growth.
                  </li>
                </ul>
              }
            />

            <TimelineItem
              title="Web Developer"
              date="03/2025 – 06/2025"
              organization="Akil LLC, Addis Ababa, Ethiopia"
              description={
                <ul className="space-y-2">
                  <li>
                    Implemented secure user authentication using JWT access and
                    refresh tokens, enhancing system security by approximately
                    40%.
                  </li>
                  <li>
                    Conducted 15+ user interviews to uncover user pain points and
                    preferences, leading to the development of 5 new features that
                    significantly improved website usability and overall
                    functionality.
                  </li>
                  <li>
                    Designed and deployed 10+ new features and functionalities,
                    contributing to a more robust and user-friendly platform
                    experience.
                  </li>
                </ul>
              }
            />

            <TimelineItem
              title="UI/UX Designer and Front-End Developer"
              date="11/2024 – Present"
              organization="DossieScholar, Addis Ababa, Ethiopia"
              description={
                <ul className="space-y-2">
                  <li>
                    Played a key role in designing and developing the user
                    interface and experience for DossieScholar — a digital
                    platform that centralizes and digitizes research papers from
                    Ethiopian universities using advanced LLM-powered text
                    extraction and Agentic RAG technology.
                  </li>
                  <li>
                    Created a clean, intuitive, responsive UI using Next.js,
                    Tailwind CSS, and Vercel, improving user engagement and
                    accessibility.
                  </li>
                  <li>
                    Built key site features highlighting DossieScholar&apos;s
                    offerings such as AI-powered retrieval, efficient
                    digitization, and searchable academic databases.
                  </li>
                  <li>
                    Collaborated with the backend development team to deploy fast,
                    secure, and scalable solutions tailored for students,
                    researchers, and academic institutions.
                  </li>
                </ul>
              }
            />

            <TimelineItem
              title="Technical Consultant"
              date="08/2024 – 01/2025"
              organization="Golden Visa Solutions - Airsun Trading PLC, Addis Ababa, Ethiopia"
              description={
                <ul className="space-y-2">
                  <li>
                    Managed end-to-end application support for 50+ international
                    student clients, ensuring accuracy, compliance, and on-time
                    delivery.
                  </li>
                  <li>
                    Drafted visa application letters, guidance documents, and
                    client communications; achieved 95% client satisfaction.
                  </li>
                  <li>
                    Collaborated with multidisciplinary teams to streamline intake
                    processes, reducing turnaround by 30%.
                  </li>
                </ul>
              }
            />

            <TimelineItem
              title="UI/UX Designer & Web Developer"
              date="07/2023 – 10/2023"
              organization="Eskalate (by A2SV), Addis Ababa, Ethiopia"
              description={
                <ul className="space-y-2">
                  <li>
                    Collaborated with the Eskalate team to design and develop a
                    modern, responsive web platform connecting businesses with
                    top-tier offshore software developers.
                  </li>
                  <li>
                    Led the UI/UX design process for core pages, including Home,
                    Our Services, About, Success Stories, and Contact, ensuring
                    consistent branding, intuitive navigation, and an engaging
                    user experience.
                  </li>
                  <li>
                    Designed and implemented dynamic web interfaces using modern
                    front-end frameworks, prioritizing performance, scalability,
                    and accessibility.
                  </li>
                  <li>
                    Worked with developers and stakeholders to deliver features
                    like talent discovery, project initiation flows, and developer
                    showcases, boosting user engagement and conversion rates.
                  </li>
                </ul>
              }
            />

            <TimelineItem
              title="UI/UX Designer & Full-Stack Developer"
              date="07/2022 – 12/2022"
              organization="Ethiopian Rock-Library Website, Addis Ababa, Ethiopia"
              description={
                <ul className="space-y-2">
                  <li>
                    Developed a public dataset platform for Ethiopian mineral
                    rocks using Vue.js and Node.js.
                  </li>
                  <li>
                    Simplified researcher uploads and access, boosting data
                    submissions by 50%.
                  </li>
                  <li>
                    Improved workflow efficiency by 30% through optimized data
                    handling.
                  </li>
                  <li>
                    Built a responsive, scalable, and user-friendly system for
                    academic use.
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
