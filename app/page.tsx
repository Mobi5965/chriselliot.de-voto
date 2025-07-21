'use client'

import { useState, useEffect } from 'react'
import { PlasmicComponent } from '@plasmicapp/loader-nextjs'
import { PLASMIC } from '../plasmic-init'

// Import your existing components as fallback
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'
import AboutModal from '@/components/AboutModal'

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [plasmicData, setPlasmicData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true)
  }

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false)
  }

  const handleOpenAboutModal = () => {
    setIsAboutModalOpen(true)
  }

  const handleCloseAboutModal = () => {
    setIsAboutModalOpen(false)
  }

  useEffect(() => {
    // Try to fetch Plasmic content for the homepage
    const fetchPlasmicContent = async () => {
      try {
        const data = await PLASMIC.maybeFetchComponentData('/')
        setPlasmicData(data)
      } catch (error) {
        console.log('No Plasmic content found for homepage, using static version')
      } finally {
        setLoading(false)
      }
    }

    fetchPlasmicContent()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // If we have Plasmic content, render it
  if (plasmicData) {
    return <PlasmicComponent component="/" />
  }

  // Otherwise, render the static landing page
  return (
    <main className="min-h-screen">
      <Header 
        onGetStartedClick={handleOpenBookingModal}
        onAboutClick={handleOpenAboutModal}
      />
      <HeroSection onGetStartedClick={handleOpenBookingModal} />
      <ProcessSection onGetStartedClick={handleOpenBookingModal} />
      <TestimonialsSection />
      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={handleCloseBookingModal} 
      />
      
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={handleCloseAboutModal} 
      />
    </main>
  )
} 