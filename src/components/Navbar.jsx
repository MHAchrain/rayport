import { navLinks, profile } from '../data/data'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary/15 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        
        {/* Brand / Logo */}
        <a className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90" 
        href="#home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl 
          bg-white/10 font-mono text-xl font-bold tracking-wider text-white border border-white/20 shadow-inner">
            R
          </span>
          <span className="flex flex-col global-font">
            <strong className="text-sm font-semibold tracking-wide">{profile.name}</strong>
            <small className="text-xs text-neutral-400">{profile.role}</small>
          </span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="group relative text-sm font-medium text-neutral-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
              {/* Garis bawah animasi */}
              <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary-400 shadow-[0_0_8px_#b10000] transition-all duration-300 ease-out group-hover:w-full"/>
            </a>
          ))}
        </div>

      </nav>
    </header>
  )
}