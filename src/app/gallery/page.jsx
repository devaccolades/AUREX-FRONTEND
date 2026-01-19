import Footer from '@/components2/Footer'
import Header from '@/components2/Header'
import React from 'react'
import ImageSlider from './ImageSlider'
import YoutubeVideoSection from './YotubeVideo'
import LookingFor from './LookingFor'
import Moments from './Moments'
import { EventGalleryByEventIdFetch, EventGalleryFetch, EventsFetch, GalleryVideosFetch, SpaceGalleryFetch } from '@/services/api'


export default async function Page() {
    const [
    spaceGallery,
    galleryVideos,
    events,
    eventGallery,
    // EventGalleryByEvent
  ] = await Promise.all([
    SpaceGalleryFetch(),
    GalleryVideosFetch(),
    EventsFetch(),
    EventGalleryFetch(),
    // EventGalleryByEventIdFetch()
  ]);
  return (
    <div>
      <Header />
      <ImageSlider spaceGallery={spaceGallery} galleryVideos={galleryVideos} />
      <YoutubeVideoSection galleryVideos={galleryVideos} />
      <Moments events={events} eventGallery={eventGallery} />
      <LookingFor />
      <Footer />
    </div>
  )
}


