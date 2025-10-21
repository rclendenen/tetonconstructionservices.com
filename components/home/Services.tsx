import Link from 'next/link'
import { FaHome, FaTools, FaPaintRoller, FaHammer, FaTree, FaDoorOpen } from 'react-icons/fa'

const services = [
  {
    icon: FaHome,
    title: 'Roofing & Emergency Tarping',
    description: '24-hour emergency roofing tarping and complete roofing services for repairs and replacements.',
    link: '/services',
    emergency: true
  },
  {
    icon: FaDoorOpen,
    title: 'Garage Door Services',
    description: '24-hour emergency garage door repair and replacement, plus electric gate operators installation and repair.',
    link: '/services',
    emergency: true
  },
  {
    icon: FaTools,
    title: 'Remodeling & Renovations',
    description: 'Complete remodeling services from kitchens to bathrooms and whole-home transformations.',
    link: '/services'
  },
  {
    icon: FaPaintRoller,
    title: 'Painting & Flooring',
    description: 'Interior and exterior painting plus flooring installation including carpet, tile, and LVP.',
    link: '/services'
  },
  {
    icon: FaTree,
    title: 'Outdoor Living Spaces',
    description: 'Create beautiful outdoor spaces with patios, decks, pergolas, and outdoor kitchens.',
    link: '/services'
  },
  {
    icon: FaHammer,
    title: 'Concrete & More',
    description: 'Concrete work, drywall repair, fence services, masonry, and specialty installations.',
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
            Quality craftsmanship for homes throughout Mansfield and the DFW area—including 24-hour emergency services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 hover:scale-105 transition-transform duration-300 group relative"
            >
              {service.emergency && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  24/7
                </div>
              )}
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

