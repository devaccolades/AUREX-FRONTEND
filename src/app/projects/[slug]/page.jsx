import Footer from '@/components2/Footer'
import Header from '@/components2/Header'
import React from 'react'
import BankingPartners from '../BankingPartners'
import PrecisionBuiltSection from './PrecissionBuilding'
import CommonFacilities from './CommonFacilities'
import NearbyConnectivity from './NearByConnectivity'
import YoutubeEmbedSection from './Youtube'
import FloorPlansSection from './FloorPlan'
import ProjectHero from './ProjectHeroSection'
import ConstructionUpdates from './ConstructionUpdate'
import ProjectOverviewSection from './ProjectOverview'
import AmenitiesSection from './Amenities'

function page() {
  return (
    <div>
      <Header />
      <ProjectHero />
      <ProjectOverviewSection />
      <AmenitiesSection />
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
