import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative w-full bg-[#ECECEC]  text-black rounded-[40px] overflow-hidden">
            {/* Background Elephants */}
            <div className="absolute  flex w-full  justify-between opacity-80 pointer-events-none">
                <Image
                    src="/images/home/left-ele.png"
                    alt="decor-left"
                    width={800}
                    height={800}
                    className="w-[356px] object-contain "
                />
                <Image
                    src="/images/home/right-ele.png"
                    alt="decor-right"
                    width={800}
                    height={800}
                    className="w-[356px] object-contain  "
                />
            </div>

            <div className="relative max-w-[690px] mx-auto py-20 text-center px-6">
                <h4 className="text-[16px] leading-[20px] font-poppins font-normal mb-4 "> <span className="text-black">#About</span> <span className="text-gray-500">Us</span></h4>
                <h2 className="text-[40px] font-semibold font-urban leading-[40px] mb-6">
                    MANIFESTING YOUR DREAM <br /> INTO A MAGNIFICENT REALITY
                </h2>

                <p className="text-gray-700 font-inter leading-[156%] text-[14px] md:text-[14px] mb-10">
                    Aurex builders ensures to fulfill the dream of our customers by gifting them with quality home spaces,
                    contemporary architecture, environment- friendly designs, timely delivery, after-sales service and return
                    on investment. Aurex builders brings you a new world of happiness, security and prosperity, delivering
                    finest apartments, flats, townhouses and luxury villas that match the requirements of customers with the
                    unique signature of a futuristic brand. Our main motive is to fulfill the dreams of the entire customers
                    for all the segment people.
                </p>

                <button
                    className="flex items-center justify-center mx-auto gap-2  text-black px-5 py-2 rounded-full font-urban text-[12px] leading-[16px] font-bold  hover:scale-[1.03] transition "
                >
                    <span className="flex items-center text-black gap-1">
                        KNOW
                        <span className="flex bg-[#FF0000] w-12 h-12 rounded-full items-center justify-center text-white font-bold">
                            MORE
                        </span>
                    </span>
                </button>
            </div>
        </section>
    );
}
