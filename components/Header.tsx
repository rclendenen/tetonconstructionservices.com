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
              src="/logo-transparent.jpg"
              alt="Teton Construction"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors duration-200 ${
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
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-forest-500 to-accent-600 text-white font-medium rounded-lg hover:from-forest-600 hover:to-accent-700 transition-all duration-200 shadow-md"
            >
              <FaPhone className="w-4 h-4 mr-2" />
              (972) 824-9066
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
                  className={`text-base font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
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
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-forest-500 to-accent-600 text-white font-medium rounded-lg hover:from-forest-600 hover:to-accent-700 transition-all duration-200 mx-4 shadow-md"
              >
                <FaPhone className="w-4 h-4 mr-2" />
                (972) 824-9066
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

