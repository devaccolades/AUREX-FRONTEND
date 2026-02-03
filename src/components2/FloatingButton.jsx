
"use client";

import { useState } from "react";
import Image from "next/image";


import ModalForm from "./forms/ModalForm";

export default function FloatingButtons() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>

            {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-1 hidden lg:flex"> */}
            <div
                className="
    fixed top-1/2 -translate-y-1/2 z-[999]
    flex flex-col gap-1
    right-0

    transition-all duration-300 ease-in-out

    lg:translate-x-[80%]
    lg:hover:translate-x-0
  "
            >
                {/* WhatsApp */}
                <a
                    href="https://wa.me/919846507474?text=Hi%20I%20am%20interested%20in%20your%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent"
                >
                    <Image
                        src="/images/blog-inner/whatsapp.svg"
                        width={44}
                        height={44}
                        alt="Chat on WhatsApp"
                        className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] lg:w-[44px] lg:h-[44px]"
                    />
                </a>

                {/* Call */}
                <a href="tel:+9846007474">
                    <div className="bg-[#0a6e50] flex items-center justify-center py-[6px] lg:py-[8px] rounded-l-[15px] border border-white">
                        <Image
                            src="/images/telephone4.png"
                            width={44}
                            height={44}
                            alt="call"
                            className="w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] invert brightness-100"
                        />
                    </div>
                </a>
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
        </>
    );
}
