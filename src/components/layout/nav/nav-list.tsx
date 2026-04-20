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
      className="flex mt-6 sm:mt-0 flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
    >
      {navData.map(nav => (
        <NavItem key={nav.id} setOpen={setOpen} {...nav} />
      ))}
      <li role="listitem" className="sm:ml-2">
        <a
          href="/Yosef Lakew Resume.pdf"
          download
          className="px-4 py-1.5 border border-cyber-cyan/50 text-cyber-cyan font-jetbrains font-medium rounded-sm hover:bg-cyber-cyan/10 hover:border-cyber-cyan hover:shadow-neon-sm transition-all duration-300 text-sm el-focus-styles uppercase tracking-wider"
        >
          Resume
        </a>
      </li>
    </ul>
  )
}

export default NavList
