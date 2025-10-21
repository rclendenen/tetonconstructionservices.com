'use client'

import { useState, useEffect } from 'react'
import { FaPhone, FaTimes } from 'react-icons/fa'

export default function EmergencyModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNumber, setShowNumber] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if modal has been shown before
    const hasSeenModal = sessionStorage.getItem('emergencyModalSeen')
    
    if (!hasSeenModal) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('emergencyModalSeen', 'true')
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    // Detect if mobile device
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleButtonClick = () => {
    if (!isMobile) {
      setShowNumber(true)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
          aria-label="Close"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Emergency icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <FaPhone className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-4">
          Have an Urgent Need?
        </h2>
        <p className="text-lg text-center text-neutral-700 mb-8">
          We offer 24-hour roof tarping and garage door repair!
        </p>

        {/* Call button */}
        <div className="space-y-3">
          {isMobile ? (
            <a
              href="tel:+19728249066"
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-bold rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FaPhone className="w-5 h-5 mr-3" />
              Call Us Now
            </a>
          ) : (
            <>
              {!showNumber ? (
                <button
                  onClick={handleButtonClick}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-bold rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <FaPhone className="w-5 h-5 mr-3" />
                  Call Us Now
                </button>
              ) : (
                <a
                  href="tel:+19728249066"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-bold rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <FaPhone className="w-5 h-5 mr-3" />
                  (972) 824-9066
                </a>
              )}
            </>
          )}
          
          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-neutral-600 hover:text-neutral-800 transition-colors text-sm font-medium"
          >
            Maybe later
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

