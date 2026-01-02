import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
import BankingPartners from '../BankingPartners'
import PrecisionBuiltSection from './PrecissionBuilding'
import CommonFacilities from './CommonFacilities'
import NearbyConnectivity from './NearByConnectivity'
import YoutubeEmbedSection from './Youtube'
import FloorPlansSection from './FloorPlan'

function page() {
  return (
    <div>
      <Header />
      <CommonFacilities />
      <FloorPlansSection />
      <PrecisionBuiltSection />
      <NearbyConnectivity />
      <YoutubeEmbedSection />
      <BankingPartners />
      <Footer />
    </div>
  )
}

export default page
