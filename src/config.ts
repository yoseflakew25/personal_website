import { ConfigProps } from './types/config'

const config = {
  appName: 'Yosef Lakew',
  appDesignation: 'Fullstack Engineer & UI / UX Designer',
  appDescription: `I am a Fullstack Engineer & UI/UX Designer passionate about creating meaningful digital experiences. I specialize in building user-friendly, simple, and delightful tools that solve real-world problems through intuitive interfaces and robust back-end systems.`,

  domainName: 'https://portifoliov1-three.vercel.app/',

  colors: {
    theme: 'dark',
  },

  social: {
    github: 'https://github.com/yoseflakew25',
    linkedin: 'https://www.linkedin.com/in/yosef-lakeww/',
    instagram: 'https://www.instagram.com/jovion__/',
    x: 'https://x.com/YOSEFLAKEW48676',
    telegram: 'https://t.me/Josscy',
    email: 'yoseflakewdev@gmail.com',
  },

  auth: {
    loginUrl: '/api/auth/signin',
    callbackUrl: '/dashboard',
  },
} as ConfigProps

export default config
