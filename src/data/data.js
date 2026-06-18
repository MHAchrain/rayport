export const profile = {
  name: 'MHAchrain',
  nickname: 'Ray',
  role: 'Frontend Developer & UI/UX Designer',
  location: 'Indonesia',
  email: 'ray.mhachrain@email.com',
  photo: '/profile-ray.svg',
  headline: 'Halo, saya MHAchrain (Ray).',
  description:
    'Seorang Frontend Developer & UI/UX Designer yang berfokus pada pembuatan antarmuka digital yang bersih, konsisten, dan intuitif. Saat ini aktif mengembangkan berbagai projek kuliah maupun projek pribadi dengan perhatian penuh terhadap detail visual dan kenyamanan pengguna (user-centric design).',
  summary:
    'Saya membangun pengalaman digital dari sisi visual hingga implementasi frontend. Fokus saya ada pada sistem UI yang rapi, flow yang mudah dipahami, dan detail kecil yang membuat produk terasa nyaman digunakan.',
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
  { label: 'GitHub', href: 'https://github.com/', handle: '@mhachrain', icon: 'GH', bg: '#181717', color: '#ffffff' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', handle: 'MHAchrain Ray', icon: 'in', bg: '#0a66c2', color: '#ffffff' },
  { label: 'Instagram', href: 'https://instagram.com/', handle: '@mhachrain', icon: 'IG', bg: '#e4405f', color: '#ffffff' },
  { label: 'Email', href: 'mailto:ray.mhachrain@email.com', handle: 'Kirim pesan', icon: '@', bg: '#8a1730', color: '#ffffff' },
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
    description: 'Membangun layout responsif, komponen reusable, dan interaksi halus.',
    items: ['React', 'JavaScript', 'CSS Architecture', 'Vite'],
  },
  {
    title: 'UI/UX',
    icon: 'UI',
    description: 'Merancang alur, visual hierarchy, prototype, dan pengalaman berbasis pengguna.',
    items: ['Figma', 'Wireframe', 'Prototype', 'Design System'],
  },
  {
    title: 'Workflow',
    icon: '{}',
    description: 'Menjaga struktur kode, dokumentasi ringan, dan iterasi desain yang terarah.',
    items: ['Git', 'Component Thinking', 'Research', 'Testing UI'],
  },
]

export const aboutPoints = [
  'Menyusun interface dari wireframe, visual design, hingga implementasi frontend.',
  'Menjaga konsistensi spacing, warna, tipografi, dan komponen agar produk terasa rapi.',
  'Mengutamakan flow pengguna yang jelas, responsif, dan nyaman dipakai di berbagai layar.',
]

export const projects = [
  {
    title: 'Campus Task Manager',
    category: 'Web App',
    image: '/projects/campus-task.svg',
    description:
      'Dashboard produktivitas untuk mengelola tugas kuliah, prioritas, dan progres harian dengan visual yang fokus.',
    tech: ['React', 'CSS', 'Local Data'],
  },
  {
    title: 'Portfolio Concept System',
    category: 'Personal Brand',
    image: '/projects/portfolio-system.svg',
    description:
      'Eksplorasi sistem visual untuk portfolio modern dengan komponen glass, tone premium, dan navigasi ringkas.',
    tech: ['UI Design', 'Figma', 'Prototype'],
  },
  {
    title: 'Student Event Landing',
    category: 'Interface Design',
    image: '/projects/event-landing.svg',
    description:
      'Halaman acara mahasiswa dengan struktur informasi jelas, CTA tegas, dan layout yang mudah dipindai.',
    tech: ['HTML', 'CSS', 'Responsive'],
  },
]

export const experiences = [
  {
    year: '2024',
    title: 'Memulai eksplorasi UI/UX',
    description:
      'Mempelajari prinsip dasar layout, warna, tipografi, dan flow pengguna melalui berbagai studi kasus desain.',
  },
  {
    year: '2025',
    title: 'Mengembangkan projek kuliah',
    description:
      'Membangun interface web untuk kebutuhan akademik, presentasi projek, dan latihan implementasi frontend.',
  },
  {
    year: '2026',
    title: 'Mengarahkan personal branding',
    description:
      'Merapikan identitas visual, menyusun portfolio, dan memperkuat proses desain hingga frontend development.',
  },
]

export const stats = [
  { value: '12+', label: 'Skill aktif' },
  { value: '3+', label: 'Area fokus' },
  { value: '100%', label: 'User-centric' },
]
