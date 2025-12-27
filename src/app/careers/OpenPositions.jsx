"use client";

export default function OpenPositionsSection() {
  const jobs = [
    {
      title: "SITE ENGINEER",
      location: "Thrissur",
      experience: "2–5 years",
      type: "Full Time",
      description:
        "We’re looking for a skilled Site Engineer with a strong eye for detail and commitment to quality. The role involves overseeing on-site construction activities, ensuring timelines and safety standards are met, and coordinating between contractors, consultants, and candidates with a civil engineering background and prior experience in residential or commercial projects.",
    },
    {
      title: "JUNIOR ARCHITECT",
      location: "Thrissur",
      experience: "2–5 years",
      type: "Full Time",
      description:
        "Aurex is seeking a creative Junior Architect to support our design and project teams. The ideal candidate will assist in conceptualising, planning, and designing architectural drawings, ensuring designs align with our quality standards. Proficiency in design tools and a flair for functional aesthetics are essential.",
    },
    {
      title: "MARKETING EXECUTIVE",
      location: "Thrissur",
      experience: "2–5 years",
      type: "Full Time",
      description:
        "We’re on the lookout for a dynamic Marketing Executive to help expand our brand presence and project visibility. The role includes managing marketing campaigns, generating leads, building partnerships with clients, and promoting our real estate projects across digital and offline platforms.",
    },
    {
      title: "SITE ENGINEER",
      location: "Thrissur",
      experience: "2–5 years",
      type: "Full Time",
      description:
        "We’re looking for a skilled Site Engineer with a strong eye for detail and commitment to quality. The role involves overseeing on-site construction activities, ensuring timelines and safety standards are met, and coordinating between contractors, consultants, and candidates with a civil engineering background and prior experience in residential or commercial projects.",
    },
    {
      title: "JUNIOR ARCHITECT",
      location: "Thrissur",
      experience: "2–5 years",
      type: "Full Time",
      description:
        "Aurex is seeking a creative Junior Architect to support our design and project teams. The ideal candidate will assist in conceptualising, planning, and designing architectural drawings, ensuring designs align with our quality standards. Proficiency in design tools and a flair for functional aesthetics are essential.",
    },
    {
      title: "MARKETING EXECUTIVE",
      location: "Thrissur",
      experience: "2–5 years",
      type: "Full Time",
      description:
        "We’re on the lookout for a dynamic Marketing Executive to help expand our brand presence and project visibility. The role includes managing marketing campaigns, generating leads, building partnerships with clients, and promoting our real estate projects across digital and offline platforms.",
    },
  ];

  return (
    <section className="container  py-10 lg:py-16 bg-white">
     

        {/* SECTION TITLE */}
        <p className=" font-bold font-urban text-[18px] lg:text-[20px] leading-[18px] lg:leading-[20px] text-black mb-6">
          OUR OPEN POSITIONS
        </p>

 <div className=" bg-[#F2F2F2] rounded-[10px] p-1 md:p-2">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {jobs.map((job, index) => (
            <div
              key={index}
              className=" hover:border-black bg-white rounded-[20px] p-2 md:p-4 lg:p-6 flex flex-col justify-between hover:shadow-md transition"
            >
              {/* TITLE */}
              <h3 className=" font-bold font-urban text-[18px] lg:text-[20px] leading-[18px] lg:leading-[20px] text-black mb-3">
                {job.title}
              </h3>

              {/* META */}
              <div className="text-[13px] leading-[100%] font-urban font-bold text-black mb-4 space-y-1">
                <div className="flex items-center gap-4 mb-2 md:mb-4">
    <p>
      <span className="font-medium">Location:</span> {job.location}
    </p>
    |
    <p>
      <span className="font-medium">Experience:</span> {job.experience}
    </p>
  </div>
                <p>
                  <span className="font-medium">Type:</span> {job.type}
                </p>
              </div>

              {/* RESPONSIBILITIES */}
              <div>
                <p className="font-urban text-[14px] lg:text-[16px] leading-[14px] lg:leading-[16px] font-extrabold mb-2">
                  RESPONSIBILITIES
                </p>

                <p className="text-[13px] lg:text-[14px] leading-[18px] text-black mb-6">
                  {job.description}
                </p>
              </div>

              {/* CTA */}
              <button className="mt-auto self-start font-medium font-urban text-[13px] leading-[13px] border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition">
                Read Job Description
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
