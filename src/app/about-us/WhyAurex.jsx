
"use client";

import ContactModal from "@/components2/ContactModal";
import ModalForm from "@/components2/forms/ModalForm";
import MagneticButton from "@/components2/MagneticButton";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function WhyAurexBuilders() {
  const [openModal, setOpenModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const strengths = [
    {
      title: "Expert Professional Team",
      desc: "Our team includes certified architects, licensed structural engineers, and experienced interior designers — all dedicated to your project from day one.",
    },
    {
      title: "On-Time Project Delivery",
      desc: "We maintain a 95%+ on-time delivery record across all projects, with full transparency into timelines at every stage of construction.",
    },
    {
      title: "Smart, Sustainable Designs",
      desc: "Every Aurex home is designed for Kerala's climate — maximising natural light, ventilation, and energy efficiency using eco-approved materials.",
    },
    {
      title: "Uncompromising Build Quality",
      desc: "We use only Grade-A materials from certified suppliers, backed by a structural warranty on every home we deliver.",
    },
    {
      title: "Transparent Communication",
      desc: "Receive real-time project updates via your dedicated project manager — no surprises, no hidden costs, ever.",
    },
    {
      title: "True Value for Money",
      desc: "Premium homes in Thrissur's most sought-after locations — designed to match your lifestyle and your budget.",
    },
  ];

  return (
    <section id="why-section" className="container mx-auto  py-16">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] lg:grid-cols-2 gap-4 lg:gap-14 items-start">

        {/* LEFT */}
        <div>
          <h2 className="text-[24px] md:text-[24px] lg:text-[36px] leading-[20px] md:leading-[24px] lg:leading-[36px]  font-medium">
            WHY <br />
            <span className="">AUREX BUILDERS</span>
          </h2>

          <p className="mt-6 text-black max-w-md text-[12px] md:text-[13px] lg:text-[14px] leading-[18px]  ">
            Choosing Aurex means choosing absolute excellence and deep peace.
          </p>

          <div className=" mt-6">
            <p className="uppercase text-[13px] md:text-[14px] lg:text-[16px] leading-[16px]  tracking-wider mb-6 text-black">
              Need a great place for your family?
            </p>

              <button          
                onClick={() => setOpenModal(true)}
                className="relative w-26 md:w-36 h-26 md:h-36 rounded-full border border-black 
                   flex flex-col justify-center items-center 
                   text-center text-[10px] md:text-[12px] font-medium uppercase 
                   tracking-wide shadow-lg"
            >
                {/* TEXT */}
                <p>Book a free <br /> consultation</p>
             

                {/* ARROW */}
                <div className="absolute bottom-12 md:bottom-18 right-22 md:right-28">
                    <Image src="/images/home/button-arrow.svg"
                     alt="trusted-construction-company-thrissur-aurex-project" width={20} height={20}
                     className="w-[16px] md:w-[20px] h-[16px] md:h-[20px] " />
                </div>
            </button>
           
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="uppercase text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] tracking-widest text-gray-600 mb-10">
            Our Core Strengths
          </p>

          <ul className="space-y-6">
            {strengths.map((item, index) => (
              <li
                key={index}
                className="grid grid-cols-[20px_180px_1fr] lg:grid-cols-[20px_220px_1fr] gap-4 lg:gap-4 items-start"
              >
                {/* Check icon */}
                <span className="text-[#C49A6C] mt-1">
                  <Check size={18} strokeWidth={2.5} />
                </span>

                {/* Title */}
                <h3 className=" max-w-sm font-bold text-black text-[13px] md:text-[14px] lg:text-[16px] leading-[14px] md:leading-[14px] lg:leading-[24px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-[16px] md:leading-[18px]  text-black font-regular">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
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
                 <ModalForm  onSuccess={() => setShowContactModal(true)}
                             onClose={() => setOpenModal(false)} />
                </div>
              </div>
            )}
            <ContactModal
              isOpen={showContactModal}
              onClose={() => setShowContactModal(false)}
            />
    </section>
  );
}
