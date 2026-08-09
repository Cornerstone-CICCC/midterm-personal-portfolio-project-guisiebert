import {
  Briefcase,
  Code2,
  Coffee,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react'
import type { NarrowLink } from '../components/NarrowLinkCard'
import type { Social } from '../components/SocialCard'
import type { Project } from '../components/ProjectCard'

export const narrowLinks: NarrowLink[] = [
  {
    label: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/guisiebert',
    icon: Linkedin,
  },
  {
    label: 'HackerRank Profile',
    href: 'https://www.hackerrank.com/profile/guilhermebsiebe1',
    icon: Code2,
  },
  {
    label: 'Download my resume',
    href: 'https://docs.google.com/document/d/17vJze6-WpcnUnxYMX1-LELcaBMF_Rt9_UF1xYYMAE5w/edit?tab=t.0',
    icon: Briefcase,
  },
  {
    label: 'Buy me a coffee',
    href: 'https://buymeacoffee.com',
    icon: Coffee,
  },
]

export const socials: Social[] = [
  {
    name: 'Instagram',
    handle: '@guisiebert',
    href: 'https://instagram.com/guisiebert',
    icon: Instagram,
    className: 'bg-linear-135 from-purple-500 via-pink-500 to-orange-500',
  },
  {
    name: 'LinkedIn',
    handle: 'guisiebert',
    href: 'https://linkedin.com/in/guisiebert',
    icon: Linkedin,
    className: 'bg-blue-700',
  },
  {
    name: 'X / Twitter',
    handle: '@guilhermos',
    href: 'https://twitter.com/guilhermos',
    icon: Twitter,
    className: 'bg-black',
  },
  {
    name: 'Email',
    handle: 'gui@guisiebert.com',
    href: 'mailto:gui@guisiebert.com',
    icon: Mail,
    className: 'bg-red-600',
  },
]

export const projects: Project[] = [
  {
    title: '🐼 GoPanda',
    description:
      'This is how I redeveloped a ticket platform reducing server costs by 40% and the lessons I learned.',
    linkLabel: 'View Project',
    href: '/projects/gopanda',
    internal: true,
    variant: 'gradient',
  },
  {
    title: 'Rotabull Mobile App',
    description:
      'Mobile application developed for Rotabull using React Native and Expo SDK.',
    linkLabel: 'Learn more',
    href: 'https://www.linkedin.com/posts/rotabull_aviation-aerospace-avtech-activity-7326605384956207105-N9MW',
    badge: 'PROJECT',
    variant: 'minimal',
  },
]

export const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'React Native',
  'Prisma',
  'Postgres',
  'Tailwind',
]

export const softSkills = [
  'Entrepreneurship',
  'Communication',
  'Leadership',
  'Design',
  'Proactive',
  'Creativity',
]

export const photos = [
  {
    src: '/images/square-1.jpg',
    alt: 'My family and I',
    className: 'col-span-2 row-span-2',
  },
  { src: '/images/square-2.jpeg', alt: 'My daughter Becky and I' },
  { src: '/images/square-3.jpeg', alt: 'My son Simon' },
]
