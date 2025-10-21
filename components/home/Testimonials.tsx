import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Mansfield, TX',
    project: 'Custom Home Build',
    rating: 5,
    text: 'Teton Construction exceeded our expectations in every way. From the initial consultation to the final walkthrough, they were professional, responsive, and delivered exceptional quality. Our dream home is now a reality!'
  },
  {
    name: 'Michael Chen',
    location: 'Arlington, TX',
    project: 'Kitchen Renovation',
    rating: 5,
    text: 'We hired Teton for a complete kitchen remodel, and we couldn\'t be happier. They were on time, on budget, and the craftsmanship is outstanding. Highly recommended!'
  },
  {
    name: 'Jennifer Martinez',
    location: 'Fort Worth, TX',
    project: 'Commercial Office',
    rating: 5,
    text: 'As a real estate professional, I\'ve worked with Teton Construction on multiple projects. Their reliability and quality are unmatched. They\'re my go-to contractor for all my clients.'
  },
  {
    name: 'Robert Williams',
    location: 'Southlake, TX',
    project: 'Home Addition',
    rating: 5,
    text: 'The team at Teton made our home addition process seamless. They handled everything from permits to final inspection. The new space blends perfectly with our existing home.'
  },
  {
    name: 'David Thompson',
    location: 'Grapevine, TX',
    project: 'Retail Build-Out',
    rating: 5,
    text: 'Teton Construction completed our retail space ahead of schedule and within budget. Their attention to detail and professional approach made all the difference. Great team to work with!'
  },
  {
    name: 'Emily Rodriguez',
    location: 'Colleyville, TX',
    project: 'Whole Home Renovation',
    rating: 5,
    text: 'From start to finish, Teton Construction was amazing. They transformed our outdated home into a modern masterpiece. The flexible payment options were also incredibly helpful.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it – hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 bg-white">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              
              <FaQuoteLeft className="w-8 h-8 text-primary-200 mb-4" />
              
              <p className="text-neutral-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="pt-4 border-t border-neutral-200">
                <p className="font-bold text-neutral-900">{testimonial.name}</p>
                <p className="text-sm text-neutral-600">{testimonial.location}</p>
                <p className="text-sm text-primary-600 font-medium mt-1">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-lg shadow-md px-8 py-4">
            <div className="mr-6">
              <div className="text-4xl font-bold text-primary-600">4.9</div>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-neutral-900">Excellent Rating</p>
              <p className="text-sm text-neutral-600">Based on 200+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

