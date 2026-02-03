import { createId } from '@paralleldrive/cuid2'
import { ChainGpt, LumaIcon } from '~/assets/svg'
import { Akil, Eskalate, Jotion, YubaNow, HomeFinder, Summizer, Photogram } from './project-icons'

// Project cover images
import eskalateCover from '~/assets/images/cover/eskalate.png'
import akilCover from '~/assets/images/cover/akil.png'
import yubanowCover from '~/assets/images/cover/yubanow.png'
import homeFinderCover from '~/assets/images/cover/homefinder.png'
import notionCover from '~/assets/images/cover/jotion.png'
import summerizerCover from '~/assets/images/cover/summerizer.png'
import photogramCover from '~/assets/images/cover/photogram.png'
const projects = [
  {
    id: createId(),
    Icon: YubaNow,
    title: `Yuba`,
    description:
      'Yuba is an innovative platform designed for connecting users with various resources and services tailored to their needs. It focuses on enhancing the user experience through personalized recommendations and seamless interactions.',
    deployedURL: 'https://yubanow.com/',
    cover: yubanowCover,
    stacks: ['Next js', 'Python', 'FastAPI', 'PostgreSQL', 'Tailwind css', 'Shadcn ui'],
    isRepo: true,
    repoUrl: 'https://github.com/DossieScholar/Yuba',
  },
  {
    id: createId(),
    Icon: Eskalate,
    title: `Eskalate`,
    description:
      'Eskalate is a premium platform connecting businesses with top-tier offshore developers and dedicated teams. Specializing in talent outsourcing and end-to-end project delivery, Eskalate provides access to Google-level developers at competitive rates.',
    deployedURL: 'https://eskalate.io/',
    cover: eskalateCover,
    stacks: ['Next js', 'Go', 'MongoDB', 'Tailwind css'],
    isRepo: true,
    repoUrl: 'https://github.com/A2SV/Eskalate',
  },
  {
    id: createId(),
    Icon: Akil,
    title: `Akil`,
    description:
      'Akil is a platform designed to connect organizations with youth seeking opportunities. By simplifying the process of managing opportunities and enhancing communication, Akil helps organizations find the right talent while offering individuals tailored opportunities.',
    deployedURL: 'https://akilconnect.org/en',
    cover: akilCover,
    stacks: ['Next js', 'Go', 'MongoDB', 'Tailwind css'],
    isRepo: true,
    repoUrl: 'https://github.com/A2SV/AKIL',
  },
  
  {
    id: createId(),
    Icon: HomeFinder,
    title: `HomeFinder`,
    description:
      'HomeFinder is a comprehensive website that allows you to list and find a variety of homes for rent and purchase. This project provides a seamless and user-friendly experience for both homebuyers and property owners.',
    deployedURL: 'https://homefinder-awrp.onrender.com/',
    cover: homeFinderCover,
    stacks: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind css'],
    isRepo: true,
    repoUrl: 'https://github.com/yoseflakew25/HomeFinder',
  },
  {
    id: createId(),
    Icon: Jotion,
    title: `Fullstack Notion Clone`,
    description:
      'This project is a clone of the note-taking app Notion, built with Next.js and TypeScript. Key features include a real-time database, a Notion-style editor, light and dark modes, infinite nested documents, authentication, and file recovery.',
    deployedURL: 'https://notion-clone-yosef-coder.vercel.app/',
    cover: notionCover,
    stacks: [
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Next.js',
      'Clerk',
      'NextAuth',
      'Convex',
    ],
    isRepo: true,
    repoUrl: 'https://github.com/yoseflakew25/notion-clone',
  },
  {
    id: createId(),
    Icon: Summizer,
    title: `Summize - AI Article Summarizer`,
    description:
      'Summize is an open-source article summarizer that utilizes Natural Language Processing (NLP) techniques to generate a summary of a given article. It simplifies your reading by transforming lengthy articles into clear and concise summaries.',
    deployedURL: 'https://ai-article-summarizer-c917a2.netlify.app/',
    cover: summerizerCover,
    stacks: ['React', 'CSS', 'GPT-4'],
    isRepo: true,
    repoUrl: 'https://github.com/yoseflakew25/AI-article-summarizer',
  },
  {
    id: createId(),
    Icon: Photogram,
    title: `Photogram`,
    description:
      'A photo gallery app using the Pixabay API with home, category, tag, and single photo pages. It features infinite scroll, a masonry layout, filters, image search, album listings, and dark/light mode.',
    deployedURL: 'https://ai-article-summarizer-c917a2.netlify.app/',
    cover: photogramCover,
    stacks: [
      'Sass',
      'Vue',
      'Vuex',
      'SCSS',
      'Vue Router',
      'Pixabay API',
      'Masonry Layout Wall',
    ],
    isRepo: true,
    repoUrl: 'https://github.com/yoseflakew25/Photogram-app',
  },
]

export default projects
export type TProject = (typeof projects)[0]
