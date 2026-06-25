import { 
    FaGithub, 
    FaInstagram, 
    FaLinkedin,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaVuejs,
    FaFigma,
    FaPaintBrush,
    FaUsers,
    FaPhp,
    FaPython
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiFlutter } from 'react-icons/si'

const iconComponents = {
    Github: FaGithub,
    Linkedin: FaLinkedin,
    LinkedIn: FaLinkedin,
    Instagram: FaInstagram,
    Email: MdEmail,
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    JS: FaJs,
    React: FaReact,
    Vue: FaVuejs,
    Figma: FaFigma,
    Flutter: SiFlutter,
    UI: FaPaintBrush,
    UX: FaUsers,
    PHP: FaPhp,
    Python: FaPython
}

const iconColors = {
    HTML: '#e34f26',
    CSS: '#1572b6',
    JS: '#f7df1e',
    React: '#61dafb',
    Vue: '#42b883',
    Figma: '#f24e1e',
    Flutter: '#02569b',
    UI: '#ff4f81',
    UX: '#a78bfa',
    TW: '#38bdf8',
    PHP: '#777bb4',
    Python: '#3776ab'
}

export function getSocialIcon(iconName) {
  return iconComponents[iconName] || null
}

export function getIconColor(iconName) {
  return iconColors[iconName] || '#ff1f1f'
}
