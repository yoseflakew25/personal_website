import { ClassValue } from 'clsx'
import { Linkedin } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import { TbBrandTelegram, TbBrandX } from 'react-icons/tb'
import config from '~/config'
import { cn } from '~/lib/utils'

const socialsIcons = [
  {
    id: 1,
    label: 'Github',
    icon: <FiGithub className="size-[1.1rem]" />,
    href: config.social.github,
    hoverClass: 'hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))]' as ClassValue,
  },
  {
    id: 2,
    label: 'Linkedin',
    icon: <Linkedin className="size-[1.1rem]" />,
    href: config.social.linkedin,
    hoverClass: 'hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))]' as ClassValue,
  },
  {
    id: 3,
    label: 'Instagram',
    icon: <FaInstagram className="size-[1.1rem]" />,
    href: config.social.instagram,
    hoverClass: 'hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))]' as ClassValue,
  },
  {
    id: 4,
    label: 'X',
    icon: <TbBrandX className="size-[1.1rem]" />,
    href: config.social.x,
    hoverClass: 'hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))]' as ClassValue,
  },
  {
    id: 5,
    label: 'Telegram',
    icon: <TbBrandTelegram className="size-[1.1rem]" />,
    href: config.social.telegram,
    hoverClass: 'hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))]' as ClassValue,
  },
  {
    id: 6,
    label: 'Gmail',
    icon: <SiGmail className="size-[1.1rem]" />,
    href: `mailto:${config.social.email}`,
    hoverClass: 'hover:border-[hsl(var(--blueprint-line)/0.5)] hover:text-[hsl(var(--blueprint-line))]' as ClassValue,
  },
]

const Socials = () => {
  return (
    <ul className="flex items-center gap-2">
      {socialsIcons.map(social => (
        <li key={social.id}>
          <a
            href={social.href}
            title={social.label}
            className={cn(
              'border border-[hsl(var(--border))] text-muted-foreground size-9 flex items-center justify-center transition-all duration-200 el-focus-styles',
              social.hoverClass,
            )}
            aria-label={social.label}
            target="_blank"
            rel="external"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
