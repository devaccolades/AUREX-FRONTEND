"use client";

import Image from "next/image";
import { useState } from "react";
import ModalForm from "@/components2/forms/ModalForm";

export default function GallerySection() {
  const [openModal, setOpenModal] = useState(false)
  const gallery = [
    {
      name: "Building Night View",
      type: "image",
      thumbnail: "",
      video: "",
      video_alt: "",
      image: "/images/home/gallery/g3.png",
      image_alt: "Night view building"
    },
    {
      name: "Garden View",
      type: "video",
      thumbnail: "/images/home/gallery/g3.png",
      video: "/images/home/gallery/demo.mp4",
      video_alt: "",
      image: "",
      image_alt: "Garden outside"
    },
    {
      name: "Villa Exterior",
      type: "image",
      thumbnail: "",
      video: "",
      video_alt: "",
      image: "/images/home/gallery/g3.png",
      image_alt: "Luxury villa exterior"
    },
    {
      name: "Street View",
      type: "image",
      thumbnail: "",
      video: "",
      video_alt: "",
      image: "/images/home/gallery/g3.png",
      image_alt: "Street view road"
    },
    {
      name: "Top View",
      type: "image",
      thumbnail: "",
      video: "",
      video_alt: "",
      image: "/images/home/gallery/g3.png",
      image_alt: "Top view layout"
    }
  ];

  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleSelect = (item) => {
    setActiveImage(item);
    setIsPlaying(false);
  }
  return (
    <section className=" relative">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-100"
        style={{
          backgroundImage: "url('/images/home/AUREX (1).svg')",
          backgroundSize: "1400px 800px",
        }}
      ></div>
      {/* <div className="relative containers mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start border-x border-gray-200"> */}

      <div className="relative container mx-auto    grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start  border-x border-gray-200">

        {/* LEFT CONTENT */}
        <div className="col-span-12 md:col-span-5 lg:col-span-5 py-8 lg:py-28">
          <p className="text-[#006A54] font-poppins font-regular text-[16px]  leading-[20px]">#Gallery</p>
          <h1 className="text-[32px] md:text-[40px] xl:text-[64px] font-urban font-medium leading-[32px] md:leading-[40px] xl:leading-[60px] mt-2">
            Where Every <br className="hidden md:block" /> Corner Tells <br className="hidden md:block" /> a Story
          </h1>
          <p className="text-black text-[13px] lg:text-[14px]  leading-[156%] mt-4 max-w-sm">
            Step inside a world where modern design meets timeless tranquility.
            From lush landscapes to luxurious interiors.
          </p>

          <div className="flex items-center justify-between ">

            {/* Left Text */}
            <p className="text-[13px] leading-[100%] text-black italic cursor-pointer ">
              Love What You See? Book a Site <br className="hidden md:block" /> Visit Today
            </p>

            {/* Button */}
            <button onClick={() => setOpenModal(true)}
              className="flex items-center gap-0 text-black px-5 py-2 rounded-full font-urban text-[12px] leading-[16px] font-bold hover:scale-[1.03] transition">
              <Image
                src="/images/home/enq.svg"
                alt="Arrow"
                width={20}
                height={20}
              />

              <span className="flex items-center gap-0">
                ENQUIRE
                <span className="flex bg-[#FF0000] w-8 lg:w-12 h-8 lg:h-12 rounded-full items-center justify-center text-white font-bold">
                  NOW
                </span>
              </span>
            </button>

          </div>

        </div>


        <div className="col-span-12 md:col-span-7 lg:col-span-7 flex gap-2 md:gap-10 border-t border-gray-300">

          {/* MAIN IMAGE */}
          {/* <div className="col-span-5 lg:col-span-5 border-x border-gray-200"> */}
          <div className=" border-x border-gray-200">
            <div className="relative overflow-hidden  py-13 lg:py-30">

              {/* IMAGE MODE */}
              {activeImage.type === "image" && (
                <Image
                  src={activeImage.image}
                  alt={activeImage.image_alt}
                  width={900}
                  height={600}
                  className="w-[242px] md:w-[343px] lg:w-[565px] h-[239px] md:h-[280px] lg:h-[460px] object-cover transition-all duration-300"
                />
              )}

              {/* VIDEO MODE */}
              {activeImage.type === "video" && (
                <>
                  {/* Show thumbnail BEFORE playing */}
                  {!isPlaying && (
                    <div className="relative">
                      <Image
                        src={activeImage.thumbnail}
                        alt={activeImage.image_alt}
                        width={900}
                        height={600}
                        className="w-[242px] md:w-[343px] lg:w-[565px] h-[239px] md:h-[280px] lg:h-[460px]  object-cover"
                      />

                      {/* PLAY BUTTON */}
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                          ▶
                        </div>
                      </button>
                    </div>
                  )}

                  {/* Show video AFTER user clicks play */}
                  {isPlaying && (
                    <video
                      src={activeImage.video}
                      controls
                      autoPlay
                      className="w-[242px] md:w-[343px] lg:w-[565px] h-[239px] md:h-[280px] lg:h-[460px]  object-cover"
                    />
                  )}
                </>
              )}
            </div>
          </div>


          {/* RIGHT SIDE THUMBNAIL SLIDER */}
          {/* <div className="col-span-2 lg:col-span-2 h-[384px] lg:h-[684px] border-x border-gray-300 overflow-y-auto hide-scrollbar space-y-4"> */}
          <div className="h-[384px] lg:h-[700px]  border-l border-gray-300 overflow-y-auto hide-scrollbar space-y-4">
            {gallery.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(item)}
                className={`relative cursor-pointer rounded-lg overflow-hidden transition-all 
        ${activeImage.name === item.name ? "border border-black" : "border border-transparent"}`}
              >

                {/* IMAGE TYPE THUMBNAIL */}
                {item.type === "image" && (
                  <Image
                    src={item.image}
                    alt={item.image_alt}
                    width={300}
                    height={180}
                    className="w-[93px] lg:w-[179px] h-[77px] lg:h-[140px] object-cover"
                  />
                )}

                {/* VIDEO TYPE THUMBNAIL */}
                {item.type === "video" && (
                  <div className="relative">
                    <Image
                      src={item.thumbnail}
                      alt={item.image_alt}
                      width={300}
                      height={180}
                      className="w-[93px] lg:w-[179px] h-[77px] lg:h-[140px] object-cover"
                    />

                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                        ▶
                      </div>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  .hide-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`}</style>


      </div>
      {openModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-lg relative z-20">

            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <ModalForm />
          </div>
        </div>
      )}
    </section>
  );
}
