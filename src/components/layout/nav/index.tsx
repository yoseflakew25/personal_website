'use client'
import Logo from './logo'
import MobileNav from './mobile-nav'
import NavList from './nav-list'
import { motion, useScroll, useTransform } from 'framer-motion'

const Navbar = () => {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 100], [0.3, 0.85])
  const borderOpacity = useTransform(scrollY, [0, 100], [0.08, 0.3])

  return (
    <motion.nav
      className="sticky top-4 z-40 mb-12 w-full px-5 py-3 rounded-xl backdrop-blur-xl border transition-colors duration-300 shadow-neon-sm"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `hsla(240, 15%, 5%, ${v})`),
        borderColor: useTransform(borderOpacity, (v) => `hsla(180, 100%, 50%, ${v})`),
      }}
      role="navigation"
    >
      <div className="flex items-center justify-between">
        <Logo />

        <div className="hidden sm:block">
          <NavList />
        </div>

        <div className="block sm:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
