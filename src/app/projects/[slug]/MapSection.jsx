'use client'


export default function MapSection({project, staticData}) {
  if (!project?.map_iframe) return null;
  const content = staticData?.[0];
  const cards = content
  ? Array.from({ length: 4 }, (_, i) => ({
      title: content[`loc_card_title_${i + 1}`],
      desc: content[`loc_card_text_${i + 1}`],
    })).filter(item => item.title || item.desc) 
  : [];
return (
    <section className="container py-8 md:py-12 lg:py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 items-center">
        
        <div className="lg:col-span-1">
          <h2 className="font-urban font-bold text-[18px] md:text-[22px] leading-[18px] text-black mb-3">
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
       {cards.length > 0 && (
  <div className="relative z-20  mx-auto mt-5 grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-5">
    {cards.map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-start gap-2.5 p-3 lg:p-5 rounded-[20px] bg-[#FAF5E9]"
      >
        {/* <div className="p-3 rounded-lg bg-[#FAEDD2] flex items-center justify-center">
          <Image
            src="/images/default-icon.svg" // or keep your icon logic
            alt="Flats for Sale in Thrissur"
            width={24}
            height={24}
          />
        </div> */}

        <div className="space-y-1">
          <h4 className="font-urban text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-black">
            {item.title}
          </h4>
          <p className="text-[13px] md:text-[14px] text-[#484848]">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
)}
    </section>
  )
}
