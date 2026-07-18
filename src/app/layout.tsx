import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { fontMono, fontDisplay } from '~/components/ui/fonts'

import { getSEOTags, renderSchemaTags } from '~/lib/seo'
import { cn } from '~/lib/utils'
import RootProviders from '~/providers'
import '~/styles/globals.css'

export const viewport = {
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 3,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f0' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1722' },
  ],
}

export const metadata = getSEOTags()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-mono antialiased',
          fontMono.variable,
          fontDisplay.variable,
        )}
      >
        {renderSchemaTags()}

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
