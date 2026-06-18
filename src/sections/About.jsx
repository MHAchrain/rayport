import { aboutPoints, profile } from '../data/data'
import Lanyard from '../components/Lanyard'
import profileCard from '../assets/profile.jpeg'
import backCard from '../assets/back.jpg'


export default function About() {
  return (
    <section id="about" className="relative isolate scroll-mt-24 overflow-visible bg-background px-6">
      <div className="absolute inset-x-0 top-0 z-0 h-40 bg-linear-to-b from-background via-primary-200/10 to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <section className="relative mx-auto h-[calc(100vh-7rem)] min-h-120 w-full max-w-md overflow-visible">
          <Lanyard
            position={[0, 0, 12]}
            gravity={[0, -35, 0]}
            fov={18}
            transparent
            frontImage={profileCard}
            backImage={backCard}
            imageFit="cover"
            lanyardWidth={0.8}
          />
        </section>

        <article className="h-full w-full max-w-3xl flex-col justify-center text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-800">
            About Me
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[2.9rem]">
            Designing clear interfaces and building smooth web experiences.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-400 md:text-lg">
            {profile.summary}
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-400 md:text-lg">
            I combine UI/UX thinking with frontend development to create layouts that feel clean, consistent, and easy to use across different screen sizes.
          </p>

          <ul className="mt-6 grid gap-3">
            {aboutPoints.map((point) => (
              <li
                key={point}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/4 p-3 text-sm leading-6 text-neutral-300 backdrop-blur-md"
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
