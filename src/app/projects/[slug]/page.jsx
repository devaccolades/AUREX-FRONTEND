import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
import BankingPartners from '../BankingPartners'
import PrecisionBuiltSection from './PrecissionBuilding'
import CommonFacilities from './CommonFacilities'
import NearbyConnectivity from './NearByConnectivity'
import YoutubeEmbedSection from './Youtube'
import FloorPlansSection from './FloorPlan'
import ProjectHero from './ProjectHeroSection'
import ConstructionUpdates from './ConstructionUpdate'

function page() {
  return (
    <div>
      <Header />
      <ProjectHero />
      <CommonFacilities />
      <FloorPlansSection />
      <PrecisionBuiltSection />
      <NearbyConnectivity />
      <YoutubeEmbedSection />
      <ConstructionUpdates />
      <BankingPartners />
      <Footer />
    </div>
  )
}

export default page
