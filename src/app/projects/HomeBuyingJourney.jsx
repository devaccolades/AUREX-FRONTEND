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
    "Our team begins by understanding your lifestyle needs, family size, preferred configuration, and investment budget. Whether you are looking for a compact 2 BHK flat in Thrissur or a spacious 3 BHK apartment with premium amenities, we help you identify the right project and the right unit before you commit to anything.",
    image: "/images/projects/h1.webp",
  },
  {
    id: "02",
    title: "SITE VISIT & PROJECT SELECTION",
    description:
    "Tour our ongoing flat projects in Thrissur first-hand with a dedicated Aurex guide. Experience the actual layout, natural lighting, construction quality, and location advantages of each development before making your decision. No pressure, no rush — we want you to feel completely certain.",
    image: "/images/projects/h2.jpg",
  },
  {
    id: "03",
    title: "BOOKING & DOCUMENTATION",
    description:
    "Our dedicated legal and sales team manages RERA verification, sale agreement drafting, and transparent pricing documentation — ensuring a completely smooth, surprise-free booking process for your flat in Thrissur. Every document is explained clearly before you sign.",
    image: "/images/projects/h3.webp",
  },
  {
    id: "04",
    title: "CONSTRUCTION & SITE UPDATES",
    description:
      "Receive regular project milestone updates, site photos, and on-site quality inspection reports as your flat in Thrissur takes shape. Our project management team conducts daily quality checks at every construction stage — keeping you fully informed and confident throughout the build.",
    image: "/images/projects/h4.jpg",
  },
  {
    id: "05",
    title: "HANDOVER & AFTER-SALES CARE",
    description:
      "Receive a fully completed, snagging-checked flat on your agreed handover date. Our after-sales team remains actively available for 12 months post-handover — addressing any concerns, coordinating warranty requests, and ensuring your transition into your new home is as smooth as possible.",
    image: "/images/projects/h5.jpg",
  },
];

export default function HomeBuyingJourney() {
  return (
    <section className="py-8 md:py-16 overflow-hidden">
      <div className="container ">

        {/* Heading */}
        <div className="mb-6 md:mb-10 max-w-xl">
          <h2 className="uppercase text-[24px] md:text-[32px] leading-[24px] md:leading-[36px] font-urban font-medium">
            Your Seamless Journey to Buying Flats in Thrissur
          </h2>
          <p className="mt-2 text-sm leading-[100%] text-black">
            From your first enquiry to the day you receive your keys — and long after — Aurex makes every step of your home-buying journey transparent, straightforward, and genuinely rewarding.

          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          // navigation
          slidesPerView={1.1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 24 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 3.5, spaceBetween: 24 },
          }}
          className="homeJourneySwiper"
        >
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0;

            return (
              <SwiperSlide key={step.id}>
                <div className="bg-white rounded-[20px] border border-gray-200 min-h-[420px] overflow-hidden flex flex-col">

                  {/* Image */}
                  <div
                    className={`relative w-full h-[250px] overflow-hidden ${isEven ? "order-2" : "order-1"
                      }`}
                  >
                    <Image
                      src={step.image}
                      // alt={step.title}
                      alt="Flats for Sale in Thrissur"
                      fill
                      className="object-cover"
                    />

                    {/* Gradient ONLY at junction */}
                    <div
                      className={`absolute left-0 w-full h-16 pointer-events-none ${isEven
                          ? "top-0 bg-gradient-to-b from-white to-transparent"
                          : "bottom-0 bg-gradient-to-t from-white to-transparent"
                        }`}
                    />
                  </div>


                  {/* Content */}
                  <div
                    className={`relative p-4 flex-1 ${isEven ? "order-1" : "order-2"
                      }`}
                  >
                    {/* {isEven && (
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent" />
          )} */}

                    <span className="text-[20px] md:text-[24px] font-semibold font-urban text-black">
                      {step.id}
                    </span>

                    <h3 className="mt-2 font-urban font-bold text-[16px] md:text-[20px] leading-[18px]">
                      {step.title}
                    </h3>

                    <p className="mt-0 md:mt-2 text-[13px] text-black leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            );
          })}

        </Swiper>

      </div>
    </section >
  );
}
