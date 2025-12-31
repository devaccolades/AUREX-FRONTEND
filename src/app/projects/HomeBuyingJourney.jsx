"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const steps = [
  {
    id: "01",
    title: "CONSULTATION & REQUIREMENT GATHERING",
    description:
      "We begin by understanding your lifestyle, needs, and investment goals. Our team helps you choose the right project and apartment type that suits your vision.",
    image: "/images/projects/h1.webp",
  },
  {
    id: "02",
    title: "SITE VISIT & PROJECT SELECTION",
    description:
      "Visit our model apartments or ongoing projects. Experience the design, quality, and location advantages firsthand before making your decision.",
    image: "/images/projects/h2.jpg",
  },
  {
    id: "03",
    title: "BOOKING & DOCUMENTATION",
    description:
      "Once you finalize your choice, our sales and legal teams assist with transparent paperwork, ensuring a smooth and hassle-free booking process.",
    image: "/images/projects/h3.webp",
  },
  {
    id: "04",
    title: "CONSTRUCTION & SITE UPDATES",
    description:
      "We keep you informed throughout the construction phase with regular progress updates, site visits, and quality checks.",
    image: "/images/projects/h1.webp",
  },
];

export default function HomeBuyingJourney() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mb-10 max-w-xl">
          <h2 className="text-[28px] md:text-[36px] leading-[36px] font-urban font-medium">
            OUR HOME BUYING JOURNEY
          </h2>
          <p className="mt-2 text-sm leading-[100%] text-black">
            From your first visit to key handover — we make every step simple,
            transparent, and rewarding.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation
        //   spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween:24 },
            768: { slidesPerView: 2.2, spaceBetween:24 },
            1024: { slidesPerView: 3 , spaceBetween:24 },
            1280: { slidesPerView: 3.5, spaceBetween:24 },
          }}
          className="homeJourneySwiper"
        >
          {steps.map((step) => (
            <SwiperSlide key={step.id}>
              <div className="bg-white rounded-[20px] border border-gray-200 p-2 md:p-4 h-full">

                {/* Image */}
                <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="h-full flex flex-col mt-4">
                     <div>
                  <span className="text-[20px] md:text-[24px] leading-[20px] md:leading-[24px] font-semibold text-black">
                    {step.id}
                  </span>

                  <h3 className="mt-1 font-urban font-bold text-[16px] md:text-[20px] leading-[20px]">
                    {step.title}
                  </h3>
</div>
                  <p className="mt-auto text-[13px] text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
