'use client'

import Image from 'next/image'
import { MapPin, Linkedin, Instagram, Youtube } from 'lucide-react'

interface FooterProps {
  // Company Info
  logoUrl?: string
  logoAlt?: string
  companyDescription?: string
  
  // Social Media Links
  linkedinUrl?: string
  instagramUrl?: string
  youtubeUrl?: string
  
  // Services Section
  servicesTitle?: string
  service1Text?: string
  service1Url?: string
  service2Text?: string
  service2Url?: string
  service3Text?: string
  service3Url?: string
  service4Text?: string
  service4Url?: string
  
  // Contact Section
  contactTitle?: string
  contactLocation?: string
  contactSubtext?: string
  
  // Footer Bottom
  copyrightText?: string
  poweredByText?: string
  poweredByLinkText?: string
  privacyPolicyText?: string
  privacyPolicyUrl?: string
  termsOfServiceText?: string
  termsOfServiceUrl?: string
  
  // Style props
  className?: string
}

const Footer = ({
  // Company Info defaults
  logoUrl = "/chriselliot.de logo.png",
  logoAlt = "Chris Elliott",
  companyDescription = "Empowering entrepreneurs to live anywhere, pay 0% tax, and build global businesses with complete legal compliance.",
  
  // Social Media defaults
  linkedinUrl = "https://www.linkedin.com/in/chris-elliott-437b00125/?originalSubdomain=ae",
  instagramUrl = "https://www.instagram.com/chriselliott__?igsh=dnZmZmd3MDc5MnQ5&utm_source=qr",
  youtubeUrl = "https://www.youtube.com/@chriselliott_",
  
  // Services defaults
  servicesTitle = "Services",
  service1Text = "Business Setup",
  service1Url = "#",
  service2Text = "Dubai Residency", 
  service2Url = "#",
  service3Text = "Banking Solutions",
  service3Url = "#",
  service4Text = "Tax Optimization",
  service4Url = "#",
  
  // Contact defaults
  contactTitle = "Contact",
  contactLocation = "Dubai, UAE",
  contactSubtext = "Serving clients globally",
  
  // Footer bottom defaults
  copyrightText = "© 2025 Chris Elliott. All rights reserved.",
  poweredByText = "Powered by",
  privacyPolicyText = "Privacy Policy",
  privacyPolicyUrl = "#",
  termsOfServiceText = "Terms of Service", 
  termsOfServiceUrl = "#",
  
  className = ""
}: FooterProps) => {

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src={logoUrl}
                alt={logoAlt}
                width={140}
                height={70}
                className="h-14 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              {companyDescription}
            </p>
            <div className="flex space-x-4">
              <a 
                href={linkedinUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={instagramUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={youtubeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">{servicesTitle}</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={service1Url} 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  {service1Text}
                </a>
              </li>
              <li>
                <a 
                  href={service2Url} 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  {service2Text}
                </a>
              </li>
              <li>
                <a 
                  href={service3Url} 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  {service3Text}
                </a>
              </li>
              <li>
                <a 
                  href={service4Url} 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  {service4Text}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">{contactTitle}</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    {contactLocation}<br />
                    <span className="text-sm">{contactSubtext}</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center text-gray-400 text-sm mb-4 md:mb-0 space-y-2 md:space-y-0 md:space-x-4">
              <div>{copyrightText}</div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href={privacyPolicyUrl} 
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                {privacyPolicyText}
              </a>
              <a 
                href={termsOfServiceUrl} 
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                {termsOfServiceText}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
    </footer>
  )
}

export default Footer 