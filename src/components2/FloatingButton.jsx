
"use client";

import { useState } from "react";
import Image from "next/image";


import ModalForm from "./forms/ModalForm";

export default function FloatingButtons() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>

            {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-1 hidden lg:flex"> */}
             <div className="fixed right-0 top-1/2 -translate-y-1/2 flex-col gap-1 hidden lg:flex z-[999]">
                <a
                    href="https://wa.me/919846507474?text=Hi%20I%20am%20interested%20in%20your%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/images/blog-inner/whatsapp.svg"
                        width={44}
                        height={44}
                        alt="Chat on WhatsApp"
                        className="cursor-pointer"
                    />
                </a>
                <button onClick={() => setOpenModal(true)}>
                    <Image
                        src="/images/blog-inner/message.svg"
                        width={44}
                        height={44}
                        alt="chat-icon"
                        className="cursor-pointer" />
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
                        <ModalForm onClose={() => setOpenModal(false)} />
                    </div>
                </div>
            )}
        </>
    );
}
