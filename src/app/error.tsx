'use client'

import { useEffect } from 'react'
import { CornerBrackets } from '~/components/ui/corner-brackets'
import SupportButton from '~/components/support-btn'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('error::: ', error)
  }, [error])

  return (
    <section
      className="blueprint-bg relative flex min-h-dvh items-center overflow-hidden py-10"
      id="main-content"
    >
      {/* Blueprint grid overlay — crosshair marks at intersections */}
      <div
        aria-hidden="true"
        className="blueprint-crosshair-grid fixed inset-0 pointer-events-none z-0 select-none opacity-30 dark:opacity-20"
      />

      {/* Corner vignette — grid fades near the edges */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[1] select-none"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 65%, hsl(var(--background)) 100%)',
        }}
      />

      <main className="container relative z-10 flex h-full w-full flex-col items-center justify-center gap-8">
        {/* ── Fault Report Spec Sheet ── */}
        <div className="relative w-full max-w-2xl border border-[hsl(var(--border))] bg-card overflow-hidden">
          <CornerBrackets />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Spec header */}
          <div className="relative border-b border-[hsl(var(--border))] px-4 py-2 flex items-center justify-between">
            <p className="text-blueprint-meta">FAULT REPORT · EXCEPTION</p>
            <p className="text-blueprint-meta">SHEET 001</p>
          </div>

          {/* Body */}
          <div className="relative px-6 sm:px-10 py-10 sm:py-12 text-center">
            {/* Large outlined fault marker */}
            <span
              className="font-mono font-bold text-7xl sm:text-8xl md:text-9xl leading-none select-none block tracking-tight"
              style={{
                WebkitTextStroke: '2.5px hsl(var(--blueprint-line))',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ERR
            </span>

            {/* Dimension underline */}
            <div className="flex items-center gap-0 mt-6 max-w-xs mx-auto">
              <div className="h-px flex-1 bg-[hsl(var(--blueprint-line)/0.2)]" />
              <span className="font-mono text-[9px] tracking-widest text-[hsl(var(--blueprint-line)/0.45)] uppercase px-2">
                SYSTEM FAULT
              </span>
              <div className="h-px flex-1 bg-[hsl(var(--blueprint-line)/0.2)]" />
            </div>

            <h1 className="font-mono text-lg sm:text-xl uppercase tracking-[0.2em] text-foreground font-bold mt-8">
              Unexpected Error
            </h1>

            <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mt-3">
              An exception was raised while rendering this section. Attempt a reset to restore the
              view, or contact support if the fault persists.
            </p>

            {/* Technical data rows */}
            <dl className="max-w-sm mx-auto mt-8 text-left">
              {[
                { label: 'STATUS', value: '500 — INTERNAL' },
                { label: 'TYPE', value: 'RUNTIME_EXCEPTION' },
                { label: 'DIGEST', value: error.digest ?? 'N/A' },
                { label: 'ACTION', value: 'RESET_VIEW' },
              ].map((row) => (
                <div key={row.label} className="blueprint-data-row last:border-b-0">
                  <dt className="blueprint-data-label">{row.label}</dt>
                  <dd className="blueprint-data-value">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Spec footer */}
          <div className="relative border-t border-dashed border-[hsl(var(--border)/0.6)] px-4 py-1.5 flex items-center justify-between">
            <span className="blueprint-note">REV A</span>
            <span className="blueprint-note">SHEET 001 / 001</span>
          </div>
        </div>

        <SupportButton onReset={reset} />
      </main>
    </section>
  )
}
