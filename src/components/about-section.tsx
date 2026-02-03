'use client'
import { useEffect, useRef } from 'react'
import { annotate, annotationGroup } from 'rough-notation'
import {
  RoughAnnotationConfig,
  RoughAnnotationGroup,
} from 'rough-notation/lib/model'

import config from '~/config'
import { useMediaQuery } from '~/hooks'
import { cn } from '~/lib/utils'
import { typo } from './ui/typograpghy'
import Image from 'next/image'
import dubaiCon from '~/assets/images/hero.jpg'
import { annotationsConfig } from '~/constants/anime'
import Socials from './socials'


const AboutSection = () => {
  const isSmallDevice = useMediaQuery('(max-width: 500px)')
  const annotationRefs = useRef<Array<{ current: HTMLElement | null }>>(
    annotationsConfig.map(() => ({ current: null })),
  ).current

  useEffect(() => {
    const annotations = annotationsConfig
      .map((config, index) => {
        const { ref: _, ...options } = config
        const element = annotationRefs[index]?.current
        if (!element) return null

        return annotate(element, options as RoughAnnotationConfig)
      })
      .filter(Boolean) as any[]

    if (annotations.length === 0) return

    const annotationGroupInstance: RoughAnnotationGroup =
      annotationGroup(annotations)

    if (!isSmallDevice) {
      annotationGroupInstance.show()
    }

    return () => annotationGroupInstance.hide()
  }, [isSmallDevice, annotationRefs])

  return (
    <section className=" grid md:grid-cols-3 gap-8 sm:gap-4" aria-label="About">
      <div className="space-y-3 md:col-span-2 order-2 sm:order-1">
        <h1
          className="font-semibold text-lg sm:text-xl font-ubuntu"
          ref={annotationRefs[5] as any}
        >
          Hello , I&apos;m Yosef Lakew.
        </h1>

        <p className={typo({ variant: 'paragraph', font: 'sans' })}>
          I am a Fullstack Engineer & UI / UX Designer who is passionate about creating meaningful digital experiences. With a solid foundation in both{' '}
          <span className="text-white" ref={annotationRefs[0] as any}>
            front-end and back-end
          </span>{' '}
          development, I bring a holistic approach to software design and
          engineering.
        </p>

        <p className={typo({ variant: 'paragraph', font: 'sans' })}>
          I Love building tools that are{' '}
          <span ref={annotationRefs[1] as any} className="text-white">
            user friendly, simple
          </span>{' '}
          and{' '}
          <span ref={annotationRefs[2] as any} className="text-white">
            delightful
          </span>
          .
        </p>

        <p className={typo({ variant: 'paragraph', font: 'sans' })}>
          I am passionate about leveraging technology to solve real-world problems and enhance user interactions. My expertise lies in developing intuitive <span
            ref={annotationRefs[3] as any}
            className="text-white"
          >
            user interfaces and robust back-end systems
          </span>, allowing me to deliver comprehensive solutions.{' '}
        </p>

        <div className="space-y-3 mt-16">
          <Socials />
        </div>
      </div>

      <div className="relative block sm:hidden md:block aspect-square order-1 sm:order-2">
        <div className=" border-2 border-[#00adb5] absolute inset-0 size-full rounded-md -z-10"></div>
        <Image
          alt="Speaking on stage at Dubai police station during a presentation"
          src={dubaiCon}
          placeholder="blur"
          className="rounded-md shadow-md size-fit  transform -rotate-3"
          priority
        />
      </div>
    </section>
  )
}

export default AboutSection
