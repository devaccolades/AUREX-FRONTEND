import Header from '@/Components/Header'
import React from 'react'
import HeroSection from './HeroSection'
import Footer from '@/Components/Footer'
import ProjectListing from './ProjectListing'
import WhyChooseUs from '../(home)/WhyChoose'
import HomeBuyingJourney from './HomeBuyingJourney'

function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectListing />
      <HomeBuyingJourney />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default page
