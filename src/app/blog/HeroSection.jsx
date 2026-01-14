import React from "react";
import image from "../../../public/images/blog/outer.png";
import Image from "next/image";

const HeroSection = () => {
  const innovation = [
    {
      title: "Home Design",
      img: "🏠",
    },
    {
      title: "Sustainable Living",
      img: "🌿",
    },
    {
      title: "Lifestyle & Inspiration",
      img: "💡",
    },
    {
      title: "Project Updates",
      img: "🏗️",
    },
    {
      title: "Construction Tips",
      img: "🧱",
    },
  ];

  const blog = [
    {
      type: "🧱 Construction Tips",
      title: "Designing Spaces That Feel Like Home",
      desc: "Explore the world of archit.....",
      img: "/images/blog/outer.png",
      date: "09/08/25",
    },
    {
      type: "🧱 Construction Tips",
      title: "Designing Spaces That Feel Like Home",
      desc: "Explore the world of archit.....",
      img: "/images/blog/outer.png",
      date: "09/08/25",
    },
    {
      type: "🧱 Construction Tips",
      title: "Designing Spaces That Feel Like Home",
      desc: "Explore the world of archit.....",
      img: "/images/blog/outer.png",
      date: "09/08/25",
    },
    {
      type: "🧱 Construction Tips",
      title: "Designing Spaces That Feel Like Home",
      desc: "Explore the world of archit.....",
      img: "/images/blog/outer.png",
      date: "09/08/25",
    },
    {
      type: "🧱 Construction Tips",
      title: "Designing Spaces That Feel Like Home",
      desc: "Explore the world of archit.....",
      img: "/images/blog/outer.png",
      date: "09/08/25",
    },
    {
      type: "🧱 Construction Tips",
      title: "Designing Spaces That Feel Like Home",
      desc: "Explore the world of archit.....",
      img: "/images/blog/outer.png",
      date: "09/08/25",
    },
  ];
  return (
    <div className="mt-[106px] w-[90%] mx-auto xl:pl-[219px] flex flex-col md:flex-row md:justify-between ">
      <div className="w-fit">
        <p className="text-[13px] leading-[20px] tracking-[-2%] font-normal  text-[#006A54] md:text-[14px] xl:text-[16px]">
          #Blogs
        </p>
        <h1 className="text-[32px] leading-[32px] tracking-[0%] mt-[4px] max-w-[336px] font-semibold uppercase font-urban md:text-[36px] md:leading-[36px] md:mt-[10px] xl:text-[48px] xl:leading-[48px] ">
          Insights, Inspiration & Innovation
        </h1>
        <p className="mt-[5px] font-poppins max-w-[322px] text-[12px] leading-[18px] tracking-[0%] md:text-[13px] md:leading-[18px] md:mt-[8px] xl:text-[14px]">
          Explore the world of architecture, design trends, and lifestyle
          inspirations from Aurex Builders. Stay informed, get inspired, and see
          how we’re redefining modern living — one story at a time.
        </p>
        <div className="mt-[8px] flex flex-wrap space-x-[6px] space-y-[6px] md:flex-col xl:mt-[31px]">
          {innovation.map((item, index) => (
            <div
              key={index}
              className="flex items-center border-[1px] border-black rounded-full py-[8px] px-[10px] w-fit"
            >
              <span className="text-[12px] leading-[12px] tracking-[0%] font-urban font-medium md:text-[13px]">
                {item.img}
              </span>
              <span className="text-[12px] leading-[12px] tracking-[0%] font-urban font-medium md:text-[13px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[28px] md:mt-[10px] md:mr-[10px] w-fit md:w-full">
        {blog.map((item, index) => (
          <div key={index} className="flex justify-between max-w-[500px]">
            <p className="font-urban font-medium text-[12px] md:ml-[100px] leading-[14px] tracking-[-4%] text-[#9B9B9B]">
              {item.date}
            </p>
            <div className="relative flex space-x-[4px] border-l-1  pl-[5px] md:pl-[20px] pb-[29px]">
              <div className="absolute top-0 -left-1.5 h-[10px] w-[10px] rounded-full bg-[#D9D9D9]"></div>
              <Image
                src={item.img}
                alt={item.title}
                height={100}
                width={100}
                className="h-[98px] w-[92px] rounded-2xl "
              />
              <div>
                <p className="font-urban font-medium text-[12px] leading-[13px] tracking-[0%]">
                  {item.type}
                </p>
                <h2 className="font-urban font-bold text-[14px] leading-[14px] tracking-[0%] max-w-[140px] md:max-x-[173px] mt-[4px]">
                  {item.title}
                </h2>
                <p className="font-normal text-[12px] leading-[16px] tracking-[0%] mt-[3px]">
                  {item.desc}
                </p>

                <button className="font-urban font-extrabold bg-black text-white text-[12px] leading-[13px] tracking-[0%] py-[6px] px-[8px] rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
