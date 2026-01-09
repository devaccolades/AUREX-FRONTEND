"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function WhatsAppCTA() {
    return (
        <section className="py-4 ">

            <div className="  bg-[#EFFFF1] rounded-3xl px-2 md:px-4 lg:px-6 py-8  md:py-10 ">
                <div className="container flex flex-col lg:flex-row items-center justify-between gap-3 md:gap-6 ">
                    {/* Left */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
                        {/* WhatsApp Icon */}
                        <div className="w-18 md:w-28  lg:w-38 h-18 md:h-28 lg:h-38 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                            <svg
                                viewBox="0 0 32 32"
                                className="w-8 md:w-18 lg:w-28  h-8 md:h-18 lg:h-28 fill-white"
                            >
                                <path d="M16 2.667C8.647 2.667 2.667 8.647 2.667 16c0 2.355.627 4.651 1.82 6.668L2 30l7.486-2.45A13.257 13.257 0 0 0 16 29.333c7.353 0 13.333-5.98 13.333-13.333C29.333 8.647 23.353 2.667 16 2.667zm0 24.32a10.96 10.96 0 0 1-5.586-1.534l-.4-.235-4.444 1.454 1.476-4.327-.261-.422A10.94 10.94 0 1 1 16 26.987zm6.027-8.174c-.33-.165-1.95-.963-2.253-1.073-.303-.11-.524-.165-.744.165-.22.33-.854 1.073-1.047 1.293-.193.22-.386.247-.716.083-.33-.165-1.393-.514-2.653-1.64-.98-.875-1.64-1.953-1.833-2.283-.193-.33-.02-.508.145-.673.148-.148.33-.386.495-.579.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.579-.083-.165-.744-1.793-1.02-2.454-.268-.643-.54-.556-.744-.566l-.634-.011c-.22 0-.579.083-.882.413-.303.33-1.157 1.13-1.157 2.756 0 1.626 1.185 3.197 1.35 3.417.165.22 2.33 3.56 5.65 4.99.79.34 1.407.543 1.888.695.793.252 1.515.216 2.085.131.636-.095 1.95-.798 2.226-1.57.275-.772.275-1.433.193-1.57-.083-.137-.303-.22-.634-.385z" />
                            </svg>
                        </div>

                        {/* Text */}
                        {/* <div>
                            <h2 className="text-[26px] md:text-[38px] xl:text-[48px] font-urban font-medium leading-[32px] md:leading-[40px] xl:leading-[48px] mt-2">
                                HAVE A QUESTION? NEED <br className="xl:block hidden" /> QUICK PROJECT DETAILS?
                            </h2>
                            <p className="text-sm text-black mt-1">
                                Skip the wait — chat with us directly on WhatsApp for instant assistance!
                            </p>
                        </div> */}
                        <div className="flex flex-col items-start text-left gap-3">

  <h2 className="text-[26px] md:text-[38px] xl:text-[48px] font-urban font-medium leading-[32px] md:leading-[40px] xl:leading-[48px]">
    HAVE A QUESTION? NEED <br className="xl:block hidden" />
    QUICK PROJECT DETAILS?
  </h2>

  <p className="text-sm text-black max-w-md">
    Skip the wait — chat with us directly on WhatsApp for instant assistance!
  </p>

  {/* MOBILE + MD BUTTON — SAME START POINT */}
  <a
    href="https://wa.me/919846507474"
    target="_blank"
    rel="noopener noreferrer"
    className="lg:hidden flex items-center gap-3 mt-2"
  >
    <Image
      src="/images/home/button-arrow.svg"
      alt="Arrow"
      width={28}
      height={28}
    />
    <p className="text-[12px] font-medium uppercase leading-tight">
      MESSAGE US ON <br /> WHATSAPP
    </p>
  </a>

</div>

                    </div>

                    {/* Button */}
                    <a
                        href="https://wa.me/919846507474"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <button
                            // onClick={onClick}
                            className="relative w-26 md:w-38 h-26 md:h-38 rounded-full border border-black 
                                hidden lg:flex flex-col justify-center items-center 
                                text-start text-[10px] md:text-[12px] font-medium uppercase 
                                tracking-wide shadow-lg"
                        >
                            {/* TEXT */}
                            <p>MESSAGE US ON  <br /> WHATSAPP</p>


                            {/* ARROW */}
                            <div className="absolute bottom-12 md:bottom-18 right-22 md:right-32 ">
                                <Image src="/images/home/button-arrow.svg"
                                    alt="Arrow" width={20} height={20}
                                    className="w-[16px] md:w-[20px] h-[16px] md:h-[20px] " />
                            </div>
                        </button>
                    </a>

                   
                </div>
            </div>
        </section>
    );
}
