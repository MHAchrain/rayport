// Profile
import Ray from '../assets/profile.jpeg'
import MHAR from '../assets/MHARed.svg'
import MHAW from '../assets/MHAWhite.svg'

// Project
import Rere1 from '../assets/webapp1.png'
import SoftComp from '../assets/softcomp.png'
import grevora from '../assets/grevora.png'
import cleanair from '../assets/cleanair.png'
import growsight from '../assets/gs.png'

// Sertifikat skill
import sertifdasarweb from '../assets/sertif1.png'
import sertifjs from '../assets/sertif5.png'

// Sertifikat lomba
import sertiflomba from '../assets/sertif2.png'
import sertiflomba2 from '../assets/sertif3.png'
import sertiflomba3 from '../assets/sertif4.png'

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
  { label: 'Sertifikat', href: '#sertif' },
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
    description: 'Membuat tata letak yang responsif, komponen yang dapat digunakan kembali, dan interaksi yang lancar.',
    items: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'UI/UX Designer',
    icon: 'UI',
    description: 'Mendesain alur pengguna, hierarki visual, prototipe, dan pengalaman yang berfokus pada pengguna.',
    items: ['Figma', 'Wireframe', 'Prototype', 'Design System'],
  },
  {
    title: 'Mobile Developer',
    icon: 'Flutter',
    description: 'Mengembangkan aplikasi mobile lintas-platform dengan fokus pada kinerja dan pengalaman pengguna.',
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
      'Website yang dirancang untuk memudahkan pemilik bisnis petshop dalam mengelola produk, stok, dan pesanan secara efisien. Dengan antarmuka yang intuitif, pemilik dapat dengan mudah menambahkan produk baru',
    tech: ['React', 'Tailwind CSS', 'Laravel', 'Flutter', 'Figma', 'UI/UX', 'MySQL'],
    link: 'https://rerepetshop.biz.id/',
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
      'Sebuah desain aplikasi mobile untuk pengelolaan sampah perkotaan yang didasarkan pada ekonomi sirkular. Dikembangkan menggunakan metode Design Thinking, Grevora mengintegrasikan sistem insentif ganda dan gamifikasi untuk memotivasi masyarakat agar memilah sampah langsung di sumbernya.',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototyping', 'Design Thinking', 'User Research'],
    link: 'http://figma.com/proto/HsbtvSTWg3iyFG2NZWqKRE/UIUX-Techomfest-KicauMania?node-id=1380-6887&p=f&t=fG1zxi73hse1xH9Y-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1380%3A3697',
  },
  {
    title: 'Clean Air',
    category: 'UI/UX Design',
    image: cleanair,
    description:
      'Sebuah desain aplikasi mobile untuk memantau kualitas udara di sekitar pulau Jawa. Dikembangkan menggunakan metode Design Thinking, Clean Air menawarkan visualisasi data yang jelas dan intuitif.',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototyping', 'Design Thinking', 'User Research'],
    link: 'https://www.figma.com/proto/RAXVQlX3wvvRfqQNtzyzG6/KICAU-MANIA?node-id=1-2&p=f&t=tBaBTfnE43D9xTBQ-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=115%3A108',
  },
  {
    title: 'GrowSight',
    category: 'UI/UX Design',
    image: growsight,
    description:
      'Sebuah desain aplikasi layanan kesehatan mobile yang dirancang untuk deteksi dini stunting dan pemantauan pertumbuhan anak dengan bantuan teknologi AI, yang membantu orang tua memantau perkembangan gizi anak serta mengakses edukasi kesehatan yang terpercaya dengan mudah.',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototyping', 'Design Thinking', 'User Research'],
    link: 'https://www.figma.com/proto/NkcitBwuYIajNkRcbQagzU/UJANGKEDU-UNJAYA?node-id=0-1&t=STwmNSDstHGVZTV3-1',
  },
]

export const sertificates = [
  {
    title: 'Sertifikat Belajar Dasar Pemrograman Web',
    category: 'Programming',
    image: sertifdasarweb,
    description:
      'Sertifikat yang menunjukkan keahlian dalam pengembangan web menggunakan teknologi terkini.',
    tech: ['HTML', 'CSS'],
    link: '#',
  },
  {
    title: 'Sertifikat Belajar Dasar JavaScript',
    category: 'Programming',
    image: sertifjs,
    description:
      'Sertifikat yang menunjukkan keahlian dalam pengembangan web menggunakan teknologi terkini.',
    tech: ['JavaScript'],
    link: '#',
  },
  {
    title: 'Sertifikat Lomba UI/UX Design',
    category: 'Lomba',
    image: sertiflomba3,
    description:
      'Sertifikat Juara 3 dalam Lomba UI/UX Design.',
    tech: ['Figma', 'UI/UX Design'],
    link: '#',
  },
  {
    title: 'Sertifikat Lomba UI/UX Design',
    category: 'Lomba',
    image: sertiflomba,
    description:
      'Sertifikat hadir sebagai Peserta dalam Lomba UI/UX Design.',
    tech: ['Figma', 'UI/UX Design'],
    link: '#',
  },
  {
    title: 'Sertifikat Lomba UI/UX Design',
    category: 'Lomba',
    image: sertiflomba2,
    description:
      'Sertifikat hadir sebagai Peserta dalam Lomba UI/UX Design.',
    tech: ['Figma', 'UI/UX Design'],
    link: '#',
  },
]

export const experiences = [
  {
    year: '2024',
    title: 'Memahami Dasar-dasar Rekayasa Perangkat Lunak',
    description:
      'Mempelajari dasar-dasar rekayasa perangkat lunak, termasuk pemrograman, algoritma, dan struktur data untuk membangun fondasi yang kuat dalam pengembangan perangkat lunak.',
  },
  {
    year: '2025',
    title: 'Mengeksplorasi Framework, Desain Responsif, dan Pengalaman Pengguna',
    description:
      'Mengeksplorasi kerangka kerja pengembangan web (framework), desain responsif, dan prinsip pengalaman pengguna untuk menciptakan aplikasi yang fungsional dan menarik secara visual.',
  },
  {
    year: '2026',
    title: 'Mengembangkan Solusi Multiplatform & Bekerja Sama dengan Bisnis',
    description:
    'Membuat desain aplikasi mobile dan web yang dapat berjalan di berbagai platform, serta menjalin kemitraan dengan bisnis untuk mengimplementasikan solusi digital yang inovatif.',
  },
]

export const stats = [
  { value: '12+', label: 'Active Skills' },
  { value: '3+', label: 'Focus Areas' },
  { value: '100%', label: 'User-centric' },
]
