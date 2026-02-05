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
import { SeoById,
  EventGalleryFetch,
  FaqFetch,
  ProjectsFetch,
  VidTestmonialsFetch,
} from "@/services/api";
import ServicesMobile from "./(home)/ServicesNew";


export async function generateMetadata() {
  const seo = await SeoById("home");

  if (!seo) {
    return {
      title: "Aurex Builders",
      description: "Aurex Builders",
    };
  }

  return {
    title: seo.meta_title,
    description: seo.meta_description,

    openGraph: {
      title: seo.og_title || seo.meta_title,
      description: seo.og_description || seo.meta_description,
      url: "https://aurex.accoladesweb.com",
      siteName: "Aurex Builders",
      images: seo.og_image
        ? [
            {
              url: seo.og_image, // FULL URL from backend
              width: 1200,
              height: 630,
              alt: seo.og_title || seo.meta_title,
            },
          ]
        : [],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.og_title || seo.meta_title,
      description: seo.og_description || seo.meta_description,
      images: seo.og_image ? [seo.og_image] : [],
    },
  };
}


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
      <ServicesMobile />
      <WhyChooseUs />
      <Thrissur />
      <Testiminials testimonials={testimonialData} />
      <DreamsInThrissur />
      <FAQ data={faqData} />
      <Footer />
    </div>
  );
}
