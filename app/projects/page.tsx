import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore our portfolio of completed residential construction projects including custom homes, renovations, and additions throughout the DFW area.',
}

const projects = [
  {
    title: 'Modern Family Home',
    category: 'Residential',
    location: 'Mansfield, TX',
    description: 'Custom-built 3,500 sq ft modern home with open floor plan and luxury finishes.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    tags: ['New Build', 'Custom Home', 'Modern']
  },
  {
    title: 'Historic Home Renovation',
    category: 'Residential',
    location: 'Fort Worth, TX',
    description: 'Complete renovation of a 1920s craftsman home, preserving historic character while adding modern amenities.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    tags: ['Renovation', 'Historic', 'Craftsman']
  },
  {
    title: 'Home Addition & Expansion',
    category: 'Residential',
    location: 'Arlington, TX',
    description: 'Two-story addition with master suite, walk-in closet, and luxury bathroom with modern finishes.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    tags: ['Addition', 'Expansion', 'Remodel']
  },
  {
    title: 'Luxury Kitchen Remodel',
    category: 'Residential',
    location: 'Southlake, TX',
    description: 'High-end kitchen renovation featuring custom cabinetry, quartz countertops, and professional appliances.',
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=800&q=80',
    tags: ['Remodel', 'Kitchen', 'Luxury']
  },
  {
    title: 'Complete Home Remodel',
    category: 'Residential',
    location: 'Grapevine, TX',
    description: 'Full interior and exterior renovation with updated kitchen, bathrooms, and modern living spaces.',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80',
    tags: ['Remodel', 'Renovation', 'Full Home']
  },
  {
    title: 'Custom Home Build',
    category: 'Residential',
    location: 'Colleyville, TX',
    description: 'New construction custom home with 4 bedrooms, open concept kitchen, and luxury outdoor living space.',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80',
    tags: ['New Build', 'Custom', 'Luxury']
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

