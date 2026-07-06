import { StaticImageData } from 'next/image'
import akilCover from '~/assets/images/cover/akil.png'
import eskalateCover from '~/assets/images/cover/eskalate.png'

export type DesignProject = {
  id: number
  title: string
  des: string
  img: StaticImageData | string
  tags: string[]
  link: string
}

export const designProjects: DesignProject[] = [
  {
    id: 1,
    title: 'Akil: Connecting Opportunities and Talent',
    des: 'Akil is a platform that connects organizations with youth seeking meaningful opportunities. By streamlining job postings and enhancing communication, Akil helps organizations find the right talent while offering tailored opportunities for individuals. Join us in building an inclusive community that fosters growth and impactful connections.',
    img: akilCover,
    tags: ['Figma', 'Web', 'Mobile'],
    link: 'https://www.figma.com/design/4mF2oUmCdo9aYxhlspxUHz/Web-and-mobile-designs---AKIL?node-id=30873-9208&t=ZspapBb4XRXYXEBP-1',
  },
  {
    id: 2,
    title: 'Begena: All-in-One Mobile Learning Platform',
    des: 'Designed an interactive mobile application dedicated to preserving and teaching the traditional Ethiopian Begena. The app features gamified lessons, audio ear-training modules, and interactive quizzes covering historical tuning structures (Kignit) to offer a modern, accessible learning experience for cultural music heritage.',
    img: '/designs/begena.png',
    tags: ['Figma', 'Mobile'],
    link: 'https://www.figma.com/design/7lm38mvIdXM5sdj48KpzqB/Begena-All-in-One-App?node-id=2034-511&t=xRzWFUpq8dtwQO3R-1',
  },
  {
    id: 3,
    title: 'Investify Landing Page',
    des: "Created a product landing page for the Investify mobile app, featuring a clean and visually appealing design that aligns seamlessly with the platform's brand identity.",
    img: '/designs/investify.png',
    tags: ['Figma', 'Web'],
    link: 'https://www.figma.com/design/vQw5M5ELCnLEYB7rQEGkmD/investify-landing-page?node-id=127-950&t=9uVIEc9ob5s9W3Dp-1',
  },
  {
    id: 4,
    title: 'CRM Platform',
    des: 'Designed a CRM platform aimed at improving customer relationship management. The goal was to simplify user navigation and streamline tasks for business users.',
    img: '/designs/crm.png',
    tags: ['Figma', 'Web', 'Dashboard'],
    link: 'https://www.figma.com/design/pfeOEdqjWsPEeDtAHb8ATD/CRM?node-id=14609-3&t=WhldXLa7ksOKyMTZ-1',
  },
  {
    id: 5,
    title: 'Brana : A Bookstore App',
    des: 'Designed a mobile app for a bookstore, with features like book browsing, personalized recommendations, and a seamless checkout process.',
    img: '/designs/brana.png',
    tags: ['Figma', 'Mobile'],
    link: 'https://www.figma.com/design/DgRNtq3OzP4pwxamFYl5yw/Brana---Books-Mobile-App?node-id=3861-5106&t=3itYVA7joq2i86J2-1',
  },
  {
    id: 6,
    title: 'Job Finding Portal Website Design',
    des: 'Designed a job portal aimed at improving the recruitment experience for job seekers and employers.',
    img: '/designs/job.png',
    tags: ['Figma', 'Web'],
    link: 'https://www.figma.com/design/PRGsKA4KITU5IacE59klky/JobPort%3A-A-solution-for-connecting-talent-with-business?node-id=501-49194&t=Q4JF9qzYWYRiJyjU-1',
  },
  {
    id: 7,
    title: 'Event Booking Mobile App',
    des: 'Designed a mobile app for event finding and booking, providing a seamless user experience for browsing events and making bookings.',
    img: '/designs/event.png',
    tags: ['Figma', 'Mobile'],
    link: 'https://www.figma.com/design/5IcBUCt3Pq8uGG9QvidtbW/Event-Booking-App?node-id=1-4&t=BgVhRflFBTYWRCN3-1',
  },
  {
    id: 8,
    title: 'Landing Page for A2SV Eskalate',
    des: 'Designed a landing page for A2SV Eskalate, focusing on driving engagement and sign-ups.',
    img: eskalateCover,
    tags: ['Figma', 'Web'],
    link: 'https://www.figma.com/design/5bQ0qNXLfP5538NdO8kSah/Eskalate?node-id=3-1040&t=Q1v1xpuNL8Ya2WoG-1',
  },
  {
    id: 9,
    title: 'Fetan pay',
    des: 'I designed Fetan Pay, an all-in-one finance management tool specializing in payroll management and wallet services for employers and employees. The design includes both a mobile app and a website, ensuring seamless functionality across platforms.',
    img: '/designs/fetan-pay.png',
    tags: ['Figma', 'Web', 'Mobile'],
    link: 'https://www.figma.com/design/8oLGXdXPnQUcCu8WvUNiAV/Fetanpay?node-id=3704-567&t=wg20ISVtNLkUT8Aa-1',
  },
  {
    id: 10,
    title: 'E-Learning App (TimihertBet)',
    des: 'Designed a mobile app for middle school and high school students, offering educational content and interactive learning.',
    img: '/designs/timirt.png',
    tags: ['Figma', 'Mobile'],
    link: 'https://www.figma.com/design/7jonxT3eXUwBs7k49T5t4p/TimirtBet-Wireframe-and-Ui-Design?node-id=1395-2655&t=2X4nQjgGScp1kCuw-1',
  },
]
