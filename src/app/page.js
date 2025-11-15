import Image from "next/image";
import FAQ from "./(home)/FAQ";
import DreamsInThrissur from "./(home)/DreamsInThrissur";
import Testiminials from "./(home)/Testiminials";
import Footer from "../Components/Footer";
import WhyChooseUs from "./(home)/WhyChoose";
import Thrissur from "./(home)/Thrissur";

export default function Home() {
  return (
    <div>
      <WhyChooseUs />
      <Thrissur />
      {/* <Testiminials />
      <DreamsInThrissur /> */}
      <FAQ />
      {/* <Footer /> */}
    </div>
  );
}
