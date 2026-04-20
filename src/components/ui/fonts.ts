import { Bai_Jamjuree, Ubuntu, Orbitron, JetBrains_Mono, Silkscreen } from 'next/font/google'

import localFont from 'next/font/local'

export const dankMono = localFont({
  src: './dank-mono.otf',
  display: 'swap',
  variable: '--font-dank',
})

export const fontSans = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ubuntu',
  display: 'swap',
})

export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron',
  display: 'swap',
})


export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-silkscreen',
  display: 'swap',
})


