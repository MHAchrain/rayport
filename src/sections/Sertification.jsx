import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

import { sertificates } from '../data/data'

export default function Sertification() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isClosing, setIsClosing] = useState(false)

  const openCertificate = (certificate) => {
    setIsClosing(false)
    setSelectedCertificate(certificate)
  }

  const closeCertificate = () => {
    setIsClosing(true)

    setTimeout(() => {
      setSelectedCertificate(null)
      setIsClosing(false)
    }, 250)
  }

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && selectedCertificate) {
        closeCertificate()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedCertificate])

  return (
    <section
      id="sertif"
      className="relative isolate scroll-mt-28 overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-20 lg:scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_85%_55%,rgba(255,31,31,0.12),transparent_35%),radial-gradient(circle_at_16%_78%,rgba(119,0,0,0.16),transparent_30%)]" />

      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-linear-to-b from-transparent via-background/85 to-background" />

      <div className="relative z-10 mx-auto max-w-352">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-md font-semibold uppercase tracking-widest text-primary-800">
              Sertifikat
            </p>

            <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-[3.35rem]">
              Sertifikat yang saya peroleh selama pengembangan keterampilan dan proyek.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-neutral-400 md:text-lg">
            Kumpulan sertifikat yang saya peroleh selama pengembangan keterampilan dan proyek.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sertificates.map((certificate, index) => (
            <article
              key={certificate.title}
              tabIndex={0}
              className="group rounded-xl border border-white/10 bg-[#0b0909] p-3 shadow-2xl shadow-black/30 transition duration-300 ease-out hover:-translate-y-2 hover:border-primary-800/80 hover:bg-[#0f0c0c] hover:shadow-primary-300/20 focus:outline-none focus-visible:-translate-y-2 focus-visible:border-primary-800 focus-visible:ring-2 focus-visible:ring-primary-800"
            >
              <button
                type="button"
                onClick={() => openCertificate(certificate)}
                className="block w-full text-left outline-none"
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-lg border border-white/10 bg-primary-100">
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} preview`}
                    className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neutral-200 backdrop-blur-md">
                    {certificate.category}
                  </div>
                </div>

                <div className="p-3 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                    0{index + 1}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-snug text-white transition duration-300 group-hover:text-primary-900">
                    {certificate.title}
                  </h3>

                  <p className="mt-3 min-h-24 text-sm leading-6 text-neutral-400">
                    {certificate.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {certificate.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-300 transition duration-300 group-hover:border-primary-800/60 group-hover:bg-primary-300/20 group-hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isClosing
              ? 'bg-black/0 backdrop-blur-none'
              : 'bg-black/80 backdrop-blur-sm'
          }`}
          onClick={closeCertificate}
        >
          <div
            className={`relative max-h-[90vh] max-w-5xl transform transition-all duration-300 ease-out ${
              isClosing
                ? 'scale-90 opacity-0'
                : 'scale-100 opacity-100'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeCertificate}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white shadow-xl backdrop-blur-md transition duration-200 hover:scale-110 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-800"
              aria-label="Tutup preview sertifikat"
            >
              <X size={20} />
            </button>

            {/* Certificate image */}
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="max-h-[85vh] max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
            />

            {/* Title */}
            <div
              className={`absolute bottom-0 left-0 right-0 rounded-b-xl bg-linear-to-t from-black/90 via-black/50 to-transparent px-6 pb-5 pt-32 transition-opacity duration-300 ${
                isClosing ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-300">
                {selectedCertificate.category}
              </p>

              <h3 className="mt-1 text-lg font-bold text-white">
                {selectedCertificate.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}