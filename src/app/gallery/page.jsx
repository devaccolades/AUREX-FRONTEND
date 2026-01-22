import Footer from '@/components2/Footer'
import Header from '@/components2/Header'
import React from 'react'
import ImageSlider from './ImageSlider'
import YoutubeVideoSection from './YotubeVideo'
import LookingFor from './LookingFor'
import Moments from './Moments'
import { EventGalleryByEventIdFetch, EventGalleryFetch, EventsFetch, GalleryVideosFetch, SpaceGalleryFetch, SeoById } from '@/services/api'

export async function generateMetadata() {
  const seo = await SeoById("gallery");

  if (!seo) {
    return {
      title: "Aurex Builders",
      description: "Aurex Builders",
    };
  }

  return {
    title: seo.meta_title,
    description: seo.meta_description,

    openGraph: {
      title: seo.og_title || seo.meta_title,
      description: seo.og_description || seo.meta_description,
      url: "https://aurex.accoladesweb.com",
      siteName: "Aurex Builders",
      images: seo.og_image
        ? [
            {
              url: seo.og_image, // FULL URL from backend
              width: 1200,
              height: 630,
              alt: seo.og_title || seo.meta_title,
            },
          ]
        : [],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.og_title || seo.meta_title,
      description: seo.og_description || seo.meta_description,
      images: seo.og_image ? [seo.og_image] : [],
    },
  };
}

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


