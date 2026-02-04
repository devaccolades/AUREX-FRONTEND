"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

// const floorPlans = {
//   "2bhk": [
//     {
//       id: 1,
//       type: "TYPE A - 2 BHK",
//       area: "1071.37 SQFT",
//       image: "/images/projects/floor.jpg",
//     },
//     {
//       id: 2,
//       type: "TYPE B - 2 BHK",
//       area: "1070.48 SQFT",
//       image: "/images/projects/floor.jpg",
//     },
//     {
//       id: 3,
//       type: "TYPE D - 2 BHK",
//       area: "951.70 SQFT",
//       image: "/images/projects/floor.jpg",
//     },
//   ],
//   "3bhk": [
//     {
//       id: 4,
//       type: "TYPE A - 3 BHK",
//       area: "1420.55 SQFT",
//       image: "/images/projects/floor.jpg",
//     },
//     {
//       id: 5,
//       type: "TYPE B - 3 BHK",
//       area: "1480.25 SQFT",
//       image: "/images/projects/floor.jpg",
//     },
//   ],
// };

export default function FloorPlansSection({floorplan}) {
  // const [activeTab, setActiveTab] = useState("2bhk");
  // const [previewImage, setPreviewImage] = useState(null);
    if (!Array.isArray(floorplan) || floorplan.length === 0) return null;

  /* 🔹 Group plans by BHK type */
  const groupedPlans = useMemo(() => {
    return floorplan.reduce((acc, plan) => {
      if (!plan?.bhk_type) return acc;

      const key = plan.bhk_type.toLowerCase(); // "2bhk"
      acc[key] = acc[key] || [];
      acc[key].push(plan);
      return acc;
    }, {});
  }, [floorplan]);

  const tabs = Object.keys(groupedPlans);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <>
      <section className="py-16">
        <div className="container text-center">

          {/* HEADING */}
          <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-center mb-2">
            CHOOSE THE HOME THAT FITS YOUR LIFESTYLE
          </h2>
          <p className="text-[13px] text-black mt-2 max-w-2xl mx-auto">
            Whether you prefer compact elegance or spacious luxury, we offer thoughtfully designed layouts for every need.
          </p>

          {/* TABS */}
          <div className="inline-flex bg-gray-100 rounded-full p-1 mt-6">
            {/* {["2bhk", "3bhk"].map((tab) => ( */}
             {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-[14px] rounded-full font-medium transition
                  ${activeTab === tab ? "bg-white shadow text-black" : "text-gray-500"}
                `}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* FLOOR PLAN CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {/* {floorPlans[activeTab].map((plan) => ( */}
               {groupedPlans[activeTab].map(plan => (
              <div key={plan.id} className="text-left">

                {/* IMAGE */}
                  {plan.image && (
                <div
                  onClick={() => setPreviewImage(plan.image)}
                  className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-pointer group border border-gray-300"
                >
                  <Image
                    src={plan.image}
                    alt={plan.image_alt || "Floor Plan"}
                    fill
                    className="object-cover md:w-fit"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white text-[14px] font-medium flex items-center gap-2">
                      👁 View
                    </span>
                  </div>
                </div>
                  )}

                {/* TEXT */}
                {/* <h3 className="mt-4 text-[14px] font-semibold">
                  {plan.type}
                </h3>
                <p className="text-[16px] font-bold mt-1">
                  {plan.area}
                </p> */}
                 {plan.plan_type && (
                  <h3 className="mt-4 text-[14px] font-semibold">
                    {plan.plan_type} – {plan.bhk_type}
                  </h3>
                )}

                {plan.area_label && (
                  <p className="text-[16px] font-bold mt-1">
                    {plan.area_label}
                  </p>
                )}

                <span className="inline-block mt-2 text-[12px] px-3 py-1 rounded-full bg-[#FFF4E5] text-[#C98B2C] font-medium">
                  Super Built-up Area
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* IMAGE PREVIEW MODAL */}
      {previewImage && (
        <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4">
          
          {/* CLOSE */}
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ×
          </button>

          {/* IMAGE */}
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-xl overflow-hidden">
            <Image
              src={previewImage}
              alt="Floor Plan Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
