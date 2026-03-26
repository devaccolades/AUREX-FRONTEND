import Header from "@/components2/Header";
import React from "react";
import HeroSection from "./HeroSection";
import Footer from "@/components2/Footer";
import ProjectListing from "./ProjectListing";
import WhyChooseUs from "../(home)/WhyChoose";
import HomeBuyingJourney from "./HomeBuyingJourney";
import BankingPartners from "./BankingPartners";
import SignatureProjects from "./SignatureProjects";

import { ProjectsFetch, SeoById , FaqFetch} from "@/services/api";
import ProjectWhyChooseUs from "./ProjectWhyChoose";
import Callback from "./Callback";
import FAQ from "../(home)/FAQ";


export async function generateMetadata() {
  const seo = await SeoById("projects");

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
      url: "https://aurexbuilders.com/projects",
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

export default async function page() {
  const faqData = await FaqFetch();
  const projectsData = await ProjectsFetch();
  // const branchDetails = await BranchDetailsFetch();
  return (
    <div>
      <Header />
      <HeroSection />
      <SignatureProjects data={projectsData} />
      <ProjectListing data={projectsData} />
      <HomeBuyingJourney />
      <ProjectWhyChooseUs />
      <BankingPartners />
      <FAQ data={faqData} pageName="projects"/>
      <Callback />
      <Footer />
    </div>
  );
}
