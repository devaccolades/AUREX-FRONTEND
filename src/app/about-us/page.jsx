import Header from '@/Components/Header'
import React from 'react'
import LeadershipPillers from './LeadershipPillers'
import MissionVision from './MissionVision'
import Footer from '@/Components/Footer'
import DreamsInThrissur from '../(home)/DreamsInThrissur'
import WhyAurexBuilders from './WhyAurex'
import HeroSection from './HeroSection'
import OurJourney from './OurJourney'
import BrandAmbassadorSection from './BrandAmbassadorSection'

function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <OurJourney />
      <MissionVision />
      <BrandAmbassadorSection />
      <LeadershipPillers />
      <WhyAurexBuilders />
      <DreamsInThrissur />
      <Footer />
    </div>
  )
}

export default page
