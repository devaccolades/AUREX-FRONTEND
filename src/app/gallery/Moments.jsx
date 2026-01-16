'use client'

import { useState } from "react"
import Image from "next/image"
import arrow from '../../../public/images/gallery/Rectangle.svg'
import Preview from '../../../public/images/gallery/preview.svg'
import arrow1 from '../../../public/images/gallery/Rectangle1.svg'
import arrow2 from '../../../public/images/gallery/Rectangle2.svg'
import arrow3 from '../../../public/images/gallery/Rectangle3.svg'
import arrow4 from '../../../public/images/gallery/Rectangle4.svg'

const categories = ['All', 'Events', 'Ambassador', 'Projects', 'Pooja']

const galleryImages = [
    { id: 1, category: 'Events', src: '/images/gallery/img1.svg' },
    { id: 2, category: 'Projects', src: '/images/gallery/img2.svg' },
    { id: 3, category: 'Events', src: '/images/gallery/img3.svg' },
    { id: 4, category: 'Ambassador', src: '/images/gallery/img4.svg' },
    { id: 5, category: 'Events', src: '/images/gallery/img5.svg' },
    { id: 6, category: 'Projects', src: '/images/gallery/img6.svg' },
    { id: 7, category: 'Pooja', src: '/images/gallery/img7.svg' },
    { id: 8, category: 'Events', src: '/images/gallery/img8.svg' },
    { id: 9, category: 'Projects', src: '/images/gallery/img9.svg' },
]

export default function Moments() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [visible, setVisible] = useState(6)
    const [selectedImage, setSelectedImage] = useState(null)

    const filtered =
        activeCategory === 'All'
            ? galleryImages
            : galleryImages.filter(img => img.category === activeCategory)
    return (
        <section className="container py-12">
            {/* HEADER */}
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
                        className="appearance-none border border-black rounded-full pl-3 pr-2 py-[4px] md:py-[6px] text-sm bg-transparent focus:outline-none cursor-pointer font-urban font-bold text-[13px] leading-[13px]"
                    >
                        {categories.map(cat => (
                            <option
                                key={cat}
                                className="font-urban font-bold text-[13px] leading-[13px]"
                            >
                                {cat}
                            </option>
                        ))}
                    </select>

                    {/* CUSTOM ARROW */}
                    <Image
                        src={arrow}
                        alt="arrow"
                        className="pointer-events-none absolute right-3 mb-1 size-[11px]"
                    />
                </div>

            </div>

            {/* GALLERY GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-6">
                {filtered.slice(0, visible).map(item => (
                    <div className="relative py-8 md:py-14" key={item.id}>
                        <Image src={arrow4} alt="arrow1" className="absolute top-0 left-0" />
                        <Image src={arrow3} alt="arrow2" className="absolute top-0 right-0"/>
                        <Image src={arrow2} alt="arrow3" className="absolute bottom-0 left-0"/>
                        <Image src={arrow1} alt="arrow4" className="absolute bottom-0 right-0"/>
                    <div
                        onClick={() => setSelectedImage(item.src)}
                        className="group relative xl:h-[280px] lg:h-[200px] md:h-[180px] h-[120px] lg:rounded-[20px] overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={item.src}
                            alt="Gallery image"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="flex items-center justify-center gap-2 text-white text-[12px] font-urban font-semibold ">
                                <Image src={Preview} alt="Preview" className="size-[24px]" /> PREVIEW
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>

            {/* LOAD MORE */}
            <div className="flex justify-center items-center mt-6 md:mt-12">
                {/* LOAD MORE */}
                {visible < filtered.length && (
                    <div className="flex justify-center items-center mt-2">
                        <button
                            onClick={() => setVisible(prev => prev + 3)}
                            className="font-urban font-bold md:text-[16px] text-[14px] leading-[16px] flex items-center gap-2"
                        >
                            LOAD MORE
                            <Image src={arrow} alt="arrow" className="mb-1 size-[11px]" />
                        </button>
                    </div>
                )}

            </div>
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full max-w-5xl h-[80vh]">
                        <Image
                            src={selectedImage}
                            alt="Preview"
                            fill
                            className="object-contain rounded-xl"
                        />
                    </div>
                </div>
            )}

        </section>
    )
}
