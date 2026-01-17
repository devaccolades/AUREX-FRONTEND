// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// // import play from "../../../../public/images/testimonials/play.svg";
// // import play from "../../../../public/images/testimonials/play.svg"
// import Image from "next/image";
// const Slider = dynamic(() => import("react-slick"), { ssr: false });
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonials = () => {
//   const imgs = [
//     "/images/temp/img1.png",
//     "/images/temp/img2.png",
//     "/images/temp/img3.png",
//     "/images/temp/img1.png",
//     "/images/temp/img2.png",
//     "/images/temp/img3.png",
//   ];
//   var settings = {
//     dots: true,
//     // infinite: true,
//     infinite: imgs.length > 1,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     draggable: true,
//     autoplay: true,
//     draggable: imgs.length > 1,
//     autoplay: imgs.length > 1,
//     autoplaySpeed: 5000,
//     slidesToShow: 2.8,
//     centerMode: false,
//     rtl: false,
//   };
//   return (
//     <div className="relative z-40 overflow-x-hidden container pb-10 pt-10">
//       <Slider {...settings}>
//         {imgs.map((img, index) => (
//           <Card key={index} bg={img} />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Testimonials;

// const Card = ({ bg }) => {
//   return (
//     <div
//       className="h-[477px] w-[337px] bg-white rounded-[20px] relative flex items-center justify-center"
//       style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
//     >
//       <div
//         className="p-5 rounded-full flex justify-center items-center"
//         style={{ backgroundColor: "rgba(0, 0, 0, .1)" }} // <-- 10% opacity background only
//       >
//         <Image
//           src="/images/testimonials/play.svg"
//           height={100}
//           width={100}
//           alt="play button"
//           className="h-[42px] w-[42px] -mr-1"
//         />
//       </div>
//     </div>
//   );
// };



"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "t1",
    link: "https://www.youtube.com/shorts/wwV0l_Pxzok",
    thumbnail: "/images/temp/img1.png",
  },
  {
    id: 2,
    name: "t2",
    link: "https://www.youtube.com/shorts/wwV0l_Pxzok",
    thumbnail: "/images/temp/img2.png",
  },
  {
    id: 3,
    name: "t3",
    link: "https://www.youtube.com/shorts/wwV0l_Pxzok",
    thumbnail: "/images/temp/img3.png",
  },
  {
    id: 4,
    name: "t4",
    link: "https://www.youtube.com/shorts/wwV0l_Pxzok",
    thumbnail: "/images/temp/img1.png",
  },
];

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

export default function Testimonials() {
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
          src={`${convertToEmbed(item.link)}?autoplay=1`}
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
            alt={item.name}
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
