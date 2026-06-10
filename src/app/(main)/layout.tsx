import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '~/components/layout/nav'
import SkipContent from '~/components/ui/skip-content'
import PageTransition from '~/components/ui/page-transition'

// Deferred: none of these need to block first paint or SSR
const RouteProgress = dynamic(() => import('~/components/ui/route-progress'), { ssr: false })
const SocialSidebar = dynamic(() => import('~/components/layout/social-sidebar'), { ssr: false })
const EmailSidebar = dynamic(() => import('~/components/layout/email-sidebar'), { ssr: false })

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-dvh container py-2 relative">
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 0',
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />

      <RouteProgress />
      <div className="relative z-10 flex-1 space-y-4">
        <SkipContent />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </div>
      <SocialSidebar />
      <EmailSidebar />
    </div>
  )
}

export default Layout

