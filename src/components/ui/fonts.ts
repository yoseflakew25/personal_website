import { Inter, JetBrains_Mono, Pixelify_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const dankMono = localFont({
  src: './dank-mono.otf',
  display: 'swap',
  variable: '--font-dank',
})

export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const fontPixel = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
  weight: ['400', '700'],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})
