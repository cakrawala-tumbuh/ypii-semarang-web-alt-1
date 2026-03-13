import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#2b3a1e]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/about-nature-learning.jpg")',
          filter: 'brightness(0.45)',
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(43,58,30,.92) 0%, rgba(43,58,30,.6) 60%, rgba(0,0,0,.2) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div>

            {/* Eyebrow as Headline */}
            <h1 className="text-5xl lg:text-7xl font-black uppercase leading-tight mb-4">
              <span className="text-white">Explore</span>{' '}
              <span className="text-[#9D0A0E]">Yourself</span>
              <br />
              <span className="text-white">Know</span>{' '}
              <span className="text-[#9D0A0E]">Your Potential</span>
              <br />
              <span className="text-white">Unlock</span>{' '}
              <span className="text-[#9D0A0E]">The Next Level</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base lg:text-lg font-bold text-white/90 uppercase tracking-wider mb-4">
              Project-Based Learning · Semarang
            </p>

            {/* Description */}
            <p className="text-base text-white/75 leading-relaxed mb-9 max-w-md">
              Belajar bukan tentang menghafal. Ini tentang mengalami, bereksperimen, dan menemukan
              siapa diri Anda sebenarnya.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                asChild
                className="bg-[#9D0A0E] hover:bg-[#7a0709] text-white rounded-full px-8 font-bold inline-flex items-center gap-2"
              >
                <Link href="#ppdb">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Daftar PPDB 2025/2026
                </Link>
              </Button>
              <Button
                asChild
                className="bg-transparent text-white border-2 border-white/70 hover:bg-white/10 rounded-full px-8 font-bold inline-flex items-center gap-2"
              >
                <Link href="#tentang">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v1M3 5v14a2 2 0 002 2h14a2 2 0 002-2V5m0 0h2.68c.6 0 1.142.366 1.358.903l2.109 5.894M3 5H1.68C1.08 5 .538 5.366.322 5.903L-1.787 11.797M21 15a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hubungi Kami
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-black text-[#9D0A0E] leading-none">6+</div>
                <div className="text-xs text-white/65 font-medium mt-1">Kompetensi Inti</div>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <div className="text-3xl font-black text-[#9D0A0E] leading-none">100%</div>
                <div className="text-xs text-white/65 font-medium mt-1">Project-Based</div>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <div className="text-3xl font-black text-[#9D0A0E] leading-none">30+</div>
                <div className="text-xs text-white/65 font-medium mt-1">Tahun Berpengalaman</div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
