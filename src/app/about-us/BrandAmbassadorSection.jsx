"use client";

import Image from "next/image";

export default function BrandAmbassadorSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFDF9] py-20">

      {/* BACKGROUND LINE IMAGE – 1 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brand/bg-lines-1.png"
          alt="Background lines"
          fill
          className="object-cover opacity-60"
        />
      </div>

      {/* BACKGROUND LINE IMAGE – 2 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brand/bg-lines-2.png"
          alt="Background lines overlay"
          fill
          className="object-cover opacity-60"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-3">
            OUR BRAND AMBASSADOR
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            THE FACE OF TRUST, <br />
            PASSION & EXCELLENCE
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            At Aurex Builders, our brand ambassador embodies the spirit of
            everything we stand for — trust, quality, innovation, and a deep
            connection with our community.
          </p>

          <p className="text-gray-600 leading-relaxed">
            More than a face, our ambassador represents the dreams and
            aspirations of every family that chooses Aurex. With an unwavering
            belief in our philosophy of “Adorning Lives,” they echo our
            commitment to creating spaces that inspire joy, belonging, and
            pride.
          </p>
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-[240px] md:w-[300px] lg:w-[320px]">
            <Image
              src="/images/home/b.png"
              alt="Brand Ambassador"
              width={400}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="text-gray-600 leading-relaxed">
          <p className="mb-6">
            Our brand ambassador’s values align seamlessly with Aurex’s promise
            — to deliver not just homes, but a lifestyle defined by comfort,
            elegance, and authenticity.
          </p>

          <p>
            Through this partnership, we aim to strengthen our bond with
            customers by blending credibility, culture, and class — celebrating
            the art of living that makes every Aurex home truly exceptional.
          </p>
        </div>

      </div>
    </section>
  );
}
