import { navLinks, profile, socials } from '../data/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-background px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <section className="space-y-4" aria-labelledby="footer-brand">
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 font-mono text-xl font-bold text-white shadow-inner">
              R
            </span>
            <span className="flex flex-col">
              <strong id="footer-brand" className="text-base font-semibold tracking-wide">{profile.name}</strong>
              <small className="text-sm text-neutral-400">{profile.role}</small>
            </span>
          </a>

          <p className="max-w-md text-sm leading-6 text-neutral-400">
            {profile.summary}
          </p>
        </section>

        <nav aria-labelledby="footer-navigation">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-300">
            Navigasi
          </h2>
          <ul id="footer-navigation" className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="w-fit text-sm text-neutral-400 transition-colors hover:text-primary-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-socials">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-300">
            Connect
          </h2>
          <ul id="footer-socials" className="mt-4 flex flex-wrap gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-bold transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: social.bg, color: social.color }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between" aria-label="Footer credits">
        <p>&copy; {currentYear} {profile.nickname}. All rights reserved.</p>
        <p>Built with React, Vite, and Tailwind CSS.</p>
      </section>
    </footer>
  )
}
