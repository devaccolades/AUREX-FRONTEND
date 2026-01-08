"use client";
import Squares from "@/Components/Squares";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-yellow-100 to-yellow-30 pb-4 md:pb-8 lg:pb-10 pt-16 md:pt-20 lg:pt-24">

        <div className="absolute top-0 left-0 w-full h-2/3 overflow-hidden">
        <Squares
          speed={0.5}
          squareSize={36}
          direction="diagonal"
          borderColor="#dbdbdb"
          hoverFillColor="#dbdbdb"
        />
      </div>
      <div className="container">
      {/* Header */}
      <div className=" text-center mt-12 mb-12 ">
        <p className="text-[#006A54] font-poppins font-regular text-[16px] leading-[20px]">#Contact</p>
        <h2 className="text-[26px] md:text-[38px] xl:text-[48px] font-urban font-medium leading-[32px] md:leading-[40px] xl:leading-[48px] mt-2">
          LET’S BUILD SOMETHING <br className="hidden sm:block" />
          BEAUTIFUL TOGETHER
        </h2>
        <p className="mt-4  max-w-xl mx-auto text-black text-[13px] lg:text-[14px]  leading-[156%] ">
          At Aurex Builders, we value the relationships we build — not just with structures, 
          but with people. Whether you’re looking to start your dream home or simply want 
          to learn more about our projects, we’re just a message away.
        </p>
      </div>

      {/* Card */}
      <div className="relative max-w-6xl mx-auto bg-white  rounded-2xl shadow-xl p-3 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map */}
        <div className="w-full h-[240px] md:h-[520px] rounded-xl overflow-hidden">
          <iframe
            title="Aurum Complex Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.553348542203!2d76.21134769999999!3d10.535801999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef1ba5f1780b%3A0x9e41cffc8c2dac05!2sAurum%20Complex!5e0!3m2!1sen!2sin!4v1767852750515!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Form */}
        <div>
          <h3 className="font-urbarn text-[16px] lg:text-[24px] leading-[16px] lg:leading-[28px] tracking-[-4%] font-medium mb-4">
            We’re here to assist you!
          </h3>

          <form className="space-y-4">
            <div>
              <label className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">Full Name*</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="border-[#959595] border-1 text-[12px] leading-[100%]  w-full font-urban rounded-[6px] px-[10px] py-[16px]"
              />
            </div>

            <div>
              <label className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">Email Address*</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="border-[#959595] border-1 text-[12px] leading-[100%]  w-full font-urban rounded-[6px] px-[10px] py-[16px]"
              />
            </div>

            <div>
              <label className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">Phone Number*</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="border-[#959595] border-1 text-[12px] leading-[100%]  w-full font-urban rounded-[6px] px-[10px] py-[16px]"
              />
            </div>

            <div>
              <label className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">Message*</label>
              <textarea
                rows={4}
                placeholder="Enter message"
                className="border-[#959595] border-1 text-[12px] leading-[100%]  w-full font-urban rounded-[6px] px-[10px] py-[16px]"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-primary text-[15px] leading-[20px] font-roboto text-white py-[10px] w-full rounded-[6px]"
            >
              Submit Enquiry
            </button>

            <p className="text-xs text-gray-500 text-center">
              We respond to every enquiry within 24 hours. Let’s make your
              dream space a reality.
            </p>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
}
