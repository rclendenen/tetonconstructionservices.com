import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

const benefits = [
  'Flexible payment arrangements including payment upon closing',
  'Direct communication with project managers',
  'Quality materials and skilled craftsmanship',
  'On-time project completion',
  'Transparent pricing with no hidden fees',
  'Strong relationships with real estate professionals',
  'Comprehensive warranty on all work',
  'Local DFW company with deep community roots'
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-full min-h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
              alt="Residential home construction"
              fill
              className="object-cover"
            />
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
                "We don't just build structures – we build lasting relationships with our clients 
                and partners. Your satisfaction is our success."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

