'use client'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

/* ─────────────────────────────────────────
   Minimal CTA — short wide card with two buttons
───────────────────────────────────────── */
const CTASection = () => {
  return (
    <section className="relative">
      <div className="relative border border-white/[0.08] bg-[#09090b]">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/[0.15] z-10" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/[0.15] z-10" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/[0.15] z-10" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/[0.15] z-10" />

        <div className="px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Projects button */}
          <Link
            href="/projects"
            className="group relative flex-1 w-full flex items-center justify-center gap-2.5 border border-white/20 bg-white/5 px-5 py-3 font-mono text-xs tracking-[0.15em] uppercase text-white/80 transition-all duration-300 hover:bg-white hover:text-[#09090b] hover:border-white active:scale-[0.98]"
          >
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-transparent group-hover:border-[#09090b]/30 transition-colors" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-hover:border-[#09090b]/30 transition-colors" />
            <span>View Projects</span>
            <ArrowUpRight size={13} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Designs button */}
          <Link
            href="/designs"
            className="group relative flex-1 w-full flex items-center justify-center gap-2.5 border border-white/15 px-5 py-3 font-mono text-xs tracking-[0.15em] uppercase text-white/50 transition-all duration-300 hover:text-white hover:border-white/40 hover:bg-white/[0.04] active:scale-[0.98]"
          >
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-transparent group-hover:border-white/20 transition-colors" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-hover:border-white/20 transition-colors" />
            <span>View Designs</span>
            <ArrowUpRight size={13} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
