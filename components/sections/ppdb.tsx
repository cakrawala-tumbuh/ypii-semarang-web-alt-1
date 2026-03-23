'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FormEvent, useState } from 'react'

export function PPDB() {
  const [formData, setFormData] = useState({
    nama_anak: '',
    tanggal_lahir_anak: '',
    unit_dituju: '',
    nama_orang_tua_calon_siswa: '',
    wa_orang_tua_siswa: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitted(true)
    setFormData({
      nama_anak: '',
      tanggal_lahir_anak: '',
      unit_dituju: '',
      nama_orang_tua_calon_siswa: '',
      wa_orang_tua_siswa: '',
    })
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
                  <label className="block text-sm font-semibold text-white mb-2">Nama Anak *</label>
                  <input
                    type="text"
                    name="nama_anak"
                    value={formData.nama_anak}
                    onChange={handleChange}
                    required
                    placeholder="Nama Anak"
                    className="w-full bg-[rgba(255,255,255,.08)] border border-[rgba(255,255,255,.15)] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#9D0A0E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Tanggal Lahir Anak *</label>
                  <input
                    type="date"
                    name="tanggal_lahir_anak"
                    value={formData.tanggal_lahir_anak}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,.08)] border border-[rgba(255,255,255,.15)] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#9D0A0E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Unit yang dituju *</label>
                  <select
                    name="unit_dituju"
                    value={formData.unit_dituju}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,.08)] border border-[rgba(255,255,255,.15)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9D0A0E] transition-colors"
                  >
                    <option value="" disabled>Pilih unit</option>
                    <option value="SD Kebon Dalem">SD Kebon Dalem</option>
                    <option value="SD Kebon Dalem 2">SD Kebon Dalem 2</option>
                    <option value="SMA Kebon Dalem">SMA Kebon Dalem</option>
                    <option value="SMP Kebon Dalem">SMP Kebon Dalem</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Nama Orang Tua Calon Siswa *</label>
                  <input
                    type="text"
                    name="nama_orang_tua_calon_siswa"
                    value={formData.nama_orang_tua_calon_siswa}
                    onChange={handleChange}
                    required
                    placeholder="Nama Orang Tua"
                    className="w-full bg-[rgba(255,255,255,.08)] border border-[rgba(255,255,255,.15)] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#9D0A0E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">No. WA Orang Tua Siswa *</label>
                  <input
                    type="tel"
                    name="wa_orang_tua_siswa"
                    value={formData.wa_orang_tua_siswa}
                    onChange={handleChange}
                    required
                    placeholder="Contoh: 081234567890"
                    pattern="[0-9]{10,15}"
                    minLength={10}
                    maxLength={15}
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
