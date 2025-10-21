import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Shawna Luetkenhaus',
    location: 'DFW Area',
    project: 'Garage Door Repair',
    rating: 5,
    text: 'Great experience with garage door repair. Quick to respond, quick to make repairs. Would use again.'
  },
  {
    name: 'Trevor Kask',
    location: 'DFW Area',
    project: 'Emergency Garage Door Service',
    rating: 5,
    text: 'Teton was able to get to my house same day to work on my door. I was on a tight timeline and they were very accommodating. Would recommend and will call in the future for any future needs.'
  },
  {
    name: 'Wendy Horton',
    location: 'DFW Area',
    project: 'Roof Leak & Ceiling Repair',
    rating: 5,
    text: 'Did a wonderful job repairing a small leak on our roof as well as repairing our living room ceiling. Definitely recommend them!'
  },
  {
    name: 'Ann B Smith',
    location: 'DFW Area',
    project: 'Backyard Concrete Patio Rebuild & Expansion',
    rating: 5,
    text: 'I cannot say enough good things about this company. The owner came out and bid a demo and rebuild/expansion of our backyard concrete patio. Made helpful suggestions, showed up as promised, and the crew was courteous, efficient, and cleaned up when finished. Excellent price with no surprise add-ons.'
  },
  {
    name: 'Marylie Thompson',
    location: 'DFW Area',
    project: 'Kitchen Cabinet Painting & Remodel',
    rating: 5,
    text: 'After much research we decided to hire Teton Construction Services and we are so glad that we did. They painted all of our cabinets and did an AMAZING job! They were polite, on time, and followed through with everything they promised. Highly recommend them for your renovation needs!'
  },
  {
    name: 'Rachael \'Brown\' Nikl',
    location: 'DFW Area',
    project: 'Custom Drawer Repair & Replacement',
    rating: 5,
    text: 'I was referred to Reyna and Chance to fix two drawers in my house. They were professional, fast, and reliable—finished in under a week! The craftsmanship looks better than when the builder installed the drawers brand new.'
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

