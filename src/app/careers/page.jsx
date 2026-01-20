import Footer from '@/components2/Footer'
import Header from '@/components2/Header'
import React from 'react'
import HeroSection from './Herosection'
import OpenPositionsSection from './OpenPositions'
import CareerCTASection from './CareerCTA'
import NoJobs from './NoJobs'
import { CareersFetch } from '@/services/api'

export default async function page (){
  const jobdata = await CareersFetch();

  return (
    <div>
      <Header />
      <HeroSection />
      <OpenPositionsSection data={jobdata}/>
      <CareerCTASection />
      <Footer />
    </div>
  )
}

