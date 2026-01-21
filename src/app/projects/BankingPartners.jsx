"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


import bank3 from "../../../public/images/dreamsInThrissur/canara.svg";
import bank4 from "../../../public/images/dreamsInThrissur/cub.svg";
import bank5 from "../../../public/images/dreamsInThrissur/sbi.svg";
import bank6 from "../../../public/images/dreamsInThrissur/lic.svg";
import bank7 from "../../../public/images/dreamsInThrissur/bob.svg";

const banks = [

  bank3,
  bank4,
  bank5,
  bank6,
  bank7,

];

export default function BankingPartners() {
  return (
    <section className="py-12 border-t border-gray-200">
      <div className="container">

        {/* Heading */}
        <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-center mb-4 md:mb-8">
          OUR BANKING PARTNERS
        </h2>

        {/* Auto Scroll Swiper */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4000}                 
          autoplay={{
            delay: 0,                  
            disableOnInteraction: false,
          }}
          slidesPerView={2.5}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 4.5 },
            1024: { slidesPerView: 6 },
          }}
          className="bankingPartnerSwiper"
        >
          {[...banks, ...banks].map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center ">
                <Image
                  src={logo}
                  alt="Bank Partner"
                  height={30}
                  width={30}
                  className="object-contain  w-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
