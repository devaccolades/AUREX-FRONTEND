import Footer from '@/components2/Footer'
import Header from '@/components2/Header'
import React from 'react'
import HeroSection from './Herosection'
import OpenPositionsSection from './OpenPositions'
import CareerCTASection from './CareerCTA'
import NoJobs from './NoJobs'

function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <OpenPositionsSection />
      <CareerCTASection />
      <Footer />
    </div>
  )
}

export default page
