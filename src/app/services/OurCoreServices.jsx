"use client";
import Link from "next/link";

const coreServices = [
    {
        title: "RENTAL & RESALE ASSISTANCE",
        subtitle: "Maximize Value. Minimize Effort.",
        description:
            "From accurate property valuations to connecting you with the right tenants or buyers, Aurex makes rental and resale effortless. Experience smooth transactions backed by expert advice and transparent support.",
        buttonText: "GET ASSISTANCE",

    },
    {
        title: "INTERIOR DESIGNING",
        subtitle: "Transforming Spaces into Experiences.",
        description:
            "We bring your personality into your living space. Our designers blend elegance and function to craft homes that inspire comfort and joy.",
        buttonText: "ENQUIRE NOW",
    },
    {
        title: "MAINTENANCE ASSISTANCE",
        subtitle: "We Continue to Care – Even After Handover.",
        description:
            "Our after-sales team ensures your property remains perfect through timely maintenance, inspections, and repair support — because your comfort doesn’t end at delivery.",
        buttonText: "REQUEST ASSISTANCE",
    },
];

export default function OurCoreServices() {
    return (
        <section className="py-20 bg-white">
            <div className="container ">
                {/* Section Title */}
                <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-start mb-8">
                    Our Core Services
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 bg-[#F2F2F2] rounded-[10px] p-2 lg:p-3">
                    {coreServices.map((service, index) => (
                        <div
                            key={index}
                            className="
                                rounded-[10px]
                                p-2 md:p-4 lg:p-6
                                flex
                                flex-col
                                justify-between
                                min-h-[220px] md:min-h-[360px]
                                bg-gray-50
                                border
                                border-transparent
                                hover:border-black
                                transition
                                duration-300
                            "
                        >
                            <div className="gap-2 md:gap-4 lg:gap-6">
                                <h3 className="text-[14px] lg:text-[20px] leading-[14px] md:leading-[20px] font-urban font-bold mb-1 md:mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-[12px] lg:text-[13px] leading-[100%] text-black mb-6 md:mb-12">
                                    {service.subtitle}
                                </p>

                                <p className="text-[12px] lg:text-sm text-black  leading-[18px]">
                                    {service.description}
                                </p>
                            </div>

                             <Link href="/contact-us">
                            <button
                                className={`mt-6 self-start text-[13px] leading-[13px] font-bold font-urban px-4 py-2 rounded-full transition ${service.primary
                                        ? "bg-black text-white hover:bg-black/90"
                                        : "border border-black text-black hover:bg-black hover:text-white"
                                    }`}
                            >
                                {service.buttonText}
                            </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
