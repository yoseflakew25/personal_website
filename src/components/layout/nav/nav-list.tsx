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
          className="px-4 py-1.5 border-2 border-ring text-ring font-medium rounded-full hover:bg-ring hover:text-white transition-all duration-300 text-sm sm:text-base el-focus-styles"
        >
          Resume
        </a>
      </li>
    </ul>
  )
}

export default NavList
