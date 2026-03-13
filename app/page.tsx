'use client'

import { TopBar } from '@/components/sections/top-bar'
import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Competencies } from '@/components/sections/competencies'
import { Story } from '@/components/sections/story'
import { Pillars } from '@/components/sections/pillars'
import { Testimonials } from '@/components/sections/testimonials'
import { PPDB } from '@/components/sections/ppdb'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Competencies />
      <Story />
      <Pillars />
      <Testimonials />
      <PPDB />
      <Footer />
    </>
  )
}
