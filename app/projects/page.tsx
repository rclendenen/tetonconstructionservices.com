import type { Metadata } from 'next'

import ProjectCardCarousel from '@/components/projects/ProjectCardCarousel'

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore our portfolio of completed residential construction projects including custom homes, renovations, and additions throughout the DFW area.',
}

const projects = [
  {
    title: 'Luxury Bathroom Renovation',
    category: 'Residential',
    location: 'Mansfield, TX',
    description:
      'Complete bathroom transformation with striking emerald green tile, a contemporary waterfall shower, and high-end finishes throughout.',
    images: [
      { src: 'https://i.imgur.com/eBXnCHJ.jpg', label: 'Before' },
      { src: 'https://i.imgur.com/1Y5ihEF.jpg', label: 'After 1' },
      { src: 'https://i.imgur.com/8MqK2sY.jpg', label: 'After 2' },
    ],
    initialSlideIndex: 1,
    tags: ['Spa-Inspired Bathroom', 'Luxury Bath Upgrade', 'Modern Bathroom Remodel'],
  },
  {
    title: 'Dual Bathroom Upgrade',
    category: 'Residential',
    location: 'Mansfield, TX',
    description:
      'Full renovation of both master and guest bathrooms with fresh tile, new vanities, and a built-in shower niche, creating a cohesive and updated look throughout.',
    images: [
      { src: 'https://i.imgur.com/HDvfIg0.jpg', label: 'Before 1' },
      { src: 'https://i.imgur.com/OKwhqx6.jpg', label: 'Before 2' },
      { src: 'https://i.imgur.com/vehaP33.jpg', label: 'Before 3' },
      { src: 'https://i.imgur.com/SKKzpwb.jpg', label: 'Before 4' },
      { src: 'https://i.imgur.com/hU6g056.jpg', label: 'After 1' },
      { src: 'https://i.imgur.com/lE8OsMu.jpg', label: 'After 2' },
      { src: 'https://i.imgur.com/f1rJvZ3.jpg', label: 'After 3' },
      { src: 'https://i.imgur.com/lsp77ER.jpg', label: 'After 4' },
      { src: 'https://i.imgur.com/cPZVSKP.jpg', label: 'After 5' },
      { src: 'https://i.imgur.com/XOyhsuT.jpg', label: 'After 6' },
    ],
    initialSlideIndex: 4,
    tags: ['Bathroom Remodel', 'Master & Guest Bath Renovation', 'Modern Bath Upgrade'],
  },
  {
    title: 'Attic Ladder Installation',
    category: 'Residential',
    location: 'Mansfield, TX',
    description:
      'Professional installation of a durable attic ladder, creating easy and efficient access to attic storage without compromising home design.',
    images: [
      { src: 'https://i.imgur.com/gai9TSy.jpg', label: 'Before' },
      { src: 'https://i.imgur.com/7gGjNRP.jpg', label: 'After 1' },
    ],
    initialSlideIndex: 1,
    tags: ['Attic Ladder Installation', 'Home Access Upgrade', 'Storage Access Improvement'],
  },
  {
    title: 'Custom Storage Addition',
    category: 'Residential',
    location: 'Mansfield, TX',
    description:
      'Converted an existing patio into a spacious walk-in pantry with built-in storage solutions, creating a more efficient and organized kitchen layout.',
    images: [
      { src: 'https://i.imgur.com/RyUDyA1.jpg', label: 'Before 1' },
      { src: 'https://i.imgur.com/WH0zdhn.jpg', label: 'Before 2' },
      { src: 'https://i.imgur.com/0nSvPQV.jpg', label: 'After 1' },
      { src: 'https://i.imgur.com/ThUdEpk.jpg', label: 'After 2' },
    ],
    initialSlideIndex: 2,
    tags: ['Walk-In Pantry', 'Built-In Storage', 'Kitchen Layout'],
  },
  {
    title: 'Commercial Spray Foam Insulation',
    category: 'Commercial',
    location: 'Mansfield, TX',
    description:
      'Installed high-performance spray foam insulation to improve energy efficiency, temperature control, and overall building performance.',
    images: [
      { src: 'https://i.imgur.com/PBXun0C.jpg', label: 'Before' },
      { src: 'https://i.imgur.com/Bz1lQpy.jpg', label: 'After 1' },
    ],
    initialSlideIndex: 1,
    tags: ['Spray Foam Insulation', 'Commercial Insulation Upgrade', 'Energy Efficiency Improvement'],
  },
  {
    title: 'Commercial Stucco Repair',
    category: 'Commercial',
    location: 'Mansfield, TX',
    description:
      'Professional repair and restoration of exterior stucco surfaces to improve durability, appearance, and long-term weather protection for the building.',
    images: [{ src: 'https://i.imgur.com/gYaV5VO.jpg', label: 'During repairs' }],
    tags: ['Stucco Repair', 'Commercial Exterior Repair', 'Building Restoration'],
  },
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card group cursor-pointer">
                <ProjectCardCarousel
                  title={project.title}
                  category={project.category}
                  images={project.images}
                  initialSlideIndex={project.initialSlideIndex ?? 0}
                />
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
          <a href="/contact" className="btn-primary min-h-[44px]">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}

