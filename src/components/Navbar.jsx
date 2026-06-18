import { navLinks, profile, logos } from '../data/data'

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-primary/20 backdrop-blur-md">
      <nav className="mx-auto flex max-w-352 flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:flex-nowrap lg:gap-8">
        <a
          className="group flex min-w-0 items-center gap-3 text-white transition-opacity hover:opacity-90"
          href="#home"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 font-mono text-xl font-bold tracking-wider text-white shadow-inner">
            <img src={logos.logoWhite} alt="Logo" className="h-8 w-8 object-contain" />
          </span>
          <span className="flex min-w-0 flex-col">
            <strong className="truncate text-sm font-semibold tracking-wide">{profile.name}</strong>
            <small className="hidden truncate text-xs text-neutral-400 sm:block">{profile.role}</small>
          </span>
        </a>

        <div className="-mx-1 flex w-full items-center gap-2 overflow-x-auto px-1 pb-1 sm:gap-10 lg:mx-0 lg:w-auto lg:overflow-visible lg:pb-0">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="group relative shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-neutral-300 transition-colors duration-300 hover:border-primary-800/60 hover:text-white sm:text-sm lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:text-neutral-400"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-1/2 hidden h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary-800 shadow-[0_0_8px_#b10000] transition-all duration-300 ease-out group-hover:w-full lg:block" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
