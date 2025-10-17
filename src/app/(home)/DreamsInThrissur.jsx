import Image from "next/image";
import React from "react";
import bank1 from "../../../public/images/dreamsInThrissur/axis.png";
import bank2 from "../../../public/images/dreamsInThrissur/icici.png";
import bank3 from "../../../public/images/dreamsInThrissur/canara.png";
import bank4 from "../../../public/images/dreamsInThrissur/cub.png";
import bank5 from "../../../public/images/dreamsInThrissur/sbi.png";
import bank6 from "../../../public/images/dreamsInThrissur/lic.png";
import bank7 from "../../../public/images/dreamsInThrissur/Bob.png";
import bank8 from "../../../public/images/dreamsInThrissur/hdfc.png";
// import bank1 from "/images/axis.png";

const DreamsInThrissur = () => {
  const banks = [bank1, bank2, bank3, bank4, bank5, bank6, bank7, bank8];
  return (
    <section className="containers bg-secondary py-[64px] px-[66px] rounded-[40px] ">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center">
        <div className="flex flex-col w-full md:w-[350px]">
          <div>
            <h2 className="text-[64px] leading-[64px] tracking-[-4%] font-urban">
              Building Dreams in Thrissur
            </h2>
            <p className="mt-[13px] text-[14px] leading-[156%]">
              We offer end-to-end building solutions — from planning and design
              to construction and finishing. Each project reflects our
              commitment to superior craftsmanship, sustainability, and timeless
              design.
            </p>
          </div>
          <div>
            <p className="mt-[56px] text-[16px] leading-[16px] font-bold mb-[16px]">
              Our Banking Partners
            </p>
            <div className="flex flex-wrap gap-[5px] items-end gap-y-[10px]">
              {banks &&
                banks.map((bank, index) => (
                  <Image
                    key={index}
                    src={bank}
                    height={100}
                    width={100}
                    alt="bank img"
                    className="h-[30px] w-auto object-contain"
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[20px] p-[40px] md:w-[300px] lg:w-[519px]">
          <p className="font-urbarn text-[24px] leading-[28px] tracking-[-4%] font-medium">
            WE ARE READY TO ANSWER ALL YOUR QUESTIONS
          </p>
          <div>
            <form className="flex flex-col gap-[10px] mt-[24px]">
              <div>
                <p className="text-[11px] leading-[12px] tracking-[0.3px] mb-[8px] font-medium">
                  Name
                </p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border-[#959595] border-1 w-full rounded-[6px] px-[10px] py-[16px]"
                />
              </div>
              <div>
                <p className="text-[11px] leading-[12px] tracking-[0.3px] mb-[8px] font-medium">
                  WhatsApp No
                </p>
                <input
                  type="number"
                  placeholder="Enter WhatsApp number"
                  className="border-[#959595] border-1 w-full rounded-[6px] px-[10px] py-[16px]"
                />
              </div>
              <div>
                <p className="text-[11px] leading-[12px] tracking-[0.3px] mb-[8px] font-medium">
                  Email
                </p>
                <input
                  type="email"
                  placeholder="Enter Email address"
                  className="border-[#959595] border-1 w-full rounded-[6px] px-[10px] py-[16px]"
                />
              </div>
              <div>
                <p className="text-[11px] leading-[12px] tracking-[0.3px] mb-[8px] font-medium">
                  Message
                </p>
                <input
                  type="text"
                  placeholder="Message here"
                  className="border-[#959595] border-1 w-full rounded-[6px] px-[10px] py-[16px]"
                />
              </div>
              <button className="bg-primary text-white py-[10px] w-full rounded-[6px]">
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
