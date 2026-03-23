const competencies = [
  {
    number: '01',
    icon: 'brain',
    title: 'Critical Thinking',
    subtitle: 'Cerdas Menalar: Jawaban Nyata untuk Masalah Nyata',
    description: 'Anak Anda dilatih berpikir kritis, menimbang informasi secara bertanggung jawab, dan menemukan solusi dari tantangan dunia nyata — bukan sekadar menghafal, tetapi sungguh-sungguh memahami.',
  },
  {
    number: '02',
    icon: 'people',
    title: 'Teamwork',
    subtitle: 'Solider Bersama: Kepedulian yang Menggerakkan',
    description: 'Anak Anda belajar bekerja dalam tim dengan semangat solidaritas sejati — mendengarkan, berbagi peran, dan mencapai hasil terbaik karena benar-benar peduli satu sama lain.',
  },
  {
    number: '03',
    icon: 'mic',
    title: 'Public Speaking',
    subtitle: 'Otentik dan Berani Tampil: Suaramu Berharga',
    description: 'Anak Anda dilatih menyampaikan gagasan dengan jelas dan meyakinkan — percaya pada nilai dirinya sendiri dan berani bersuara di depan banyak orang, bukan karena terpaksa, tetapi karena tahu suaranya bermakna.',
  },
  {
    number: '04',
    icon: 'lightbulb',
    title: 'Entrepreneurship',
    subtitle: 'Cerdas Berkreasi: Dari Ide Kecil Jadi Dampak Besar',
    description: 'Anak Anda belajar menghidupkan kreativitasnya menjadi aksi nyata — dari inisiatif, perencanaan, hingga eksekusi yang memberi dampak bagi dirinya dan orang-orang di sekitarnya.',
  },
  {
    number: '05',
    icon: 'palette',
    title: 'Creativity',
    subtitle: 'Otentik Berkarya: Berani Berbeda, Bebas Berinovasi',
    description: 'Anak Anda didorong mengeksplorasi ide-ide unik dan menciptakan solusi orisinal — merayakan kekhasan dirinya sebagai kekuatan, bukan kelemahan.',
  },
  {
    number: '06',
    icon: 'heart',
    title: 'Compassionate',
    subtitle: 'Hidup Solider dari Iman yang Hidup akan Penyelenggaraan Ilahi: Berakar, Bergerak, Berbagi',
    description: 'Anak Anda tumbuh sebagai pribadi yang berakar dalam keyakinan akan Penyelenggaraan Ilahi — percaya hidupnya disertai Tuhan, dan dari iman yang hidup itulah lahir kepedulian nyata bagi sesama, komunitas, dan alam semesta.',
  },
]

const iconMap = {
  brain: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  people: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),
  mic: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  palette: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-8C8.34 9 7 7.66 7 6s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </svg>
  ),
  heart: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
}

export function Competencies() {
  return (
    <section id="kompetensi" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#9D0A0E] mb-3">
            6 Kompetensi Inti
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#2b3a1e] mb-6">
            Bukan Cuma Belajar,<br />
            Tetapi <span className="text-[#9D0A0E]">Tumbuh.</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-700 max-w-2xl mx-auto">
            Setiap proyek di SMA Kebon Dalem dirancang untuk melatih 6 kompetensi inti yang akan
            menentukan kesuksesan anak di masa depan — bukan sekadar nilai rapor.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {competencies.map((comp, i) => (
            <div
              key={i}
              className="bg-white border border-[#e0ddc8] rounded-2xl p-9 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Gradient accent on hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#DAEFB3] to-[#9D0A0E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number */}
              <div className="text-6xl font-black text-[#f0edce] leading-none mb-2">
                {comp.number}
              </div>

              {/* Icon */}
              <div className="w-13 h-13 flex items-center justify-center bg-[rgba(218,239,179,.35)] rounded-lg mb-5 text-[#9D0A0E]">
                {iconMap[comp.icon as keyof typeof iconMap]}
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-[#2b3a1e] uppercase tracking-wide mb-1.5">
                {comp.title}
              </h3>

              {/* Subtitle */}
              <div className="text-xs font-semibold text-[#9D0A0E] uppercase tracking-widest mb-3">
                {comp.subtitle}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">{comp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
