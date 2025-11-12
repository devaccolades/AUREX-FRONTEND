import Image from "next/image";
import FAQ from "./(home)/FAQ";
import DreamsInThrissur from "./(home)/DreamsInThrissur";
import Testiminials from "./(home)/Testiminials";
import Footer from "../Components/Footer";
import WhyChooseUs from "./(home)/WhyChoose";

export default function Home() {
  return (
    <div>
      <Testiminials />
      <DreamsInThrissur />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </div>
  );
}
