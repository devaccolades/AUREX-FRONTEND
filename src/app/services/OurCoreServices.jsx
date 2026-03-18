"use client";
import Link from "next/link";

const coreServices = [
    {
        title: "RENTAL & RESALE ASSISTANCE",
        subtitle: "Maximise Your Property Value in Thrissur",
        description:
        "Renting or reselling a property in Thrissur should be straightforward — and with Aurex Builders, it is. We provide accurate market valuations, connect you with verified tenants and buyers, and handle all documentation on your behalf. Our transparent advisory approach ensures you get the best return on your property investment with minimal effort on your part.",
        buttonText: "GET ASSISTANCE",

    },
    {
        title: "Trusted Aftercare Services",
        subtitle: "We Continue to Care Long After Handover",
        description:
            "At Aurex Builders, our commitment does not end at handover. Our dedicated aftercare services team conducts scheduled maintenance checks, handles prompt repairs, and resolves post-handover queries — ensuring your home remains in perfect condition for years to come. From structural touch-ups to plumbing, electrical support, and waterproofing checks, we are your long-term property partner across Thrissur and Kerala.",
        buttonText: "ENQUIRE NOW",
    },
    {
        title: "Interior Designing",
        subtitle: "Transforming Spaces Into Dream Homes.",
        description:
        "We blend functionality with elegance — curating the perfect combination of colours, lighting, materials, and textures to create spaces that feel warm, personal, and distinctly yours. From modular kitchens to full-home styling, our team delivers custom interior solutions that inspire joy every single day.",
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
                                <h3 className="uppercase text-[14px] lg:text-[20px] leading-[14px] md:leading-[20px] font-urban font-bold mb-1 md:mb-2">
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
