import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const iconComponents = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Email: MdEmail,
}

export function getSocialIcon(iconName) {
  return iconComponents[iconName] || null
}
