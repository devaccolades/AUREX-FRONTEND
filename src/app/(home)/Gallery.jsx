"use client";

import Image from "next/image";
import { useState } from "react";

export default function GallerySection() {
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
      <div className="relative w-[90%] md:w-[80%] mx-auto    grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-x border-gray-200">

        {/* LEFT CONTENT */}
        <div className="md:col-span-5 py-18">
          <p className="text-[#006A54] font-poppins font-regular text-[16px]  leading-[20px]">#Gallery</p>
          <h1 className="text-4xl md:text-[64px] font-regular leading-[60px] mt-2">
            Where Every <br /> Corner Tells <br /> a Story
          </h1>
          <p className="text-black text-[14px] leading-[156%] mt-4 max-w-sm">
            Step inside a world where modern design meets timeless tranquility.
            From lush landscapes to luxurious interiors.
          </p>

          <div className="flex items-center justify-between mt-0">

            {/* Left Text */}
            <p className="text-[13px] leading-[100%] text-black italic cursor-pointer">
              Love What You See? Book a Site <br /> Visit Today
            </p>

            {/* Button */}
            <button className="flex items-center gap-2 text-black px-5 py-2 rounded-full font-urban text-[12px] leading-[16px] font-bold hover:scale-[1.03] transition">
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

        </div>

        {/* MAIN IMAGE */}
        <div className="md:col-span-5">
          <div className="relative overflow-hidden border-x border-gray-200 py-18">

            {/* IMAGE MODE */}
            {activeImage.type === "image" && (
              <Image
                src={activeImage.image}
                alt={activeImage.image_alt}
                width={900}
                height={600}
                className="w-[565px] h-[565px] md:h-[460px] object-cover transition-all duration-300"
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
                      className="w-[565px] h-[565px] md:h-[460px] object-cover"
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
                    className="w-[565px] h-[565px] md:h-[460px] object-cover"
                  />
                )}
              </>
            )}
          </div>
        </div>


        {/* RIGHT SIDE THUMBNAIL SLIDER */}
        <div className="md:col-span-2 h-[500px] border-x border-gray-300 overflow-y-auto no-scrollbar space-y-4">
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
                  className="w-[169px] h-[120px] object-cover"
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
                    className="w-[169px] h-[120px] object-cover"
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
    </section>
  );
}
