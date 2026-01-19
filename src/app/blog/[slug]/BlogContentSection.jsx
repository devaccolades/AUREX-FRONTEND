'use client'

import { useState } from 'react'
import Image from 'next/image'
import arrow from '../../../../public/images/blog-inner/down-arrow.svg'
import Link from 'next/link'

const relatedBlogs = [
    {
        id: 1,
        category: '🧱 Construction Tips',
        title: 'GREEN LIVING: THE FUTURE OF MODERN HOMES',
        desc: 'Explore the world of architecture, design...',
    },
    {
        id: 2,
        category: '🧱 Construction Tips',
        title: 'GREEN LIVING: THE FUTURE OF MODERN HOMES',
        desc: 'Explore the world of architecture, design...',
    },
    {
        id: 3,
        category: '🧱 Construction Tips',
        title: 'GREEN LIVING: THE FUTURE OF MODERN HOMES',
        desc: 'Explore the world of architecture, design...',
    },
]

export default function BlogContentSection({data}) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2 lg:gap-3 xl:gap-4">
                <div className="md:col-span-3 border border-gray-200 ">
                    <div className="container py-6 md:py-10 lg:py-12">
                        <h3 className="font-urban text-[16px] leading-[16px] lg:text-[20px] lg:leading-[150%] -tracking-[3%] text-[#000000] font-medium mb-4">Introduction</h3>
                        <p className="font-inter font-normal text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[150%] -tracking-[3%] text-[#818181]">
                            Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.
                        </p>
                    </div>
                    <div className='border-b border-gray-200 '></div>
                    <div className='container py-6 md:pt-10 lg:py-12'>
                    <div
                        className={`space-y-6 md:space-y-8 text-gray-600 leading-relaxed ${!expanded ? 'max-h-[420px] overflow-hidden relative ' : ''
                            }`}
                    >
                        <div>
                            <h2 className="font-urban text-[18px] leading-[26px] lg:text-[28px] md:leading-[150%] -tracking-[3%] text-[#000000] font-medium mb-2">
                                Artificial Intelligence (AI)
                            </h2>
                            <p className='mb-2 md:mb-4 font-inter font-normal text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[150%] -tracking-[3%] text-[#818181]'>
                                Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.
                            </p>
                            <p className='font-inter font-normal text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[150%] -tracking-[3%] text-[#818181]'>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semiboldfont-urban text-[18px] leading-[26px] lg:text-[28px] md:leading-[150%] -tracking-[3%] text-[#000000] font-medium mb-2">
                                Predictive Analytics and Disease Prevention
                            </h2>
                            <p className='font-inter font-normal text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[150%] -tracking-[3%] text-[#818181]'>
                                One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.
                            </p>
                        </div>
                        {!expanded && (
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
                        )}
                    </div>
                    </div>
                    {!expanded && (
                        <div className="pb-6 flex justify-center">
                            <button
                                onClick={() => setExpanded(true)}
                                className="font-inter font-bold text-[14px] lg:text-[16px] xl:text-[18px] leading-[150%] -tracking-[3%] flex items-center gap-1 md:gap-2 bg-black text-white px-3 md:px-4 lg:px-6 py-[6px] md:py-[10px] rounded-[12px] hover:bg-gray-900 transition"
                            >
                                Read Full Blog 
                                <Image src={arrow} alt='down-arrow' className='xl:size-[24px] lg:size-[22px] size-[20px]' />
                            </button>
                        </div>
                    )}
                </div>

                <div className="container lg:col-span-1 py-6 md:py-8 lg:py-10">
                    <h3 className="font-urban font-bold text-[14px] lg:text-[18px] xl:text-[20px] leading-[20px] mb-2 md:mb-4 xl:mb-6">RELATED BLOGS</h3>

                    <div className="space-y-4 md:space-y-6">
                        {relatedBlogs.map((blog) => (
                            <div
                                key={blog.id}
                                className=" hover:shadow-md transition"
                            >
                                <span className="font-urban font-medium text-[12px] leading-[13px] xl:text-[13px] md:text-[13px] text-[#000000]">
                                    {blog.category}
                                </span>

                                <h4 className="font-urban font-bold text-[14px] lg:text-[16px] xl:text-[20px] text-[#000000] mt-1 lg:mt-2 leading-[14px] lg:leading-[16px] xl:leading-[20px]">
                                    {blog.title}
                                </h4>

                                <p className="font-poppins font-normal text-[12px] xl:text-[14px] leading-[16px] xl:leading-[18px] text-[#777777] mt-1 lg:mt-2 mb1 lg:mb-2">
                                    {blog.desc}
                                </p>

                                <Link href={`/blog/${blog.id}`} className="font-urban font-extrabold  lg:mt-4 text-[13px] bg-black text-white px-3 py-1 md:py-[6px] rounded-full">
                                    Read More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
