import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { dankMono, fontSans, ubuntu, orbitron, jetbrainsMono, silkscreen } from '~/components/ui/fonts'

import { getSEOTags, renderSchemaTags } from '~/lib/seo'
import { cn } from '~/lib/utils'
import RootProviders from '~/providers'
import '~/styles/globals.css'
import BinaryBackground from '~/components/ui/binary-background'


export const viewport = {
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 3,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0f' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
}

export const metadata = getSEOTags()

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          ubuntu.variable,
          dankMono.variable,
          orbitron.variable,
          jetbrainsMono.variable,
          silkscreen.variable,
        )}>

        {renderSchemaTags()}

        {/* Cyberpunk background effects */}
        <BinaryBackground />
        <div className="scanline-overlay" aria-hidden="true" />

        <RootProviders>{children}</RootProviders>


        {process.env.NODE_ENV === 'production' && (
          <>
            <SpeedInsights />
            <Analytics />
          </>
        )}
      </body>
    </html>
  )
}
