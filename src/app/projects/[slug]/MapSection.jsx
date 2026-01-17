'use client'

export default function MapSection() {
return (
    <section className="container py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 items-center">
        
        <div className="lg:col-span-1">
          <h2 className="font-urban font-bold text-[18px] md:text-[22px] leading-[18px] text-black mb-3">
            EVERYTHING YOU NEED, <br />
            JUST AROUND THE CORNER
          </h2>

          <p className="text-black max-w-md font-poppins font-normal text-[13px] md:text-[14px] leading-[18px]">
            Enjoy unmatched connectivity to Thrissur’s major landmarks,
            schools, and healthcare centers.
          </p>
        </div>

        <div className="md:col-span-2 p-2 border border-white rounded-2xl shadow-sm">
          <div className="w-full h-[260px] md:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title="Thrissur Map"
              src="https://www.google.com/maps?q=Thrissur&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
