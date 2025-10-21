import Link from 'next/link'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-forest-600 via-accent-600 to-accent-500 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Let's bring your vision to life. BBB A+ rated and referral-only—serving Mansfield and the DFW area since 2005.
          </p>
          <p className="text-lg text-white/80 mb-12">
            24-hour emergency roofing tarping and garage door services available
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-forest-600 text-lg font-medium rounded-lg hover:bg-neutral-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FaEnvelope className="w-5 h-5 mr-2" />
              Request a Quote
            </Link>
            <a
              href="tel:+19728249066"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-forest-600 transition-all duration-200"
            >
              <FaPhone className="w-5 h-5 mr-2" />
              (972) 824-9066
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/30">
            <div>
              <div className="text-2xl font-bold mb-2">Free Consultations</div>
              <p className="text-white/80">No obligation project assessments</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">24/7 Emergency Service</div>
              <p className="text-white/80">Roofing tarping & garage door repair</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Real Estate Trusted</div>
              <p className="text-white/80">Flexible payment options available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

