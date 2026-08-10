import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '~/components/layout/nav'
import Footer from '~/components/layout/footer'
import SkipContent from '~/components/ui/skip-content'
import PageTransition from '~/components/ui/page-transition'
import SectionSpy from '~/components/ui/section-spy'
import BlueprintSheetFrame from '~/components/ui/blueprint-sheet-frame'

const RouteProgress = dynamic(() => import('~/components/ui/route-progress'), { ssr: false })

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-dvh blueprint-bg relative">
      {/* Blueprint grid overlay — crosshair marks at intersections, CSS-only for perf */}
      <div
        aria-hidden="true"
        className="blueprint-crosshair-grid fixed inset-0 pointer-events-none z-0 select-none opacity-30 dark:opacity-20 print:hidden"
      />

      {/* Corner vignette — grid fades only near the edges */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[1] select-none print:hidden"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 65%, hsl(var(--background)) 100%)',
        }}
      />

      {/* Film grain — printed-paper texture over the whole site */}
      <div aria-hidden="true" className="film-grain" />

      {/* Blueprint sheet frame — the viewport reads as one printed sheet */}
      <BlueprintSheetFrame />

      <div className="print:hidden">
        <RouteProgress />
      </div>

      <div className="relative z-10 flex-1 flex flex-col container py-4 max-w-7xl">
        <SkipContent />
        {/* Sticky wrapper — the nav itself is height-constrained, so sticky must live here */}
        <div className="print:hidden sticky top-0 z-50">
          <Navbar />
        </div>
        <main id="main-content" className="flex-1 mt-8">
          <PageTransition>
            {children}
          </PageTransition>
        </main>

        <Footer />
      </div>

      <SectionSpy />
    </div>
  )
}

export default Layout
