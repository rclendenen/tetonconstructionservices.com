'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-600">
              Teton
            </div>
            <div className="text-2xl font-light text-neutral-800">
              Construction
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-primary-600'
                    : 'text-neutral-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
            >
              <FaPhone className="w-4 h-4 mr-2" />
              (817) 555-0123
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-neutral-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <div className="lg:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium px-4 py-2 rounded-md transition-colors duration-200 ${
                    pathname === item.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200 mx-4"
              >
                <FaPhone className="w-4 h-4 mr-2" />
                (817) 555-0123
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

