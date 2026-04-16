'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Teton Construction"
              width={240}
              height={80}
              className="h-16 sm:h-20 w-auto max-w-[200px] sm:max-w-none"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors duration-200 px-2 py-2 ${
                  pathname === item.href
                    ? 'text-forest-500 font-semibold'
                    : 'text-neutral-700 hover:text-forest-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+19728249066"
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-forest-500 to-accent-600 text-white font-medium rounded-lg hover:from-forest-600 hover:to-accent-700 transition-all duration-200 shadow-md min-h-[44px]"
            >
              <FaPhone className="w-4 h-4 mr-2" />
              <span className="whitespace-nowrap">(972) 824-9066</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2.5 text-neutral-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium px-4 py-3 rounded-lg transition-colors duration-200 min-h-[44px] flex items-center ${
                    pathname === item.href
                      ? 'bg-forest-50 text-forest-600 font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+19728249066"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-forest-500 to-accent-600 text-white font-medium rounded-lg hover:from-forest-600 hover:to-accent-700 transition-all duration-200 mx-4 shadow-md min-h-[44px]"
              >
                <FaPhone className="w-4 h-4 mr-2" />
                <span className="whitespace-nowrap">(972) 824-9066</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

