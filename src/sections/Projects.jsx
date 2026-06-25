import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/data'

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate scroll-mt-28 overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-20 lg:scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_85%_55%,rgba(255,31,31,0.12),transparent_35%),radial-gradient(circle_at_16%_78%,rgba(119,0,0,0.16),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-linear-to-b from-transparent via-background/85 to-background" />

      <div className="relative z-10 mx-auto max-w-352">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-md font-semibold uppercase tracking-widest text-primary-800">
              Projects
            </p>
            <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-[3.35rem]">
              Selected work shaped with clean structure and careful interface details.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-neutral-400 md:text-lg">
            A collection of web, branding, and interface explorations focused on clarity, consistency, and responsive user experience.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              tabIndex={0}
              className="group rounded-xl border border-white/10 bg-[#0b0909] p-3 shadow-2xl shadow-black/30 transition duration-300 ease-out hover:-translate-y-2 hover:border-primary-800/80 hover:bg-[#0f0c0c] hover:shadow-primary-300/20 focus:outline-none focus-visible:-translate-y-2 focus-visible:border-primary-800 focus-visible:ring-2 focus-visible:ring-primary-800"
            >
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block outline-none"
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-lg border border-white/10 bg-primary-100">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neutral-200 backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                <div className="p-3 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-black leading-snug text-white transition duration-300 group-hover:text-primary-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 min-h-24 text-sm leading-6 text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-300 transition duration-300 group-hover:border-primary-800/60 group-hover:bg-primary-300/20 group-hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
