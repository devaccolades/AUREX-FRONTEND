"use client";

export default function ModalForm() {
  return (
   <div className="bg-white rounded-[20px] p-[20px] md:p-[26px] lg:p-[40px] ">
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
  );
}
