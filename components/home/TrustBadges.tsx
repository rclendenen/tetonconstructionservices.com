import { FaAward, FaHandshake, FaUsers, FaClock } from 'react-icons/fa'

const badges = [
  {
    icon: FaAward,
    title: 'A+ BBB Rating',
    description: 'Recognized for excellence and ethical business practices',
    link: 'https://www.bbb.org/us/tx/mansfield/profile/construction/teton-construction-services-0825-1000187435'
  },
  {
    icon: FaHandshake,
    title: 'Referral-Only Service',
    description: 'Trusted by satisfied clients and real estate partners'
  },
  {
    icon: FaClock,
    title: '24/7 Emergency Service',
    description: 'Available anytime for roofing tarping and garage door repair'
  },
  {
    icon: FaUsers,
    title: '20+ Years Experience',
    description: 'Serving the DFW community since 2005'
  }
]

export default function TrustBadges() {
  return (
    <section className="py-8 md:py-12 bg-neutral-50 border-y border-neutral-200">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => {
            const content = (
              <>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-forest-100 to-accent-100 text-forest-600 mb-4">
                  <badge.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
                <p className="text-sm text-neutral-600">{badge.description}</p>
              </>
            )

            if (badge.link) {
              return (
                <a
                  key={index}
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  {content}
                </a>
              )
            }

            return (
              <div key={index} className="text-center">
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

