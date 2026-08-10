'use client'
import { FiGithub } from 'react-icons/fi'
import { Linkedin, ArrowUp } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import { TbBrandTelegram, TbBrandX } from 'react-icons/tb'
import config from '~/config'

const socialLinks = [
  { icon: <FiGithub className="size-3" />, label: 'GitHub', href: config.social.github },
  { icon: <Linkedin className="size-3" />, label: 'LinkedIn', href: config.social.linkedin },
  { icon: <FaInstagram className="size-3" />, label: 'Instagram', href: config.social.instagram },
  { icon: <TbBrandX className="size-3" />, label: 'X', href: config.social.x },
  { icon: <TbBrandTelegram className="size-3" />, label: 'Telegram', href: config.social.telegram },
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-16 mb-4 relative">
      <div className="border-t border-dashed border-[hsl(var(--border)/0.5)] mb-4" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 print:hidden">
        {/* Social icons */}
        <div className="flex items-center gap-1.5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="size-7 flex items-center justify-center border border-[hsl(var(--border))] text-muted-foreground hover:text-[hsl(var(--blueprint-line))] hover:border-[hsl(var(--blueprint-line)/0.4)] transition-all duration-200 el-focus-styles"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Revision + copyright + back to top */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground">
            © {new Date().getFullYear()} {config.appName}
          </span>
          <button
            onClick={scrollToTop}
            className="size-7 flex items-center justify-center border border-[hsl(var(--border))] text-muted-foreground hover:text-[hsl(var(--blueprint-line))] hover:border-[hsl(var(--blueprint-line)/0.4)] transition-all duration-200 el-focus-styles"
            aria-label="Back to top"
          >
            <ArrowUp size={10} />
          </button>
        </div>
      </div>

    </footer>
  )
}

export default Footer
