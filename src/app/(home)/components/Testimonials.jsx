"use client";
import React from "react";
import dynamic from "next/dynamic";
// import play from "../../../../public/images/testimonials/play.svg";
// import play from "../../../../public/images/testimonials/play.svg"
import Image from "next/image";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const imgs = [
    "/images/temp/img1.png",
    "/images/temp/img2.png",
    "/images/temp/img3.png",
    "/images/temp/img1.png",
    "/images/temp/img2.png",
    "/images/temp/img3.png",
  ];
  var settings = {
    dots: true,
    // infinite: true,
    infinite: imgs.length > 1,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    autoplay: true,
    draggable: imgs.length > 1,
    autoplay: imgs.length > 1,
    autoplaySpeed: 5000,
    slidesToShow: 2.8,
    centerMode: false,
    rtl: false,
  };
  return (
    <div className="relative z-40 overflow-x-hidden container pb-10 pt-10">
      <Slider {...settings}>
        {imgs.map((img, index) => (
          <Card key={index} bg={img} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;

const Card = ({ bg }) => {
  return (
    <div
      className="h-[477px] w-[337px] bg-white rounded-[20px] relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div
        className="p-5 rounded-full flex justify-center items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, .1)" }} // <-- 10% opacity background only
      >
        <Image
          src="/images/testimonials/play.svg"
          height={100}
          width={100}
          alt="play button"
          className="h-[42px] w-[42px] -mr-1"
        />
      </div>
    </div>
  );
};
