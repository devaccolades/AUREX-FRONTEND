import Image from "next/image";
import React from "react";
import bank3 from "../../../public/images/dreamsInThrissur/canara.svg";
import bank4 from "../../../public/images/dreamsInThrissur/cub.svg";
import bank5 from "../../../public/images/dreamsInThrissur/sbi.svg";
import bank6 from "../../../public/images/dreamsInThrissur/lic.svg";
import bank7 from "../../../public/images/dreamsInThrissur/bob.svg";
import EnquiryForm from "@/components2/forms/EnquiryForm";
// import bank1 from "/images/axis.png";

const DreamsInThrissur = () => {
  const banks = [ bank3, bank4, bank5, bank6, bank7, ];
  return (
    <section className="my-6">
      <div className="container bg-secondary py-[20px] md:py-[46px] lg:py-[64px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[66px] rounded-[20px] ">
      <div className="flex flex-col min-[500px]:flex-row gap-4 md:gap-6 lg:gap-8 justify-between items-center">
        <div className="flex flex-col items-start  w-full md:w-[350px] lg:w-[450px] mb-2 md:mb-30 lg:mb-10">
          <div>
            <h2 className="text-[32px] md:text-[42px] lg:text-[64px] leading-[36px] md:leading-[48px] lg:leading-[64px] tracking-[-4%] font-medium font-urban">
              Building Dreams in Thrissur
            </h2>
            <p className="mt-[13px] text-[13px] lg:text-[14px] leading-[156%]">
              We offer end-to-end building solutions — from planning and design
              to construction and finishing. Each project reflects our
              commitment to superior craftsmanship, sustainability, and timeless
              design.
            </p>
          </div>
          <div>
            <p className="md:mt-[36px] mt-[20px] text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] font-bold mb-2 md:mb-[16px]">
              Our Banking Partners
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-4 items-end gap-y-[10px] w-full h-full">
              {banks &&
                banks.map((bank, index) => (
                  <Image
                    key={index}
                    src={bank}
                    height={120}
                    width={140}
                    alt="bank img"
                    className="h-[45px] md:h-[54px] w-auto object-contain"
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end">
        <div className="rounded-[20px] p-[20px]  md:p-[26px] lg:p-[40px]  w-[280px] min-[500px]:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[519px] bg-[#FFFFFF]">
          <p className="font-urbarn text-[16px] lg:text-[24px] leading-[16px] lg:leading-[28px] tracking-[-4%] font-medium">
            WE ARE READY TO ANSWER ALL YOUR QUESTIONS
          </p>
          <EnquiryForm />
        </div>
        </div>
      </div>  
      </div>
    </section>
  );
};

export default DreamsInThrissur;
