import Image from 'next/image'

const testimonials = [
  {
    type: 'Testimoni Orang Tua',
    stars: 5,
    quote:
      'Anak saya dulu pendiam, susah ngomong di depan orang. Setelah setahun di Kebon Dalem dan ikut 3 project, sekarang dia confident presentasi di depan puluhan orang. Ini growth yang nggak ternilai.',
    author: 'Ibu Maria',
    role: 'Orang Tua Siswa Kelas 11',
    avatar: '/images/avatar-maria.jpg',
  },
  {
    type: 'Testimoni Alumni',
    stars: 5,
    quote:
      'Skill yang gue dapet dari project-project di SMA — critical thinking, public speaking, teamwork — literally gue pake sampe sekarang di kuliah teknik. Banyak temen gue yang pinter tapi ga bisa kerja tim atau ga bisa presentasi. Gue grateful banget dilatih dari SMA.',
    author: 'Alumni 2023',
    role: 'Mahasiswa Teknik',
    avatar: '/images/avatar-alumni.jpg',
  },
]

export function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#9D0A0E] mb-3">
            Apa Kata Mereka
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#2b3a1e] mb-6">
            Suara <span className="text-[#9D0A0E]">Orang Tua</span> & <span className="text-[#9D0A0E]">Alumni</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testi, i) => (
            <div
              key={i}
              className="bg-[#F5F2D5] rounded-2xl p-10 border border-[#e0ddc8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Type Badge */}
              <div className="inline-block text-xs font-black uppercase tracking-widest text-white bg-[#4a7a3a] rounded-full px-3.5 py-1 mb-5">
                {testi.type}
              </div>

              {/* Stars */}
              <div className="text-[#9D0A0E] text-sm tracking-widest mb-5">
                {'★'.repeat(testi.stars)}
              </div>

              {/* Quote */}
              <blockquote className='text-base leading-relaxed text-gray-700 italic mb-7 relative pl-5 before:content-["\\""] before:absolute before:top-0 before:left-0 before:text-6xl before:text-[rgba(157,10,14,.15)] before:font-serif'>
                {testi.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3.5">
                <div className="relative w-13 h-13 rounded-full overflow-hidden border-3 border-[#9D0A0E] flex-shrink-0 bg-gradient-to-br from-[#9D0A0E] to-[#2b3a1e]">
                  <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">
                    {testi.author[0]}
                  </div>
                </div>
                <div>
                  <strong className="block text-base font-bold text-[#2b3a1e]">{testi.author}</strong>
                  <span className="text-xs text-gray-600">{testi.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
