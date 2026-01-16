// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// // import { Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// const gallery = [
//     { id: 1, title: "ROOM", image: "/images/projects/c1.jpg" },
//     { id: 2, title: "HALL", image: "/images/projects/c2.jpg" },
//     { id: 3, title: "HALL", image: "/images/projects/c3.jpg" },
//     { id: 4, title: "ROOM", image: "/images/projects/c4.jpg" },
//     { id: 5, title: "ROOM", image: "/images/projects/c5.jpg" },
//     { id: 6, title: "ROOM", image: "/images/projects/c6.jpg" },
//     { id: 7, title: "ROOM", image: "/images/projects/c7.jpg" },
//     { id: 8, title: "ROOM", image: "/images/projects/c6.jpg" },
//     { id: 9, title: "ROOM", image: "/images/projects/c7.jpg" },

//     { id: 10, title: "ROOM", image: "/images/projects/c1.jpg" },
//     { id: 11, title: "HALL", image: "/images/projects/c2.jpg" },
//     { id: 12, title: "HALL", image: "/images/projects/c3.jpg" },
//     { id: 13, title: "ROOM", image: "/images/projects/c4.jpg" },
//     { id: 14, title: "ROOM", image: "/images/projects/c5.jpg" },
//     { id: 15, title: "ROOM", image: "/images/projects/c6.jpg" },
//     { id: 16, title: "HALL", image: "/images/projects/c7.jpg" },
//     { id: 17, title: "ROOM", image: "/images/projects/c6.jpg" },
//     { id: 18, title: "ROOM", image: "/images/projects/c7.jpg" },

//     { id: 19, title: "ROOM", image: "/images/projects/c1.jpg" },
//     { id: 20, title: "HALL", image: "/images/projects/c2.jpg" },
//     { id: 21, title: "ROOM", image: "/images/projects/c3.jpg" },
//     { id: 22, title: "ROOM", image: "/images/projects/c4.jpg" },
//     { id: 23, title: "HALL", image: "/images/projects/c5.jpg" },
//     { id: 24, title: "HALL", image: "/images/projects/c6.jpg" },
//     { id: 25, title: "HALL", image: "/images/projects/c7.jpg" },
//     { id: 26, title: "ROOM", image: "/images/projects/c6.jpg" },
//     { id: 27, title: "ROOM", image: "/images/projects/c7.jpg" },
// ];

// export default function ImageSlider() {
//     const [isVideoOpen, setIsVideoOpen] = useState(false);
//     const [activeIndex, setActiveIndex] = useState(0);
//     // const [selectedYear, setSelectedYear] = useState(null);

//     const [hoveredIndex, setHoveredIndex] = useState(null);


//     return (
//         <section className=" py-16 bg-white mt-20">
//             <div className="">

//                 {/* Heading */}
                
//                 <div className="text-center mb-14">

//                     {/* Tag */}
//                     <p className="text-[#0E7C66] font-poppins text-[12px] md:text-[14px] lg:text-[16px] font-medium mb-3">
//                         #Gallery
//                     </p>

//                     {/* Main Title with inline video */}
//                     <div className="flex justify-center">
//                         <h2 className="
//                             hidden md:flex flex-wrap items-center justify-center 
//                             text-[24px] md:text-[40px] lg:text-[64px]
//                             font-urban font-semibold
//                             leading-[24px] md:leading-[40px] lg:leading-[64px]
//                             mb-4 
//                         ">
//                             <span>MORE THAN BUILDINGS</span>

//                             <span
//                                 onClick={() => setIsVideoOpen(true)}
//                                 className="
//                                 relative cursor-pointer
//                                 w-[64px] h-[25px]
//                                 md:w-[110px] md:h-[60px]
//                                 lg:w-[130px] lg:h-[70px]
//                                 rounded-xl overflow-hidden shadow-md
//                                 // group inline-block align-middle 
//                             "
//                             >
//                                 <Image
//                                     src="/images/home/thumb.png"
//                                     alt="Play video"
//                                     fill
//                                     className="object-cover "
//                                 />
//                                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                                 </div>
//                             </span>
//                             <span>IT&apos;S THE STORIES BEHIND THEM</span>
//                         </h2>

//                         <h2
//                             className="
//                                 block md:hidden text-center
//                                 text-[24px] md:text-[32px] lg:text-[40px]
//                                 font-urban font-semibold
//                                 leading-[28px] md:leading-[32px] lg:leading-[40px]
//                                 mb-4
//                             "
//                         >
//                             {/* Line 1 */}
//                             <span className="block">
//                                 MORE THAN BUILDINGS
//                             </span>

//                             {/* Line 2 with inline video */}
//                             <span className="inline-flex items-center gap-3">
//                                 <span
//                                     onClick={() => setIsVideoOpen(true)}
//                                     className="
//                                         relative cursor-pointer
//                                         w-[70px] h-[38px]
//                                         md:w-[110px] md:h-[60px]
//                                         lg:w-[130px] lg:h-[70px]
//                                         rounded-lg overflow-hidden shadow-md
//                                         flex-shrink-0
//                                     "
//                                 >
//                                     <Image
//                                         src="/images/home/thumb.png"
//                                         alt="Play video"
//                                         fill
//                                         className="object-cover"
//                                     />

                                 
//                                 </span>

//                                 <span>IT&apos;S THE STORIES</span>
//                             </span>

//                             {/* Line 3 */}
//                             <span className="block">
//                                 BEHIND THEM
//                             </span>
//                         </h2>

//                     </div>


//                     {/* Subtitle */}
//                     <p className="text-[13px] md:text-[14px] leading-[18px] text-black max-w-2xl mx-auto">
//                         Experience our journey through photos and films that celebrate <br className="hidden md:block" />
//                         design, dedication, and dreams realized.
//                     </p>

//                 </div>



//                 {/* Swiper */}
//                 <Swiper
//                     modules={[Navigation, Autoplay]}
//                     loop={true}
//                     watchOverflow={false}
//                     centeredSlides={false}
//                     spaceBetween={6}
//                     slidesPerView={2}

//                     autoplay={{
//                         delay: 2500,              // time between slides
//                         disableOnInteraction: false, // keep autoplay after hover/click
//                         pauseOnMouseEnter: true,  // pause when hovering (recommended)
//                     }}

//                     speed={800} // smooth continuous feel

//                     breakpoints={{
//                         320: { slidesPerView: 1.5, spaceBetween: 10 },
//                         420: { slidesPerView: 2.2, spaceBetween: 10 },
//                         640: { slidesPerView: 3.5, spaceBetween: 14 },
//                         768: { slidesPerView: 3.5, spaceBetween: 14 },
//                         1024: { slidesPerView: 5.3, spaceBetween: 20 },
//                         1440: { slidesPerView: 6.3, spaceBetween: 20 },
//                     }}

//                     onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//                 >


//                     {gallery.map((item, index) => {
//                         const isActive = hoveredIndex === index;
//                         // const isActive = index === activeIndex;

//                         return (

//                             <SwiperSlide
//                                 key={item.id}
//                                 className="flex flex-col items-center cursor-pointer"
//                                 onMouseEnter={() => setHoveredIndex(index)}
//                                 onMouseLeave={() => setHoveredIndex(null)}
//                                 onClick={() => setHoveredIndex(index)}
//                             >



//                                 {/* Image */}
//                                 <div
//                                     className="group cursor-pointer"
//                                     onMouseEnter={() => setActiveIndex(index)}
//                                     onClick={() => setActiveIndex(index)}
//                                 >
//                                     {/* Date (always visible, normal flow) */}
//                                     <span className="block text-xs text-black mb-2 transition-all duration-200 group-hover:font-bold">
//                                         {item.title}
//                                     </span>

//                                     {/* Image container ONLY changes height */}
//                                     <div
//                                         className={`relative w-full overflow-hidden 
//                                         transition-[height] duration-300 ease-out
//                                         ${isActive
//                                                 ? "h-[200px] sm:h-[230px] md:h-[260px]"
//                                                 : "h-[130px] sm:h-[150px] md:h-[180px]"
//                                             }`}
//                                     >
//                                         <Image
//                                             src={item.image}
//                                             alt="Update"
//                                             fill
//                                             className="object-cover object-top"
//                                             sizes="(min-width:1024px) 10vw, (min-width:768px) 16vw, 40vw"
//                                         />
//                                     </div>
//                                 </div>





//                             </SwiperSlide>
//                         );
//                     })}
//                 </Swiper>
//             </div>



//             {isVideoOpen && (
//                 <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">

//                     {/* Modal Box */}
//                     <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">

//                         {/* Close button */}
//                         <button
//                             onClick={() => setIsVideoOpen(false)}
//                             className="
//     fixed top-4 right-4 z-[60]
//     w-10 h-10
//     rounded-full
//     bg-black/70 text-white
//     flex items-center justify-center
//     text-xl
//     hover:bg-black
//     transition
//   "
//                         >
//                             ✕
//                         </button>

//                         {/* YouTube iframe */}
//                         <iframe
//                             src="https://www.youtube.com/embed/ryZG_2pjp4g?autoplay=1"
//                             title="Gallery Video"
//                             allow="autoplay; encrypted-media"
//                             allowFullScreen
//                             className="w-full h-full"
//                         />
//                     </div>

//                 </div>
//             )}

//         </section>
//     );
// }






"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* ======================= DATA ======================= */

const gallery = [
  { id: 1, title: "ROOM", image: "/images/projects/c1.jpg" },
  { id: 2, title: "HALL", image: "/images/projects/c2.jpg" },
  { id: 3, title: "HALL", image: "/images/projects/c3.jpg" },
  { id: 4, title: "ROOM", image: "/images/projects/c4.jpg" },
  { id: 5, title: "ROOM", image: "/images/projects/c5.jpg" },
  { id: 6, title: "ROOM", image: "/images/projects/c6.jpg" },
  { id: 7, title: "ROOM", image: "/images/projects/c7.jpg" },
];

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

export default function ImageSlider() {
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
          <span>More Than Buildings</span>

          <span
            onClick={() => setIsVideoOpen(true)}
            className="relative cursor-pointer w-[97px] lg:w-[120px] h-[42px] lg:h-[65px] rounded-[8px] overflow-hidden shadow-md"
          >
            <Image
              src="/images/home/thumb.png"
              alt="Play video"
              fill
              className="object-cover"
            />
          </span>
            <span>It&apos;s the </span>

          <span>Stories Behind Them</span>
        </h2>

        {/* Mobile title */}
        <h2 className="md:hidden text-[24px] font-urban font-semibold leading-[24px] mb-2">
          <span className="block">More Than Buildings</span>

          <span className="inline-flex items-center gap-3 my-2">
            <span
              onClick={() => setIsVideoOpen(true)}
              className="relative cursor-pointer w-[64px] h-[30px] rounded-[8px] overflow-hidden shadow-md"
            >
              <Image
                src="/images/home/thumb.png"
                alt="Play video"
                fill
                className="object-cover"
              />
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
        {gallery.map((item, index) => {
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
                  alt={item.title}
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
