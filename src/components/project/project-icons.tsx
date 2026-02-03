import Image from 'next/image'
import React from 'react'
import yubanowLogo from '~/assets/images/yuba.png'
import eskalateLogo from '~/assets/images/eskalate.png'
import akilLogo from '~/assets/images/akil.png'
import homefinderLogo from '~/assets/images/homefinder.png'
import jotionLogo from '~/assets/images/jotion.png'
import summizerLogo from '~/assets/images/summerize.png'
import photogramLogo from '~/assets/images/photogram.png'

import { cn } from '~/lib/utils'

const DEFAULT_CLASS =
  'size-16 border bg-[#11117c] grid place-content-center rounded-md p-3'

export const YubaNow = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-transparent p-0 border-0')}>
      <Image alt="Power up brain battles" src={yubanowLogo} placeholder="blur" />
    </div>
  )
}
export const Eskalate = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-transparent p-0 border-0')}>
      <Image
        alt="Unlocking the Potential of Kuto Digital Characters"
        src={eskalateLogo}
      />
    </div>
  )
}
export const Akil = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-transparent p-0 border-0')}>
      <Image
        alt="Unlocking the Potential of Kuto Digital Characters"
        src={akilLogo}
        placeholder="blur"
      />
    </div>
  )
}

export const HomeFinder = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-transparent p-0 border-0')}>
      <Image
        alt="ultimate source for country rankings"
        src={homefinderLogo}
        placeholder="blur"
      />
    </div>
  )
}
export const Jotion = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-transparent p-0 border-0')}>
      <Image
        alt="ultimate source for country rankings"
        src={jotionLogo}
        placeholder="blur"
      />
    </div>
  )
}

export const Summizer = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-transparent p-0 border-0')}>
      <Image
        alt="ultimate source for country rankings"
        src={summizerLogo}
        placeholder="blur"
      />
    </div>
  )
}

export const Photogram = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-transparent p-0 border-0')}>
      <Image
        alt="ultimate source for country rankings"
        src={photogramLogo}
        placeholder="blur"
      />
    </div>
  )
}


