"use client";

import MagneticButton from "@/Components/MagneticButton";
import { Check } from "lucide-react";
// import BookConsultationButton from "@/components/BookConsultationButton";

export default function WhyAurexBuilders() {
  const strengths = [
    {
      title: "EXPERT & PROFESSIONAL TEAM",
      desc: "Experienced architects, engineers & designers",
    },
    {
      title: "TIMELY COMPLETION",
      desc: "Commitment to delivering on schedule",
    },
    {
      title: "INNOVATIVE APPROACH",
      desc: "Fresh ideas, sustainable designs",
    },
    {
      title: "UNCOMPROMISING QUALITY",
      desc: "Best-in-class materials and processes",
    },
    {
      title: "OPEN COMMUNICATION",
      desc: "Transparent updates and honest advice",
    },
    {
      title: "VALUE FOR MONEY",
      desc: "Premium living within your reach",
    },
    {
      title: "CUSTOMER SATISFACTION",
      desc: "Every home handed over with gratitude",
    },
  ];

  return (
    <section className="container mx-auto px-4 lg:px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        
        {/* LEFT */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight">
            WHY <br />
            <span className="font-semibold">AUREX BUILDERS</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
            Choosing Aurex means choosing excellence, transparency, and
            peace of mind. We ensure every client experiences the joy of
            owning a home that truly reflects their aspirations.
          </p>

          <div className="mt-14">
            <p className="uppercase text-sm tracking-wider mb-6 text-gray-700">
              Need a great place for your family?
            </p>

            {/* Your existing button component */}
             <MagneticButton 
                className="hidden md:block"
                text="Book a free <br /> consultation"
                arrowSrc="/images/home/button-arrow.svg"
                parentSelector="#why-section"
                onClick={(e) => {
                    e.stopPropagation(); // prevents section click
                    setOpenModal(true);
                }}
                />
            
            
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-8">
            Our Core Strengths
          </p>

          <ul className="space-y-6">
            {strengths.map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="mt-1 text-[#C49A6C]">
                  <Check size={18} strokeWidth={2.5} />
                </span>

                <div>
                  <p className="font-semibold text-sm">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
