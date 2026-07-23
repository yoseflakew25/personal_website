import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { Palette, ArrowUpRight } from 'lucide-react'

const ExploreSection = () => {
  return (
    <section aria-label="explore more" className="scroll-mt-24">
      <div className="relative border border-[hsl(var(--border))] bg-card overflow-hidden">
        {/* Blueprint corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--blueprint-line)/0.5)] z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--blueprint-line)/0.5)] z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--blueprint-line)/0.5)] z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--blueprint-line)/0.5)] z-10 pointer-events-none" />

        {/* Dark overlay background for contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(var(--blueprint-line)/0.03)] to-[hsl(var(--blueprint-line)/0.06)] pointer-events-none" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative px-6 sm:px-8 py-10 sm:py-14">
          {/* Spec header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[9px] tracking-[0.25em] text-[hsl(var(--blueprint-line)/0.5)] uppercase">
              EXPLORE
            </span>
            <span className="h-px flex-1 border-t border-dashed border-[hsl(var(--border)/0.6)]" />
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              DIRECTORY
            </span>
          </div>

          {/* Title */}
          <h2 className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight leading-tight mb-2">
            Dive Deeper Into the Portfolio
          </h2>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Browse the full collection of UI/UX case studies and open-source projects.
            Each piece is documented with design rationale and technical decisions.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Designs Button — Warm CTA */}
            <Link
              href="/designs"
              className="group relative inline-flex items-center gap-3 blueprint-cta"
            >
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 transition-colors duration-300 group-hover:border-white/40" />
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 transition-colors duration-300 group-hover:border-white/40" />
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 transition-colors duration-300 group-hover:border-white/40" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 transition-colors duration-300 group-hover:border-white/40" />

              <Palette size={18} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="font-mono text-xs sm:text-sm tracking-[0.15em] uppercase font-medium">
                View Designs
              </span>
              <ArrowUpRight size={14} className="transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Link>

            {/* GitHub Button */}
            <Link
              href="/github"
              className="group relative inline-flex items-center gap-3 px-5 py-3 border border-[hsl(var(--border))] bg-card text-foreground hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))] hover:shadow-[0_0_0_1px_hsl(var(--blueprint-line)/0.08)] transition-all duration-300"
            >
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[hsl(var(--blueprint-line)/0.25)] transition-colors duration-300 group-hover:border-[hsl(var(--blueprint-line)/0.6)]" />
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[hsl(var(--blueprint-line)/0.25)] transition-colors duration-300 group-hover:border-[hsl(var(--blueprint-line)/0.6)]" />
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[hsl(var(--blueprint-line)/0.25)] transition-colors duration-300 group-hover:border-[hsl(var(--blueprint-line)/0.6)]" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[hsl(var(--blueprint-line)/0.25)] transition-colors duration-300 group-hover:border-[hsl(var(--blueprint-line)/0.6)]" />

              <FiGithub size={18} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="font-mono text-xs sm:text-sm tracking-[0.15em] uppercase font-medium">
                GitHub Projects
              </span>
              <ArrowUpRight size={14} className="transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Link>
          </div>

          {/* Bottom annotation */}
          <div className="mt-8 pt-4 border-t border-dashed border-[hsl(var(--border)/0.5)] flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              ALL CONTENT · {new Date().getFullYear()}
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              SELECT &nbsp;→&nbsp; EXPLORE
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection
