import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black/90 pt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <img
              src="/images/logo.svg"
              alt="Logo Kebon Dalem"
              className="w-48 h-auto mb-4"
              style={{ maxWidth: '220px' }}
            />
            <strong className="block text-lg font-black text-white mb-3.5">
              Cerdas · Otentik · Iman · Solider
            </strong>
            <p className="text-sm leading-relaxed text-white/50 mb-6">
              Sekolah menengah atas berbasis project learning yang mempersiapkan generasi siap dunia
              nyata.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: 'instagram', link: '#' },
                { icon: 'facebook', link: '#' },
                { icon: 'youtube', link: '#' },
                { icon: 'whatsapp', link: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/65 hover:bg-[#9D0A0E] hover:text-white transition-colors"
                  aria-label={social.icon}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === 'instagram' && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.203 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    )}
                    {social.icon === 'facebook' && (
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.467-.14-2.885-.14-2.965 0-5.115 1.691-5.115 4.794v1.346z" />
                    )}
                    {social.icon === 'youtube' && (
                      <path d="M19.615 3.654c-1.338-.712-4.616-.752-8.615-.752-3.998 0-7.277.04-8.615.752C.385 4.366 0 7.009 0 12s.385 7.634 2.385 8.346c1.338.712 4.617.752 8.615.752 3.998 0 7.277-.04 8.615-.752C23.615 19.634 24 16.991 24 12s-.385-7.634-2.385-8.346zM9 16V8l6.263 4-6.263 4z" />
                    )}
                    {social.icon === 'whatsapp' && (
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.989 1.518c-1.528.926-2.593 2.322-2.788 3.829-.197 1.507.098 3.157 1.329 4.716.526.614 1.235 1.295 2.151 1.99.916.696 1.894 1.354 3.035 1.682 1.14.329 2.393.366 3.633.122 1.24-.244 2.322-.873 3.137-1.683 1.062-1.05 1.699-2.486 1.895-4.018.196-1.532-.098-3.182-1.329-4.741-.526-.614-1.235-1.295-2.151-1.99-.916-.696-1.894-1.354-3.035-1.682-1.14-.33-2.393-.366-3.633-.122m0 0" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Menu</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Beranda', href: '#beranda' },
                { label: 'Tentang Kami', href: '#tentang' },
                { label: 'Kompetensi', href: '#kompetensi' },
                { label: 'Program Belajar', href: '#program' },
                { label: 'Testimoni', href: '#testimoni' },
                { label: 'PPDB 2025/2026', href: '#ppdb' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-[#F5F2D5] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Program</h4>
            <ul className="space-y-2.5">
              {[
                'IPA / IPS',
                'Ekstrakurikuler',
                'Project Lab',
                'Kelas Lingkungan',
                'Kelas Wirausaha',
              ].map((program, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm text-white/50 hover:text-[#F5F2D5] transition-colors">
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Kontak</h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#9D0A0E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                <span className="text-sm text-white/50 leading-relaxed">
                  Jl. Kebon Dalem No. 1,<br />
                  Semarang, Jawa Tengah
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#9D0A0E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="text-sm text-white/50">(024) 1234-5678</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#9D0A0E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-sm text-white/50">info@sma-kebondalem.sch.id</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#9D0A0E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.989 1.518c-1.528.926-2.593 2.322-2.788 3.829-.197 1.507.098 3.157 1.329 4.716.526.614 1.235 1.295 2.151 1.99.916.696 1.894 1.354 3.035 1.682 1.14.329 2.393.366 3.633.122 1.24-.244 2.322-.873 3.137-1.683 1.062-1.05 1.699-2.486 1.895-4.018.196-1.532-.098-3.182-1.329-4.741-.526-.614-1.235-1.295-2.151-1.99-.916-.696-1.894-1.354-3.035-1.682-1.14-.33-2.393-.366-3.633-.122m0 0" />
                </svg>
                <span className="text-sm text-white/50">+62 812-3456-7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/7 py-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 text-center md:text-left">
          <p className="text-xs text-white/35">© 2025 SMA Kebon Dalem Semarang. All rights reserved.</p>
          <p className="text-xs text-white/35">
            Designed by <Link href="#" className="text-[#F5F2D5] hover:text-white transition-colors">YPII</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
