import type { Metadata } from 'next'
import Image from 'next/image'
import { FaHome, FaBuilding, FaTools, FaPaintRoller, FaWarehouse, FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive residential and commercial construction services in Mansfield and the DFW area. From roofing and remodeling to office build-outs and retail spaces, we deliver excellence.',
}

const residentialServices = [
  {
    title: 'Roofing & Emergency Tarping',
    description: 'Complete roofing services with 24-hour emergency tarping available when you need it most.',
    features: ['24-hour emergency tarping', 'Roof repairs', 'Roof replacement', 'Storm damage response'],
    emergency: true
  },
  {
    title: 'Garage Door Services',
    description: '24-hour emergency garage door repair and replacement services for your security and convenience.',
    features: ['24-hour emergency service', 'Garage door repair', 'New installation', 'Electric gate operators installation and repair'],
    emergency: true
  },
  {
    title: 'Remodeling & Renovations',
    description: 'Transform your space with complete remodeling services from kitchens to whole-home renovations.',
    features: ['Kitchen remodels', 'Bathroom upgrades', 'Whole-home renovations', 'Space planning']
  },
  {
    title: 'Flooring Installation & Repair',
    description: 'Professional flooring services for all types including carpet, tile, and luxury vinyl plank.',
    features: ['Carpet installation', 'Tile work', 'LVP installation', 'Flooring repair']
  },
  {
    title: 'Painting Services',
    description: 'Quality interior and exterior painting to refresh and protect your home.',
    features: ['Interior painting', 'Exterior painting', 'Color consultation', 'Surface preparation']
  },
  {
    title: 'Outdoor Living Spaces',
    description: 'Create beautiful outdoor living areas perfect for entertaining and relaxation.',
    features: ['Patios & decks', 'Pergolas', 'Outdoor kitchens', 'Custom designs']
  }
]

const commercialServices = [
  {
    title: 'Office Build-Outs',
    description: 'Create professional, functional workspaces tailored to your business needs.',
    features: ['Open floor plans', 'Private offices', 'Conference rooms', 'Break areas']
  },
  {
    title: 'Commercial Roofing',
    description: 'Professional roofing services for commercial buildings including repairs, replacements, and emergency services.',
    features: ['Flat roof systems', 'TPO & EPDM roofing', 'Emergency leak repairs', 'Preventive maintenance']
  }
]

const additionalServices = [
  {
    title: 'Concrete Work',
    description: 'Professional concrete services for driveways, patios, and more.',
    features: ['Patio installation', 'Driveway repair', 'Concrete slabs', 'Decorative concrete']
  },
  {
    title: 'Drywall & Repairs',
    description: 'Expert drywall installation and repair for walls and ceilings.',
    features: ['Drywall repair', 'Texture matching', 'Hole patching', 'Water damage repair']
  },
  {
    title: 'Fence Services',
    description: 'Quality fence repair and replacement for security and privacy.',
    features: ['Fence repair', 'New installation', 'Gate installation', 'Wood & vinyl fencing']
  },
  {
    title: 'Specialty Services',
    description: 'Additional services to complete your home improvement needs.',
    features: ['Attic ladders', 'Attic elevators', 'Masonry work', 'Electric gate operators installation and repair']
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 opacity-90"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive Construction Services
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl">
            Serving Mansfield and the DFW area since 2005. Residential and commercial construction—plus 24-hour emergency services.
          </p>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
              <FaHome className="w-8 h-8" />
            </div>
            <h2 className="section-title">Residential Services</h2>
            <p className="section-subtitle mx-auto">
              Quality craftsmanship for your home—with 24-hour emergency services available
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {residentialServices.map((service, index) => (
              <div key={index} className="card p-8 relative">
                {service.emergency && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    24/7 EMERGENCY
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-forest-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="Mansfield home exterior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-600 mb-4">
              <FaBuilding className="w-8 h-8" />
            </div>
            <h2 className="section-title">Commercial Services</h2>
            <p className="section-subtitle mx-auto">
              Professional construction solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {commercialServices.map((service, index) => (
              <div key={index} className="card p-8 bg-white">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-accent-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Modern commercial office space"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-100 text-forest-600 mb-4">
              <FaBuilding className="w-8 h-8" />
            </div>
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle mx-auto">
              Complete home improvement solutions for all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {additionalServices.map((service, index) => (
              <div key={index} className="card p-8 bg-white">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-forest-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
              alt="Updated Mansfield home"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle mx-auto">
              A proven approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We meet to discuss your vision, budget, and timeline.' },
              { step: '02', title: 'Planning', description: 'Detailed plans, permits, and material selection.' },
              { step: '03', title: 'Construction', description: 'Expert execution with regular updates and quality control.' },
              { step: '04', title: 'Completion', description: 'Final walkthrough, punch list, and project handover.' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and let's bring your vision to life.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-primary-600 transition-all duration-200">
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}

