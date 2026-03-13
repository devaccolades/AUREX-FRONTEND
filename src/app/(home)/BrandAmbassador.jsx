
"use client";

import Squares from "@/components2/Squares";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MobileBrandAmbassador } from "./MobileBrandAmbassador";

export default function BrandAmbassador() {
  const [openVideo, setOpenVideo] = useState(false);
  const ref = useRef(null);

  // Scroll tracking for zoom animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale from normal → zoomed
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, 2], { clamp: true });

  // TEXT ANIMATION
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  // TEXT SCROLL FADE-UP ANIMATION
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);

  const fadeOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const fadeY = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);


  return (
    <>
    <section className="hidden md:block  relative w-full bg-white text-black pt-0 overflow-hidden">

      {/* Background Squares */}
      <div className="absolute inset-0">
        <Squares
          speed={0.5}
          squareSize={36}
          direction="diagonal"
          borderColor="#dbdbdb"
          hoverFillColor="#dbdbdb"
        />
      </div>

      <div className="container relative grid grid-cols-1 md:grid-cols-3 gap-0 mx-16">

        {/* LEFT CONTENT */}
        <motion.div
          ref={leftTextRef}
          style={{ opacity: textOpacity, y: textY }}
          className="flex flex-col justify-center items-start"
        >
          <h1 className="text-[24px] xl:text-[40px] font-urban font-medium leading-[20px]  md:leading-[24px] xl:leading-[40px] uppercase mb-20 xl:mb-66">
            {/* MANIFESTING YOUR <br /> DREAM INTO A <br /> MAGNIFICENT REALITY */}
            Find Your Perfect Home with the Best
          </h1>

          <p className="text-gray-700 font-inter text-[12px] xl:text-[16px] leading-[156%] max-w-md">
        
           At Aurex Builders, we understand what a home truly means to you and your family. As trusted home builders in Thrissur, 
           we deliver quality living spaces designed with contemporary architecture, eco-friendly materials, and smart spatial planning.
            From timely project handovers to dedicated after-sales support, our team ensures your journey to homeownership is smooth, 
            transparent, and deeply rewarding. We build premium flats, luxury villas, and grand apartments that match every lifestyle and budget. Our
team stands among the best builders in Thrissur - committed to making premium living accessible to all.
          </p>
        </motion.div>

        {/* MAIN IMAGE WITH SCROLL ZOOM */}
        <div
          ref={ref}
          className="
            relative 
            max-w-[520px] 
            mt-20 lg:mt-20
            xxl:mt-0
            h-[400px]
            lg:h-[600px]
            xl:h-[800px]
            overflow-visible
            z-10
            will-change-transform
          "
        >
          <motion.div style={{ scale }} className="origin-[0.1_0] -translate-x-18 w-full h-full">
            <Image
              src="/images/home/b.png"
              alt="home builders Thrissur"
              width={900}
              height={900}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          ref={rightTextRef}
          style={{ opacity: textOpacity, y: textY }}
          className="relative w-full right-20 flex flex-col justify-center items-start py-0 text-left"
        >
          <h3 className="text-[20px] xl:text-[32px] font-urban font-semibold py-2 leading-[20px] xl:leading-[32px] -mt-32 lg:-mt-30 xl:-mt-80">
            WE ARE PLEASED TO <br /> INTRODUCE OUR <br /> BRAND AMBASSADOR.
          </h3>

          <h2 className="text-[76px] xl:text-[122px] font-urban py-10 font-medium leading-[40px]">
            BHAVANA
          </h2>

          {/* SMALL BOTTOM-RIGHT IMAGE */}
          {/* <div className="absolute bottom-0 right-0 md:right-[-40px] md:bottom-[60px] w-[140px] h-[90px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/home/thumb.png"
              alt="Bhavana small"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div> */}
          <div
            className="relative z-10 bottom-[-110px] right-[-150px] lg:right-[-280px] lg:bottom-[-200px] 
             w-[140px] h-[90px] rounded-lg overflow-hidden shadow-lg 
             cursor-pointer group"
            onClick={() => setOpenVideo(true)}
          >
            <Image
              src="/images/home/thumb.png"
              alt="home builders Thrissur"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition">
              <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="black" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
      {openVideo && (
        <div
          className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
          onClick={() => setOpenVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white text-3xl z-50"
              onClick={() => setOpenVideo(false)}
            >
              ×
            </button>

            {/* YouTube Embed */}
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/kCZ9iKlA3p4?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    
    

    </section>


    {/* MOBILE VERSION — ONLY VISIBLE BELOW md */}
<section className="block md:hidden relative w-full bg-white text-black overflow-hidden pt-10">

  {/* Background Squares */}
  <div className="absolute inset-0">
    <Squares
      speed={0.5}
      squareSize={26}
      direction="diagonal"
      borderColor="#dbdbdb"
      hoverFillColor="#dbdbdb"
    />
  </div>

  <MobileBrandAmbassador />
</section>

    </>
  );
}
