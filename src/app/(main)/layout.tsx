import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '~/components/layout/nav'
import SkipContent from '~/components/ui/skip-content'
import PageTransition from '~/components/ui/page-transition'

const RouteProgress = dynamic(() => import('~/components/ui/route-progress'), { ssr: false })

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-dvh blueprint-bg relative">
      {/* Blueprint grid overlay — subtle crosshair marks at intersections */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 select-none opacity-30 dark:opacity-20"
      >
        {/* Crosshair marks on major grid intersections */}
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 16 }).map((__, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute"
              style={{
                left: `${col * 12.5}%`,
                top: `${row * 10}%`,
                width: 8,
                height: 8,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle, hsl(var(--blueprint-line) / 0.15) 1px, transparent 1px)`,
                }}
              />
            </div>
          )),
        )}
      </div>

      <RouteProgress />
      <div className="relative z-10 flex-1 flex flex-col container py-4 max-w-7xl">
        <SkipContent />
        <Navbar />
        <main id="main-content" className="flex-1 mt-8">
          <PageTransition>
            {children}
          </PageTransition>
        </main>

        {/* Footer — simple revision block style */}
        <footer className="mt-16 mb-4 border-t border-dashed border-[hsl(var(--border))] pt-4 pb-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-blueprint-meta">
            <span>YOSEF LAKEW · FULLSTACK ENGINEER & UI/UX DESIGNER</span>
            <span>REV A · SHEET 1/1</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
