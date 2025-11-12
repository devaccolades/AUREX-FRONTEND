import Squares from "@/components/Squares";
import React from "react";
import Testimonials from "./components/Testimonials";

const Testiminials = () => {
  return (
    <section className="relative h-[100vh]">
      <div className="absolute inset-0 ">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#dbdbdb"
          hoverFillColor="#dbdbdb"
        ></Squares>
      </div>
      <div className="containers pt-[45px] relative z-10">
        <div className="flex flex-col gap-[10px] items-center w-full ">
          <p className="text-[#A2A2A2] text-[16px] leading-[20px] tracking-[-2%]">
            <span className="text-[#006A54]">#Smiles</span> We’ve Created{" "}
          </p>
          <h2 className="font-urban font-normal text-[40px] leading-[40px]">
            Trusted by Families Like Yours
          </h2>
          <h3 className="text-[13px] leading-[100%] font-[400] max-w-[350px] text-center">
            Our clients are the heart of our journey. These moments capture the
            trust and happiness we’ve built together.
          </h3>
        </div>
      </div>
      <div>
        <Testimonials />
      </div>
    </section>
  );
};

export default Testiminials;
