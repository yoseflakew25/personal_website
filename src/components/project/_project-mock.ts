// Project cover images
import eskalateCover from '~/assets/images/cover/eskalate.png'
import akilCover from '~/assets/images/cover/akil.png'
import yubanowCover from '~/assets/images/cover/yubanow.png'
import ordoCover from '~/assets/images/cover/ordo.png'
import qrCodeGeneratorCover from '~/assets/images/cover/qr.png'
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
    id: 'ordo',
    title: `Ordo`,
    description:
    'Ordo is an all-in-one personal productivity workspace designed to organize notes, tasks, habits, and structured databases in one unified place. Built as a fullstack platform with Next.js 13 and Convex, it features a BlockNote block-based editor, drag-and-drop Kanban task board, streak-tracking habit logs, customizable Notion-style tables, ⌘K command palette search, dynamic light and dark modes, custom session-based auth with OTP email verification, and instant public note publishing.',
    deployedURL: 'https://ordo-one.vercel.app/',
    cover: ordoCover,
    stacks: [
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Next.js',
      'Convex',
    ],
    isRepo: false,
    repoUrl: 'https://github.com/yoseflakew25/ordo',
  },
  {
    id: 'qr-code-generator',
    title: `QR Code Generator`,
    description:
      'Free, open-source QR code generator available as a web app and Chrome extension. Generate, download, and share QR codes instantly: no sign-up, no tracking.',
    deployedURL: 'https://qr-code-generator-two-henna.vercel.app/',
    cover: qrCodeGeneratorCover,
    stacks: ['React', 'Tailwind CSS', 'Next.js'],
    isRepo: true,
    repoUrl: 'https://github.com/yoseflakew25/QR-Code-Generator/tree/master',
  },
] as const

export type TProjectSerialized = (typeof projects)[number]
