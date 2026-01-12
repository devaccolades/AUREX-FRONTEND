import Header from '@/Components/Header'
import React from 'react'
import HeroSection from './HeroSection'
import Footer from '@/Components/Footer'
import OurCoreServices from './OurCoreServices'
import ExtendedExpertiseSection from './ExtendedExpertise'
import ContactCtaSection from './ContactCTA'

function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <OurCoreServices />
      <ExtendedExpertiseSection />
      <ContactCtaSection />
      <Footer />
    </div>
  )
}

export default page
