'use client'

import { useState } from 'react'
import Image from 'next/image'
import arrow from '../../../../public/images/blog-inner/down-arrow.svg'
import Link from 'next/link'

export default function BlogContentSection({ data, rel }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2 lg:gap-3 xl:gap-4">
                <div className="md:col-span-3 border border-gray-200 ">
                    <div className='border-b border-gray-200 '></div>
                    <div className='container py-6 md:pt-10 lg:py-12'>
                        <div
                            className={`relative space-y-6 md:space-y-8 
  ${!expanded ? 'max-h-[420px] overflow-hidden' : ''}`}
                        >
                            <div
  className={`relative
    [&_h1]:text-black [&_h2]:text-black [&_h3]:text-black
    [&_h1]:font-extrabold [&_h2]:font-bold [&_h3]:font-semibold
    [&_h1]:tracking-[-0.02em] [&_h2]:tracking-[-0.02em]

    [&_p]:font-inter [&_p]:text-[#818181] [&_p]:leading-[150%]
    [&_p]:mb-4

    /* ✅ LIST FIX */
    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
    [&_li]:mb-2

    ${!expanded ? "max-h-[420px] overflow-hidden" : ""}
  `}
  dangerouslySetInnerHTML={{ __html: data.content }}
/>

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
                        {rel.map((blog) => (
                            <div
                                key={blog.slug}
                                className=" hover:shadow-md transition"
                            >
                                <span className="font-urban font-medium text-[12px] leading-[13px] xl:text-[13px] md:text-[13px] text-[#000000]">
                                    {blog.type}
                                </span>

                                <h4 className="font-urban font-bold text-[14px] lg:text-[16px] xl:text-[20px] text-[#000000] mt-1 lg:mt-2 leading-[14px] lg:leading-[16px] xl:leading-[20px]">
                                    {blog.title}
                                </h4>

                                {/* <p className="font-poppins font-normal text-[12px] xl:text-[14px] leading-[16px] xl:leading-[18px] text-[#777777] mt-1 lg:mt-2 mb1 lg:mb-2">
                                    {blog.desc}
                                </p> */}

                                <Link href={`/blog/${blog.slug}`} className="font-urban font-extrabold  lg:mt-4 text-[13px] bg-black text-white px-3 py-1 md:py-[6px] rounded-full">
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

