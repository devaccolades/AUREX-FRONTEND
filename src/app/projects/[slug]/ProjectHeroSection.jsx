import Image from "next/image";
import bottom from "../../../../public/images/projects/Exclude.svg";
import map from "../../../../public/images/projects/map-pin.svg";
import building from "../../../../public/images/projects/building.svg";
import building2 from "../../../../public/images/projects/building-2 (1) 1.svg";
import ruler from "../../../../public/images/projects/ruler 1.svg";
import spark from "../../../../public/images/projects/sparkles.svg";
import loc from "../../../../public/images/projects/location.svg";
import home from "../../../../public/images/projects/house 1.svg";
import check from "../../../../public/images/projects/book-check 1.svg";
import qr from "../../../../public/images/projects/REREA NUMBER LIARD 2.svg";

const project = {
  title: "Aurex Liard",
  location: "Mulangunnathukavu, Thrissur",
  rera: "K-RERA/PRJ/TSR/178/2023",
  qr_code: qr,
  short_title: "A Home That Reflects Your Aspirations",
  description:
    "Premium 2 & 3 BHK apartments at the heart of Thrissur with modern amenities and highway access.",
  image: "/images/projects/aurexliard.jpg",
};

const stats = [
  {
    label: "Property Type",
    value: "2 & 3 BHK Apartments",
    icon: building2,
  },
  {
    label: "Total Area",
    value: "23.4 Cents",
    icon: ruler,
  },
  {
    label: "Sqft Range",
    value: "951 – 1508 sqft",
    icon: home,
  },
  {
    label: "Total Units",
    value: "31 | Structure B+G+8",
    icon: check,
  },
];

const highlights = [
  {
    title: "Prime Location",
    desc: "Mulangunnathukavu, Thrissur",
    icon: map,
  },
  {
    title: "Premium Apartments",
    desc: "2 & 3 BHK Luxury Living",
    icon: building,
  },
  {
    title: "Highway Facing",
    desc: "Excellent Connectivity",
    icon: spark,
  },
];

export default function ProjectHero() {
  return (
    <main>
      <section className="relative w-full h-[80vh] md:h-[65vh] lg:h-[90vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 md:hidden z-10" />
        <div className="absolute bottom-[10%] left-[5%] md:top-[30%] flex flex-col gap-y-2 md:gap-y-4 z-20">
          <button className="w-fit bg-[#006A54] text-white font-urban text-[16px] leading-[100%] font-extrabold  py-2 px-2.5 rounded-3xl">
            Ready to Move
          </button>
          <h1 className="w-[80%] lg:w-full text-wrap space-y-1 font-urban font-semibold text-white text-[32px] md:text-[36px] lg:text-[48px] leading-[100%]">
            {project.title}
          </h1>
          <div className="w-fit flex gap-2 py-2 px-2.5 bg-white/20 backdrop-blur-[9.7px] border border-gray-400 rounded-3xl">
            <Image src={loc} alt="icon" />
            <h3 className="text-white text-[13px] font-bold">
              {project.location}
            </h3>
          </div>
        </div>

        <div className="absolute w-fit right-[5%] md:top-[30%] hidden md:grid grid-cols-1 gap-y-2 md:gap-y-4  ">
          <div className="flex gap-2 items-center ">
            <Image src={project.qr_code} alt="icon" className="w-10 h-10" />
            <div className="flex flex-col w-full">
              <h1 className="w-full text-wrap space-y-1 font-urban font-extrabold text-white text-[12px] leading-[100%]">
                RERA REG. NO
              </h1>
              <h1 className="w-full text-wrap space-y-1 font-urban font-extrabold text-white text-[12px] leading-[100%] whitespace-nowrap">
                {project.rera}
              </h1>
            </div>
          </div>
          <div className="max-w-[250px] flex flex-col">
            <h3 className="font-urban font-medium text-[13px] leading-[156%] text-white">
              {project.short_title}
            </h3>
            <p className="font-urban font-semibold text-[16px] leading-[156%] text-white">
              {project.description}
            </p>
          </div>
        </div>

        <Image
          src={bottom}
          alt="bottom design"
          className="absolute bottom-0 left-0 w-full h-[50px] md:h-[120px] object-cover object-top z-10"
        />

        <div className=" absolute bottom-0 left-[5%] lg:left-[10%] pb-10 z-20 lg:w-[80%] w-[90%] mx-auto hidden md:grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 ">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start  gap-3 p-2.5 rounded-[20px] border border-[#E9E9E9] bg-white"
                style={{
                  boxShadow: `
      0px 2px 5px 0px #0000000D,
      0px 8px 8px 0px #0000000A,
      0px 19px 11px 0px #00000008,
      0px 34px 14px 0px #00000003,
      0px 53px 15px 0px #00000000
    `,
                }}
              >
                <div className="p-3 rounded-lg bg-[#E09B07]">
                  <Image
                    src={item.icon}
                    alt="icon"
                    className="w-6 h-6 text-white"
                  />
                </div>

                <div>
                  <p className="text-[13px] md:text-[14px]  leading-[156%] text-[#484848]">
                    {item.label}
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[16px] leading-[156%] md:leading-[16px] lg:leading-[18px] font-semibold text-black">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className=" w-[90%] mx-auto mb-5 md:hidden grid grid-cols-1 gap-y-2 md:gap-y-4">
        <div className="flex gap-2 items-center ">
          <Image src={project.qr_code} alt="icon" className="w-10 h-10" />
          <div className="flex flex-col w-full">
            <h1 className="w-full text-wrap space-y-1 font-urban font-extrabold text-black text-[12px] leading-[100%]">
              RERA REG. NO
            </h1>
            <h1 className="w-full text-wrap space-y-1 font-urban font-extrabold text-black text-[12px] leading-[100%] whitespace-nowrap">
              {project.rera}
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="font-urban font-medium text-[13px] leading-[156%] text-black">
            {project.short_title}
          </h3>
          <p className="font-urban font-semibold text-[16px] leading-[156%] text-black">
            {project.description}
          </p>
        </div>
      </div>

      <div className=" pb-2 w-[90%] mx-auto md:hidden grid grid-cols-2 gap-3 lg:gap-5 ">
        {stats.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start  gap-3 p-2.5 rounded-[20px] border border-[#E9E9E9] bg-white"
              style={{
                boxShadow: `
      0px 2px 5px 0px #0000000D,
      0px 8px 8px 0px #0000000A,
      0px 19px 11px 0px #00000008,
      0px 34px 14px 0px #00000003,
      0px 53px 15px 0px #00000000
    `,
              }}
            >
              <div className="p-3 rounded-lg bg-[#E09B07]">
                <Image
                  src={item.icon}
                  alt="icon"
                  className="w-6 h-6 text-white"
                />
              </div>

              <div>
                <p className="text-[13px] md:text-[14px]  leading-[156%] text-[#484848]">
                  {item.label}
                </p>
                <p className="text-[13px] md:text-[14px] lg:text-[16px] leading-[156%] md:leading-[16px] lg:leading-[18px] font-semibold text-black">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative z-20 lg:w-[80%] w-[90%] mx-auto mt-3 grid grid-cols-1 md:grid-cols-3 gap-5">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-2.5 p-5 rounded-[20px] bg-[#FAF5E9]"
          >
            <div className="p-3 rounded-lg bg-[#FAEDD2] flex items-center justify-center">
              <Image src={item.icon} alt={item.title} width={24} height={24} />
            </div>

            <div className="space-y-1">
              <h4 className="font-urban text-[14px] md:text-[16px] lg:text-[18px] leading-[156%] md:leading-[16px] lg:leading-[18px] font-semibold text-black">
                {item.title}
              </h4>
              <p className="text-[13px] md:text-[14px]  leading-[156%] text-[#484848]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
