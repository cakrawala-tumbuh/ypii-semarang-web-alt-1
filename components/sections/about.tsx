import Image from 'next/image'

export function About() {
  return (
    <section id="tentang" className="py-24 bg-[#F5F2D5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 relative">
            <Image
              src="/images/about-nature-learning.jpg"
              alt="Siswa belajar di alam"
              width={380}
              height={500}
              className="col-span-1 row-span-2 w-full rounded-2xl object-cover"
            />
            <Image
              src="/images/about-project-lab.jpg"
              alt="Lab proyek"
              width={360}
              height={240}
              className="col-span-1 w-full rounded-2xl object-cover"
            />
            <Image
              src="/images/about-presentation.jpg"
              alt="Siswa presentasi"
              width={360}
              height={240}
              className="col-span-1 w-full rounded-2xl object-cover"
            />

            {/* Badge */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#2b3a1e] text-white rounded-2xl px-6 py-4 flex items-center gap-3 shadow-lg">
              <svg className="w-6 h-6 text-[#9D0A0E]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <div>
                <strong className="block text-lg font-black text-[#9D0A0E]">Est. 1990</strong>
                <span className="text-xs text-white/70">SMA Semarang</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pt-0">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-[#9D0A0E] mb-3">
              Tentang Kami
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#2b3a1e] mb-6">
              Belajar <span className="text-[#9D0A0E]">Terbaik</span>
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-6">
              Bagaimana jika belajar tidak hanya duduk dan mendengar? Matematika dipelajari lewat
              menghitung keuntungan produk buatan sendiri. Biologi dipahami dengan mengolah limbah
              menjadi karya bernilai.
            </p>
            <p className="text-base leading-relaxed text-gray-700 mb-8">
              Di SMA Kebon Dalem, kami percaya pembelajaran paling bermakna terjadi saat siswa
              mengalami langsung. Melalui project-based learning yang dekat dengan alam dan masalah
              nyata, siswa tidak hanya mengejar nilai, tetapi membangun skill hidup yang akan mereka
              gunakan selamanya.
            </p>

            {/* List */}
            <ul className="space-y-3.5">
              {[
                'Pembelajaran berbasis proyek dunia nyata',
                'Lingkungan alam sebagai ruang belajar aktif',
                'Melatih skill hidup, bukan sekadar nilai rapor',
                'Pendidikan holistik: cerdas, berkarakter, beriman',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                  <svg className="w-5 h-5 text-[#4a7a3a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
