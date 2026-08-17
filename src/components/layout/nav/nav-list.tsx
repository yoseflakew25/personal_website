import { Dispatch, SetStateAction } from 'react'
import { navData } from './_nav-mock'
import NavItem from './nav-item'
import Magnetic from '~/components/ui/magnetic'

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
        <Magnetic strength={0.2} className="inline-block">
          <a
            href="/Yosef Lakew Resume.pdf"
            download
            className="font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-1.5 border border-[hsl(var(--blueprint-line))] bg-[hsl(var(--blueprint-line))] text-[#0a0a0a] hover:bg-[hsl(var(--blueprint-line)/0.9)] hover:shadow-[0_0_14px_hsl(var(--blueprint-line)/0.35)] transition-all duration-200 el-focus-styles"
          >
            RESUME
          </a>
        </Magnetic>
      </li>
    </ul>
  )
}

export default NavList
