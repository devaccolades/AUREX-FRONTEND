import Image from "next/image";
import FAQ from "./(home)/FAQ";


import DreamsInThrissur from "./(home)/DreamsInThrissur";
import Testiminials from "./(home)/Testiminials";
import Footer from "../components2/Footer";
import WhyChooseUs from "./(home)/WhyChoose";
import Thrissur from "./(home)/Thrissur";
import ChairmanMessage from "./(home)/ChairmanMessage";
import HeroSection from "./(home)/HeroSection";
import AboutSection from "./(home)/AboutSection";
import BrandAmbassador from "./(home)/BrandAmbassador";
import GallerySection from "./(home)/Gallery";
import SignatureProjects from "./(home)/SignatureProjects";
import Services from "./(home)/Services";
import Header from "@/components2/Header";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BrandAmbassador />
      <ChairmanMessage />
      <SignatureProjects />
      <AboutSection />
      <GallerySection />
      <Services />
      <WhyChooseUs />
      <Thrissur />
      <Testiminials />
      <DreamsInThrissur />
      <FAQ />
      <Footer />
    </div>
  );
}
