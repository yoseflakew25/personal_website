import { Bai_Jamjuree, Ubuntu, Orbitron, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const dankMono = localFont({
  src: './dank-mono.otf',
  display: 'swap',
  variable: '--font-dank',
})

export const fontSans = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ubuntu',
})

export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
})
