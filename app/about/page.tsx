import type { Metadata } from 'next'
import Image from 'next/image'
import { FaAward, FaHandshake, FaUsers, FaHardHat } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Teton Construction Services - serving the DFW area since 2005 with integrity, craftsmanship, and personalized service.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 opacity-90"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Excellence Since 2005
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl">
            Your trusted partner for residential and commercial construction in the greater DFW area.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  Founded in 2005, Teton Construction Services has been serving the greater DFW area 
                  with a commitment to quality craftsmanship and exceptional customer service. Based in 
                  Mansfield, TX, we've built our reputation one satisfied customer at a time.
                </p>
                <p>
                  What started as a small residential contractor has grown into a trusted name in both 
                  residential and commercial construction. Our growth is a testament to our dedication 
                  to excellence and the strong relationships we've built with our clients and real estate 
                  partners throughout the years.
                </p>
                <p>
                  As a referral-only contractor, we take pride in earning the trust of every client. 
                  Our A+ BBB rating reflects our commitment to integrity, transparency, and delivering 
                  projects that exceed expectations.
                </p>
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                alt="Beautiful residential home"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaAward,
                title: 'Excellence',
                description: 'We deliver superior craftsmanship on every project, big or small.'
              },
              {
                icon: FaHandshake,
                title: 'Integrity',
                description: 'Honest communication and transparent pricing are our foundation.'
              },
              {
                icon: FaUsers,
                title: 'Partnership',
                description: 'We work closely with clients and real estate professionals to ensure success.'
              },
              {
                icon: FaHardHat,
                title: 'Quality',
                description: 'Every detail matters. We use premium materials and skilled craftsmanship.'
              }
            ].map((value, index) => (
              <div key={index} className="card p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">What Sets Us Apart</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border-l-4 border-primary-600 bg-neutral-50">
              <h3 className="text-2xl font-bold mb-4">A+ BBB Rating</h3>
              <p className="text-neutral-700">
                Our A+ rating with the Better Business Bureau demonstrates our commitment to 
                ethical business practices and customer satisfaction.
              </p>
            </div>
            
            <div className="p-8 border-l-4 border-primary-600 bg-neutral-50">
              <h3 className="text-2xl font-bold mb-4">Referral-Only Service</h3>
              <p className="text-neutral-700">
                We work exclusively through referrals from satisfied clients and real estate 
                partners, ensuring quality and accountability.
              </p>
            </div>
            
            <div className="p-8 border-l-4 border-primary-600 bg-neutral-50">
              <h3 className="text-2xl font-bold mb-4">Flexible Payment Options</h3>
              <p className="text-neutral-700">
                We offer flexible payment arrangements, including the option for payment upon 
                closing for real estate transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '20+', label: 'Years in Business' },
              { number: '500+', label: 'Projects Completed' },
              { number: 'A+', label: 'BBB Rating' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="section-title mb-6">Ready to Start Your Project?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Let's discuss how we can bring your vision to life with quality craftsmanship and exceptional service.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}

