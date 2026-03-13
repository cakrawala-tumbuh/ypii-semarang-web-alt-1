'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#tentang', label: 'Tentang Kami' },
    { href: '#kompetensi', label: 'Kompetensi' },
    { href: '#program', label: 'Program' },
    { href: '#testimoni', label: 'Testimoni' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-black/7 bg-cover bg-center" style={{ backgroundImage: 'url("/images/about-nature-learning.jpg")', backgroundBlendMode: 'overlay' }}>
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <Link href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="Logo Kebon Dalem"
            width={180}
            height={48}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#4a7a3a] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="bg-[#9D0A0E] hover:bg-[#7a0709] text-white rounded-full px-8 py-2 font-bold inline-flex items-center gap-2"
          >
            <Link href="#ppdb">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
              DAFTAR PPDB
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#2b3a1e]" />
          ) : (
            <Menu className="w-6 h-6 text-[#2b3a1e]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-black/7 bg-white">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-gray-700 hover:text-[#4a7a3a] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-[#9D0A0E] hover:bg-[#7a0709] text-white rounded-full py-2 font-bold"
            >
              <Link href="#ppdb" onClick={() => setIsOpen(false)}>
                DAFTAR PPDB
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
