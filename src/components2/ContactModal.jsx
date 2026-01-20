"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-99 flex items-center justify-center bg-black/40 px-4"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="
    w-full max-w-[483px]
    rounded-2xl sm:rounded-[28px]
    bg-[linear-gradient(180deg,#FFFFFF_0.96%,#CBFB99_37.5%,#6DA26B_62.5%,#3E7654_84.13%,#0F493D_100%)]
    px-6 py-6 sm:px-10 sm:py-8
    scale-[0.92] sm:scale-[0.95]
  "
            >

                {/* Top confirmation line */}
                <p className="text-[15px] sm:text-[16px] leading-snug text-[#0F493D]">
                    <span className="block">
                        Your application has been
                    </span>
                    <span className="block text-[#6DA26B] font-medium">
                        received successfully.
                    </span>
                </p>

                {/* Thank you heading */}
                <div className="relative mt-8 ">
                    <h1 className="text-[48px] sm:text-[56px] leading-[38px] font-extrabold text-[#0F493D]">
                        Thank
                        <br />
                        you
                    </h1>

                    <div className="absolute left-[190px] top-[6px] sm:left-[200px] sm:top-[6px]">
                        <Image
                            src="/images/careers/stars.svg"
                            alt=""
                            width={36}
                            height={36}
                            priority
                        />
                    </div>
                </div>

                {/* Body copy */}
                <div className="mt-6 max-w-xl hidden md:block">
                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-white">
                        Our team will review your enquiry and get back to you shortly with the details you requested.We appreciate your time and look forward to assisting you in making an informed decision.                   </p>
                </div>

                {/* Stay Connected */}
                <div className="mt-10">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[13px] font-semibold uppercase leading-tight text-white">
                            Stay
                            <br />
                            Connected
                        </p>

                        <p className="flex-1 text-[13px] leading-relaxed text-white/90 text-start">
                            For project launches, construction progress, and exclusive offers.
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6">
                    <div className="flex gap-3">

                        <Link href="/projects"
                            onClick={onClose}
                            className="flex flex-1 items-center justify-center rounded-full bg-white py-2.5 text-[13px] leading-[14px] font-semibold text-black"
                        >
                            View More Projects

                        </Link>



                        <Link href="/"
                            onClick={onClose}
                            className="flex flex-1 items-center justify-center rounded-full border border-white/80 py-2.5 text-[13px] font-semibold text-white"
                        >
                            Home

                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}
