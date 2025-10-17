import Image from "next/image";
import React from "react";
import bank1 from "../../../public/images/dreamsInThrissur/axis.png";
// import bank1 from "/images/axis.png";

const DreamsInThrissur = () => {
  return (
    <section className="containers bg-secondary">
      <div className="flex ">
        <div>
          <h2>Building Dreams in Thrissur</h2>
          <p>
            We offer end-to-end building solutions — from planning and design to
            construction and finishing. Each project reflects our commitment to
            superior craftsmanship, sustainability, and timeless design.
          </p>
          <div>
            <p>Our Banking Partners</p>
          </div>
        </div>
        <div>
          <Image src={bank1} height={100} width={100} alt="bank img" />
        </div>
      </div>
    </section>
  );
};

export default DreamsInThrissur;
