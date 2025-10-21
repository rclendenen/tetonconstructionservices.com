import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import TrustBadges from '@/components/home/TrustBadges'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'
import EmergencyModal from '@/components/EmergencyModal'

export default function Home() {
  return (
    <>
      <EmergencyModal />
      <Hero />
      <TrustBadges />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}

