import { profile } from '../data/data'

export default function Hero() {
    return(
        <section id="home" className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pt-16">

        {/* 1. AMBIENT GLOW EFFECT (Latar belakang pendaran cahaya) */}
            <div className="absolute top-1/4 left-1/2 -z-10 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/10 blur-[120px] md:h-125 md:w-125" />
            <div className="absolute top-1/3 right-10 -z-10 h-50 w-50 rounded-full bg-purple-500/5 blur-[100px]" />

            {/* 2. HERO CONTENT CONTAINER */}
            <div className="mx-auto max-w-4xl text-center z-10">

            {/* Badge Sapaan dengan efek Glassmorphic */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary-900 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                <span className="h-2 w-2 animate-ping rounded-full bg-primary-800" />
                Available for Freelance & Full-time
            </span>

            {/* Heading Utama */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm <span className="bg-linear-to-r from-primary-800 via-primary-900 to-primary-800 bg-clip-text text-transparent">{profile.name}</span>
            </h1>

            {/* Sub-heading / Role */}
            <h2 className="mt-3 text-xl font-bold tracking-wide text-neutral-200 sm:text-2xl md:text-3xl">
                Building Digital Experience as a <span className="underline decoration-primary-800/50 decoration-wavy">{profile.role}</span>
            </h2>

            {/* Deskripsi Singkat */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
                Saya berfokus pada pembuatan aplikasi web yang tidak hanya fungsional, tetapi juga memiliki visual yang memukau dan performa yang optimal. Mari bawa ide hebat Anda menjadi kenyataan.
            </p>

            {/* 3. CALL TO ACTION (CTA) BUTTONS */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                {/* Button CTA */}
                <a
                    href="#projects"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-primary-700 bg-primary-300 px-6 py-3 font-semibold text-white shadow-[0_0_16px_rgba(149,1,1,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-900 hover:bg-primary-500 hover:shadow-[0_0_24px_rgba(255,31,31,0.5)] active:translate-y-0"
                    >
                    <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="absolute inset-0 scale-75 rounded-lg bg-primary-900/20 opacity-0 blur-md transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
                    <span className="absolute left-1 top-1 h-2 w-2 border-l-2 border-t-2 border-primary-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute bottom-1 right-1 h-2 w-2 border-b-2 border-r-2 border-primary-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative z-10">Lihat Projects</span>
                </a>

                {/* Button Kedua */}
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