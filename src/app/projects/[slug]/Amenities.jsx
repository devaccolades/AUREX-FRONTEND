"use client";

import { useState } from "react";
import Image from "next/image";

const amenities = [
  {
    title: "Solar Power",
    subtitle: "Sustainable energy solution",
    image: "/images/projects/amenities/a1.webp",
  },
  {
    title: "Rooftop Gathering Area",
    subtitle: "Community space for events",
    image: "/images/projects/amenities/a2.webp",
  },
  {
    title: "Kids Play Area",
    subtitle: "Safe & fun environment",
    image: "/images/projects/amenities/a3.webp",
  },
  {
    title: "EV Charging",
    subtitle: "Future-ready living",
    image: "/images/projects/amenities/a4.webp",
  },
  {
    title: "Outdoor Lounge",
    subtitle: "Relax & unwind",
    image: "/images/projects/amenities/a5.webp",
  },
];

export default function AmenitiesSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  const visibleSlides = [-2, -1, 0, 1, 2].map((pos) => {
    const index = (activeIndex + pos + amenities.length) % amenities.length;
    return { ...amenities[index], position: pos, index };
  });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f3f8fd] overflow-hidden">
      <div className="container text-center">

        <h2 className="text-xl font-semibold uppercase mb-2">
          Redefining Everyday Living
        </h2>
        <p className="text-sm text-gray-500 mb-10">
          Experience a world of comfort with premium amenities
        </p>

        {/* CURVED CAROUSEL */}
        <div className="relative h-[460px] flex items-center justify-center perspective-[2000px]">

          {visibleSlides.map((slide) => {
            let style = {};
            let z = 0;

            if (slide.position === 0) {
              style = { transform: "translateX(0) scale(1)" };
              z = 20;
            }
            if (slide.position === -1) {
              style = { transform: "translateX(-260px) rotateY(-25deg) scale(0.88)" };
              z = 15;
            }
            if (slide.position === 1) {
              style = { transform: "translateX(260px) rotateY(25deg) scale(0.88)" };
              z = 15;
            }
            if (slide.position === -2) {
              style = { transform: "translateX(-520px) rotateY(-35deg) scale(0.68)" };
              z = 10;
            }
            if (slide.position === 2) {
              style = { transform: "translateX(520px) rotateY(35deg) scale(0.68)" };
              z = 10;
            }

            return (
              <div
                key={slide.index}
                className="absolute transition-all duration-500 ease-out"
                style={{ ...style, zIndex: z }}
                onClick={() => setActiveIndex(slide.index)}
              >
                <div className="relative w-[260px] h-[420px] rounded-[36px] overflow-hidden shadow-2xl">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* TITLE */}
        <div className="mt-10">
          <h4 className="text-sm font-semibold">
            {amenities[activeIndex].title}
          </h4>
          <p className="text-xs text-gray-500">
            {amenities[activeIndex].subtitle}
          </p>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-1 mt-4">
          {amenities.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-black" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
