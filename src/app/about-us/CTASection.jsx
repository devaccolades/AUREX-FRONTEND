
"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function CTA() {
    return (
        <section className="">

            <div className="   rounded-3xl px-2 md:px-4 lg:px-6 pb-8  md:pb-10 ">
                <div className="container flex flex-col lg:flex-row items-center justify-between gap-3 md:gap-6 ">
                    {/* Left */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
                        

                        {/* Text */}

                        <div className="flex flex-col items-start text-left gap-3">

                            <h2 className="text-[20px] md:text-[30px] lg:text-[36px]  font-urban uppercase font-medium leading-[26px] md:leading-[36px] ">
                                Start Building Your Dream Home With <br className="hidden xl:block"/>Thrissur's Trusted Construction Company 
                               
                            </h2>

                            <p className="text-sm text-black max-w-md">
                                 Book your FREE no-obligation consultation today. Our team will walk you through timelines, budgets, and design options — all in one meeting.
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
                                    alt="best builders in Thrissur"
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
                                    alt="best builders in Thrissur" width={20} height={20}
                                    className="w-[16px] md:w-[20px] h-[16px] md:h-[20px] " />
                            </div>
                        </button>
                    </a>


                </div>
            </div>
        </section>
    );
}
