import Header from '@/Components/Header'
import React from 'react'
import HeroSection from './HeroSection'
import Footer from '@/Components/Footer'
import OurCoreServices from './OurCoreServices'

function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <OurCoreServices />
      <Footer />
    </div>
  )
}

export default page
