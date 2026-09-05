import { aboutPoints, profile } from '../data/data'
import Lanyard from '../components/Lanyard'
import profileCard from '../assets/profile.jpeg'
import backCard from '../assets/MHADarkRed.png'


export default function About() {
  return (
    <section id="about" className="relative isolate scroll-mt-28 overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-20 lg:scroll-mt-24 lg:py-0">
      <div className="absolute inset-x-0 top-0 z-0 h-40 bg-linear-to-b from-background via-primary-200/10 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-[88rem] items-center gap-8 md:grid-cols-[0.9fr_1.1fr] lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
        <section className="relative mx-auto h-88 w-full max-w-sm overflow-visible sm:h-108 md:h-[34rem] lg:h-[calc(100vh-7rem)] lg:min-h-120 lg:max-w-md">
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

        <article className="w-full max-w-3xl flex-col justify-center text-center md:text-left lg:h-full">
          <p className="text-md font-semibold uppercase tracking-widest text-primary-800">
            Tentang Saya
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[2.9rem]">
            Merancang antarmuka yang jelas dan membangun pengalaman web yang halus.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-400 md:text-lg">
            {profile.summary}
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-400 md:text-lg">
            Saya menggabungkan pemikiran UI/UX dengan pengembangan frontend untuk menciptakan tata letak yang terasa bersih, konsisten, dan mudah digunakan di berbagai ukuran layar.
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
