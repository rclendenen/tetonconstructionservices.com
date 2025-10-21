import { FaAward, FaHandshake, FaShieldAlt, FaUsers } from 'react-icons/fa'

const badges = [
  {
    icon: FaAward,
    title: 'A+ BBB Rating',
    description: 'Recognized for excellence and ethical business practices'
  },
  {
    icon: FaHandshake,
    title: 'Referral-Only Service',
    description: 'Trusted by satisfied clients and real estate partners'
  },
  {
    icon: FaShieldAlt,
    title: 'BBB A+ Rated',
    description: 'A+ rating with the Better Business Bureau since 2005'
  },
  {
    icon: FaUsers,
    title: '20+ Years Experience',
    description: 'Serving the DFW community since 2005'
  }
]

export default function TrustBadges() {
  return (
    <section className="py-16 bg-neutral-50 border-y border-neutral-200">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-forest-100 to-accent-100 text-forest-600 mb-4">
                <badge.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
              <p className="text-sm text-neutral-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

