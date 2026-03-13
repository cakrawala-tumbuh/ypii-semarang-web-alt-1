'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FormEvent, useState } from 'react'

export function PPDB() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', school: '' })
    setIsLoading(false)

    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section
      id="ppdb"
      className="py-24 bg-gradient-to-br from-[#2b3a1e] to-[#3d5228] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-20 border-[rgba(218,239,179,.06)] pointer-events-none"
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border-20 border-[rgba(255,255,255,.04)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#9D0A0E] text-white rounded-full px-5 py-2 mb-6 w-fit font-bold text-sm uppercase tracking-widest">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
              PPDB 2025/2026 Sudah Dibuka!
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Siapkah Anak Anda
              <br />
              Menghadapi <span className="text-[#9D0A0E]">Dunia Nyata?</span>
            </h2>

            <p className="text-base leading-relaxed text-white/75 mb-6">
              Lihat langsung fasilitas, bertemu guru, dan rasakan atmosfer pembelajaran kami.
            </p>

            <p className="text-lg font-bold text-white italic mb-8">
              Apakah Anda ingin anak Anda hanya pintar menghafal atau siap menghadapi dunia nyata?
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-[#9D0A0E] hover:bg-[#7a0709] text-white rounded-full px-8 font-bold inline-flex items-center gap-2"
              >
                <Link href="#form-ppdb">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  Daftar PPDB Sekarang
                </Link>
              </Button>
              <Button
                asChild
                className="bg-transparent text-white border-2 border-white/70 hover:bg-white/10 rounded-full px-8 font-bold inline-flex items-center gap-2"
              >
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.989 1.518c-1.528.926-2.593 2.322-2.788 3.829-.197 1.507.098 3.157 1.329 4.716.526.614 1.235 1.295 2.151 1.99.916.696 1.894 1.354 3.035 1.682 1.14.329 2.393.366 3.633.122 1.24-.244 2.322-.873 3.137-1.683 1.062-1.05 1.699-2.486 1.895-4.018.196-1.532-.098-3.182-1.329-4.741-.526-.614-1.235-1.295-2.151-1.99-.916-.696-1.894-1.354-3.035-1.682-1.14-.33-2.393-.366-3.633-.122m0 0" />
                  </svg>
                  Hubungi Kami
                </a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <div
            id="form-ppdb"
            className="bg-[rgba(255,255,255,.07)] backdrop-blur-2xl border border-[rgba(255,255,255,.15)] rounded-2xl p-10 lg:sticky lg:top-32"
          >
            <h3 className="text-2xl font-black text-white mb-2">Isi Form Pendaftaran</h3>
            <p className="text-sm text-white/65 mb-8">Tim kami akan menghubungi dalam 1×24 jam</p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Pendaftaran Berhasil!</h4>
                <p className="text-sm text-white/65">
                  Terima kasih telah mendaftar. Tim kami akan segera menghubungi Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nama siswa"
                    className="w-full bg-[rgba(255,255,255,.08)] border border-[rgba(255,255,255,.15)] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#9D0A0E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@example.com"
                    className="w-full bg-[rgba(255,255,255,.08)] border border-[rgba(255,255,255,.15)] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#9D0A0E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Nomor Telepon *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+62 812-xxxx-xxxx"
                    className="w-full bg-[rgba(255,255,255,.08)] border border-[rgba(255,255,255,.15)] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#9D0A0E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Asal Sekolah</label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="SMP XXX"
                    className="w-full bg-[rgba(255,255,255,.08)] border border-[rgba(255,255,255,.15)] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#9D0A0E] transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#9D0A0E] hover:bg-[#7a0709] text-white rounded-lg font-bold py-3 transition-colors disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Mengirim...
                    </span>
                  ) : (
                    'Daftar Sekarang'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
