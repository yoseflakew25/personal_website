import { Dispatch, SetStateAction } from 'react'
import { navData } from './_nav-mock'
import NavItem from './nav-item'

interface NavProps {
  setOpen?: Dispatch<SetStateAction<boolean>>
}

const NavList: React.FC<NavProps> = ({ setOpen }) => {
  return (
    <ul
      role="list"
      className="flex mt-6 sm:mt-0 flex-col sm:flex-row sm:items-center gap-2 sm:gap-0"
    >
      {navData.map(nav => (
        <NavItem key={nav.id} setOpen={setOpen} {...nav} />
      ))}
      <li role="listitem" className="sm:ml-3">
        <a
          href="/Yosef Lakew Resume.pdf"
          download
          className="font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-[hsl(var(--blueprint-line)/0.5)] bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 el-focus-styles"
        >
          RESUME
        </a>
      </li>
    </ul>
  )
}

export default NavList
