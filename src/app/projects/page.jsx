import Header from '@/Components/Header'
import React from 'react'
import HeroSection from './HeroSection'
import Footer from '@/Components/Footer'
import ProjectListing from './ProjectListing'

function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectListing />
      <Footer />
    </div>
  )
}

export default page
