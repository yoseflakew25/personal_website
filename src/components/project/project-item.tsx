import Image from 'next/image'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { cn } from '~/lib/utils'
import { CustomLink } from '../mdx'
import { TProject } from './_project-mock'

type ProjectItemProps = {} & TProject

const linkClass =
  '!p-0 h-full hover:!text-cyber-cyan !flex items-center gap-2 !text-sm !text-cyber-cyan/70 font-jetbrains transition-all duration-300'

const ProjectItem: React.FC<ProjectItemProps> = ({
  Icon,
  title,
  description,
  deployedURL,
  cover,
  stacks,
  isRepo,
  repoUrl,
}) => {
  return (
    <li role="listitem">
      <div className="grid gap-4 group el-focus-styles rounded-md relative">
        {/* Image with HUD overlay */}
        <div className="aspect-video relative overflow-hidden rounded-md hud-corners">
          <Image
            alt={`${title} project cover`}
            priority
            placeholder="blur"
            src={cover}
            className="size-full object-cover transition-all duration-700 group-hover:scale-105"
          />

          {/* Cyberpunk overlay on hover */}
          <div className="absolute size-full group-hover:opacity-100 opacity-0 inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 transition-all duration-500 grid place-content-center">
            <div className="transform scale-90 group-hover:scale-100 transition-transform duration-500">
              <Icon />
            </div>
          </div>

          {/* Scanline on hover */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{
              background:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, hsla(180,100%,50%,0.05) 2px, hsla(180,100%,50%,0.05) 4px)',
            }}
          />

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
        </div>

        <hgroup className="space-y-2 sm:space-y-1">
          <h2 className="font-orbitron font-medium text-base tracking-wide group-hover:text-cyber-cyan transition-colors duration-300">
            {title}
          </h2>

          <p className="text-xs text-cyber-cyan/60 font-jetbrains" aria-label="project stacks">
            {stacks.join(' · ')}
          </p>

          <p className="text-muted-foreground text-sm line-clamp-2 !mt-3 font-sans leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-4 !mt-3">
            <CustomLink
              aria-label={`visit ${title} live URL`}
              href={deployedURL}
              className={linkClass}
            >
              <FaExternalLinkAlt size={12} />
              <span>Live Preview</span>
            </CustomLink>

            {isRepo && (
              <CustomLink
                aria-label={`visit ${title} Github Repo`}
                href={repoUrl as string}
                className={linkClass}
              >
                <FaGithub />
                <span>Source</span>
              </CustomLink>
            )}
          </div>
        </hgroup>
      </div>
    </li>
  )
}
export default ProjectItem
