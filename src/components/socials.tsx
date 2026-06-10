import { ClassValue } from 'clsx'
import { Linkedin } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import { TbBrandTelegram, TbBrandX } from 'react-icons/tb'
import config from '~/config'
import { cn } from '~/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const socialsIcons = [
  {
    id: 1,
    label: 'Github',
    icon: <FiGithub className="size-[1.1rem]" />,
    href: config.social.github,
    hoverClass: 'hover:border-primary/50 hover:text-primary' as ClassValue,
  },
  {
    id: 2,
    label: 'Linkedin',
    icon: <Linkedin className="size-[1.1rem]" />,
    href: config.social.linkedin,
    hoverClass: 'hover:border-primary/50 hover:text-primary' as ClassValue,
  },
  {
    id: 3,
    label: 'Instagram',
    icon: <FaInstagram className="size-[1.1rem]" />,
    href: config.social.instagram,
    hoverClass: 'hover:border-primary/50 hover:text-primary' as ClassValue,
  },
  {
    id: 4,
    label: 'X',
    icon: <TbBrandX className="size-[1.1rem]" />,
    href: config.social.x,
    hoverClass: 'hover:border-primary/50 hover:text-primary' as ClassValue,
  },
  {
    id: 5,
    label: 'Telegram',
    icon: <TbBrandTelegram className="size-[1.1rem]" />,
    href: config.social.telegram,
    hoverClass: 'hover:border-primary/50 hover:text-primary' as ClassValue,
  },
  {
    id: 6,
    label: 'Gmail',
    icon: <SiGmail className="size-[1.1rem]" />,
    href: `mailto:${config.social.email}`,
    hoverClass: 'hover:border-primary/50 hover:text-primary' as ClassValue,
  },
]

const Socials = () => {
  return (
    <ul className="flex items-center gap-2">
      {socialsIcons.map(social => (
        <li key={social.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={social.href}
                className={cn(
                  'border border-border/60 bg-card/50 backdrop-blur-sm text-muted-foreground size-9 flex items-center justify-center rounded-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  social.hoverClass,
                )}
                aria-label={social.label}
                target="_blank"
                rel="external"
              >
                {social.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-card border-border text-foreground/80 text-xs font-mono">
              <span>{social.label}</span>
            </TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  )
}

export default Socials
