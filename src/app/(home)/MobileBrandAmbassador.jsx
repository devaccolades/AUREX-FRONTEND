"use client";

import Image from "next/image";
import Squares from "@/components2/Squares";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export function MobileBrandAmbassador() {
    const [openVideo, setOpenVideo] = useState(false);
    const ref = useRef(null);

    // Scroll zoom animation
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.55], [1, 1.7]);

    // Text fade-up
    const opacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0.05, 0.3], [35, 0]);

    return (
        <div className="relative px-6">

            {/* TEXT TOP */}
            <motion.div style={{ opacity, y }} className="mt-2">
                <h2 className="text-[24px] font-urban font-medium leading-[20px] mb-2">
                    MANIFESTING YOUR <br /> DREAM INTO A <br /> MAGNIFICENT REALITY
                </h2>

                <p className="text-gray-700 text-[12px] leading-[150%] mb-0">
                    Aurex builders ensures to fulfill the dream of our customers by gifting them with quality home spaces,
                    contemporary architecture, environment- friendly designs, timely delivery, after-sales service and return
                    on investment. Aurex builders brings you a new world of happiness, security and prosperity, delivering finest
                    apartments, flats, townhouses and luxury villas that match the requirements of customers with the unique
                    signature of a futuristic brand. Our main motive is to fulfill the dreams of the entire customers for all
                    the segment people.
                </p>
            </motion.div>

            {/* MAIN IMAGE WITH ZOOM */}
            <div
                ref={ref}
                className="relative h-[360px] w-full overflow-hidden -mt-16"
            >
                <motion.div style={{ scale }} className="origin-top">
                    <Image
                        src="/images/home/b.png"
                        alt="Brand Ambassador"
                        width={900}
                        height={900}
                        className="w-full h-full object-cover object-top"
                    />
                </motion.div>
            </div>

            {/* TEXT + NAME */}
            <motion.div style={{ opacity, y }} className="mt-4">
                <h3 className="text-[20px] font-urban font-semibold leading-[20px] mb-4">
                    WE ARE PLEASED TO <br /> INTRODUCE OUR <br /> BRAND AMBASSADOR.
                </h3>

                <h1 className="text-[66px] font-urban font-medium leading-[40px]">
                    BHAVANA
                </h1>

                {/* SMALL THUMB VIDEO BUTTON */}
                <div
                    className="mt-6 w-[160px] h-[110px] rounded-lg overflow-hidden shadow-lg relative cursor-pointer group ml-auto"
                    onClick={() => setOpenVideo(true)}
                >
                    <Image
                        src="/images/home/thumb.png"
                        alt="Video Thumbnail"
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <svg width="20" height="20" fill="black" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* VIDEO POPUP */}
            {openVideo && (
                <div
                    className=" fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
                    onClick={() => setOpenVideo(false)}
                >
                    <div
                        className="relative w-full max-w-lg bg-black rounded-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-white text-3xl z-50"
                            onClick={() => setOpenVideo(false)}
                        >
                            ×
                        </button>

                        <div className="w-full aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/kCZ9iKlA3p4?autoplay=1"
                                title="Brand Ambassador Video"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
