import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
import ImageSlider from './ImageSlider'
import YoutubeVideoSection from './YotubeVideo'
import LookingFor from './LookingFor'
import Moments from './Moments'

function page() {
  return (
    <div>
      <Header />
      <ImageSlider />
      <YoutubeVideoSection />
      <Moments />
      <LookingFor />
      <Footer />
    </div>
  )
}

export default page
