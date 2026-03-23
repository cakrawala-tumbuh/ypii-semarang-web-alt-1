'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Story() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section
      id="program"
      className="py-24 bg-gradient-to-br from-[#DAEFB3] to-[#c8e89a] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[rgba(43,58,30,.08)] -mr-32 -mt-32 pointer-events-none"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-full rounded-full bg-[rgba(43,58,30,.04)] -ml-32 -mb-40 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-[#2b3a1e]/60 mb-3">
              Cerita Nyata
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#2b3a1e] mb-6">
              Bagaimana Kulit Pisang
              <br />
              Mengajarkan Lebih <span className="text-[#9D0A0E]">Banyak</span>
              <br />
              Daripada Textbook
            </h2>
            <p className="text-base leading-relaxed text-[#2b3a1e]/70 mb-6">
              Lihat langsung bagaimana siswa kami mengubah sampah jadi produk yang laku — dan skill
              apa yang mereka dapat dari prosesnya.
            </p>
            <p className="text-base leading-relaxed text-[#2b3a1e]/70 mb-8">
              Ini bukan dongeng. Ini project nyata yang mengajarkan critical thinking, teamwork,
              public speaking, dan entrepreneurship dalam satu journey.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                'Critical Thinking',
                'Teamwork',
                'Public Speaking',
                'Entrepreneurship',
              ].map((tag, i) => (
                <span
                  key={i}
                  className="bg-[rgba(43,58,30,.1)] border border-[rgba(43,58,30,.25)] text-[#2b3a1e] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              className="bg-[#9D0A0E] hover:bg-[#7a0709] text-white rounded-full px-8 font-bold inline-flex items-center gap-2"
            >
              <Link href="#ppdb">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Bergabung Sekarang
              </Link>
            </Button>
          </div>

          {/* Video */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="/images/video-project-thumbnail.jpg"
                alt="Video Project Siswa"
                width={640}
                height={360}
                className="w-full object-cover"
                onClick={() => setIsVideoOpen(true)}
              />

              {/* Play Button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-18 h-18 rounded-full bg-[#9D0A0E] flex items-center justify-center hover:scale-110 transition-transform group-hover:scale-110"
                aria-label="Play video"
              >
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent p-8 text-white text-sm">
                ▶ Proyek Daur Ulang Kulit Pisang — Kelas XI IPA 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Project Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
