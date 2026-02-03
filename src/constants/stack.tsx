import { BiLogoPostgresql } from 'react-icons/bi'
import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs'
import { IconType } from 'react-icons/lib'
import {
  SiCss3,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiPwa,
  SiPython,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

export type stacksProps = Record<
  string,
  {
    Icon: IconType
    className: string
  }
>

export const FRONTEND_STACKS: stacksProps = {
  JavaScript: { Icon: SiJavascript, className: 'text-yellow-400' },
  TypeScript: { Icon: SiTypescript, className: 'text-blue-400' },
  'Next.js': { Icon: SiNextdotjs, className: '' },
  'React.js': { Icon: SiReact, className: 'text-sky-500' },
  TailwindCSS: { Icon: SiTailwindcss, className: 'text-cyan-300' },
  Bootstrap: { Icon: BsFillBootstrapFill, className: 'text-purple-500' },
  'Material UI': { Icon: SiMui, className: 'text-sky-400' },
  ShadcnUI: { Icon: SiShadcnui, className: 'text-zinc-950 dark:text-zinc-50' },
  Redux: { Icon: SiRedux, className: 'text-purple-500' },
  Figma: { Icon: SiFigma, className: 'text-rose-500' },
  PWA: { Icon: SiPwa, className: 'text-amber-600' },
  Jest: { Icon: SiJest, className: 'text-red-600' },
  CSS: { Icon: SiCss3, className: 'text-blue-300' },
}

export const BACKEND_STACKS = {
  postgreSql: { Icon: BiLogoPostgresql, className: 'text-blue-500' },
  SQL: { Icon: SiMysql, className: 'text-blue-500' },
  Python: { Icon: SiPython, className: 'text-blue-500' },
  FastAPI: { Icon: SiFastapi, className: 'text-emerald-500' },
  Prisma: { Icon: SiPrisma, className: 'text-emerald-500' },
  'Node.js': { Icon: SiNodedotjs, className: 'text-green-600' },
  Supabase: { Icon: SiSupabase, className: 'text-emerald-500' },
  'Artificial Intelligence': { Icon: BsRobot, className: 'text-rose-500' },
  Nodejs: { Icon: SiNginx, className: 'text-green-500' },
  Socket: { Icon: SiSocketdotio, className: '' },
  Express: { Icon: SiExpress, className: '' },
}
