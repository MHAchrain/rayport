import { aboutPoints, profile } from '../data/data'

export default function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-background px-6 py-24">
      <div className="absolute inset-x-0 top-0 z-0 h-40 bg-linear-to-b from-background via-primary-200/10 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <figure className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-2xl border border-primary-700/30 bg-primary-500/10 shadow-[0_0_60px_rgba(149,1,1,0.22)]" />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-md">
            <div className="overflow-hidden rounded-xl bg-primary-200">
              <img
                src={profile.photo}
                alt={`${profile.nickname} profile illustration`}
                className="aspect-square w-full object-cover"
              />
            </div>

            <figcaption className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-background/70 px-4 py-3">
              <div>
                <p className="text-sm font-bold text-white">{profile.nickname}</p>
                <p className="text-xs text-neutral-400">{profile.location}</p>
              </div>
              <span className="rounded-full border border-primary-700/50 bg-primary-300 px-3 py-1 text-xs font-semibold text-secondary-900">
                {profile.role}
              </span>
            </figcaption>
          </div>
        </figure>

        <article>
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary-800">
            About Me
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Designing clear interfaces and building smooth web experiences.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">
            {profile.summary}
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">
            I combine UI/UX thinking with frontend development to create layouts that feel clean, consistent, and easy to use across different screen sizes.
          </p>

          <ul className="mt-8 grid gap-4">
            {aboutPoints.map((point) => (
              <li
                key={point}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-neutral-300 backdrop-blur-md"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary-800 bg-primary-300 text-xs font-black text-primary-900">
                  /
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
