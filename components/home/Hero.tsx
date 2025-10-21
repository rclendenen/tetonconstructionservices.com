import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Sunrise Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sunshine-500 via-primary-500 to-accent-600"></div>
        <Image
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful residential home construction"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-sunshine-500/20 backdrop-blur-sm text-sunshine-100 rounded-full text-sm font-semibold border border-sunshine-400/40">
              A+ BBB Rated Since 2005
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Dreams,
            <br />
            Delivering Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-200 mb-4 max-w-2xl">
            Serving Mansfield and the DFW area since 2005. Referral-only general contractor trusted by homeowners and real estate professionals.
          </p>
          
          <div className="bg-red-500 text-white px-6 py-4 rounded-lg mb-8 max-w-2xl inline-block">
            <p className="text-lg md:text-xl font-bold">
              24-Hour Emergency Services Available
            </p>
            <p className="text-sm md:text-base">
              Emergency roofing tarping & garage door repair
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-forest-500 to-accent-600 hover:from-forest-600 hover:to-accent-700 transition-all duration-200 shadow-xl hover:shadow-2xl">
              Start Your Project
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-neutral-900 transition-all duration-200">
              View Our Work
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-neutral-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-neutral-300">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">7</div>
              <div className="text-neutral-300">Dedicated Team Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

