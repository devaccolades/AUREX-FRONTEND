import Footer from '@/components2/Footer'
import Header from '@/components2/Header'
import React from 'react'
import HeroSection from './HeroSection'
import ContactInfoCards from './ContactInfo'
import FAQ from '../(home)/FAQ'
import WhatsAppCTA from './WhatsappCTA'

function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ContactInfoCards />
      <WhatsAppCTA />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page
