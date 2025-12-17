import Header from '@/Components/Header'
import React from 'react'
import LeadershipPillers from './LeadershipPillers'
import MissionVision from './MissionVision'
import Footer from '@/Components/Footer'
import DreamsInThrissur from '../(home)/DreamsInThrissur'
import WhyAurexBuilders from './WhyAurex'

function page() {
  return (
    <div>
      <Header />
      <MissionVision />
      <LeadershipPillers />
      <WhyAurexBuilders />
      <DreamsInThrissur />
      <Footer />
    </div>
  )
}

export default page
