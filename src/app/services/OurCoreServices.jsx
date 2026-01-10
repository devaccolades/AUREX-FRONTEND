"use client";

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

export default function OurCoreServices () {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <p className="text-sm font-medium uppercase tracking-wide mb-8">
          Our Core Services
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 flex flex-col justify-between min-h-[360px] ${
                service.primary
                  ? "hover:border hover:border-black"
                  : "bg-gray-50"
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6">
                  {service.subtitle}
                </p>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <button
                className={`mt-6 self-start text-xs font-medium px-4 py-2 rounded-full transition ${
                  service.primary
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
