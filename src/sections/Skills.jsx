import { skillGroups, skills, stats } from '../data/data'
import { getIconColor, getSocialIcon } from '../components/Icons'

function SkillIcon({ icon }) {
  const Icon = getSocialIcon(icon)
  const iconColor = getIconColor(icon)

  if (!Icon) {
    return (
      <span className="text-sm font-black" style={{ color: iconColor }}>
        {icon.slice(0, 2)}
      </span>
    )
  }

  return <Icon className="h-5 w-5" style={{ color: iconColor }} aria-hidden="true" />
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-28 overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-20 lg:scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0 h-full bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[44px_44px] mask-[linear-gradient(to_bottom,transparent_0%,black_15%,black_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-linear-to-b from-transparent via-background/85 to-background" />
      <div className="pointer-events-none absolute top-2/6 left-0 -z-10 h-100 w-100 -translate-y-1/2 rounded-full bg-primary-900/15 blur-[110px]" />
      <div className="pointer-events-none absolute top-2/3 right-12 -z-10 h-100 w-100 -translate-y-1/2 rounded-full bg-primary-900/15 blur-[110px]" />

      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-14">
        <div>
          <p className="text-md font-semibold uppercase tracking-widest text-primary-800">
            Keterampilan
          </p>
          <h2 className="mt-6 max-w-2xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-[3.35rem]">
            Alat dan bahasa yang saya gunakan untuk membentuk produk digital.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
            Perpaduan antara implementasi frontend, desain antarmuka, dan kebiasaan alur kerja yang membantu saya mewujudkan ide-ide menjadi pengalaman web yang responsif, konsisten, dan nyaman.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-primary-300/10 backdrop-blur-md"
            >
              <p className="text-3xl font-black text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-[88rem] gap-5 md:grid-cols-3 lg:mt-14">
        {skillGroups.map((group) => {
          const groupColor = getIconColor(group.icon)

          return (
          <article
            key={group.title}
            tabIndex={0}
            style={{ '--skill-color': groupColor }}
            className="group relative rounded-xl border border-white/10 bg-background/72 p-6 shadow-2xl shadow-primary-300/10 backdrop-blur-md transition duration-300 ease-out hover:-translate-y-2 hover:border-(--skill-color) hover:bg-background/90 hover:[box-shadow:0_24px_70px_-34px_var(--skill-color)] focus:outline-none focus-visible:-translate-y-2 focus-visible:border-(--skill-color) focus-visible:ring-2 focus-visible:ring-(--skill-color)"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/7 transition duration-300 group-hover:scale-110 group-hover:border-(--skill-color) group-hover:bg-white/10 group-focus-visible:scale-110">
              <SkillIcon icon={group.icon} />
            </div>
            <h3 className="relative mt-5 text-xl font-black text-white transition duration-300 group-hover:text-(--skill-color) group-focus-visible:text-(--skill-color)">{group.title}</h3>
            <p className="relative mt-3 text-sm leading-6 text-neutral-400">{group.description}</p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-300 transition duration-300 group-hover:border-(--skill-color) group-hover:bg-white/[0.07] group-hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
          )
        })}
      </div>

      <div className="mx-auto mt-8 grid max-w-[88rem] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {skills.map((skill) => {
          const skillColor = getIconColor(skill.icon)

          return (
          <div
            key={skill.name}
            tabIndex={0}
            style={{ '--skill-color': skillColor }}
            className="group relative flex min-h-24 flex-col items-center justify-center rounded-xl border border-white/10 bg-[#0b0909] p-4 text-center shadow-lg shadow-black/20 transition duration-300 ease-out hover:-translate-y-1.5 hover:border-(--skill-color) hover:bg-[#0f0c0c] hover:[box-shadow:0_18px_48px_-28px_var(--skill-color)] focus:outline-none focus-visible:-translate-y-1.5 focus-visible:border-(--skill-color) focus-visible:ring-2 focus-visible:ring-(--skill-color)"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/7 transition duration-300 group-hover:scale-110 group-hover:border-(--skill-color) group-hover:bg-white/10 group-focus-visible:scale-110">
              <SkillIcon icon={skill.icon} />
            </div>
            <p className="relative mt-3 text-sm font-semibold text-neutral-200 transition duration-300 group-hover:text-white">{skill.name}</p>
          </div>
          )
        })}
      </div>
    </section>
  )
}
