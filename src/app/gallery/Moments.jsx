'use client'

import { useState } from "react"
import Image from "next/image"

import arrow from '../../../public/images/gallery/Rectangle.svg'
import Preview from '../../../public/images/gallery/preview.svg'

export default function Moments({ events, eventGallery }) {
  // console.log('errrr', eventGallery);

  const [activeCategory, setActiveCategory] = useState('All')
  const [visible, setVisible] = useState(6)
  const [selectedIndex, setSelectedIndex] = useState(null)

  /* ---------- CATEGORIES ---------- */

  /* ---------- GALLERY DATA ---------- */
  const eventMap = events.reduce((acc, event) => {
    acc[event.id] = event.event_name
    return acc
  }, {})


  const galleryImages = eventGallery
    .filter(item => item.image)
    .map((item, index) => ({
      id: item.id || index,
      category: eventMap[item.event],
      src: item.image,
    }))

  const categories = Array.from(
    new Set([
      'All',
      ...(galleryImages.map(img => img.category).filter(Boolean) || [])
    ])
  );

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory)

  /* ---------- NAVIGATION HANDLERS ---------- */
  const handleNext = () => {
    if (selectedIndex < filtered.length - 1) {
      setSelectedIndex(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(prev => prev - 1)
    }
  }

  return (
    <section className="container py-12">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row gap-2 items-start justify-between mb-6 md:mb-10">
        <h2 className="font-urban font-bold lg:text-[20px] md:text-[18px] text-[14px] leading-[16px] uppercase">
          Moments. Milestones. Masterpieces.
        </h2>

        <div className="relative flex items-center">
          <select
            value={activeCategory}
            onChange={(e) => {
              setActiveCategory(e.target.value)
              setVisible(9)
            }}
            className="appearance-none border border-black rounded-full pl-3 pr-6 py-[4px] md:py-[6px] bg-transparent cursor-pointer font-urban font-bold text-[13px]"
          >
            {categories.map(cat => (

              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <Image
            src={arrow}
            alt="arrow"
            className="pointer-events-none absolute right-3 mb-1 size-[11px]"
          />
        </div>
      </div>

      {/* ================= GALLERY GRID ================= */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {filtered.slice(0, visible).map((item, index) => (
          <div className="relative " key={item.id}>

            <div
              onClick={() => setSelectedIndex(index)}
              className="group relative xl:h-[280px] lg:h-[200px] md:h-[180px] h-[120px] rounded-[20px] overflow-hidden cursor-pointer"
            >
              <Image
                src={item.src}
                alt="Gallery image"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <div className="flex items-center gap-2 text-white text-[12px] font-urban font-semibold">
                  <Image src={Preview} alt="Preview" className="size-[24px]" />
                  PREVIEW
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= LOAD MORE ================= */}
      {visible < filtered.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisible(prev => prev + 3)}
            className="font-urban font-bold text-[14px] md:text-[16px] flex items-center gap-2"
          >
            LOAD MORE
            <Image src={arrow} alt="" className="mb-1 size-[11px]" />
          </button>
        </div>
      )}

      {/* ================= PREVIEW MODAL ================= */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-9999 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-[90%] lg:max-w-3xl xl:max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-3 right-3 z-10 text-white text-2xl"
            >
              ✕
            </button>
            <Image
              src={filtered[selectedIndex].src}
              alt="Preview"
              fill
              className="object-contain rounded-xl"
            />

            {/* PREVIOUS */}
            {selectedIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute -left-5 md:-left-10 top-1/2 -translate-y-1/2 text-white text-4xl font-bold"
              >
                ‹
              </button>
            )}

            {/* NEXT */}
            {selectedIndex < filtered.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute -right-5 md:-right-10 top-1/2 -translate-y-1/2 text-white text-4xl font-bold"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}

    </section>
  )
}
