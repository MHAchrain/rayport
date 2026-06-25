import Ray from '../assets/profile.jpeg'
import Rere1 from '../assets/webapp1.png'
import Rere2 from '../assets/webapp2.png'
import Rere3 from '../assets/webapp3.png'
import SoftComp from '../assets/softcomp.png'
import Portfolio from '../assets/port.png'
import MHAR from '../assets/MHARed.svg'
import MHAW from '../assets/MHAWhite.svg'
import grevora from '../assets/grevora.png'
import cleanair from '../assets/cleanair.png'
import growsight from '../assets/gs.png'

export const logos = {
  logoRed: MHAR,
  logoWhite: MHAW,
}


export const profile = {
  name: 'MH Achrain',
  nickname: 'Ray',
  role: 'Frontend Developer & UI/UX Designer',
  location: 'Indonesia',
  email: 'mhikmaturrahman2@gmail.com',
  photo: Ray,
  headline: 'Hi, I\'m MH Achrain (Ray).',
  description:
    'A Frontend Developer & UI/UX Designer focused on creating clean, consistent, and intuitive digital interfaces. Currently actively developing various academic and personal projects with full attention to visual detail and user comfort (user-centric design).',
  summary:
    'This logo embodies my identity as a developer and designer through a precise geometric stencil design that combines the initials MHA, with the letter "A" serving as a UI/UX navigation cursor, all wrapped in the sharp-angled aesthetic characteristic of the gaming world.',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/MHAchrain', handle: '@MHAchrain', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/muhammad-hikmaturrahman-achrain-02b3a0327/', handle: 'Muhammad Hikmaturrahman Achrain', icon: 'Linkedin' },
  { label: 'Instagram', href: 'https://instagram.com/mhrain._', handle: '@mhrain._', icon: 'Instagram' },
  { label: 'Email', href: 'mailto:mhikmaturrahman2@gmail.com', handle: 'Kirim pesan', icon: 'Email' },
]

export const skills = [
  { name: 'HTML', icon: 'HTML'},
  { name: 'CSS', icon: 'CSS'},
  { name: 'JavaScript', icon: 'JS'},
  { name: 'React.js', icon: 'React'},
  { name: 'Tailwind CSS', icon: 'TW'},
  { name: 'UI Design', icon: 'UI'},
  { name: 'UX Research', icon: 'UX'},
  { name: 'Figma', icon: 'Figma'},
  { name: 'Vue.js', icon: 'Vue'},
  { name: 'Flutter', icon: 'Flutter'},
  { name: 'PHP', icon: 'PHP'},
  { name: 'Python', icon: 'Python'},
]

export const skillGroups = [
  {
    title: 'Frontend Developer',
    icon: 'React',
    description: 'Building responsive layouts, reusable components, and smooth interactions.',
    items: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'UI/UX Designer',
    icon: 'UI',
    description: 'Designing user flows, visual hierarchy, prototypes, and user-centered experiences.',
    items: ['Figma', 'Wireframe', 'Prototype', 'Design System'],
  },
  {
    title: 'Mobile Developer',
    icon: 'Flutter',
    description: 'Creating cross-platform mobile applications with a focus on performance and user experience.',
    items: ['Flutter', 'Dart', 'Responsive Design', 'State Management'],
  },
]

export const aboutPoints = [
  'Building interfaces from wireframes, visual design, to frontend implementation.',
  'Maintaining consistency in spacing, colors, typography, and components for a polished product.',
  'Prioritizing clear user flows, responsiveness, and comfort across various screen sizes.',
]

export const projects = [
  {
    title: 'ReRe Petshop',
    category: 'Multiplatform Web App',
    image: Rere1,
    description:
      'Productivity dashboard for managing college tasks, priorities, and daily progress with a focus on visual clarity.',
    tech: ['React', 'Tailwind CSS', 'Laravel', 'Flutter', 'Figma', 'UI/UX', 'MySQL'],
    link: '#',
  },
  {
    title: 'Portfolio Concept System',
    category: 'Personal Brand',
    image: Portfolio,
    description:
      'Visual system exploration for a modern portfolio with glass components, premium tones, and concise navigation.',
    tech: ['React', 'Tailwind CSS'],
    link: 'https://mha-portofolio.vercel.app/',
  },
  {
    title: 'SoftComp Landing Page',
    category: 'Website Native',
    image: SoftComp,
    description:
      'Student event landing page with a clear information structure, clear CTAs, and an easily scannable layout.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL', 'JS'],
    link: '#',
  },
  {
    title: 'Grevora',
    category: 'UI/UX Design',
    image: grevora,
    description:
      'A smart urban waste management mobile app based on the circular economy. Developed using the Design Thinking method, Grevora integrates a dual-incentive system and gamification to motivate the public to sort waste directly at the source.',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototyping', 'Design Thinking', 'User Research'],
    link: 'http://figma.com/proto/HsbtvSTWg3iyFG2NZWqKRE/UIUX-Techomfest-KicauMania?node-id=1380-6887&p=f&t=fG1zxi73hse1xH9Y-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1380%3A3697',
  },
  {
    title: 'Clean Air',
    category: 'UI/UX Design',
    image: cleanair,
    description:
      'A smart urban waste management mobile app based on a circular economy, designed to motivate the public to sort waste directly at the source through a dual-incentive system and gamification.',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototyping', 'Design Thinking', 'User Research'],
    link: 'https://www.figma.com/proto/RAXVQlX3wvvRfqQNtzyzG6/KICAU-MANIA?node-id=1-2&p=f&t=tBaBTfnE43D9xTBQ-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=115%3A108',
  },
  {
    title: 'GrowSight',
    category: 'UI/UX Design',
    image: growsight,
    description:
      'A mobile healthcare application designed for early stunting detection and child growth monitoring, helping parents track nutritional development and access valid health education easily.',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototyping', 'Design Thinking', 'User Research'],
    link: 'https://www.figma.com/proto/NkcitBwuYIajNkRcbQagzU/UJANGKEDU-UNJAYA?node-id=0-1&t=STwmNSDstHGVZTV3-1',
  },
]

export const experiences = [
  {
    year: '2024',
    title: 'Starting Basic of Software Engineering',
    description:
      'Learning the fundamentals of software engineering, including programming languages, algorithms, and basic web development concepts.',
  },
  {
    year: '2025',
    title: 'Exploring Web Development and UI/UX Design',
    description:
      'Diving into web development frameworks, responsive design, and user experience principles to create functional and visually appealing applications.',
  },
  {
    year: '2026',
    title: 'Developing Multiplatform Solutions & Partnering with Businesses',
    description:
    'Designing and building production-ready web and mobile e-commerce applications for local business partners, while mastering full-stack integration and end-to-end development.',
  },
]

export const stats = [
  { value: '12+', label: 'Active Skills' },
  { value: '3+', label: 'Focus Areas' },
  { value: '100%', label: 'User-centric' },
]
