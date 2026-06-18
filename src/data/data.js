import Ray from '../assets/profile.jpeg'

export const profile = {
  name: 'MHAchrain',
  nickname: 'Ray',
  role: 'Frontend Developer & UI/UX Designer',
  location: 'Indonesia',
  email: 'ray.mhachrain@email.com',
  photo: Ray,
  headline: 'Hi, I\'m MHAchrain (Ray).',
  description:
    'A Frontend Developer & UI/UX Designer focused on creating clean, consistent, and intuitive digital interfaces. Currently actively developing various academic and personal projects with full attention to visual detail and user comfort (user-centric design).',
  summary:
    'I build digital experiences from visual design to frontend implementation. My focus is on neat UI systems, easy-to-understand flow, and small details that make products feel comfortable to use.',
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
    title: 'Campus Task Manager',
    category: 'Web App',
    image: '/projects/campus-task.svg',
    description:
      'Productivity dashboard for managing college tasks, priorities, and daily progress with a focus on visual clarity.',
    tech: ['React', 'CSS', 'Local Data'],
  },
  {
    title: 'Portfolio Concept System',
    category: 'Personal Brand',
    image: '/projects/portfolio-system.svg',
    description:
      'Visual system exploration for a modern portfolio with glass components, premium tones, and concise navigation.',
    tech: ['UI Design', 'Figma', 'Prototype'],
  },
  {
    title: 'Student Event Landing',
    category: 'Interface Design',
    image: '/projects/event-landing.svg',
    description:
      'Student event landing page with a clear information structure, clear CTAs, and an easily scannable layout.',
    tech: ['HTML', 'CSS', 'Responsive'],
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
  { value: '12+', label: 'Skill aktif' },
  { value: '3+', label: 'Area fokus' },
  { value: '100%', label: 'User-centric' },
]
