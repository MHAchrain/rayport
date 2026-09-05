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
  headline: 'Halo, Saya MH Achrain (Ray).',
  description:
    'Seorang Frontend Developer & UI/UX Designer yang berfokus pada pembuatan antarmuka digital yang rapi, konsisten, dan intuitif. Saat ini sedang aktif mengembangkan berbagai proyek akademis dan pribadi dengan memperhatikan secara cermat detail visual dan kenyamanan pengguna (desain yang berpusat pada pengguna).',
  summary:
    'Logo ini mencerminkan identitas saya sebagai pengembang dan desainer melalui desain stensil geometris yang presisi, yang memadukan inisial MHA dengan huruf “A” yang berfungsi sebagai kursor navigasi UI/UX, semuanya dibungkus dalam estetika bersudut tajam yang menjadi ciri khas dunia game.',
}

export const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang Saya', href: '#about' },
  { label: 'Keterampilan', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Perjalanan', href: '#journey' },
  { label: 'Kontak', href: '#contact' },
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
  'Membangun antarmuka dari wireframes, desain visual, hingga implementasi frontend.',
  'Mempertahankan konsistensi dalam jarak, warna, tipografi, dan komponen untuk produk yang terlihat profesional.',
  'Mengutamakan alur pengguna yang jelas, responsif, dan nyaman di berbagai ukuran layar.',
]

export const projects = [
  {
    title: 'ReRe Petshop',
    category: 'Multiplatform Web App',
    image: Rere1,
    description:
      'Dashboard produktivitas untuk mengelola tugas kuliah, prioritas, dan kemajuan harian dengan fokus pada kejelasan visual.',
    tech: ['React', 'Tailwind CSS', 'Laravel', 'Flutter', 'Figma', 'UI/UX', 'MySQL'],
    link: '#',
  },
  {
    title: 'Portfolio Concept System',
    category: 'Personal Brand',
    image: Portfolio,
    description:
      'Ekplorasi sistem visual untuk portfolio modern dengan komponen kaca, ton premium, dan navigasi yang ringkas.',
    tech: ['React', 'Tailwind CSS'],
    link: 'https://mha-portofolio.vercel.app/',
  },
  {
    title: 'SoftComp Landing Page',
    category: 'Website Native',
    image: SoftComp,
    description:
      'Landing page kegiatan lomba mahasiswa dengan struktur informasi yang jelas, tombol Call to Action yang menonjol, dan tata letak yang mudah di-scan.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL', 'JS'],
    link: '#',
  },
  {
    title: 'Grevora',
    category: 'UI/UX Design',
    image: grevora,
    description:
      'Sebuah aplikasi mobile untuk pengelolaan sampah perkotaan yang didasarkan pada ekonomi sirkular. Dikembangkan menggunakan metode Design Thinking, Grevora mengintegrasikan sistem insentif ganda dan gamifikasi untuk memotivasi masyarakat agar memilah sampah langsung di sumbernya.',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototyping', 'Design Thinking', 'User Research'],
    link: 'http://figma.com/proto/HsbtvSTWg3iyFG2NZWqKRE/UIUX-Techomfest-KicauMania?node-id=1380-6887&p=f&t=fG1zxi73hse1xH9Y-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1380%3A3697',
  },
  {
    title: 'Clean Air',
    category: 'UI/UX Design',
    image: cleanair,
    description:
      'Sebuah aplikasi mobile untuk pengelolaan sampah perkotaan yang didasarkan pada ekonomi sirkular. Dikembangkan menggunakan metode Design Thinking, Clean Air mengintegrasikan sistem insentif ganda dan gamifikasi untuk memotivasi masyarakat agar memilah sampah langsung di sumbernya.',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototyping', 'Design Thinking', 'User Research'],
    link: 'https://www.figma.com/proto/RAXVQlX3wvvRfqQNtzyzG6/KICAU-MANIA?node-id=1-2&p=f&t=tBaBTfnE43D9xTBQ-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=115%3A108',
  },
  {
    title: 'GrowSight',
    category: 'UI/UX Design',
    image: growsight,
    description:
      'Sebuah aplikasi layanan kesehatan seluler yang dirancang untuk deteksi dini stunting dan pemantauan pertumbuhan anak, yang membantu orang tua memantau perkembangan gizi anak serta mengakses edukasi kesehatan yang terpercaya dengan mudah.',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototyping', 'Design Thinking', 'User Research'],
    link: 'https://www.figma.com/proto/NkcitBwuYIajNkRcbQagzU/UJANGKEDU-UNJAYA?node-id=0-1&t=STwmNSDstHGVZTV3-1',
  },
]

export const experiences = [
  {
    year: '2024',
    title: 'Starting Basic of Software Engineering',
    description:
      'Mempelajari dasar-dasar rekayasa perangkat lunak, termasuk pemrograman, algoritma, dan struktur data untuk membangun fondasi yang kuat dalam pengembangan perangkat lunak.',
  },
  {
    year: '2025',
    title: 'Exploring Web Development and UI/UX Design',
    description:
      'Mengeksplorasi kerangka kerja pengembangan web (framework), desain responsif, dan prinsip pengalaman pengguna untuk menciptakan aplikasi yang fungsional dan menarik secara visual.',
  },
  {
    year: '2026',
    title: 'Developing Multiplatform Solutions & Partnering with Businesses',
    description:
    'Membuat desain aplikasi mobile dan web yang dapat berjalan di berbagai platform, serta menjalin kemitraan dengan bisnis untuk mengimplementasikan solusi digital yang inovatif.',
  },
]

export const stats = [
  { value: '12+', label: 'Active Skills' },
  { value: '3+', label: 'Focus Areas' },
  { value: '100%', label: 'User-centric' },
]
