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
  ServicesGrid,
  AboutUs,
  Newsroom,
} from '@/components'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <ImageGallery />
      <AboutUs />
      <Newsroom />
      <CTA />
      <Footer />
    </main>
  )
}
