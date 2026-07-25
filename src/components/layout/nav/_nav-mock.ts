import { createId } from '@paralleldrive/cuid2'

export type NavChildItem = {
  id: string
  label: string
  path: string
  external?: boolean
}

export type NavItemType = {
  id: string
  label: string
  path?: string
  children?: NavChildItem[]
}

export const navData: NavItemType[] = [
  {
    id: createId(),
    label: 'Home',
    path: '/',
  },
  {
    id: createId(),
    label: 'Projects',
    path: '/projects',
  },
  {
    id: createId(),
    label: 'Designs',
    path: '/designs',
  },
  {
    id: createId(),
    label: 'Blog',
    path: '/blog',
  },
  {
    id: createId(),
    label: 'GitHub',
    path: '/github',
  },
  {
    id: createId(),
    label: 'Contact',
    children: [
      { id: createId(), label: 'Contact', path: '/contact' },
      { id: createId(), label: 'GitHub', path: 'https://github.com/yoseflakew25', external: true },
      { id: createId(), label: 'LinkedIn', path: 'https://www.linkedin.com/in/yosef-lakeww/', external: true },
    ],
  },
]

export type NavType = NavItemType[]
