import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import TrustBadges from '@/components/home/TrustBadges'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}

