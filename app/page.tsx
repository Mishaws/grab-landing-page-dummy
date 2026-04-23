import {
  Hero,
  Navbar,
  Positions,
  Benefits,
  Process,
  Testimonials,
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
      <AboutUs />
      <Newsroom />
      <Footer />
    </main>
  )
}
