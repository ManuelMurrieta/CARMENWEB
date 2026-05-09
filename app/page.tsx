import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import CatalogSection from '@/components/catalog-section'
import AboutSection from '@/components/about-section'
import TestimonialsSection from '@/components/testimonials-section'
import BlogSection from '@/components/blog-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CatalogSection />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </main>
  )
}
