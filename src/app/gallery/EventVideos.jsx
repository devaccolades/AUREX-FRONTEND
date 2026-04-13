'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

import arrow from '../../../public/images/gallery/Rectangle.svg'

export default function EventVideos({ events, eventVideos, activeCategory  }) {

  const [visible, setVisible] = useState(6)
  const [selectedVideo, setSelectedVideo] = useState(null)

  /* ---------- EVENT MAP ---------- */
  const eventMap = events.reduce((acc, event) => {
    acc[event.id] = event.event_name
    return acc
  }, {})

  /* ---------- VIDEO DATA ---------- */
  const galleryVideos = eventVideos
    ?.filter(item => item.video_url)
    .map((item, index) => ({
      id: item.id || index,
      category: eventMap[item.event],
      src: item.video_thumbnail,
      videoUrl: item.video_url,
    })) || []

  const categories = Array.from(
    new Set([
      'All',
      ...(galleryVideos.map(item => item.category).filter(Boolean) || [])
    ])
  )

  const filtered =
    activeCategory === 'All'
      ? galleryVideos
      : galleryVideos.filter(item => item.category === activeCategory)

  /* ---------- YOUTUBE EMBED ---------- */
  const getEmbedUrl = (url) => {
    if (!url) return ''
    const regExp = /(?:youtube.com\/watch\?v=|youtu.be\/)([^&]+)/
    const match = url.match(regExp)
    return match
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&enablejsapi=1`
      : url
  }

  /* ---------- AUTO CLOSE WHEN VIDEO ENDS ---------- */
  useEffect(() => {
    const handleMessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        if (data.event === 'onStateChange' && data.info === 0) {
          setSelectedVideo(null)
        }
      } catch (e) {}
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <div>

      {/* FILTER */}
      

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        {filtered.slice(0, visible).map((item) => (
          <div key={item.id}>

            <div
              className="group relative h-[120px] md:h-[180px] lg:h-[200px] xl:h-[280px] rounded-[20px] overflow-hidden"
            >
              <Image
                src={item.src || '/fallback.jpg'}
                alt="video"
                fill
                className="object-cover"
              />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setSelectedVideo(item.videoUrl)}
                  className="bg-black/60 hover:bg-black/80 transition rounded-full p-3"
                >
                  <Play className="text-white" size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      {visible < filtered.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisible(prev => prev + 3)}
            className="font-bold text-[14px] flex items-center gap-2"
          >
            LOAD MORE
            <Image src={arrow} alt="" className="size-[11px]" />
          </button>
        </div>
      )}

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-9999 bg-black/80 flex items-center justify-center"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-[90%] max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedVideo(null)} className="absolute -top-13 right-3 z-10 text-white text-2xl">✕</button>

            <iframe
              src={getEmbedUrl(selectedVideo)}
              className="w-full h-full rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </div>
  )
}
