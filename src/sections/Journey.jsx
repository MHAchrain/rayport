import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { experiences } from '../data/data'

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative isolate scroll-mt-28 overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-20 lg:scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_18px)] opacity-35" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-700/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 z-0 h-full bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[44px_44px] mask-[linear-gradient(to_bottom,transparent_0%,black_15%,black_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-linear-to-b from-transparent via-background/85 to-background" />

      <div className="relative z-10 mx-auto max-w-[88rem]">
        <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
          <div className="xl:sticky xl:top-28">
            <p className="text-md font-semibold uppercase tracking-widest text-primary-800">
              Perjalanan
            </p>
            <h2 className="mt-6 max-w-2xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-[3.35rem]">
              Jalan yang terus berkembang dari eksplorasi desain ke eksekusi frontend.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400 md:text-lg">
              Titik-titik penting yang membentuk bagaimana saya belajar, merancang, dan membangun produk digital yang lebih jelas dengan arahan visual yang lebih kuat.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-2 top-8 hidden w-px bg-linear-to-b from-primary-900 via-white/15 to-primary-900/20 md:block" />

            <div className="grid gap-5">
              {experiences.map((item, index) => (
                <article
                  key={item.title}
                  tabIndex={0}
                  className="group relative rounded-xl border border-white/10 bg-[#0b0909]/90 p-5 shadow-2xl shadow-black/25 backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1.5 hover:border-primary-800/80 hover:bg-[#0f0c0c] hover:shadow-primary-300/20 focus:outline-none focus-visible:-translate-y-1.5 focus-visible:border-primary-800 focus-visible:ring-2 focus-visible:ring-primary-800 md:ml-14 md:p-6"
                >
                  <div className="absolute left-0 top-7 hidden h-4 w-4 translate-x-[-3.55rem] rounded-full border border-primary-800 bg-background shadow-[0_0_0_8px_rgba(61,0,0,0.45),0_0_24px_rgba(255,31,31,0.45)] transition duration-300 group-hover:scale-125 group-hover:bg-primary-800 md:block" />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-300">
                        <CalendarDays className="h-3.5 w-3.5 text-primary-900" aria-hidden="true" />
                        {item.year}
                      </div>
                      <h3 className="mt-4 text-xl font-black leading-snug text-white transition duration-300 group-hover:text-primary-900 sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>


                  </div>

                  <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600">
                    <span className="h-px w-10 bg-primary-800/60 transition duration-300 group-hover:w-16 group-hover:bg-primary-900" />
                    Step 0{index + 1}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
