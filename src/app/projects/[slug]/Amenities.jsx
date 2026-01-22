"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ModalForm from "@/components2/forms/ModalForm";
import ProjectEnquiryModal from "@/components2/forms/ProjectEnquiryModal";

export default function AmenitiesSection({ amenities, title, projectVideos }) {
  if (!Array.isArray(amenities) || amenities.length === 0) {
    return null; // ⛔ nothing to show
  }
  const playerRef = useRef(null);
  const apiReadyRef = useRef(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);



  const YOUTUBE_URL = projectVideos[0].video_url;
  const getYoutubeId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/.*v=)([^&]+)/);
    return match ? match[1] : null;
  };

  const VIDEO_ID = getYoutubeId(YOUTUBE_URL);

  useEffect(() => {
    if (!openVideo || !VIDEO_ID) return;

    const createPlayer = () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player("yt-player", {
        events: {
          onStateChange: (event) => {
            // 0 = ENDED
            if (event.data === 0) {
              setOpenVideo(false);
            }
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = () => {
        apiReadyRef.current = true;
        createPlayer();
      };
    } else {
      apiReadyRef.current = true;
      createPlayer();
    }

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [openVideo]);

  const [activeIndex, setActiveIndex] = useState(2);
  const [sizes, setSizes] = useState({
    cardW: 260,
    cardH: 420,
    gap1: 260,
    gap2: 460,
    perspective: 1800,
  });

  /* 🔹 Responsive sizing */
  useEffect(() => {
    const updateSizes = () => {
      const w = window.innerWidth;
      if (w < 320) {
        // Very small devices (320px)
        setSizes({
          cardW: 120,
          cardH: 180,
          gap1: 100,
          gap2: 200,
          perspective: 1000,
        });
      } else if (w < 640) {
        // Mobile
        setSizes({
          cardW: 120,
          cardH: 200,
          gap1: 120,
          gap2: 240,
          perspective: 1200,
        });
      } else if (w < 1024) {
        // Tablet
        setSizes({
          cardW: 160,
          cardH: 220,
          gap1: 160,
          gap2: 280,
          perspective: 1400,
        });
      } else if (w < 1024) {
        // Tablet
        setSizes({
          cardW: 160,
          cardH: 220,
          gap1: 160,
          gap2: 280,
          perspective: 1400,
        });
      } else if (w < 1440) {
        // Laptop
        setSizes({
          cardW: 210,
          cardH: 320,
          gap1: 200,
          gap2: 340,
          perspective: 1500,
        });
      } else {
        // Large desktop
        setSizes({
          cardW: 260,
          cardH: 420,
          gap1: 280,
          gap2: 480,
          perspective: 1800,
        });
      }
    };

    updateSizes(); // IMPORTANT: initial run
    window.addEventListener("resize", updateSizes);

    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev + 1) % amenities.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev - 1 + amenities.length) % amenities.length);
  };

  const visibleSlides = [-2, -1, 0, 1, 2].map((pos) => {
    const index = (activeIndex + pos + amenities.length) % amenities.length;
    return { ...amenities[index], position: pos, index };
  });

  return (
    <section className="pt-0 pb-8 md:pb-24 bg-gradient-to-b from-white to-[#f3f8fd] overflow-hidden">
      <div className="container text-center">
        {/* Heading */}
        <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-center mb-2">
          Redefining Everyday Living
        </h2>
        <p className="text-[13px] text-gray-500 mb-2">
          Experience a world of comfort with premium amenities
        </p>

        {/* CAROUSEL */}
        <div
          className="relative flex items-center justify-center"
          style={{
            height: sizes.cardH + 80,
            perspective: sizes.perspective,
          }}
        >
          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 lg:left-6 xl:left-10 z-50
                       w-6 lg:w-8 h-6 lg:h-8 rounded-full border border-black
                       hidden md:flex items-center justify-center
                       bg-white hover:bg-black hover:text-white transition"
          >
            ‹
          </button>

          {/* SLIDES */}
          {visibleSlides.map((slide) => {
            let transform = "";
            let zIndex = 1;

            if (slide.position === 0) {
              transform = "translateX(0) scale(1)";
              zIndex = 30;
            }
            if (slide.position === -1) {
              transform = `translateX(-${sizes.gap1}px) rotateY(-25deg) scale(0.88)`;
              zIndex = 20;
            }
            if (slide.position === 1) {
              transform = `translateX(${sizes.gap1}px) rotateY(25deg) scale(0.88)`;
              zIndex = 20;
            }
            if (slide.position === -2) {
              transform = `translateX(-${sizes.gap2}px) rotateY(-40deg) scale(0.65)`;
              zIndex = 10;
            }
            if (slide.position === 2) {
              transform = `translateX(${sizes.gap2}px) rotateY(40deg) scale(0.65)`;
              zIndex = 10;
            }

            return (
              <div
                key={slide.index}
                className="absolute transition-all duration-500 ease-out cursor-pointer"
                style={{ transform, zIndex }}
                onClick={() => setActiveIndex(slide.index)}
              >
                <div
                  className="relative rounded-[24px] overflow-hidden shadow-2xl"
                  style={{ width: sizes.cardW, height: sizes.cardH }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.image_alt || "Amenity Image"}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute -right-2 lg:right-6 xl:right-10 z-50
                      w-6 lg:w-8 h-6 lg:h-8 rounded-full border border-black
                       hidden md:flex items-center justify-center
                       bg-white hover:bg-black hover:text-white transition"
          >
            ›
          </button>
        </div>

        {/* TITLE + MOBILE ARROWS */}
        <div className="mt-2 flex items-center justify-between md:justify-center gap-3">
          {/* LEFT ARROW — MOBILE ONLY */}
          <button
            onClick={prevSlide}
            className="md:hidden w-7 h-7 rounded-full border border-black
               flex items-center justify-center
               bg-white hover:bg-black hover:text-white transition"
          >
            ‹
          </button>

          {/* TITLE + SUBTITLE */}
          <div className="text-center">
            <h4 className="text-sm md:text-[16px] leading-[20px] font-urban font-bold">
              {amenities[activeIndex].name}
            </h4>
            <p className="text-[12px] md:text-xs leading-[156%] text-gray-500">
              {amenities[activeIndex].subtext}
            </p>
          </div>

          {/* RIGHT ARROW — MOBILE ONLY */}
          <button
            onClick={nextSlide}
            className="md:hidden w-7 h-7 rounded-full border border-black
               flex items-center justify-center
               bg-white hover:bg-black hover:text-white transition"
          >
            ›
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-1 mt-4">
          {amenities.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-black" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mt-10 max-w-4xl mx-auto px-4">
          {/* PLAY VIDEO */}
          <button
            onClick={() => setOpenVideo(true)}
            className="flex items-center gap-2 px-5 py-2 border border-black rounded-full
              font-bold font-urban text-xs md:text-sm leading-[13px] bg-white  transition cursor-pointer"
          >
            <Image
              src="/images/icons/yt.svg"
              alt="corner"
              width={20}
              height={20}
            />
            Play Video
          </button>

          {/* ENQUIRE NOW */}
          <button
            onClick={() => setOpenForm(true)}
            className="flex items-center gap-2 px-5 py-2 border border-black rounded-full
               font-urban font-bold text-xs md:text-sm leading-[13px] bg-white  transition cursor-pointer"
          >
            <Image
              src="/images/icons/msg.svg"
              alt="corner"
              width={20}
              height={20}
            />
            Enquire Now
          </button>
        </div>
      </div>

      {(openVideo || openForm) && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm
               flex items-center justify-center z-[999] p-4"
          onClick={() => {
            setOpenVideo(false);
            setOpenForm(false);
          }}
        >
          {/*CLOSE BUTTON — SCREEN CORNER */}
          <button
            onClick={() => {
              setOpenVideo(false);
              setOpenForm(false);
            }}
            className="fixed top-6 md:top-5 right-5 text-black md:text-white text-3xl z-[1000]"
          >
            ×
          </button>

          {/* MODAL CONTENT */}
          <div
            className="rounded-xl p-1 md:p-4 w-[90%] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* VIDEO */}
            {openVideo && (
              <iframe
                id="yt-player"
                className="w-full aspect-video bg-black rounded-xl overflow-hidden"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&enablejsapi=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}

            {/* FORM */}
            {openForm && (
              // <div className="bg-white rounded-2xl p-2 md:p-4 lg:p-4 w-[80%]  relative">
              //   <ProjectEnquiryModal projectName={title} />
              // </div>
              <div className="fixed inset-0 z-[999] flex items-center justify-center ">
                        <div className="bg-white rounded-2xl p-4 w-[90%] max-w-lg relative  z-20">
                          {/* <button
                            className="absolute top-4 right-4 text-xl"
                            onClick={() => setOpenModal(false)}
                          >
                            ✕
                          </button> */}
                          <ProjectEnquiryModal projectName={title}/>
                       
                        </div>
                      </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
