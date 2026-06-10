import { Fira_Code, JetBrains_Mono, Pixelify_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const dankMono = localFont({
  src: './dank-mono.otf',
  display: 'swap',
  variable: '--font-dank',
})

export const fontSans = Fira_Code({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const fontPixel = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})
