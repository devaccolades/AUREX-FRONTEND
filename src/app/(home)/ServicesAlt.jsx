"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ModalForm from "@/components2/forms/ModalForm";
import ContactModal from "@/components2/ContactModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA ---------------- */

const services = [
  {
    id: 1,
    title: "INTERIOR DESIGNING",
    images: [
      { src: "/images/home/services/i1.jpg", x: 20, y: 25 },
      { src: "/images/home/services/i2.webp", x: 65, y: 15 },
      { src: "/images/home/services/i3.jpg", x: 40, y: 60 },
    ],
  },
  {
    id: 2,
    title: "RENTAL AND RESALE ASSISTANCE",
    images: [
      { src: "/images/home/services/r1.webp", x: 25, y: 30 },
      { src: "/images/home/services/r2.jpg", x: 70, y: 25 },
      { src: "/images/home/services/r3.webp", x: 45, y: 70 },
    ],
  },
  {
    id: 3,
    title: "MAINTENANCE ASSISTANCE",
    images: [
      { src: "/images/home/services/m1.jpg", x: 20, y: 20 },
      { src: "/images/home/services/m2.webp", x: 60, y: 20 },
      { src: "/images/home/services/m3.webp", x: 75, y: 65 },
      { src: "/images/home/services/m4.jpg", x: 25, y: 80 },
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

export default function ServicesAlt() {
  const [openModal, setOpenModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [ready, setReady] = useState(false);

  const containerRef = useRef(null);
  const groupsRef = useRef(null);
  const titleRefs = useRef([]);
  const counterRef = useRef(null);
  const buttonRef = useRef(null);

  const loadedRef = useRef(0);

  /* ---- preload slide 0 + 1 only ---- */

  const visibleSlides = 2;
  const visibleImages = services
    .slice(0, visibleSlides)
    .reduce((a, s) => a + s.images.length, 0);

  const handleLoad = () => {
    loadedRef.current += 1;
    // if (loadedRef.current === visibleImages) {
    if (loadedRef.current >= visibleImages) {
      requestAnimationFrame(() => setReady(true));
    }
  };

  /* ---------------- GSAP ---------------- */

  // useEffect(() => {
  //   if (!ready) return;
  useEffect(() => {

  gsap.registerPlugin(ScrollTrigger);

  if (!ready) return;

    const ctx = gsap.context(() => {
      const total = services.length;
      const scrollDistance = total * 900;

      gsap.set(titleRefs.current, {
        transformOrigin: "50% 50% -50px",
        willChange: "transform, opacity",
        force3D: true,
      });

      gsap.set("[data-slide-img]", {
        willChange: "transform, opacity",
        force3D: true,
      });

      gsap.set("[data-slide='0']", {
        yPercent: 0,
        opacity: 1,
        scale: 1,
      });

      gsap.set("[data-slide-img]:not([data-slide='0'])", {
        yPercent: 20,
        opacity: 0,
        scale: 0.98,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const slide =
              Math.round(self.progress * (total - 1)) + 1;

            // counterRef.current.innerHTML = `
            //   <span style="color:#D4A017;">0${slide}</span>
            //   <span style="color:#000;"> / 0${total}</span>
            // `;
            if (counterRef.current) {
  counterRef.current.innerHTML = `
    <span style="color:#D4A017;">0${slide}</span>
    <span style="color:#000;"> / 0${total}</span>
  `;
}
          },
        },
      });

      tl.set([counterRef.current, buttonRef.current], {
        opacity: 1,
      });

      for (let i = 0; i < total - 1; i++) {
        const currentImgs = gsap.utils.toArray(
          `[data-slide-img][data-slide="${i}"]`
        );
        const nextImgs = gsap.utils.toArray(
          `[data-slide-img][data-slide="${i + 1}"]`
        );

        tl.to(titleRefs.current[i], {
          opacity: 0,
          rotateX: 90,
          y: -50,
          duration: 0.8,
        }).to(
          titleRefs.current[i + 1],
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 0.8,
          },
          "<"
        );

        tl.to(
          currentImgs,
          {
            yPercent: -30,
            opacity: 0,
            scale: 0.95,
            stagger: 0.08,
            duration: 0.9,
          },
          "<"
        );

        tl.to(
          groupsRef.current,
          {
            y: `-${(i + 1) * 100}vh`,
            duration: 1,
          },
          "<0.1"
        );

        tl.to(
          nextImgs,
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.08,
            duration: 0.9,
          },
          "<0.25"
        );
      }
      ScrollTrigger.refresh();

setTimeout(() => {
  ScrollTrigger.refresh();
}, 300);
    });
    
    const resizeRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", resizeRefresh);

    return () => {
      window.removeEventListener("resize", resizeRefresh);
      ctx.revert();
    };
  }, [ready]);
  // useEffect(() => {
  // if (!ready) return;


  /* ---------------- JSX ---------------- */

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen border-t border-gray-300 overflow-hidden bg-white"
    >
      {/* CENTER STACK */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-40">
        
        {/* Counter */}
        <div
          ref={counterRef}
          className="absolute bottom-10 right-10 text-[16px] leading-[32px] font-urban font-semibold tracking-widest mb-14 xl:mb-10 flex items-center gap-1 opacity-0"
        >
          <span className="text-[#D4A017]">01</span>
          <span className="text-black">/ 03</span>
        </div>

        {/* Titles */}
        <div className="relative h-24 w-full flex items-center justify-center pointer-events-none z-50 py-8">
          {services.map((s, i) => (
            <h2
              key={i}
              ref={(el) => (titleRefs.current[i] = el)}
              className="absolute text-[40px] md:text-[58px] lg:text-[68px] font-normal text-black tracking-tight text-center leading-tight"
              style={{
                opacity: i === 0 ? 1 : 0,
                transform:
                  i === 0
                    ? "rotateX(0deg) translateY(0px)"
                    : "rotateX(90deg) translateY(40px)",
              }}
            >
              {s.title}
            </h2>
          ))}
        </div>

        {/* Button — ORIGINAL DESIGN PRESERVED */}
        <button
          ref={buttonRef}
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 mt-8 xl:mt-4 text-black px-5 py-2 rounded-full font-urban text-[12px] leading-[16px] font-bold hover:scale-[1.03] transition opacity-0"
        >
          <Image
            src="/images/home/enq.svg"
            alt="Arrow"
            width={20}
            height={20}
          />

          <span className="flex items-center gap-1">
            ENQUIRE
            <span className="flex bg-[#FF0000] w-12 h-12 rounded-full items-center justify-center text-white font-bold">
              NOW
            </span>
          </span>
        </button>
      </div>

      {/* Slides */}
      <div className="absolute inset-0 z-10">
        <div
          ref={groupsRef}
          className="absolute left-0 top-0 w-full"
          style={{ height: `${services.length * 100}vh` }}
        >
          {services.map((service, slideIndex) => (
            <div key={slideIndex} className="relative w-full h-screen">
              {service.images.map((img, j) => (
                <div
                  key={j}
                  data-slide-img
                  data-slide={slideIndex}
                  className="absolute -translate-x-1/2 -translate-y-1/2 
                             w-[140px] h-[140px]
                             md:w-[200px] md:h-[200px]
                             lg:w-[260px] lg:h-[260px]
                             xl:w-[280px] xl:h-[280px]"
                  style={{
                    left: `${img.x}%`,
                    top: `${img.y}%`,
                  }}
                >
                  {/* shadow isolated from transform */}
                  <div className="w-full h-full shadow-xl">
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes="(max-width:768px) 140px,
                             (max-width:1024px) 200px,
                             (max-width:1280px) 260px,
                             280px"
                      className="object-cover"
                      priority={slideIndex < 2}
                      loading={
                        slideIndex < 2 ? "eager" : "lazy"
                      }
                      onLoadingComplete={handleLoad}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Modals unchanged */}
      {openModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-lg relative mt-26">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>
            <ModalForm
              onSuccess={() =>
                setShowContactModal(true)
              }
              onClose={() => setOpenModal(false)}
            />
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
