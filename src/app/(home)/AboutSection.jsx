"use client";
import Image from "next/image";
import { useState } from "react";
import ModalForm from "@/components2/forms/ModalForm";
import ProjectEnquiryModal from "@/components2/forms/ProjectEnquiryModal";
import ContactModal from "@/components2/ContactModal";

export default function AboutSection() {
  const [openModal, setOpenModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  return (
    <section className="relative w-full bg-[#ECECEC]  text-black rounded-[40px] overflow-hidden">
      {/* Background Elephants */}
      <div className="absolute  flex w-full  justify-between opacity-80 pointer-events-none">
        <Image
          src="/images/home/left-ele.png"
          alt="decor-left"
          width={800}
          height={800}
          className="w-[118px] md:w-[241px] lg:w-[330px] xl:w-[356px] object-contain "
        />
        <Image
          src="/images/home/right-ele.png"
          alt="decor-right"
          width={800}
          height={800}
          className="w-[118px] md:w-[241px] lg:w-[330px] xl:w-[356px] object-contain  "
        />
      </div>

      <div className="container relative max-w-[520px] lg:max-w-[580px] xl:max-w-[680px] mx-auto py-10 lg:py-20 text-center ">
        <h4 className="text-[14px] lg:text-[16px] leading-[20px] font-poppins font-normal mb-2 ">
          {" "}
          <span className="text-[#006A54]">#About</span>{" "}
          <span className="text-gray-500">Us</span>
        </h4>
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold font-urban leading-[24px] md:leading-[32px] lg:leading-[40px] mb-4">
          MANIFESTING <br className="md:hidden block" /> YOUR DREAM{" "}
          <br className="hidden md:block" /> INTO{" "}
          <br className="md:hidden block" /> A MAGNIFICENT{" "}
          <br className="md:hidden block" /> REALITY
        </h2>

        <p className="text-black font-inter leading-[156%] text-[13px] md:text-[14px]mb-4 lg:mb-10">
          Aurex builders ensures to fulfill the dream of our customers by
          gifting them with quality home spaces, contemporary architecture,
          environment- friendly designs, timely delivery, after-sales service
          and return on investment. Aurex builders brings you a new world of
          happiness, security and prosperity, delivering finest apartments,
          flats, townhouses and luxury villas that match the requirements of
          customers with the unique signature of a futuristic brand. Our main
          motive is to fulfill the dreams of the entire customers for all the
          segment people.
        </p>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center justify-center mx-auto gap-2  text-black px-5 py-2 rounded-full font-urban text-[12px] leading-[16px] font-bold  hover:scale-[1.03] transition "
        >
          <span className="flex items-center text-black gap-1">
            KNOW
            <span className="flex bg-[#FF0000] w-8 md:w-12 h-8 md:h-12 rounded-full items-center justify-center text-white font-bold">
              MORE
            </span>
          </span>
        </button>
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
