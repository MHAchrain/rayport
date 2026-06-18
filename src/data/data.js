import Ray from '../assets/profile.jpeg'
import Rere1 from '../assets/webapp1.png'
import Rere2 from '../assets/webapp2.png'
import Rere3 from '../assets/webapp3.png'
import SoftComp from '../assets/softcomp.png'
import Portfolio from '../assets/port.png'
import MHAR from '../assets/MHARed.svg'
import MHAW from '../assets/MHAWhite.svg'

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
]

export const skillGroups = [
  {
    title: 'Frontend Developer',
    icon: 'React',
    description: 'Building responsive layouts, reusable components, and smooth interactions.',
    items: ['React', 'JavaScript', 'Tailwind CSS', 'Vue.js'],
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
    category: 'Web App',
    image: Rere1,
    description:
      'Productivity dashboard for managing college tasks, priorities, and daily progress with a focus on visual clarity.',
    tech: ['React', 'Tailwind CSS', 'Figma', 'UI/UX', 'Laravel', 'PHP', 'MySQL'],
  },
  {
    title: 'Portfolio Concept System',
    category: 'Personal Brand',
    image: Portfolio,
    description:
      'Visual system exploration for a modern portfolio with glass components, premium tones, and concise navigation.',
    tech: ['React', 'Tailwind CSS', 'Figma', 'UI/UX'],
  },
  {
    title: 'SoftComp Landing Page',
    category: 'Interface Design',
    image: SoftComp,
    description:
      'Student event landing page with a clear information structure, clear CTAs, and an easily scannable layout.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL', 'JS'],
  },
]

export const experiences = [
  {
    year: '2024',
    title: 'Starting UI/UX Exploration',
    description:
      'Learning the fundamentals of layout, color, typography, and user flow through various design case studies.',
  },
  {
    year: '2025',
    title: 'Developing Academic Projects',
    description:
      'Building web interfaces for academic needs, project presentations, and frontend implementation practice.',
  },
  {
    year: '2026',
    title: 'Guiding Personal Branding',
    description:
      'Refining visual identity, assembling portfolio, and strengthening the design-to-frontend development process.',
  },
]

export const stats = [
  { value: '12+', label: 'Active Skills' },
  { value: '3+', label: 'Focus Areas' },
  { value: '100%', label: 'User-centric' },
]
