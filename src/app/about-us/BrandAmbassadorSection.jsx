  "use client";

  import Image from "next/image";

  export default function BrandAmbassadorSection() {
    return (
      <section className="relative w-full overflow-hidden py-10 lg:py-36 ">

        {/* BACKGROUND LINES */}
        <div className="absolute inset-0 w-[50%] left-0 z-0">
          <Image
            src="/images/about/bg-lines-1.png"
            alt="Background lines"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="absolute h-full top-0 w-[50%] right-0 z-0">
          <Image
            src="/images/about/bg-lines-2.png"
            alt="Background lines overlay"
            fill
            className="object-cover opacity-40"
          />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative container ">

          {/* GRID */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 items-center">

            {/* LEFT TEXT */}
            <div className="relative z-20">
              <p className="font-poppins text-[12px] md:text-[14px] lg:text-[16px] font-medium mb-3">
                OUR BRAND AMBASSADOR
              </p>

              <h2 className="text-[20px] md:text-[24px] lg:text-[36px] font-urban font-semibold leading-[20px] md:leading-[24px] lg:leading-[36px]  mb-6">
                THE FACE OF TRUST, <br />
                PASSION & EXCELLENCE
              </h2>

              <p className="text-black text-[12px] md:text-[13px] lg:text-[14px] leading-[18px] mb-2 md:mb-4">
                At Aurex Builders, our brand ambassador embodies the spirit of everything we stand for — trust,
                quality, innovation, and a deep connection with our community.
              </p>

              <p className="text-black text-[12px] md:text-[13px] lg:text-[14px] leading-[18px]">
                More than a face, our ambassador represents the dreams and aspirations of every family
                that chooses Aurex. With an unwavering belief in our philosophy of “Adorning Lives,” they
                echo our commitment to creating spaces that inspire joy, belonging, and pride.
              </p>
            </div>
            {/* MOBILE IMAGE (normal flow) */}
            
  {/* MOBILE IMAGE + RIGHT TEXT */}
  <div className="md:hidden flex items-start justify-between gap-2 my-3">

    {/* IMAGE */}
    <div className=" w-[100px] -mt-10">
      <Image
        src="/images/home/b.png"
        alt="Brand Ambassador"
        width={300}
        height={480}
        className="w-[108px] h-[302px] object-cover"
        priority
      />
    </div>

    {/* TEXT */}
    <div className="flex-1 relative z-20">
      <p className="mb-2 text-black text-[12px] leading-[18px]">
        Our brand ambassador’s values align seamlessly with Aurex’s promise — to
        deliver not just homes, but a lifestyle defined by comfort, elegance, and authenticity.
      </p>

      <p className="text-black text-[12px] leading-[18px]">
        Through this partnership, we aim to strengthen our bond with customers by blending
        credibility, culture, and class — celebrating the art of living that makes
        every Aurex home truly exceptional.
      </p>
    </div>

  </div>


            {/* EMPTY COLUMN (image floats here) */}
            <div />

            {/* RIGHT TEXT */}
            <div className="hidden md:block relative z-20 mt-2 md:mt-0">
              <p className="mb-2 md:mb-6 text-black text-[12px] md:text-[13px] lg:text-[14px] leading-[18px]">
                Our brand ambassador’s values align seamlessly with Aurex’s promise —to
                deliver not just homes, but a lifestyle defined by comfort, elegance, and authenticity.
              </p>

              <p className="text-black text-[12px] md:text-[13px] lg:text-[14px] leading-[18px]">
                Through this partnership, we aim to strengthen our bond with customers by blending
                credibility, culture, and class — celebrating the art of living that makes
                every Aurex home truly exceptional.
              </p>
            </div>
          </div>

          {/* FLOATING CENTER IMAGE */}
          <div
            className="
            hidden md:block
              absolute z-10
              left-1/2 -translate-x-1/2
              -top-20
              lg:-top-44
              xl:-top-60
              w-[260px]
              md:w-[360px]
              lg:w-[420px]
              xl:w-[480px]
            "
          >
            <Image
              src="/images/home/b.png"
              alt="Brand Ambassador"
              width={900}
              height={900}
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>
    );
  }
