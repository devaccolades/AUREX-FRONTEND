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
import {
  EventGalleryFetch,
  FaqFetch,
  ProjectsFetch,
  VidTestmonialsFetch,
} from "@/services/api";

export default async function Home() {
  const faqData = await FaqFetch();
  const testimonialData = await VidTestmonialsFetch();
  const ProjectsData = await ProjectsFetch();
  const EventGalleryFetchData = await EventGalleryFetch();

  return (
    <div>
      <Header />
      <HeroSection data={ProjectsData} />
      <BrandAmbassador />
      <ChairmanMessage />
      <SignatureProjects data={ProjectsData} />
      <AboutSection />
      <GallerySection data={EventGalleryFetchData} />
      <Services />
      <WhyChooseUs />
      <Thrissur />
      <Testiminials testimonials={testimonialData} />
      <DreamsInThrissur />
      <FAQ data={faqData} />
      <Footer />
    </div>
  );
}
