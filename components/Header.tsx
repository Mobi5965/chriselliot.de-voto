'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  // Logo and branding
  logoUrl?: string
  logoAlt?: string
  
  // Navigation text
  getStartedButtonText?: string
  aboutButtonText?: string
  
  // Event handlers
  onGetStartedClick?: () => void
  onAboutClick?: () => void
  
  // Style props
  className?: string
}

const Header = ({ 
  logoUrl = "/chriselliot.de logo.png",
  logoAlt = "Chris Elliott",
  getStartedButtonText = "Get Started",
  aboutButtonText = "About",
  onGetStartedClick,
  onAboutClick,
  className = ""
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleAboutClick = () => {
    setIsMenuOpen(false)
    // Try to use the global modal function first
    if (typeof window !== 'undefined' && (window as any).openAboutModal) {
      (window as any).openAboutModal()
    } else if (onAboutClick) {
      // Fallback to the prop-based approach
      onAboutClick()
    }
  }

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleGetStartedClick = () => {
    setIsMenuOpen(false)
    // Try to use the global modal function first
    if (typeof window !== 'undefined' && (window as any).openBookingModal) {
      (window as any).openBookingModal()
    } else if (onGetStartedClick) {
      // Fallback to the prop-based approach
      onGetStartedClick()
    }
  }

  const handlePodcastsClick = () => {
    setIsMenuOpen(false)
    window.open('https://www.youtube.com/@chriselliott_', '_blank', 'noopener,noreferrer')
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/20 ${className}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src={logoUrl}
              alt={logoAlt}
              width={120}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleAboutClick}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => handleMenuItemClick('#process')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Process
            </button>
            <button
              onClick={() => handleMenuItemClick('#testimonials')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={handlePodcastsClick}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Podcasts
            </button>
            <button 
              onClick={handleGetStartedClick}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <button
                onClick={handleAboutClick}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => handleMenuItemClick('#process')}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
              >
                Process
              </button>
              <button
                onClick={() => handleMenuItemClick('#testimonials')}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
              >
                Testimonials
              </button>
              <button
                onClick={handlePodcastsClick}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
              >
                Podcasts
              </button>
              <button 
                onClick={handleGetStartedClick}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-200 font-semibold shadow-lg"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>

    </header>
  )
}

export default Header 