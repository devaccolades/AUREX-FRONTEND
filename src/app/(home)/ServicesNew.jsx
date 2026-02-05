
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ModalForm from "@/components2/forms/ModalForm";
import ContactModal from "@/components2/ContactModal";

const services = [
  {
    id: 1,
    title: "INTERIOR DESIGNING",
    images: [
      { src: "/images/home/services/i1.jpg", x: 40, y: 40 },
      { src: "/images/home/services/i2.webp", x: 90, y: 25 },
      { src: "/images/home/services/i3.jpg", x: 50, y: 75 },
    ],
  },
  {
    id: 2,
    title: "RENTAL AND RESALE ASSISTANCE",
    images: [
      { src: "/images/home/services/r1.webp", x: 38, y: 35 },
      { src: "/images/home/services/r2.jpg", x: 98, y: 25 },
      { src: "/images/home/services/r3.webp", x: 50, y: 78 },
    ],
  },
  {
    id: 3,
    title: "MAINTENANCE ASSISTANCE",
    images: [
      { src: "/images/home/services/m1.jpg", x: 35, y: 45 },
      { src: "/images/home/services/m2.webp", x: 75, y: 25 },
      { src: "/images/home/services/m3.webp", x: 88, y: 80 },
      { src: "/images/home/services/m4.jpg", x: 25, y: 88 },
    ],
  },
];

export default function ServicesMobile() {
  const [openModal, setOpenModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the wrapper
      // When wrapper top hits viewport top (0), we start at 0
      // When wrapper bottom hits viewport bottom, we're at 1
      const scrollStart = -rect.top;
      const scrollEnd = wrapperHeight - viewportHeight;
      const scrollProgress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      // Determine which slide based on progress
      const slideIndex = Math.min(
        services.length - 1,
        Math.floor(scrollProgress * services.length)
      );

      setCurrentSlide(slideIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Wrapper that creates scroll height */}
      <div 
        ref={wrapperRef}
        className="block md:hidden relative" 
        style={{ height: `${services.length * 100}vh` }}
      >
        
        {/* Sticky section that pins to top */}
        <section className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-white">
          
          {/* Overlay Content - stays centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none">
            {/* Counter */}
            <div className="absolute bottom-10 right-10 text-[16px] font-urban  font-semibold tracking-widest">
              <span className="text-[#D4A017]">0{currentSlide + 1}</span>
              <span className="text-black"> / 0{services.length}</span>
            </div>

            {/* Titles */}
            <div className="relative h-32 w-full flex items-center justify-center px-4">
              {services.map((s, i) => (
                <h2
                  key={i}
                  className="absolute text-[32px] sm:text-[40px] text-black text-center leading-tight transition-all duration-700 ease-out"
                  style={{
                    opacity: currentSlide === i ? 1 : 0,
                    transform:
                      currentSlide === i
                        ? "perspective(1000px) rotateX(0deg) translateY(0px)"
                        : currentSlide > i
                        ? "perspective(1000px) rotateX(90deg) translateY(-50px)"
                        : "perspective(1000px) rotateX(-90deg) translateY(50px)",
                  }}
                >
                  {s.title}
                </h2>
              ))}
            </div>

            {/* Button */}
            <button
                    //  ref={buttonRef}
                     onClick={() => setOpenModal(true)}
                     className="flex items-center gap-2 mt-0 xl:mt-4 text-black px-5 py-2 rounded-full font-urban text-[12px] leading-[16px] font-bold hover:scale-[1.03] transition"
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

          {/* Slides Container */}
          <div className="absolute inset-0 z-10">
            {services.map((service, slideIndex) => (
              <div
                key={slideIndex}
                className="absolute inset-0 w-full h-screen"
              >
                {/* Images */}
                {service.images.map((img, j) => (
                  <div
                    key={j}
                 className="absolute -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px]"

                    // className="absolute -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-lg overflow-hidden transition-all duration-1000 ease-out"
                    style={{
                      left: `${img.x}%`,
                      top: `${img.y}%`,
                      opacity: currentSlide === slideIndex ? 1 : 0,
                      transform:
                        currentSlide === slideIndex
                          ? "translate(-50%, -50%) scale(1) translateY(0px)"
                          : currentSlide > slideIndex
                          ? "translate(-50%, -50%) scale(0.95) translateY(-30px)"
                          : "translate(-50%, -50%) scale(0.98) translateY(30px)",
                      transitionDelay: `${j * 80}ms`,
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

        </section>
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
    </>
  );
}