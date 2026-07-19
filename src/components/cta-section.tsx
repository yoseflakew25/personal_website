'use client'
import Link from 'next/link'
import { ArrowRight, Layers, Pencil } from 'lucide-react'

/* ─────────────────────────────────────────
   Right-side vector illustration
   Isometric browser window (projects) +
   design canvas / Figma-style artboard
───────────────────────────────────────── */
const CTAIllustration = () => (
  <svg
    viewBox="0 0 520 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-full h-full"
    style={{ maxHeight: 340 }}
  >
    <defs>
      {/* Glow filter for accent lines */}
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="softglow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* ── Subtle background grid ── */}
    {Array.from({ length: 14 }).map((_, i) => (
      <line
        key={`vg-${i}`}
        x1={i * 40}
        y1={0}
        x2={i * 40}
        y2={340}
        stroke="white"
        strokeWidth="0.3"
        strokeOpacity="0.04"
      />
    ))}
    {Array.from({ length: 10 }).map((_, i) => (
      <line
        key={`hg-${i}`}
        x1={0}
        y1={i * 40}
        x2={520}
        y2={i * 40}
        stroke="white"
        strokeWidth="0.3"
        strokeOpacity="0.04"
      />
    ))}

    {/* ══════════════════════════════════
        ISOMETRIC BROWSER WINDOW — top-left
    ══════════════════════════════════ */}
    {/* Browser shadow / depth */}
    <rect x="34" y="52" width="220" height="156" fill="white" fillOpacity="0.03" />

    {/* Browser body */}
    <rect x="30" y="48" width="220" height="156" fill="#111113" stroke="white" strokeOpacity="0.18" strokeWidth="1" />

    {/* Browser chrome bar */}
    <rect x="30" y="48" width="220" height="28" fill="white" fillOpacity="0.07" />
    <line x1="30" y1="76" x2="250" y2="76" stroke="white" strokeOpacity="0.15" strokeWidth="0.8" />

    {/* Traffic dots */}
    <circle cx="48" cy="62" r="4" fill="white" fillOpacity="0.12" />
    <circle cx="60" cy="62" r="4" fill="white" fillOpacity="0.08" />
    <circle cx="72" cy="62" r="4" fill="white" fillOpacity="0.06" />

    {/* URL bar */}
    <rect x="84" y="55" width="110" height="14" rx="2" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="0.6" />
    <text x="90" y="66" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.3">yoseflakew.dev/projects</text>

    {/* Browser content — code editor lines */}
    {[0,1,2,3,4,5,6,7].map((i) => (
      <rect
        key={`cl-${i}`}
        x="46"
        y={88 + i * 13}
        width={[110, 80, 140, 60, 120, 90, 100, 70][i]}
        height="5"
        rx="1"
        fill="white"
        fillOpacity={i % 3 === 0 ? 0.14 : 0.06}
      />
    ))}
    {/* Accent bar — highlighted line */}
    <rect x="46" y="88" width="110" height="5" rx="1" fill="white" fillOpacity="0.22" filter="url(#glow)" />

    {/* Cursor blink indicator */}
    <rect x="158" y="140" width="1.5" height="9" fill="white" fillOpacity="0.5" />

    {/* Corner accents */}
    <path d="M30 48 L38 48 L38 56" stroke="white" strokeOpacity="0.4" strokeWidth="1" fill="none" />
    <path d="M250 48 L242 48 L242 56" stroke="white" strokeOpacity="0.4" strokeWidth="1" fill="none" />
    <path d="M30 204 L38 204 L38 196" stroke="white" strokeOpacity="0.4" strokeWidth="1" fill="none" />
    <path d="M250 204 L242 204 L242 196" stroke="white" strokeOpacity="0.4" strokeWidth="1" fill="none" />

    {/* Projects label tag */}
    <rect x="30" y="210" width="72" height="16" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" strokeWidth="0.6" />
    <text x="36" y="221" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.4" letterSpacing="1">PROJECTS</text>

    {/* Annotation line from browser */}
    <line x1="250" y1="126" x2="286" y2="126" stroke="white" strokeOpacity="0.15" strokeWidth="0.7" strokeDasharray="3 2" />
    <circle cx="286" cy="126" r="2" fill="white" fillOpacity="0.2" />

    {/* ══════════════════════════════════
        DESIGN CANVAS / FIGMA ARTBOARD — bottom-right
    ══════════════════════════════════ */}
    {/* Artboard shadow */}
    <rect x="276" y="138" width="210" height="168" fill="white" fillOpacity="0.02" />

    {/* Canvas frame */}
    <rect x="272" y="134" width="210" height="168" fill="#0d0d0f" stroke="white" strokeOpacity="0.15" strokeWidth="1" />

    {/* Toolbar strip */}
    <rect x="272" y="134" width="210" height="22" fill="white" fillOpacity="0.06" />
    <line x1="272" y1="156" x2="482" y2="156" stroke="white" strokeOpacity="0.12" strokeWidth="0.7" />

    {/* Toolbar tool icons (rects as icon placeholders) */}
    {[0,1,2,3,4].map((i) => (
      <rect key={`ti-${i}`} x={282 + i * 18} y="139" width="10" height="10" rx="1.5" fill="white" fillOpacity={i === 1 ? 0.2 : 0.07} />
    ))}

    {/* Artboard inner canvas — design mockup */}
    <rect x="286" y="164" width="172" height="112" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.08" strokeWidth="0.6" />

    {/* Mock UI card inside artboard */}
    <rect x="296" y="172" width="152" height="96" rx="2" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.12" strokeWidth="0.6" />

    {/* Card header bar */}
    <rect x="296" y="172" width="152" height="20" rx="2" fill="white" fillOpacity="0.08" />
    <rect x="304" y="178" width="60" height="6" rx="1" fill="white" fillOpacity="0.2" />
    <rect x="420" y="178" width="20" height="6" rx="1" fill="white" fillOpacity="0.1" />

    {/* Card body — mockup rows */}
    {[0,1,2,3].map((i) => (
      <rect
        key={`cr-${i}`}
        x="304"
        y={200 + i * 14}
        width={[120, 90, 110, 70][i]}
        height="6"
        rx="1"
        fill="white"
        fillOpacity={i === 0 ? 0.15 : 0.07}
      />
    ))}

    {/* Image placeholder block */}
    <rect x="380" y="200" width="56" height="52" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
    <line x1="380" y1="200" x2="436" y2="252" stroke="white" strokeOpacity="0.08" strokeWidth="0.6" />
    <line x1="436" y1="200" x2="380" y2="252" stroke="white" strokeOpacity="0.08" strokeWidth="0.6" />

    {/* Selection handles on the artboard */}
    {[
      [286, 164], [372, 164], [458, 164],
      [286, 220], [458, 220],
      [286, 276], [372, 276], [458, 276],
    ].map(([x, y], i) => (
      <rect key={`sh-${i}`} x={x - 3} y={y - 3} width="6" height="6" fill="#09090b" stroke="white" strokeOpacity="0.35" strokeWidth="0.8" />
    ))}

    {/* Designs label */}
    <rect x="272" y="308" width="66" height="16" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" strokeWidth="0.6" />
    <text x="278" y="319" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.4" letterSpacing="1">DESIGNS</text>

    {/* Corner accents on artboard */}
    <path d="M272 134 L280 134 L280 142" stroke="white" strokeOpacity="0.4" strokeWidth="1" fill="none" />
    <path d="M482 134 L474 134 L474 142" stroke="white" strokeOpacity="0.4" strokeWidth="1" fill="none" />
    <path d="M272 302 L280 302 L280 294" stroke="white" strokeOpacity="0.4" strokeWidth="1" fill="none" />
    <path d="M482 302 L474 302 L474 294" stroke="white" strokeOpacity="0.4" strokeWidth="1" fill="none" />

    {/* ── Connecting annotation line between the two panels ── */}
    <line x1="250" y1="172" x2="272" y2="172" stroke="white" strokeOpacity="0.12" strokeWidth="0.7" strokeDasharray="3 2" />

    {/* ── Measurement annotation (horizontal dim line) ── */}
    <line x1="30" y1="330" x2="482" y2="330" stroke="white" strokeOpacity="0.08" strokeWidth="0.6" />
    <line x1="30" y1="326" x2="30" y2="334" stroke="white" strokeOpacity="0.1" strokeWidth="0.6" />
    <line x1="482" y1="326" x2="482" y2="334" stroke="white" strokeOpacity="0.1" strokeWidth="0.6" />
    <text x="240" y="337" fontFamily="monospace" fontSize="6.5" fill="white" fillOpacity="0.2" textAnchor="middle" letterSpacing="1.5">FULL PORTFOLIO SCOPE</text>

    {/* ── Floating accent dots ── */}
    <circle cx="262" cy="90" r="2.5" fill="white" fillOpacity="0.1" />
    <circle cx="262" cy="104" r="1.5" fill="white" fillOpacity="0.07" />
    <circle cx="262" cy="114" r="1" fill="white" fillOpacity="0.05" />

    {/* Glowing accent line — top right decoration */}
    <line x1="380" y1="30" x2="482" y2="30" stroke="white" strokeOpacity="0.18" strokeWidth="0.8" filter="url(#softglow)" />
    <line x1="430" y1="20" x2="430" y2="48" stroke="white" strokeOpacity="0.12" strokeWidth="0.6" />
    <circle cx="430" cy="30" r="3" fill="white" fillOpacity="0.12" filter="url(#glow)" />
    <text x="435" y="26" fontFamily="monospace" fontSize="6" fill="white" fillOpacity="0.25" letterSpacing="1">YL · WORK</text>
  </svg>
)

/* ─────────────────────────────────────────
   Main CTA Section
───────────────────────────────────────── */
const CTASection = () => {
  return (
    <section className="relative mt-16 overflow-hidden">
      <div
        className="relative border border-[hsl(var(--border))] bg-[#09090b] dark:bg-[#050507]"
        style={{ isolation: 'isolate' }}
      >
        {/* Blueprint corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[hsl(var(--blueprint-line)/0.5)] z-10" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[hsl(var(--blueprint-line)/0.5)] z-10" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[hsl(var(--blueprint-line)/0.5)] z-10" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[hsl(var(--blueprint-line)/0.5)] z-10" />

        {/* Subtle white grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Sheet label bar */}
        <div className="border-b border-white/[0.06] px-6 py-2 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.25em] text-white/25 uppercase">
            CALL_TO_ACTION · SHEET 01
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] text-white/25 uppercase">
            REF: YL-CTA-001
          </span>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* LEFT — Text + buttons */}
          <div className="px-8 py-14 sm:px-12 sm:py-16 flex flex-col items-start justify-center gap-10 lg:border-r lg:border-white/[0.06]">
            <div className="space-y-5 max-w-lg">
              <span className="font-mono text-[10px] tracking-[0.3em] text-white/35 uppercase block">
                WHAT I BUILD &amp; DESIGN
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] uppercase tracking-tight">
                SEE MY
                <br />
                <span
                  style={{
                    WebkitTextStroke: '1.5px rgba(255,255,255,0.5)',
                    color: 'transparent',
                  }}
                >
                  WORK.
                </span>
              </h2>
              <p className="font-mono text-xs sm:text-sm text-white/45 leading-relaxed max-w-sm pt-1">
                From production-grade fullstack applications to polished UI/UX designs — browse everything I have shipped and crafted.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Projects CTA — primary */}
              <Link
                href="/projects"
                className="group relative flex items-center gap-3 border border-white/25 bg-white/5 px-6 py-3.5 font-mono text-xs tracking-[0.15em] uppercase text-white transition-all duration-300 hover:bg-white hover:text-[#09090b] hover:border-white hover:shadow-[0_0_32px_rgba(255,255,255,0.1)] active:scale-[0.98]"
              >
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-transparent group-hover:border-[#09090b]/30 transition-colors duration-300" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-transparent group-hover:border-[#09090b]/30 transition-colors duration-300" />
                <Layers size={13} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span>View Projects</span>
                <ArrowRight size={12} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Designs CTA — ghost */}
              <Link
                href="/designs"
                className="group relative flex items-center gap-3 border border-white/15 px-6 py-3.5 font-mono text-xs tracking-[0.15em] uppercase text-white/55 transition-all duration-300 hover:text-white hover:border-white/40 hover:bg-white/[0.04] active:scale-[0.98]"
              >
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-transparent group-hover:border-white/20 transition-colors duration-300" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-transparent group-hover:border-white/20 transition-colors duration-300" />
                <Pencil size={13} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span>View Designs</span>
                <ArrowRight size={12} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT — SVG illustration */}
          <div className="relative flex items-center justify-center px-6 py-10 sm:px-10 min-h-[280px] lg:min-h-[360px] overflow-hidden">
            {/* Radial glow behind illustration */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 55% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
              }}
            />
            <CTAIllustration />
          </div>
        </div>

        {/* Footer bar */}
        <div className="border-t border-white/[0.06] px-6 py-2 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.2em] text-white/18 uppercase">
            NOT TO SCALE
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-white/18 uppercase">
            YOSEF LAKEW · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  )
}

export default CTASection
