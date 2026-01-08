"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

const infoCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98465 07474", "+91 98460 07474"],
  },
  {
    icon: Mail,
    title: "Write to Us",
    lines: ["info@aurexbuilders.com"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      "Aurex Builders Pvt. Ltd.",
      "Aurum Complex, Patturaikkal, Thrissur, Kerala – 680 020",
    ],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: [
      "Monday – Saturday : 9:30 AM to 6:00 PM",
      "Sunday : Closed",
    ],
  },
];

export default function ContactInfoCards() {
  return (
    <section className="container pt-6 pb-6 md:pb-8 lg:pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
        {infoCards.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAF5E9] rounded-2xl p-2 md:p-4 lg:p-6 flex flex-col gap-2 md:gap-4 shadow-sm hover:shadow-md transition"
          >
            <div className="w-10 md:w-10 h-10 md:h-10 rounded-[10px] bg-[#FAEDD2] flex items-center justify-center shrink-0">
              <item.icon className="w-4 lg:w-8 h-4 lg:h-8 text-[#E39A2E]" />
            </div>

            <h3 className="text-[16px] md:text-[18px] leading-[18px] font-semibold font-urban  mb-1">
              {item.title}
            </h3>

            <div className="text-[13px] md:text-[14px] leading-[156%] text-black ">
              {item.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
