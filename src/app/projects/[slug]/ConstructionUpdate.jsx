// "use client";

// import { useState, useMemo } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// const updates = [
//     { id: 1, date: "09/08/2025", image: "/images/projects/c1.jpg" },
//     { id: 2, date: "09/08/2025", image: "/images/projects/c2.jpg" },
//     { id: 3, date: "09/08/2025", image: "/images/projects/c3.jpg" },
//     { id: 4, date: "09/08/2025", image: "/images/projects/c4.jpg" },
//     { id: 5, date: "10/08/2025", image: "/images/projects/c5.jpg" },
//     { id: 6, date: "11/08/2025", image: "/images/projects/c6.jpg" },
//     { id: 7, date: "11/08/2025", image: "/images/projects/c7.jpg" },
//     { id: 8, date: "11/08/2025", image: "/images/projects/c6.jpg" },
//     { id: 9, date: "11/08/2025", image: "/images/projects/c7.jpg" },

//     { id: 10, date: "09/08/2024", image: "/images/projects/c1.jpg" },
//     { id: 11, date: "09/08/2024", image: "/images/projects/c2.jpg" },
//     { id: 12, date: "09/08/2024", image: "/images/projects/c3.jpg" },
//     { id: 13, date: "09/08/2024", image: "/images/projects/c4.jpg" },
//     { id: 14, date: "10/08/2024", image: "/images/projects/c5.jpg" },
//     { id: 15, date: "11/08/2024", image: "/images/projects/c6.jpg" },
//     { id: 16, date: "11/08/2024", image: "/images/projects/c7.jpg" },
//     { id: 17, date: "11/08/2024", image: "/images/projects/c6.jpg" },
//     { id: 18, date: "11/08/2024", image: "/images/projects/c7.jpg" },

//     { id: 19, date: "09/08/2023", image: "/images/projects/c1.jpg" },
//     { id: 20, date: "09/08/2023", image: "/images/projects/c1.jpg" },
//     { id: 21, date: "09/08/2023", image: "/images/projects/c1.jpg" },
//     { id: 22, date: "09/08/2023", image: "/images/projects/c1.jpg" },
//     { id: 23, date: "10/08/2023", image: "/images/projects/c1.jpg" },
//     { id: 24, date: "11/08/2023", image: "/images/projects/c1.jpg" },
//     { id: 25, date: "11/08/2023", image: "/images/projects/c7.jpg" },
//     { id: 26, date: "11/08/2023", image: "/images/projects/c6.jpg" },
//     { id: 27, date: "11/08/2023", image: "/images/projects/c7.jpg" },
// ];

// export default function ConstructionUpdates({updates}) {
//     const [activeIndex, setActiveIndex] = useState(0);
//     // const [selectedYear, setSelectedYear] = useState(null);

//     const [hoveredIndex, setHoveredIndex] = useState(null);
    
//     const [selectedYear, setSelectedYear] = useState(() => {
//     const allYears = [...new Set(updates.map(u => Number(u.date.split("/")[2])))]
//       .sort((a, b) => a - b);
//     return allYears[allYears.length - 1]; // 👈 latest year
//   });

//     /* 🔹 Extract unique years from date */
//     const years = useMemo(() => {
//         return [...new Set(updates.map(u => Number(u.date.split("/")[2])))]
//             .sort((a, b) => a - b);
//     }, []);


//     /* 🔹 Filter by year (if selected) */
//     const filteredUpdates = useMemo(() => {
//         if (!selectedYear) return updates;
//         return updates.filter(u => u.date.endsWith(selectedYear));
//     }, [selectedYear]);

//     return (
//         <section className=" py-16 bg-white">
//             <div className="">

//                 {/* Heading */}
//                 <div className="text-center mb-10">
//                     <div className="mx-2">
//                         <h2 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[40px] md:leading-[30px]  leading-[20px] font-urban font-semibold">
//                             LATEST UPDATES ON YOUR <br className="hidden md:block" />
//                             DREAM HOME
//                         </h2>
//                         <p className="text-sm leading-[18px] text-black mt-2">
//                             Stay informed with real-time progress updates — from foundation to finishing.
//                         </p>
//                     </div>

//                     {/* Year Pills */}
//                     <div className="flex justify-center gap-3 mt-5">
//                         {years.map(year => (
//                             <button
//                                 key={year}
//                                 onClick={() => setSelectedYear(year)}
//                                 className={`px-4 py-2 rounded-[24px] font-urban text-[13px] leading-[13px] border transition
//                   ${selectedYear === year
//                                         ? "bg-black text-white border-black"
//                                         : "border-black text-black  hover:border-black"
//                                     }`}
//                             >
//                                 {year}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Swiper */}
//                 {/* <Swiper
//                     modules={[Navigation]}
//                     loop={false}
//                     centeredSlides={false}
//                     watchOverflow
//                     spaceBetween={6}
//                     slidesPerView={2}
//                     breakpoints={{
//                         320: { slidesPerView: 1.5, spaceBetween: 10 },
//                         420: { slidesPerView: 2.2, spaceBetween: 10 },
//                         640: { slidesPerView: 3.5, spaceBetween: 14 },
//                         768: { slidesPerView: 3.5, spaceBetween: 14 },
//                         1024: { slidesPerView: 5.3, spaceBetween: 20 },
//                         1440: { slidesPerView: 6.3, spaceBetween: 20 },
//                     }}
//                     onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                
//                 > */}
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


//                     {filteredUpdates.map((item, index) => {
//                         const isActive = hoveredIndex === index;
//                         // const isActive = index === activeIndex;

//                         return (
//                             // <SwiperSlide
//                             //     key={item.id}
//                             //     className="flex flex-col items-center cursor-pointer"
//                             //     onClick={() => setActiveIndex(index)}
//                             //     onMouseEnter={() => setActiveIndex(index)}
//                             // >
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
//                                         {item.date}
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
//         </section>
//     );
// }





"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* ✅ SAFE YEAR EXTRACTOR */
const getYearFromDate = (date) => {
  if (!date || typeof date !== "string") return null;

  // supports: DD/MM/YYYY, DD-MM-YYYY, YYYY-MM-DD
  const match = date.match(/(19|20)\d{2}/);
  return match ? Number(match[0]) : null;
};

export default function ConstructionUpdates({ updates }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  /* 🛑 API guard */
  if (!Array.isArray(updates) || updates.length === 0) return null;

  /* ✅ Extract unique valid years */
  const years = useMemo(() => {
    const yearSet = new Set();

    updates.forEach((u) => {
      const year = getYearFromDate(u?.date);
      if (year) yearSet.add(year);
    });

    return Array.from(yearSet).sort((a, b) => a - b);
  }, [updates]);

  /* ✅ Set latest year once */
  useEffect(() => {
    if (years.length && !selectedYear) {
      setSelectedYear(years[years.length - 1]);
    }
  }, [years, selectedYear]);

  /* ✅ Filter updates by year */
  const filteredUpdates = useMemo(() => {
    if (!selectedYear) return updates;

    return updates.filter((u) => {
      const year = getYearFromDate(u?.date);
      return year === selectedYear;
    });
  }, [updates, selectedYear]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 px-2">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-urban font-semibold">
            LATEST UPDATES ON YOUR <br className="hidden md:block" />
            DREAM HOME
          </h2>
          <p className="text-sm text-black mt-2">
            Stay informed with real-time progress updates — from foundation to finishing.
          </p>

          {/* Year Pills */}
          {years.length > 0 && (
            <div className="flex justify-center gap-3 mt-5 flex-wrap">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-[24px] font-urban text-[13px] border transition
                    ${
                      selectedYear === year
                        ? "bg-black text-white border-black"
                        : "border-black text-black hover:bg-black hover:text-white"
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            // ❌ pauseOnMouseEnter REMOVED
          }}
          speed={800}
          breakpoints={{
            320: { slidesPerView: 1.4 },
            420: { slidesPerView: 2.2 },
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 5.3 },
            1440: { slidesPerView: 6.3 },
          }}
        >
          {filteredUpdates.map((item, index) => {
            const isActive = hoveredIndex === index;

            return (
              <SwiperSlide
                key={item.id ?? index}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Date */}
                {item?.date && (
                  <span className="block text-xs text-black mb-2 font-medium">
                    {item.date}
                  </span>
                )}

                {/* Image */}
                {item?.image && (
                  <div
                    className={`relative w-full overflow-hidden rounded-lg
                      transition-[height] duration-300 ease-out
                      ${
                        isActive
                          ? "h-[200px] sm:h-[230px] md:h-[260px]"
                          : "h-[130px] sm:h-[150px] md:h-[180px]"
                      }`}
                  >
                    <Image
                      src={item.image}
                      alt="Construction update"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
