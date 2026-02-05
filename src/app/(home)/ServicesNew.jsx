"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";
import ModalForm from "@/components2/forms/ModalForm";
import ContactModal from "@/components2/ContactModal";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function ServicesMobile() {
  const [openModal, setOpenModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const containerRef = useRef(null);
  const groupsRef = useRef(null);
  const titleRefs = useRef([]);
  const counterRef = useRef(null);
  const buttonRef = useRef(null);

  const [vh, setVh] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setVh(window.innerHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const waitForImages = async () => {
    const images = document.querySelectorAll("[data-slide-img] img");

    await Promise.all(
      Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();

        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );
  };

  useLayoutEffect(() => {
    let ctx;

    const init = async () => {
      await waitForImages();

      ctx = gsap.context(() => {
        const total = services.length;
        const scrollDistance = total * 1000;

        gsap.set(titleRefs.current, { transformOrigin: "50% 50% -50px" });

        gsap.set("[data-slide-img][data-slide='0']", {
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
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const slide = Math.min(total, Math.floor(progress * total) + 1);

              if (counterRef.current) {
                counterRef.current.innerHTML = `
                  <span style="color:#D4A017;">0${slide}</span>
                  <span style="color:#000;"> / 0${total}</span>
                `;
              }
            },
          },
        });

        tl.set(counterRef.current, { opacity: 1 });
        tl.set(buttonRef.current, { opacity: 1 });

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
              y: `-${(i + 1) * vh}px`,
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

        tl.set(titleRefs.current[total - 1], { opacity: 1 });
      });

      ScrollTrigger.refresh();
    };

    init();

    return () => ctx?.revert();
  }, [vh]);

  return (
    <section
      ref={containerRef}
      className="block md:hidden relative w-full h-screen overflow-hidden bg-white"
    >
      {/* CENTER CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-40">
        {/* Counter */}
        <div
          ref={counterRef}
          className="absolute bottom-10 right-10 text-[16px] font-semibold tracking-widest"
        >
          <span className="text-[#D4A017]">01</span>
          <span className="text-black"> / 03</span>
        </div>

        {/* Titles */}
        <div className="relative h-24 w-full flex items-center justify-center pointer-events-none">
          {services.map((s, i) => (
            <h2
              key={i}
              ref={(el) => (titleRefs.current[i] = el)}
              className="absolute text-[32px] sm:text-[40px] text-black text-center px-4 leading-tight"
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

        {/* Button */}
       
                <button
                  ref={buttonRef}
                  onClick={() => setOpenModal(true)}
                  className="flex items-center gap-2 mt-4 xl:mt-4 text-black px-5 py-2 rounded-full font-urban text-[12px] leading-[16px] font-bold hover:scale-[1.03] transition"
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
          style={{ height: `${services.length * vh}px` }}
        >
          {services.map((service, slideIndex) => (
            <div key={slideIndex} className="relative w-full h-screen">
              {service.images.map((img, j) => (
                <div
                  key={j}
                  data-slide-img
                  data-slide={slideIndex}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px]"

                //   className="absolute -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-lg overflow-hidden"
                  style={{
                    left: `${img.x}%`,
                    top: `${img.y}%`,
                  }}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-cover shadow-xl"
                    priority={slideIndex === 0}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-lg relative">
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <ModalForm
              onSuccess={() => setShowContactModal(true)}
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