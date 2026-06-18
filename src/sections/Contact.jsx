import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react'
import { profile, socials } from '../data/data'
import { getSocialIcon } from '../components/Icons'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-background px-6 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_40%,rgba(255,31,31,0.13),transparent_25%),radial-gradient(circle_at_82%_75%,rgba(149,1,1,0.16),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-linear-to-b from-transparent via-background/85 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <article className="flex min-h-120 flex-col justify-between rounded-xl border border-white/10 bg-[#0b0909]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8 lg:p-10">
            <div>
              <p className="text-md font-semibold uppercase tracking-widest text-primary-800">
                Contact
              </p>
              <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[3.35rem]">
                Let&apos;s build a clean and meaningful digital experience.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
                Open for collaboration, project discussions, and ideas around frontend development, UI systems, or product interface design.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-primary-800/80 hover:bg-white/8 focus:outline-none focus-visible:border-primary-800 focus-visible:ring-2 focus-visible:ring-primary-800"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-background text-primary-900 transition duration-300 group-hover:border-primary-800">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    Email
                  </span>
                  <span className="mt-1 block truncate text-sm font-semibold text-white">
                    {profile.email}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-background text-primary-900">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    Location
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white">
                    {profile.location}
                  </span>
                </span>
              </div>
            </div>

            <a
              href={`mailto:${profile.email}?subject=Project%20Collaboration%20Inquiry`}
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl border border-primary-800/70 bg-primary-300 px-5 py-3 text-sm font-black text-white shadow-2xl shadow-primary-300/20 transition duration-300 hover:-translate-y-1 hover:bg-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-800"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </a>
          </article>

          <aside className="grid gap-4">
            {socials.map((social) => {
              const IconComponent = getSocialIcon(social.icon)

              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#0b0909]/90 p-5 shadow-xl shadow-black/20 backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:border-primary-800/80 hover:bg-[#0f0c0c] focus:outline-none focus-visible:border-primary-800 focus-visible:ring-2 focus-visible:ring-primary-800"
                  aria-label={`Open ${social.label}`}
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition duration-300 group-hover:border-primary-800 group-hover:text-primary-900">
                      {IconComponent && <IconComponent className="h-5 w-5" aria-hidden="true" />}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-black text-white transition duration-300 group-hover:text-primary-900">
                        {social.label}
                      </span>
                      <span className="mt-1 block truncate text-sm text-neutral-400">
                        {social.handle}
                      </span>
                    </span>
                  </span>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-500 transition duration-300 group-hover:text-primary-900" aria-hidden="true" />
                </a>
              )
            })}
          </aside>
        </div>
      </div>
    </section>
  )
}
