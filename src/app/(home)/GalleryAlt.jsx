"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
];

export default function Galleryalt({ data }) {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full px-6 lg:px-16 py-16">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr_120px] gap-8">

        {/* LEFT TEXT */}
        <div className="col-span-12 md:col-span-5 lg:col-span-5 py-8 lg:py-28">
          <p className="text-[#006A54] font-poppins font-regular text-[16px] leading-[20px]">
            #Gallery
          </p>
          <h1 className="text-[32px] md:text-[40px] xl:text-[64px] font-urban font-medium leading-[32px] md:leading-[40px] xl:leading-[60px] mt-2">
            Where Every <br className="hidden md:block" /> Corner Tells{" "}
            <br className="hidden md:block" /> a Story
          </h1>
          <p className="text-black text-[13px] lg:text-[14px] leading-[156%] mt-4 max-w-sm">
            Step inside a world where modern design meets timeless tranquility.
            From lush landscapes to luxurious interiors.
          </p>

          <div className="flex items-center justify-between ">
            <p className="text-[13px] leading-[100%] text-black italic cursor-pointer ">
              Love What You See? Book a Site <br className="hidden md:block" />
              Visit Today
            </p>

            <button
              onClick={() => setOpenModal(true)}
              className="flex items-center gap-2 text-black px-5 py-2 rounded-full font-urban text-[12px] leading-[16px] font-bold hover:scale-[1.03] transition"
            >
              <Image
                src="/images/home/enq.svg"
                alt="Arrow"
                width={20}
                height={20}
              />

              <span className="flex items-center gap-1">
                ENQUIRE
                <span className="flex bg-[#FF0000] w-8 lg:w-12 h-8 lg:h-12 rounded-full items-center justify-center text-white font-bold">
                  NOW
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* IMAGE + THUMBNAILS WRAPPER (important) */}
        <div className="flex gap-3 lg:contents">

          {/* MAIN IMAGE */}
          <div className="relative flex-1 h-[300px] sm:h-[400px] lg:h-[520px] overflow-hidden rounded-md">
            {data.map((src, i) => (
              <Image
                key={src}
                src={src.image}
                alt=""
                fill
                priority={i === 0}
                className={`object-cover absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100 z-10" : "opacity-0"
                  }`}
              />
            ))}
          </div>

          {/* THUMBNAILS */}
          <div className="w-[80px] sm:w-[100px] lg:w-full lg:h-[520px] overflow-y-auto space-y-3 pr-1">
            {data.map((src, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`relative h-20 sm:h-24 cursor-pointer rounded-md overflow-hidden border ${i === active ? "border-black" : "border-transparent opacity-70"
                  }`}
              >
                <Image
                  key={src}
                  src={src.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}