
"use client";
import Image from "next/image";
import MagneticButton from "@/components2/MagneticButton";
import bg from "../../../public/images/home/why-bg.png";
import { useState } from "react";
import ModalForm from "@/components2/forms/ModalForm";
import FixedCTAButton from "@/components2/FixedMagneticButton";
import ContactModal from "@/components2/ContactModal";

export default function WhyChooseUs() {
  const [openModal, setOpenModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false);
  const Box = ({ title, text, className = "" }) => (
    <div className={`relative p-3 lg:p-8 ${className}`}>
      {/* corner highlights */}
      <span className="absolute top-0 left-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute top-0 left-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute top-0 right-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute top-0 right-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute bottom-0 left-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute bottom-0 right-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute bottom-0 right-0 w-[2px] h-6 bg-gray-200"></span>

      <h3 className="font-semibold text-[13px] md:text-[18px] lg:text-[24px] leading-[12px] md:leading-[18px] lg:leading-[24px] mb-0 max-w-[220px] h-[50px] md:h-[70px] ">{title}</h3>
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
                  alt="Elephant background"
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
            <div className="grid grid-cols-2 border border-gray-300">
              <Box
                title="UNMATCHED QUALITY"
                text="At Aurex Builders, every project meets the highest construction standards - using certified steel,
premium-grade cement, and industry-approved fittings. Our quality assurance process covers every
stage from foundation to finishing, ensuring craftsmanship and lasting value that define the best builders inThrissur"
                className="border-b border-r border-gray-300 "
              />
              <Box
                title="TIMELY DELIVERY"
                text="We commit to delivering every project strictly on schedule - without compromising quality. Our
structured construction timeline and dedicated project managers ensure you move into your dream home on
the date promised. Trust the reliable home builders in Thrissur who value your time as much as you do."
                className="border-b border-gray-300"
              />
              <Box
                title="MODERN DESIGN & INNOVATION"
                text="Every Aurex property is conceived with meticulous attention to detail - blending contemporary
aesthetics, smart space utilization, and eco-friendly construction practices. As expert luxury home
builders in Thrissur, we deliver homes that are as beautiful as they are sustainable."
                className="border-r border-gray-300"
              />
              <Box
                title="CUSTOMER-CENTRIC APPROACH"
                text="You are at the heart of everything we do. From your first site visit to your final key handover - and
well beyond - Aurex Builders provides dedicated support, transparent communication, and exceptional
aftersales care. Your satisfaction is our measure of success."
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
