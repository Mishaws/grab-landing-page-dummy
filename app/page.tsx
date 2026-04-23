import {
  Hero,
  Navbar,
  Positions,
  Benefits,
  Process,
  Testimonials,
  ImageGallery,
  CTA,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Positions />
      <ImageGallery />
      <Benefits />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
