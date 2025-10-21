import Link from 'next/link'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.jpg"
                alt="Teton Construction"
                width={160}
                height={53}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-neutral-400 mb-4">
              Building excellence in the DFW area since 2005. Your trusted partner for residential and commercial construction.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100049266175557" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-forest-500 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-forest-500 transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-forest-500 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-neutral-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>Custom Home Building</li>
              <li>Home Renovations</li>
              <li>Commercial Construction</li>
              <li>Office Build-Outs</li>
              <li>Retail Construction</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 text-forest-500 flex-shrink-0" />
                <span className="text-neutral-400">
                  Mansfield, TX<br />
                  Serving Greater DFW
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3 text-forest-500 flex-shrink-0" />
                <a href="tel:+19728249066" className="text-neutral-400 hover:text-white transition-colors">
                  (972) 824-9066
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 text-forest-500 flex-shrink-0" />
                <a href="mailto:info@tetonconstructionservices.com" className="text-neutral-400 hover:text-white transition-colors">
                  info@tetonconstructionservices.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Teton Construction Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <span className="text-neutral-400">
                A+ BBB Rated | Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

