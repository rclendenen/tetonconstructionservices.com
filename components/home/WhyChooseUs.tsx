'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

const benefits = [
  '24-hour emergency roofing tarping and garage door services',
  'Dedicated team of 7 employees who work exclusively for us',
  'BBB A+ Rated since 2005—referral-only service',
  'Flexible payment arrangements including payment upon closing',
  'Trusted by multiple real estate partners and their clients',
  'Quality materials and skilled craftsmanship',
  'On-time project completion and transparent pricing',
  'Local Mansfield company serving the DFW area'
]

export default function WhyChooseUs() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-96 lg:h-full min-h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <div
              style={{
                transform: `translateY(${(scrollY - 1000) * 0.15}px)`
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
                alt="Mansfield area home renovation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="section-title">Why Choose Teton Construction?</h2>
            <p className="text-lg text-neutral-600 mb-8">
              We've built our reputation on quality work, honest communication, and exceptional 
              customer service. Here's what sets us apart:
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-accent-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-gradient-to-r from-forest-50 to-accent-50 rounded-lg border-l-4 border-forest-500">
              <p className="text-lg font-medium text-neutral-900">
                "Whether it's a small repair or a full renovation, our experienced team delivers reliable, 
                high-quality results—on time and on budget."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

