import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Teton Construction Services in Mansfield, TX. 24-hour emergency services available. Call (972) 824-9066 for emergency roofing tarping or garage door repair.',
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 opacity-90"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mb-6">
            Ready to start your project? Need emergency services? We're here to help 24/7.
          </p>
          <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg">
            <p className="text-lg font-bold">24-Hour Emergency: (972) 824-9066</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Whether it's a small repair, full renovation, or an emergency situation—we're here to help. 
                Our 24-hour emergency services include roofing tarping and garage door repair. 
                Reach out to us using any of the methods below.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center">
                    <FaPhone className="w-5 h-5" />
                  </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <a href="tel:+19728249066" className="text-neutral-600 hover:text-forest-600 transition-colors">
                    (972) 824-9066
                  </a>
                </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="mailto:info@tetonconstructionservices.com" className="text-neutral-600 hover:text-primary-600 transition-colors">
                      info@tetonconstructionservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-neutral-600">
                      Mansfield, TX<br />
                      Serving the Greater DFW Area
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center">
                    <FaClock className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-neutral-600 font-semibold">
                      24/7 Availability
                    </p>
                    <p className="text-red-600 font-semibold mt-2">
                      Emergency services available anytime
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    <a
                      href="https://www.bbb.org/us/tx/mansfield/profile/construction/teton-construction-services-0825-1000187435"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-600 transition-colors duration-200 underline"
                    >
                      A+ BBB Rating
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    20+ Years in Business
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Referral-Only Service
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Flexible Payment Options
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    7 Dedicated Team Members
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Service Areas</h2>
            <p className="section-subtitle mx-auto">
              Proudly serving the greater DFW metroplex
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Mansfield', 'Arlington', 'Fort Worth', 'Dallas',
              'Southlake', 'Colleyville', 'Grapevine', 'Bedford',
              'Euless', 'Hurst', 'Keller', 'North Richland Hills',
              'Grand Prairie', 'Irving', 'Burleson', 'Crowley'
            ].map((city, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-neutral-800">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

