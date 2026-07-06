import { createId } from '@paralleldrive/cuid2'

export const navData = [
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
    label: 'Experience',
    path: '/experience',
  },
  {
    id: createId(),
    label: 'GitHub',
    path: '/github',
  },
  {
    id: createId(),
    label: 'Contact',
    path: '/contact',
  },


  // {
  //   id: createId(),
  //   label: 'Guests',
  //   path: '/guests',
  // },

  // {
  //   id: createId(),
  //   label: 'Contact',
  //   path: '/contact',
  // },
]

export type NavType = typeof navData

