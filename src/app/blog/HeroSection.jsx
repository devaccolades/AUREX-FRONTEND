import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({data}) => {
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
    <div className="relative mt-[106px] w-[95%] xl:w-[80%] mx-auto  flex flex-col md:flex-row md:justify-between md:mt-[141px]">
      <div className="w-fit md:sticky self-start top-20 md:top-[141px] xl:top-[220px] pb-10 ">
        <p className="text-[13px] leading-[20px] tracking-[-2%] font-normal  text-[#006A54] md:text-[14px] xl:text-[16px]">
          #Blogs
        </p>
        <h1 className="text-[32px] leading-[32px] tracking-[0%] mt-[4px] max-w-[336px] md:max-w-[460px] font-semibold uppercase font-urban md:text-[36px] md:leading-[36px] md:mt-[10px] xl:text-[48px] xl:leading-[48px] ">
          Insights, Inspiration & Innovation
        </h1>
        <p className="mt-[5px] font-poppins max-w-[322px] md:max-w-[300px] text-[12px] leading-[18px] tracking-[0%] md:text-[13px] md:leading-[18px] md:mt-[8px] xl:text-[14px]">
          Explore the world of architecture, design trends, and lifestyle
          inspirations from Aurex Builders. Stay informed, get inspired, and see
          how we’re redefining modern living — one story at a time.
        </p>
        <div className="mt-[8px] flex flex-wrap space-x-[6px] space-y-[6px] md:flex-col xl:mt-[31px]">
          {innovation.map((item, index) => (
            <button
              key={index}
              className="flex items-center border-[1px] border-black rounded-full py-[8px] px-[10px] w-fit hover:bg-black hover:text-white transition-all duration-300 hover:scale-[1.05] cursor-pointer"
            >
              <span className="text-[12px] leading-[12px] tracking-[0%] font-urban font-medium md:text-[13px]">
                {item.img}
              </span>
              <span className="text-[12px] leading-[12px] tracking-[0%] font-urban font-medium md:text-[13px]">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="md:flex w-full flex-col items-end xl:mt-[80px]">
        <div className="mt-[28px] w-fit flex flex-col items-start">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-end"
            >
              <p className="font-urban font-medium text-[12px] mr-[7px] md:mr-[15px] leading-[14px] tracking-[-4%] text-[#9B9B9B] md:text-[14px] ">
                {item.date_added}
              </p>
              <div className="relative flex space-x-[4px] border-l-1  pl-[7px] md:pl-[15px] pb-[29px] w-full lg:space-x-[12px]">
                <div className="absolute top-0 -left-1.5 h-[10px] w-[10px] rounded-full bg-[#D9D9D9]"></div>
                <Image
                  src={item.image}
                  alt={item.title}
                  height={100}
                  width={100}
                  className="h-[98px] w-[92px] rounded-2xl object-cover lg:h-[119px] lg:w-[197px]"
                />
                <div className="w-full">
                  <p className="font-urban font-medium text-[12px] leading-[13px] tracking-[0%] lg:text-[13px]">
                    {item.type}
                  </p>
                  <h2 className="font-urban font-bold text-[14px] leading-[14px] tracking-[0%] max-w-[150px] md:max-w-[180px] md:max-x-[173px] mt-[4px] uppercase lg:text-[20px] lg:leading-[20px] lg:max-w-[250px]">
                    {item.title}
                  </h2>
                  <p className="font-normal font-poppins text-[12px] leading-[16px] tracking-[0%] mt-[3px] lg:mt-[6px] max-w-[180px]">
                    {item.desc}
                  </p>
                 <Link href={`/blog/${item.slug}`}>
                  <button className="font-urban font-extrabold bg-black text-white text-[12px] leading-[13px] tracking-[0%] py-[6px] px-[8px] rounded-full mt-[6px] cursor-pointer hover:scale-[1.05] transition-all duration-300 ">
                    Read More
                  </button>
                 </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




