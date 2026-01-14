"use client";

export default function ProjectOverviewSection() {
  return (
    <section className="relative w-full bg-white py-14">
      <div className="">
        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <button className="flex items-center gap-2 bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-gray-900 transition">
            DOWNLOAD BROCHURE
            <span className="text-sm">⬇</span>
          </button>
        </div>

        {/* Heading */}
        <div className="container text-center ">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[40px] md:leading-[30px]  leading-[20px] font-urban font-semibold ">
            A HOME THAT REFLECTS <br />
            YOUR ASPIRATIONS
          </h2>

          <p className="mt-4 text-sm leading-[18px]  ">
            Nestled in one of Thrissur’s most sought-after locations, Aurex
            Liard combines architectural finesse with functional design to
            deliver a perfect home for you and your family. With world-class
            amenities, advanced security, and exceptional build quality, this
            project promises a life of peace, prosperity, and pride.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 text-center">
            {["AMENITIES", "FLOOR PLANS", "SPECIFICATIONS", "LOCATION MAP"].map(
              (tab, index) => (
                <button
                  key={index}
                  className="py-4 text-sm md:text-[16px] leading-[20px] font-urban font-medium border last:border-r-0 border-gray-200 hover:bg-gray-50 transition"
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
