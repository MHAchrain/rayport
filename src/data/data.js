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
  { name: 'HTML', icon: 'H5', bg: '#e34f26', color: '#ffffff' },
  { name: 'CSS', icon: 'CSS', bg: '#1572b6', color: '#ffffff' },
  { name: 'JavaScript', icon: 'JS', bg: '#f7df1e', color: '#121212' },
  { name: 'React', icon: 'Re', bg: '#61dafb', color: '#06131a' },
  { name: 'Vite', icon: 'V', bg: '#646cff', color: '#ffffff' },
  { name: 'Tailwind CSS', icon: 'TW', bg: '#38bdf8', color: '#06202b' },
  { name: 'UI Design', icon: 'UI', bg: '#c73d59', color: '#ffffff' },
  { name: 'UX Research', icon: 'UX', bg: '#9b5cff', color: '#ffffff' },
  { name: 'Figma', icon: 'F', bg: '#f24e1e', color: '#ffffff' },
  { name: 'Wireframing', icon: 'WF', bg: '#64748b', color: '#ffffff' },
  { name: 'Prototyping', icon: 'PT', bg: '#00c4b4', color: '#061615' },
  { name: 'Responsive Design', icon: 'RD', bg: '#22c55e', color: '#06140b' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: '</>',
    description: 'Building responsive layouts, reusable components, and smooth interactions.',
    items: ['React', 'JavaScript', 'CSS Architecture', 'Vite'],
  },
  {
    title: 'UI/UX',
    icon: 'UI',
    description: 'Designing user flows, visual hierarchy, prototypes, and user-centered experiences.',
    items: ['Figma', 'Wireframe', 'Prototype', 'Design System'],
  },
  {
    title: 'Workflow',
    icon: '{}',
    description: 'Maintaining code structure, lightweight documentation, and directed design iterations.',
    items: ['Git', 'Component Thinking', 'Research', 'Testing UI'],
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
