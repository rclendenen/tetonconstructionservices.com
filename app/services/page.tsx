import type { Metadata } from 'next'
import Image from 'next/image'
import { FaHome, FaBuilding, FaTools, FaPaintRoller, FaWarehouse, FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive residential and commercial construction services in the DFW area. From new builds to renovations, we deliver excellence.',
}

const residentialServices = [
  {
    title: 'Custom Home Building',
    description: 'Build your dream home from the ground up with personalized design and superior craftsmanship.',
    features: ['Custom floor plans', 'Premium materials', 'Energy-efficient construction', 'Project management']
  },
  {
    title: 'Home Renovations',
    description: 'Transform your existing space with expert renovations that enhance both beauty and functionality.',
    features: ['Kitchen remodels', 'Bathroom upgrades', 'Room additions', 'Whole-home renovations']
  },
  {
    title: 'Home Additions',
    description: 'Expand your living space seamlessly with additions that match your home's existing style.',
    features: ['Second-story additions', 'Garage conversions', 'Sunrooms', 'In-law suites']
  },
  {
    title: 'Interior Finishing',
    description: 'Complete interior finishing services to make your house feel like home.',
    features: ['Custom cabinetry', 'Flooring installation', 'Trim and molding', 'Paint and drywall']
  }
]

const commercialServices = [
  {
    title: 'Office Build-Outs',
    description: 'Create professional, functional workspaces tailored to your business needs.',
    features: ['Open floor plans', 'Private offices', 'Conference rooms', 'Break areas']
  },
  {
    title: 'Retail Construction',
    description: 'Build attractive retail spaces that draw customers and drive sales.',
    features: ['Storefront design', 'Interior layouts', 'Display fixtures', 'ADA compliance']
  },
  {
    title: 'Restaurant Construction',
    description: 'Specialized construction for food service establishments with all necessary systems.',
    features: ['Commercial kitchens', 'Dining areas', 'Bar installations', 'Health code compliance']
  },
  {
    title: 'Warehouse & Industrial',
    description: 'Durable construction for industrial and warehouse facilities.',
    features: ['Loading docks', 'Storage systems', 'Office integration', 'Safety features']
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
            From residential dream homes to commercial spaces, we deliver exceptional results on every project.
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
              Building and renovating homes throughout the DFW area
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {residentialServices.map((service, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Residential construction"
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
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
                      <FaCheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Commercial construction"
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

