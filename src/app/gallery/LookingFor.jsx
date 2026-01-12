"use client";

const coreServices = [
    {
        title: "Looking for Your Dream Home?",
        description:
        "Explore our latest projects designed to blend elegance, comfort, and functionality.",
        buttonText: "explore Our Projects",

    },
    {
        title: "Want to Design or Customize Your Space or need assistance ?",
        description:
        "Let our interior design experts help you craft spaces that truly reflect your style.",
        buttonText: "EXPLORE OUR SOLUTIONS",
    },
    {
        title: "Need Guidance or a Quick Chat?",
        description:
        "Have questions about pricing, availability, or project details? We’re just a message away.",
        buttonText: "WHATSAPP NOW",
    },
];

export default function LookingFor() {
    return (
        <section className="py-10 bg-white">
            <div className="container ">
                {/* Section Title */}
                <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-start mb-4">
                    What Are You Looking For?
                </h2>
                <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-[100%] text-black mb-8">
                    We’re here to guide you — choose what you need and let’s make it happen together.
                    </p>

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
                                min-h-[200px] md:min-h-[300px]
                                bg-gray-50
                                border
                                border-transparent
                                hover:border-black
                                transition
                                duration-300
                            "
                        >
                            <div className="gap-2 md:gap-4 lg:gap-6">
                                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] leading-[18px] lg:leading-[20px] font-bold uppercase min-h-[72px] font-urban mb-1 md:mb-2">
                                    {service.title}
                                </h3>
{/* 
                                <p className="text-[12px] lg:text-[13px] leading-[100%] text-black mb-6 md:mb-12">
                                    {service.subtitle}
                                </p> */}

                                <p className="text-[12px] lg:text-sm text-black  leading-[18px] ">
                                    {service.description}
                                </p>
                            </div>

                            <button
                                className={`mt-4 self-start text-[12px] lg:text-[13px] leading-[13px] font-bold font-urban uppercase px-4 py-2 rounded-full transition ${service.primary
                                        ? "bg-black text-white hover:bg-black/90"
                                        : "border border-black text-black hover:bg-black hover:text-white"
                                    }`}
                            >
                                {service.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
