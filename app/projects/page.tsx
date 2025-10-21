import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore our portfolio of completed residential construction projects including custom homes, renovations, and additions throughout the DFW area.',
}

const projects = [
  {
    title: 'Suburban Home Renovation',
    category: 'Residential',
    location: 'Mansfield, TX',
    description: 'Complete renovation of a 2,400 sq ft family home with updated kitchen, baths, and fresh exterior.',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80',
    tags: ['Renovation', 'Family Home', 'Remodel']
  },
  {
    title: 'Brick Home Update',
    category: 'Residential',
    location: 'Mansfield, TX',
    description: 'Traditional brick home with updated landscaping, new front door, and modern interior finishes.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    tags: ['Remodel', 'Brick Home', 'Exterior']
  },
  {
    title: 'Home Addition Project',
    category: 'Residential',
    location: 'Mansfield, TX',
    description: 'Added master suite and updated existing home with fresh paint and modern fixtures.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800&q=80',
    tags: ['Addition', 'Expansion', 'Remodel']
  },
  {
    title: 'Kitchen & Bath Remodel',
    category: 'Residential',
    location: 'Mansfield, TX',
    description: 'Updated kitchen with new cabinets, countertops, and modern appliances plus refreshed bathrooms.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80',
    tags: ['Remodel', 'Kitchen', 'Bath']
  },
  {
    title: 'Whole Home Renovation',
    category: 'Residential',
    location: 'Mansfield, TX',
    description: 'Complete interior and exterior refresh with new flooring, paint, and updated fixtures throughout.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    tags: ['Renovation', 'Full Home', 'Interior']
  },
  {
    title: 'Curb Appeal Upgrade',
    category: 'Residential',
    location: 'Mansfield, TX',
    description: 'New landscaping, updated front porch, and fresh paint transformed this traditional home.',
    image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=800&q=80',
    tags: ['Exterior', 'Landscaping', 'Curb Appeal']
  }
]

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 opacity-90"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl">
            Explore our portfolio of completed residential projects including custom homes, renovations, and additions throughout the DFW area.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge bg-primary-600 text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-primary-600 font-medium mb-3">{project.location}</p>
                  <p className="text-neutral-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="badge bg-neutral-100 text-neutral-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Impact</h2>
            <p className="section-subtitle mx-auto">
              Numbers that showcase our experience and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed', description: 'Residential & commercial' },
              { number: '2M+', label: 'Square Feet Built', description: 'Across DFW area' },
              { number: '98%', label: 'Client Retention', description: 'Repeat & referral business' },
              { number: '20+', label: 'Years Experience', description: 'In business since 2005' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-neutral-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-neutral-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with the same quality and attention to detail.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}

