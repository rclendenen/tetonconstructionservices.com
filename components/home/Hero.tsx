import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80"
          alt="Construction site"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-600/20 backdrop-blur-sm text-primary-300 rounded-full text-sm font-semibold border border-primary-600/30">
              A+ BBB Rated Since 2005
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Dreams,
            <br />
            Delivering Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-2xl">
            Premier residential and commercial construction services in the DFW area. 
            Trusted by homeowners and real estate professionals for over 20 years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Project
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-neutral-900 transition-all duration-200">
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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-neutral-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">A+</div>
              <div className="text-neutral-300">BBB Rating</div>
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

