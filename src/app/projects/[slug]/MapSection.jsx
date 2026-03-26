'use client'


export default function MapSection({ project, staticData }) {
  if (!project?.map_iframe) return null;
  const content = staticData?.[0];
  const cards = content
    ? Array.from({ length: 4 }, (_, i) => ({
      title: content[`loc_card_title_${i + 1}`],
      desc: content[`loc_card_text_${i + 1}`],
    })).filter(item => item.title || item.desc)
    : [];

  const hasTitle = content?.loc_card_title?.trim();
  const hasDesc = content?.loc_card_description?.trim();
  return (
    <section className="container py-8 md:py-12 lg:py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 items-center">

        <div className="lg:col-span-1">
          <h2 className="uppercase font-urban font-bold text-[18px] md:text-[22px] leading-[18px] text-black mb-3">
            {staticData?.[0]?.loc_title || (
              <>
                EVERYTHING YOU NEED, <br />
                JUST AROUND THE CORNER
              </>
            )}
          </h2>

          <p className="text-black max-w-md font-poppins font-normal text-[13px] md:text-[14px] leading-[18px]">
            {staticData?.[0]?.loc_description ||
              `Enjoy unmatched connectivity to Thrissur’s major landmarks,
            schools, and healthcare centers. ` }
          </p>
        </div>

        <div className="md:col-span-2 p-2 border border-white rounded-2xl shadow-sm">
          <div className="w-full h-[260px] md:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title="Thrissur Map"
              // src="https://www.google.com/maps?q=Thrissur&output=embed"
              src={project.map_iframe}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      <div className="mt-6">
        {hasTitle && hasDesc && (
          <div className="text-start  mb-4 md:mb-8 lg:mb-10">
            <h3 className="text-[16px] lg:text-[18px] leading-[20px] md:leading-[26px] font-urban font-semibold uppercase text-start">
              {content.loc_card_title}
            </h3>
            <p className="mt-2 text-[12px] md:text-sm leading-[18px] text-gray-600 text-start">
              {content.loc_card_description}
            </p>
          </div>
        )}
        {cards.length > 0 && (
          <div className="relative z-20  mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5">
            {cards.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-2.5 p-3 lg:p-5 rounded-[20px] bg-[#FAF5E9]"
              >

                <div className="space-y-1">
                  <h3 className="font-urban text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#484848]">
                    {item.desc}
                  </p>
                </div>
              </div>

            ))}

          </div>
        )}
      </div>
    </section>
  )
}
