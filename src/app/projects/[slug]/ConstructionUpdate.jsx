
"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* 🔹 Helpers */
const formatDate = (date) => {
  if (!date) return null;
  const d = new Date(date);
  if (isNaN(d)) return null;
  return d.toLocaleDateString("en-GB"); // DD/MM/YYYY
};

const getYear = (date) => {
  if (!date) return null;
  const d = new Date(date);
  return isNaN(d) ? null : d.getFullYear();
};

export default function ConstructionUpdates({ updates = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  /* 🔹 Normalize API data */
  const normalizedUpdates = useMemo(() => {
    return updates
      .filter(u => u.image && u.date)
      .map(u => ({
        id: u.id,
        date: formatDate(u.date),
        year: getYear(u.date),
        image: u.image.startsWith("http")
          ? u.image
          : `${process.env.NEXT_PUBLIC_API_URL}${u.image}`,
        alt: u.image_alt || "Project update",
      }));
  }, [updates]);

  /* 🔹 Extract unique years */
  const years = useMemo(() => {
    return [
      ...new Set(
        normalizedUpdates.map(u => u.year).filter(Boolean)
      ),
    ].sort((a, b) => a - b);
  }, [normalizedUpdates]);

  /* 🔹 Auto-select latest year */
  useEffect(() => {
    if (!selectedYear && years.length) {
      setSelectedYear(years[years.length - 1]);
    }
  }, [years, selectedYear]);

  /* 🔹 Filter updates by year */
  const filteredUpdates = useMemo(() => {
    if (!selectedYear) return normalizedUpdates;
    return normalizedUpdates.filter(u => u.year === selectedYear);
  }, [selectedYear, normalizedUpdates]);

  /* 🔹 Hide section if empty */
  if (!filteredUpdates.length) return null;

  return (
    <section className="py-16 bg-white">
      <div className="">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-urban font-semibold">
            LATEST UPDATES ON YOUR <br className="hidden md:block" />
            DREAM HOME
          </h2>
          <p className="text-sm mt-2">
            Stay informed with real-time progress updates.
          </p>

          {/* Year Pills */}
          <div className="flex justify-center gap-3 mt-5 flex-wrap">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full text-[13px] border transition
                  ${selectedYear === year
                    ? "bg-black text-white border-black"
                    : "border-black text-black hover:bg-black hover:text-white"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={false}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={700}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            480: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.1 },
            1024: { slidesPerView: 4.3 },
            1440: { slidesPerView: 4.5 },
          }}
        >
          {filteredUpdates.map((item, index) => {
            const isActive = hoveredIndex === index;

            return (
              <SwiperSlide key={item.id}>
                <div
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Date */}
                  <span className="block text-xs mb-2 transition font-medium">
                    {item.date}
                  </span>

                  {/* Image */}
                  <div
                    className={`relative w-full overflow-hidden  transition-all duration-300
                      ${isActive
                        ? "h-[240px]"
                        : "h-[170px]"
                      }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 20vw, 40vw"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
