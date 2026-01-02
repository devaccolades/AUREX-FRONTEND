import Image from "next/image";
import React from "react";
import bank3 from "../../../public/images/dreamsInThrissur/canara.svg";
import bank4 from "../../../public/images/dreamsInThrissur/cub.svg";
import bank5 from "../../../public/images/dreamsInThrissur/sbi.svg";
import bank6 from "../../../public/images/dreamsInThrissur/lic.svg";
import bank7 from "../../../public/images/dreamsInThrissur/bob.svg";
// import bank1 from "/images/axis.png";

const DreamsInThrissur = () => {
  const banks = [ bank3, bank4, bank5, bank6, bank7, ];
  return (
    <section className="container bg-secondary py-[20px] md:py-[46px] lg:py-[64px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[66px] rounded-[20px] ">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center">
        <div className="flex flex-col items-start  w-full md:w-[350px] mb-2 md:mb-30 lg:mb-10">
          <div>
            <h2 className="text-[32px] md:text-[42px] lg:text-[64px] leading-[36px] md:leading-[48px] lg:leading-[64px] tracking-[-4%] font-medium font-urban">
              Building Dreams <br className="lg:hidden block"/>  in Thrissur
            </h2>
            <p className="mt-[13px] text-[13px] lg:text-[14px] leading-[156%]">
              We offer end-to-end building solutions — from planning and design
              to construction and finishing. Each project reflects our
              commitment to superior craftsmanship, sustainability, and timeless
              design.
            </p>
          </div>
          <div>
            <p className="mt-[56px] text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] font-bold mb-2 md:mb-[16px]">
              Our Banking Partners
            </p>
            <div className="flex flex-wrap gap-[16px] md:gap-[16px] items-end gap-y-[10px]">
              {banks &&
                banks.map((bank, index) => (
                  <Image
                    key={index}
                    src={bank}
                    height={100}
                    width={100}
                    alt="bank img"
                    className="h-[26px] md:h-[24px] w-auto object-contain"
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[20px] p-[20px] md:p-[26px] lg:p-[40px]  w-[280px] md:w-[332px] lg:w-[500px] xl:w-[519px]">
          <p className="font-urbarn text-[16px] lg:text-[24px] leading-[16px] lg:leading-[28px] tracking-[-4%] font-medium">
            WE ARE READY TO ANSWER ALL YOUR QUESTIONS
          </p>
          <div>
            <form className="flex flex-col gap-[10px] mt-[24px]">
              <div>
                <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                  Full Name*
                </p>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="border-[#959595] border-1 text-[12px] leading-[100%]  w-full font-urban rounded-[6px] px-[10px] py-[16px]"
                />
              </div>
              <div>
                <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                  Phone Number*
                </p>
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  className="border-[#959595] border-1 w-full text-[12px] leading-[100%]  font-urban rounded-[6px] px-[10px] py-[16px]"
                />
              </div>
              <div>
                <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                  Email Address*
                </p>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border-[#959595] border-1  text-[12px] leading-[100%]  w-full font-urban rounded-[6px] px-[10px] py-[16px]"
                />
              </div>
              <div>
                <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                  Message*
                </p>
                <input
                  type="text"
                  placeholder="Enter message "
                  className="border-[#959595] border-1 text-[12px] leading-[100%]  w-full font-urban rounded-[6px] px-[10px] py-[16px]"
                />
              </div>
              <button className="mt-4 bg-primary text-[15px] leading-[20px] font-roboto text-white py-[10px] w-full rounded-[6px]">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamsInThrissur;
