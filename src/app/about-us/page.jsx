import Header from '@/Components/Header'
import React from 'react'
import LeadershipPillers from './LeadershipPillers'
import MissionVision from './MissionVision'
import Footer from '@/Components/Footer'
import DreamsInThrissur from '../(home)/DreamsInThrissur'

function page() {
  return (
    <div>
      <Header />
      <MissionVision />
      <LeadershipPillers />
      <DreamsInThrissur />
      <Footer />
    </div>
  )
}

export default page
