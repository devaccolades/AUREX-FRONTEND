import Header from '@/components2/Header'
import React from 'react'
import HeroSection from './HeroSection'
import Footer from '@/components2/Footer'
import ProjectListing from './ProjectListing'
import WhyChooseUs from '../(home)/WhyChoose'
import HomeBuyingJourney from './HomeBuyingJourney'
import BankingPartners from './BankingPartners'
import SignatureProjects from './SignatureProjects'

function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SignatureProjects />
      <ProjectListing />
      <HomeBuyingJourney />
      <WhyChooseUs />
      <BankingPartners />
      <Footer />
    </div>
  )
}

export default page
