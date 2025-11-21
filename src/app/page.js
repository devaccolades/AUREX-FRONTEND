import Image from "next/image";
import FAQ from "./(home)/FAQ";
import DreamsInThrissur from "./(home)/DreamsInThrissur";
import Testiminials from "./(home)/Testiminials";
import Footer from "../Components/Footer";
import WhyChooseUs from "./(home)/WhyChoose";
import Thrissur from "./(home)/Thrissur";
import ChairmanMessage from "./(home)/ChairmanMessage";
import HeroSection from "./(home)/HeroSection";
import AboutSection from "./(home)/AboutSection";
import BrandAmbassador from "./(home)/BrandAmbassador";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrandAmbassador />
      <ChairmanMessage />
      <AboutSection />
      <WhyChooseUs />
      <Thrissur />
      
      <Testiminials />
      <DreamsInThrissur />
      <FAQ />
      <Footer />
    </div>
  );
}
