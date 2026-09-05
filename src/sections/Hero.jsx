import { profile } from '../data/data'
import Aurora from '../components/Aurora'
import TextType from '../components/TextType'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen scroll-mt-28 items-center justify-center overflow-hidden bg-background px-4 pb-20 pt-32 text-center sm:px-6 sm:pt-28 lg:scroll-mt-24"
    >
      <div className="absolute inset-0 z-0 mask-[linear-gradient(to_bottom,black_0%,black_72%,transparent_100%)]">
        <Aurora
          colorStops={['#1a0000', '#950101', '#ff1f1f']}
          amplitude={1}
          blend={1}
          speed={0.5}
        />
      </div>

      <div className="absolute inset-0 z-0 bg-background/45" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[44px_44px] mask-[linear-gradient(to_bottom,black_0%,black_68%,transparent_100%)]" />
      <div className="absolute inset-x-0 top-0 z-0 h-72 bg-linear-to-b from-primary-300/70 via-primary-200/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-linear-to-b from-transparent via-background/85 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-widest text-secondary-900 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_0_24px_rgba(149,1,1,0.2)] sm:px-4 sm:text-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-900 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-900 shadow-[0_0_12px_rgba(255,31,31,0.9)]" />
          </span>
          Bersedia untuk Freelance & Part-time
        </p> */}

        <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Halo, Saya{' '}
          <span className="bg-linear-to-r from-primary-800 via-secondary-900 to-primary-900 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <h2
          className="mx-auto mt-4 max-w-4xl text-lg font-bold leading-relaxed text-neutral-200 sm:text-2xl md:text-3xl"
          aria-label={`Membangun pengalaman digital sebagai sebuah ${profile.role}`}
        >
          Membangun pengalaman digital sebagai sebuah{' '}
          <span className="relative inline-flex max-w-full justify-center text-white sm:min-w-[21ch]" aria-hidden="true">
            <TextType
              as="span"
              text={['Frontend Developer', 'UI/UX Designer', profile.role]}
              typingSpeed={70}
              deletingSpeed={35}
              pauseDuration={1500}
              cursorBlinkDuration={0.5}
              cursorCharacter="_"
              cursorClassName="text-primary-900"
              textColors={['#ffffff', '#ff9a9a', '#ffffff']}
            />
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-primary-900 to-transparent" />
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
          Saya berfokus pada pembuatan antarmuka web yang tampil rapi, responsif, dan dirancang dengan cermat—mulai dari konsep visual hingga implementasi frontend. Mari wujudkan ide-ide Anda.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-primary-700 bg-primary-300 px-6 py-3 font-semibold text-white shadow-[0_0_16px_rgba(149,1,1,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-900 hover:bg-primary-500 hover:shadow-[0_0_36px_rgba(255,31,31,0.5)] active:translate-y-0"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="absolute inset-0 scale-75 rounded-lg bg-primary-900/20 opacity-0 blur-md transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
            <span className="absolute left-1 top-1 h-2 w-2 border-l-2 border-t-2 border-primary-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-1 right-1 h-2 w-2 border-b-2 border-r-2 border-primary-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10">Lihat Proyek</span>
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary-700 hover:bg-secondary-500/15 hover:shadow-[0_0_28px_rgba(212,58,58,0.25)] active:translate-y-0"
          >
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-secondary-800 transition-all duration-300 group-hover:w-full" />
            <span className="relative z-10">Hubungi Saya</span>
          </a>
        </div>

      </div>

    </section>
  )
}
