

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";



// Convert all YouTube links to embed format
function convertToEmbed(url) {
  if (!url) return "";

  if (url.includes("/shorts/")) {
    return url.replace("/shorts/", "/embed/");
  }

  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }

  if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "youtube.com/embed/");
  }

  return url;
}

export default function Testimonials({testimonials}) {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  

  return (
    <div className="container py-10">
      <Swiper
        // modules={[Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        // pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 3.2 },
          1024: { slidesPerView: 3.2 },
          1440: { slidesPerView: 3.5 },
        }}
        className="mb-4"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              item={item}
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    {/* === Custom Pagination Bar === */}
<div className="flex items-center gap-3 justify-center mt-4">
  {(() => {
    const total = testimonials.length;

    // Normalize swiper index (fixes loop mode)
    const normalized =
      total > 0 ? ((activeIndex % total) + total) % total : 0;

    // First = long bar, rest = small
    const pagItems = [
      { type: "long" },
      ...Array.from({ length: total - 1 }).map(() => ({ type: "small" })),
    ];

    return pagItems.map((p, idx) => {
      const isActive = idx === normalized;

      if (p.type === "long") {
        return (
          <div
            key={idx}
            className={`h-3 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-[#006F59] w-[120px] opacity-100"
                : "bg-gray-300 w-[120px] opacity-40"
            }`}
          />
        );
      }

      return (
        <div
          key={idx}
          className={`h-3 rounded-full transition-all duration-300 ${
            isActive
              ? "bg-[#006F59] w-6 opacity-100"
              : "bg-gray-300 w-6 opacity-40"
          }`}
        />
      );
    });
  })()}
</div>


    </div>
  );
}

// ----------- Card Component -----------
const Card = ({ item, activeVideo, setActiveVideo }) => {
  const isPlaying = activeVideo === item.id;

  return (
    <div
      className="
        w-full
        max-w-[337px]
        aspect-[337/477]
        rounded-[20px]
        relative
        overflow-hidden
        cursor-pointer
        mx-auto
      "
      onClick={() => setActiveVideo(item.id)}
    >
      {isPlaying ? (
        <iframe
          className="w-full h-full rounded-[20px]"
          src={`${convertToEmbed(item.video_link)}?autoplay=1`}
          title={item.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={item.thumbnail}
            fill
            alt={item.thumbnail_alt}
            className="object-cover rounded-[20px]"
          />

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            <Image
              src="/images/testimonials/play.svg"
              width={70}
              height={70}
              alt="play"
              className="h-[22px] md:h-[42px] w-[22px] md:w-[42px]"
            />
          </div>
        </>
      )}
    </div>
  );
};
