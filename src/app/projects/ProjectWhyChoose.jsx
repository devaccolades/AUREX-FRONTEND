
"use client";
import Image from "next/image";
import MagneticButton from "@/components2/MagneticButton";
import bg from "../../../public/images/home/why-bg.png";
import { useState } from "react";
import ModalForm from "@/components2/forms/ModalForm";
import FixedCTAButton from "@/components2/FixedMagneticButton";
import ContactModal from "@/components2/ContactModal";

export default function ProjectWhyChooseUs() {
  const [openModal, setOpenModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false);
  const Box = ({ title, text, className = "" }) => (
    <div className={`relative p-3 lg:p-6 ${className}`}>
      {/* corner highlights */}
      <span className="absolute top-0 left-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute top-0 left-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute top-0 right-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute top-0 right-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute bottom-0 left-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute bottom-0 right-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute bottom-0 right-0 w-[2px] h-6 bg-gray-200"></span>

      <h3 className="uppercase font-semibold text-[13px] md:text-[18px] lg:text-[24px] leading-[12px] md:leading-[18px] lg:leading-[24px] mb-0 max-w-[220px] h-[50px] md:h-[70px] ">{title}</h3>
      <p className="text-gray-700 text-[12px] md:text-[12px] lg:text-[14px] leading-[18px] py-2 lg:py-8 ">{text}</p>
    </div>
  );

  return (
    <>
      <div id="why-section" onClick={() => setOpenModal(true)} className="border">
        <section
          className="container m-auto border  relative  bg-white text-black py-0 px-0  overflow-hidden"
        >

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-8 max-w-md ">
              {/* Elephant background */}
              <div className="absolute  left-[2px] md:left-[10px] -top-[300px]  md:top-0 h-full w-full md:w-1/4 opacity-20">
                <Image
                  src={bg}
                  alt="home builders Thrissur"
                  fill
                  className="object-contain md:object-cover object-left  scale-x-[-1]"
                />
              </div>
              <div className="px-4 ">
                <h2 className=" text-[40px] lg:text-[64px] leading-[1.1] font-urban font-medium">
                  WHY <br /> CHOOSE US
                </h2>

                <FixedCTAButton
                  className="lg:hidden block"
                  text="Book a free <br /> consultation"
                  arrowSrc="/images/home/button-arrow.svg"
                  parentSelector="#why-section"
                  onClick={(e) => {
                    e.stopPropagation(); // prevents section click
                    setOpenModal(true);
                  }}
                />
                <p className="text-gray-700 w-[280px] lg:w-[400px]  pt-30 font-normal text-[13px] lg:text-[14px] leading-[18px]">
                  We craft living experiences that last a lifetime. Our passion for sharp design and on-time delivery sets
                  us apart. Every project stands as a proud mark of quality. We use top-grade materials for unmatched
                  strength. We finish projects on time so you can move in fast. Our fresh designs mix modern style with
                  smart building methods. When picking home builders Thrissur relies on, we put you first. Enjoy a
                  smooth journey from start to finish.
                </p>
              </div>

              <MagneticButton className="hidden lg:block"
                text="Book a free <br /> consultation"
                arrowSrc="/images/home/button-arrow.svg"
                parentSelector="#why-section"
                onClick={(e) => {
                  e.stopPropagation(); // prevents section click
                  setOpenModal(true);
                }}
              />

            </div>

            {/* Right Section */}
            {/* <div className="grid grid-cols-2 border border-gray-300"> */}
            <div className="grid grid-cols-2 lg:grid-cols-2 border border-gray-300">
              <Box
                title="Proven Build Quality"
                text="Every Aurex flat is constructed using premium-grade steel, certified cement,
                 and ISO-approved fittings — sourced exclusively from vetted suppliers. Our 50-point quality 
                 inspection checklist is applied at every critical construction stage, ensuring your home is 
                 structurally sound, aesthetically refined, and built to last for generations."
                className="border-b border-r border-gray-300 "
              />
              <Box
                title="Zero Handover Delays - Guaranteed"
                text="Aurex has a 100% on-time delivery record across all completed projects in Thrissur.
                 Every flat for sale in Thrissur comes with a committed handover date written into your sale 
                 agreement — backed by a project management system that tracks every milestone from foundation to finishing.."
                className="border-b border-gray-300"
              />
              <Box
                title="Designer Interior Spaces"
                text="Our flats in Thrissur feature open-plan living areas, vastu-compliant layouts, modular kitchen provisions, 
                vitrified flooring, and superior bathroom fittings — thoughtfully designed to balance modern aesthetics with practical, 
                comfortable everyday family living.."
                className="border-r border-gray-300"
              />
              <Box
                title="Stunning Amenities"
                text="Every Aurex apartment project in Thrissur includes dedicated covered parking, landscaped gardens, 24/7 CCTV security, 
                power backup, children's play areas, and clubhouse access — delivering a complete, resort-quality lifestyle within your residential community."
              />

              <Box
  title="Total Transparency"
  text="From first enquiry to final handover, every Aurex buyer is assigned a dedicated relationship manager providing honest updates, 
  clear documentation, and accessible support. No hidden charges. No surprises. Just straightforward, respectful communication throughout."
  className="border-r border-gray-300 border-t"
/>

<Box
  title="Genuine Value for Money"
  text="Our flats for sale in Thrissur are priced to deliver premium lifestyle features — 
  RERA-registered security, prime locations, and superior finishes — at a price point that makes 
  quality living genuinely accessible. Contact us for a transparent price list and current availability."
  className="border-t"
/>
            </div>
          </div>
        </section>
      </div>
      {openModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-lg relative z-20">

            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <ModalForm onSuccess={() => setShowContactModal(true)}
              onClose={() => setOpenModal(false)} />
          </div>
        </div>
      )}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </>
  );
}
