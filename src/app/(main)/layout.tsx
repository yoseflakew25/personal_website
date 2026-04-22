import { ReactNode } from 'react'
import Footer from '~/components/layout/footer'
import Navbar from '~/components/layout/nav'
import EmailSidebar from '~/components/layout/email-sidebar'
import SocialSidebar from '~/components/layout/social-sidebar'
import SkipContent from '~/components/ui/skip-content'
import PageTransition from '~/components/ui/page-transition'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-dvh container py-2 relative">
      <div className="flex-1 space-y-4 !mb-6">
        <SkipContent />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </div>
      <SocialSidebar />
      <EmailSidebar />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
