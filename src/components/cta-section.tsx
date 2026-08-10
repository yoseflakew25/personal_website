import Link from 'next/link'
import { ArrowUpRight, FolderGit2, Palette, FileText } from 'lucide-react'
import { CornerBrackets } from '~/components/ui/corner-brackets'

/* ─────────────────────────────────────────
   Dark CTA — spec-sheet style card.
   Two-column grid: content on the left,
   action buttons stacked vertically on the right.
───────────────────────────────────────── */
const CTASection = () => {
  return (
    <section className="relative" aria-label="Explore the portfolio">
      <div className="relative overflow-hidden border border-white/12 bg-[#09090b]">
        {/* Corner accents */}
        <CornerBrackets colorClass="border-white/[0.15]" />

        {/* Grid pattern overlay — major + minor lines, mirrors the site's blueprint-bg on the dark panel */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
          }}
        />

        {/* Teal glow — subtle radial light from top */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, hsl(var(--blueprint-line) / 0.08), transparent 70%)',
          }}
        />

        <div className="relative px-6 sm:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-center">
            {/* ── Left: Copy ── */}
            <div className="flex flex-col">
              {/* Spec header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[9px] tracking-[0.25em] text-white/50 uppercase">
                  NEXT STEP
                </span>
                <span className="h-px flex-1 border-t border-white/10" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/50 uppercase">
                  DIRECTORY
                </span>
              </div>

              {/* Title */}
              <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight mb-2">
                Explore MY Portfolio
              </h2>
              <p className="font-mono text-xs sm:text-sm text-white/50 max-w-xl leading-relaxed">
                Dive into production-grade projects, UI/UX case studies, and engineering
                write-ups, each documented with design rationale and technical decisions.
              </p>

              {/* Bottom annotation */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">
                  SELECT &nbsp;→&nbsp; EXPLORE
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">
                  NOT TO SCALE
                </span>
              </div>
            </div>

            {/* Vertical divider between columns */}
            <div
              aria-hidden="true"
              className="hidden lg:block w-px self-stretch border-l border-white/10 mx-6"
            />

            {/* ── Right: Buttons stacked top to bottom ── */}
            <div className="grid grid-cols-1 auto-rows-fr border border-white/20 divide-y divide-white/10">
              {/* Projects — primary CTA */}
              <Link
                href="/projects"
                className="group relative flex w-full items-center justify-between gap-2.5 px-5 py-4 font-mono text-xs sm:text-sm tracking-[0.15em] uppercase text-[#09090b] font-medium transition-all duration-300 bg-white hover:bg-white/90 active:scale-[0.98]"
              >
                <CornerBrackets
                  size="0.5rem"
                  colorClass="border-transparent"
                  hoverColorClass="group-hover:border-[#09090b]/40"
                  transitionClass="transition-colors"
                  renderTopRight={false}
                  renderBottomLeft={false}
                />
                <span className="flex items-center gap-2.5">
                  <FolderGit2 size={15} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>Projects</span>
                </span>
                <ArrowUpRight size={13} className="shrink-0" />
              </Link>

              {/* Designs — white filled */}
              <Link
                href="/designs"
                className="group relative flex w-full items-center justify-between gap-2.5 px-5 py-4 font-mono text-xs sm:text-sm tracking-[0.15em] uppercase text-white/70 transition-all duration-300 hover:bg-white/[0.04] hover:text-white active:scale-[0.98]"
              >
                <CornerBrackets
                  size="0.5rem"
                  colorClass="border-transparent"
                  hoverColorClass="group-hover:border-white/30"
                  transitionClass="transition-colors"
                  renderTopRight={false}
                  renderBottomLeft={false}
                />
                <span className="flex items-center gap-2.5">
                  <Palette size={15} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>Designs</span>
                </span>
                <ArrowUpRight size={13} className="shrink-0" />
              </Link>

              {/* Blog — outlined */}
              <Link
                href="/blog"
                className="group relative flex w-full items-center justify-between gap-2.5 px-5 py-4 font-mono text-xs sm:text-sm tracking-[0.15em] uppercase text-white/70 transition-all duration-300 hover:bg-white/[0.04] hover:text-white active:scale-[0.98]"
              >
                <CornerBrackets
                  size="0.5rem"
                  colorClass="border-transparent"
                  hoverColorClass="group-hover:border-white/30"
                  transitionClass="transition-colors"
                  renderTopRight={false}
                  renderBottomLeft={false}
                />
                <span className="flex items-center gap-2.5">
                  <FileText size={15} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>Blog</span>
                </span>
                <ArrowUpRight size={13} className="shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
