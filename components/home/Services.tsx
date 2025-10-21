import Link from 'next/link'
import { FaHome, FaBuilding, FaTools, FaPaintRoller, FaHardHat, FaWarehouse } from 'react-icons/fa'

const services = [
  {
    icon: FaHome,
    title: 'Custom Home Building',
    description: 'Build your dream home from the ground up with personalized design and expert craftsmanship.',
    link: '/services'
  },
  {
    icon: FaTools,
    title: 'Home Renovations',
    description: 'Transform your existing space with comprehensive renovation services for kitchens, baths, and more.',
    link: '/services'
  },
  {
    icon: FaPaintRoller,
    title: 'Home Additions',
    description: 'Expand your living space with seamless additions that match your home\'s existing style.',
    link: '/services'
  },
  {
    icon: FaBuilding,
    title: 'Commercial Construction',
    description: 'Professional construction solutions for offices, retail spaces, and commercial properties.',
    link: '/services'
  },
  {
    icon: FaHardHat,
    title: 'Office Build-Outs',
    description: 'Create functional, inspiring workspaces tailored to your business needs.',
    link: '/services'
  },
  {
    icon: FaWarehouse,
    title: 'Retail & Industrial',
    description: 'Specialized construction for retail stores, restaurants, and warehouse facilities.',
    link: '/services'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive construction solutions for residential and commercial projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-forest-100 to-accent-100 text-forest-600 mb-6 group-hover:bg-gradient-to-br group-hover:from-forest-500 group-hover:to-accent-500 group-hover:text-white transition-all duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-600 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-forest-600 font-medium hover:text-accent-600 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

