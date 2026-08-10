// Project cover images
import eskalateCover from '~/assets/images/cover/eskalate.png'
import akilCover from '~/assets/images/cover/akil.png'
import yubanowCover from '~/assets/images/cover/yubanow.png'
import notionCover from '~/assets/images/cover/jotion.png'
import summerizerCover from '~/assets/images/cover/summerizer.png'
import dicdoCover from '~/assets/images/cover/dicdo.png'

export const projects = [
  {
    id: 'yuba',
    title: `Yuba`,
    description:
      'Yuba is an AI-powered operating system for venture building in Africa, guiding founders from ambiguous ideas to validated startups through evidence-backed steps. It streamlines the venture creation process across four modules: Problem Discovery (de-risking ideas via automated clarifying interviews and generating comprehensive validation reports), Value Proposition Design (analyzing customer research and mapping value grids), MVP & Business Model Development (auto-generating Business Model Canvases and detailed PRDs while evaluating ideas via a 6-pillar Solution Critique), and Market Validation (formulating go-to-market strategies and tracking real-world validation metrics).',
    deployedURL: 'https://yubanow.com/',
    cover: yubanowCover,
    stacks: ['Next js', 'Python', 'FastAPI', 'PostgreSQL', 'Tailwind css', 'Shadcn ui'],
    isRepo: true,
    repoUrl: 'https://github.com/DossieScholar/Yuba',
  },
  {
    id: 'eskalate',
    title: `Eskalate`,
    description:
      'Eskalate is a talent and project delivery platform backed by the A2SV training backbone, connecting companies with Africa\'s top AI-ready software developers. It supports multiple engagement models: Talent Outsourcing (embedding vetted, senior full-stack, frontend, backend, mobile, and AI/ML engineers directly into teams), Project Delivery (assembling dedicated pods across design, engineering, QA, and delivery leadership to turn early ideas into fully realized MVPs and software releases), and AI Data & Evaluation (staffing technical software-engineering-fluent reviewers to perform complex model evaluations, code annotations, prompt reviews, and ML data QA).',
    deployedURL: 'https://eskalate.io/',
    cover: eskalateCover,
    stacks: ['Next js', 'Go', 'MongoDB', 'Tailwind css'],
    isRepo: true,
    repoUrl: 'https://github.com/A2SV/Eskalate',
  },
  {
    id: 'akil',
    title: `Akil`,
    description:
      'Akil (AkilConnect) is a unified opportunity discovery and talent recruitment platform bridging the gap between organizations and passionate young African talent. For organizations, it streamlines recruitment through a 3-step workflow: profile registration, AI-assisted opportunity posting, and central application management. For opportunity seekers, Akil delivers smart AI-driven job and internship matching, real-time application tracking, and an intuitive mobile app experience designed to help youth build meaningful careers.',
    deployedURL: 'https://akilconnect.org/en',
    cover: akilCover,
    stacks: ['Next js', 'Go', 'MongoDB', 'Tailwind css'],
    isRepo: true,
    repoUrl: 'https://github.com/A2SV/AKIL',
  },
  {
    id: 'dicdo',
    title: `DICDO`,
    description:
      'DICDO is a landing page for the Dire Integrated Community Development Organization, an Ethiopian NGO empowering communities through peacebuilding, education, and sustainable development. The site presents the organization\'s programs (peacebuilding & conflict resolution, education & literacy, women & youth empowerment, health & nutrition, WASH, and environmental protection), impact metrics, NEBE election-observation accreditation, impact stories with photo galleries, partner organizations, donation details, and a contact form — built to reflect DICDO\'s mission of building peaceful, self-sufficient communities.',
    deployedURL: 'https://dicdodd.com/',
    cover: dicdoCover,
    stacks: ['Next js', 'Tailwind css'],
    isRepo: false,
    repoUrl: '',
  },
  {
    id: 'notion-clone',
    title: `Jotion`,
    description:
      'Jotion is an all-in-one connected workspace designed to unify ideas, documents, and plans for faster, better work. Built as a fullstack productivity platform with Next.js and Convex, it features a real-time database, block-based Notion-style editor, infinite nested document trees, dynamic light and dark mode, Clerk authentication, trash archive & file recovery, and instant page publishing.',
    deployedURL: 'https://notion-clone-yosef-coder.vercel.app/',
    cover: notionCover,
    stacks: [
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Next.js',
      'Clerk',
      'Convex',
    ],
    isRepo: true,
    repoUrl: 'https://github.com/yoseflakew25/notion-clone',
  },
  {
    id: 'summize',
    title: `Summize`,
    description:
      'Summize is an open-source AI article summarizer that leverages OpenAI GPT-4 and Natural Language Processing (NLP) to condense lengthy web articles into clear, digestible summaries. Simply input any article URL to extract core insights within seconds, bypass reading overload, and maintain a history of summarized content.',
    deployedURL: 'https://ai-article-summarizer-c917a2.netlify.app/',
    cover: summerizerCover,
    stacks: ['React', 'Tailwind CSS', 'Redux Toolkit', 'RapidAPI', 'GPT-4'],
    isRepo: true,
    repoUrl: 'https://github.com/yoseflakew25/AI-article-summarizer',
  },
] as const

export type TProjectSerialized = (typeof projects)[number]
