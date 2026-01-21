"use client";

import EnquireNowButton from "@/components2/EnquireNowButton";
import Image from "next/image";
import { useState } from "react";
import ModalForm from "@/components2/forms/ModalForm";

export default function  HeroSection() {
    const [openModal, setOpenModal] = useState(false);
  
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/services/s-hero.webp" // replace with your image path
        alt="Our Services"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay (left-focused) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-2 md:px-6">
          <div className="max-w-xl text-white">
            <p className="font-poppins text-white text-[12px] md:text-[14px] lg:text-[16px] font-medium mb-1 md:mb-3">
              #Our Services
            </p>

            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-urban font-semibold leading-[24px] md:leading-[32px] lg:leading-[40px] mb-2">
              ALL YOU NEED FOR <br /> YOUR DREAM HOME
            </h2>

            <p className="max-w-md text-[13px] md:text-[14px] leading-[18px]  text-white mb-2">
              From the first sketch to after-sales care, Aurum Builders provides
              complete property solutions that redefine comfort, quality, and
              trust. Each service we offer reflects our commitment to excellence
              and our philosophy of adorning lives.
            </p>

             <EnquireNowButton onClick={() => setOpenModal(true)} className="" />
          </div>
        </div>
      </div>

      {openModal && (
                      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
                          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-lg relative  z-20">
                              <button
                                  className="absolute top-4 right-4 text-xl"
                                  onClick={() => setOpenModal(false)}
                              >
                                  ✕
                              </button>
                              {/* <ProjectEnquiryModal /> */}
                              <ModalForm onClose={() => setOpenModal(false)} />
                          </div>
                      </div>
                  )}

      {/* Bottom White Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
