


"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Play } from "lucide-react";

/* ======================= DATA ======================= */

// const gallery = [
//   { id: 1, title: "ROOM", image: "/images/projects/c1.jpg" },
//   { id: 2, title: "HALL", image: "/images/projects/c2.jpg" },
//   { id: 3, title: "HALL", image: "/images/projects/c3.jpg" },
//   { id: 4, title: "ROOM", image: "/images/projects/c4.jpg" },
//   { id: 5, title: "ROOM", image: "/images/projects/c5.jpg" },
//   { id: 6, title: "ROOM", image: "/images/projects/c6.jpg" },
//   { id: 7, title: "ROOM", image: "/images/projects/c7.jpg" },
// ];

const YOUTUBE_LINK =
  "https://www.youtube.com/watch?v=ryZG_2pjp4g&t=1s";

/* ======================= HELPERS ======================= */

const getVideoIdFromUrl = (url) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1);
    }
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
};

/* ======================= COMPONENT ======================= */

export default function ImageSlider({spaceGallery}) {
  
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const playerRef = useRef(null);

  /* ======================= YT PLAYER ======================= */

  useEffect(() => {
    if (!isVideoOpen) return;

    const videoId = getVideoIdFromUrl(YOUTUBE_LINK);
    if (!videoId) return;

    if (!window.YT) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
        },
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setIsVideoOpen(false);
            }
          },
        },
      });
    };
  }, [isVideoOpen]);

  return (
    <section className="py-16 bg-white mt-16 md:mt-20">
      {/* ======================= HEADER ======================= */}
      <div className="text-center mb-14 px-4">
        <p className="text-[#0E7C66] text-sm md:text-base font-medium mb-3">
          #Gallery
        </p>

        {/* Desktop title */}
        <h2 className="hidden md:flex flex-wrap items-center justify-center text-[40px] lg:text-[64px] font-urban font-semibold leading-[100%] mb-4">
          <span>More Than Buildings&nbsp;</span>

          {/* <span
            onClick={() => setIsVideoOpen(true)}
            className="relative cursor-pointer w-[97px] lg:w-[120px] h-[42px] lg:h-[65px] rounded-[8px] overflow-hidden shadow-md"
          >
            <Image
              src="/images/home/thumb.png"
              alt="Play video"
              fill
              className="object-cover"
            />
          </span> */}
          <span
  onClick={() => setIsVideoOpen(true)}
  className="relative cursor-pointer w-[97px] lg:w-[120px] h-[42px] lg:h-[65px] rounded-[8px] overflow-hidden shadow-md group"
>
  <Image
    src="/images/home/thumb.png"
    alt="Play video"
    fill
    className="object-cover"
  />

  {/* Play Icon Overlay */}
  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
    <Play className="text-white w-6 h-6 lg:w-8 lg:h-8 fill-white" />
  </div>
</span>

            <span>&nbsp;It&apos;s the </span>

          <span>Stories Behind Them</span>
        </h2>

        {/* Mobile title */}
        <h2 className="md:hidden text-[24px] font-urban font-semibold leading-[24px] mb-2">
          <span className="block">More Than Buildings</span>

          <span className="inline-flex items-center gap-3 my-2">
            {/* <span
              onClick={() => setIsVideoOpen(true)}
              className="relative cursor-pointer w-[64px] h-[30px] rounded-[8px] overflow-hidden shadow-md"
            >
              <Image
                src="/images/home/thumb.png"
                alt="Play video"
                fill
                className="object-cover"
              />
            </span> */}
            <span
  onClick={() => setIsVideoOpen(true)}
  className="relative cursor-pointer w-[64px] h-[30px] rounded-[8px] overflow-hidden shadow-md group"
>
  <Image
    src="/images/home/thumb.png"
    alt="Play video"
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
    <Play className="text-white w-4 h-4 fill-white" />
  </div>
</span>
            <span>It&apos;s the Stories</span>
          </span>

          <span className="block">Behind Them</span>
        </h2>

        <p className="text-sm text-black w-full mx-auto ">
          Experience our journey through photos and films that celebrate
          design, dedication, and dreams realized.
        </p>
      </div>

      {/* ======================= SLIDER ======================= */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          640: { slidesPerView: 3.5 },
          1024: { slidesPerView: 5.3 },
        }}
      >
        {spaceGallery.filter(item => item.image)
        .map((item, index) => {
          const isActive = hoveredIndex === index;
          return (
            <SwiperSlide
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer"
            >
              <span className="block text-xs mb-2">{item.title}</span>

              <div
                className={`relative overflow-hidden transition-[height] duration-300 ${
                  isActive
                    ? "h-[220px] md:h-[260px]"
                    : "h-[150px] md:h-[180px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.image_alt}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* ======================= VIDEO MODAL ======================= */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            onClick={() => setIsVideoOpen(false)}
            className="fixed top-4 right-4 z-[10000] w-10 h-10 rounded-full bg-black/70 text-white text-xl"
          >
            ✕
          </button>

          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div id="yt-player" className="w-full h-full" />
          </div>
        </div>
      )}
    </section>
  );
}
