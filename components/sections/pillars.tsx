import Image from 'next/image'

const pillars = [
  {
    image: '/images/pillar-freedom-expression.jpg',
    icon: 'feather',
    title: 'Bebas Berekspresi,\nBerani Gagal',
    description: 'Tidak ada ide yang salah. Tidak ada kegagalan yang sia-sia. Setiap percobaan adalah bagian dari proses belajar yang nyata.',
    note: 'Ini bukan sekolah yang menghukum kesalahan. Ini sekolah yang merayakan proses belajar.',
  },
  {
    image: '/images/pillar-structured-achievement.jpg',
    icon: 'chart',
    title: 'Struktur yang\nMembentuk Prestasi',
    description: 'Setiap proyek memiliki target, timeline, dan evaluasi yang jelas. Kreativitas tumbuh bukan dalam kekacauan, tapi dalam arah yang tepat.',
    note: 'Kreativitas bukan berarti tanpa aturan — tapi inovasi yang fokus dan produktif.',
  },
  {
    image: '/images/pillar-nature-learning-space.jpg',
    icon: 'tree',
    title: 'Alam sebagai\nRuang Belajar',
    description: 'Lingkungan hijau kami adalah ruang praktik, bukan sekadar latar. Siswa belajar langsung dari alam, mengambil keputusan, dan melihat dampaknya.',
    note: 'Mereka tidak belajar tentang ekosistem dari buku — mereka hidup di dalamnya.',
  },
]

const iconMap = {
  feather: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c0 .83-.67 1.5-1.5 1.5S11 13.33 11 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm0-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM9 12.5c0 .83-.67 1.5-1.5 1.5S6 13.33 6 12.5 6.67 11 7.5 11 9 11.67 9 12.5z" />
    </svg>
  ),
  tree: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
}

export function Pillars() {
  return (
    <section className="py-24 bg-[#F5F2D5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#9D0A0E] mb-3">
            Filosofi Pembelajaran
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#2b3a1e] mb-6">
            Tiga Pilar <span className="text-[#9D0A0E]">Lingkungan Belajar</span>
          </h2>
        </div>

        {/* Quote */}
        <blockquote className="text-center text-xl lg:text-2xl font-black text-[#2b3a1e] italic mb-16 mx-auto max-w-2xl px-6 py-7 border-l-4 border-r-4 border-[#9D0A0E] rounded-2xl bg-[rgba(157,10,14,.06)]">
          "Wild enough to inspire. Structured enough to deliver results."
        </blockquote>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
              {/* Image */}
              <Image
                src={pillar.image}
                alt={pillar.title}
                width={480}
                height={320}
                className="w-full aspect-video object-cover"
              />

              {/* Body */}
              <div className="p-7">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-[rgba(218,239,179,.35)] rounded-lg text-[#2b3a1e] mb-4">
                  {iconMap[pillar.icon as keyof typeof iconMap]}
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-[#2b3a1e] mb-3 leading-tight whitespace-pre-line">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-700 mb-3.5">{pillar.description}</p>

                {/* Note */}
                <p className="text-xs text-[#4a7a3a] italic pt-3.5 border-t border-[#e0ddc8]">
                  {pillar.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
