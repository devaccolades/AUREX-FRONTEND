import Footer from "@/components2/Footer";
import Header from "@/components2/Header";
import React from "react";
import BankingPartners from "../BankingPartners";
import PrecisionBuiltSection from "./PrecissionBuilding";
import CommonFacilities from "./CommonFacilities";
import NearbyConnectivity from "./NearByConnectivity";
import YoutubeEmbedSection from "./Youtube";
import FloorPlansSection from "./FloorPlan";
import ProjectHero from "./ProjectHeroSection";
import ConstructionUpdates from "./ConstructionUpdate";
import ProjectOverviewSection from "./ProjectOverview";
import AmenitiesSection from "./Amenities";
import MapSection from "./MapSection";
import { notFound } from "next/navigation";
import {
  FaqFetch,
  ProjectAmenitiesBySlugFetch,
  ProjectBySlugFetch,
  ProjectCommonFacilitiesBySlugFetch,
  ProjectFloorPlansBySlugFetch,
  ProjectLocationAdvantagesBySlugFetch,
  ProjectSpecificationsBySlugFetch,
  ProjectsStaticContentFetchBySlugFetch,
  ProjectUpdatesBySlugFetch,
  ProjectYoutubeVideosBySlugFetch,
} from "@/services/api";
import FAQ from "@/app/(home)/FAQ";

export async function generateMetadata({ params }) {
  const { slug } = await params; 
  const project = await ProjectBySlugFetch(slug);

  if (!project) {
    return {
      title: "Page Not Found | Aurex Builders",
      description: "The requested project does not exist.",
    };
  }

  return {
    title: project.meta_title || project.name,
    description: project.meta_description || "",
  };
}


export default async function Page({ params }) {
  const { slug } = await params; // ✅ REQUIRED

  //  const { slug } = params;

  const project = await ProjectBySlugFetch(slug);

  // ✅ IF PROJECT NOT FOUND → SHOW not-found.js
  if (!project || !project?.id) {
    notFound();
  }
  // const project = await ProjectBySlugFetch(slug);
  const amenities = await ProjectAmenitiesBySlugFetch(slug);
  const facilities = await ProjectCommonFacilitiesBySlugFetch(slug);
  const floorplan = await ProjectFloorPlansBySlugFetch(slug);
  const locationSpec = await ProjectLocationAdvantagesBySlugFetch(slug);
  const specifications = await ProjectSpecificationsBySlugFetch(slug);
  const updates = await ProjectUpdatesBySlugFetch(slug);
  const projectVideos = await ProjectYoutubeVideosBySlugFetch(slug);
  const faqData = await FaqFetch();
  const staticData = await ProjectsStaticContentFetchBySlugFetch(slug);

  const title = project?.name || "Project Details";
  return (
    <div>
      <Header />
      <ProjectHero project={project} />
      <ProjectOverviewSection p={project} staticData={staticData}/>
      <div id="amenities">
        <AmenitiesSection amenities={amenities} title={title} projectVideos={projectVideos} staticData={staticData}/>
      </div>
      <CommonFacilities facilities={facilities} staticData={staticData} />
      <div id="floor-plans">
        <FloorPlansSection floorplan={floorplan} staticData={staticData} />
      </div>

      <div id="specifications">
        <PrecisionBuiltSection specs={specifications} staticData={staticData} />
      </div>

      <div id="location-map">
        <NearbyConnectivity data={locationSpec} project={project} staticData={staticData} />
      </div>
      <YoutubeEmbedSection projectVideos={projectVideos} />
      <ConstructionUpdates updates={updates} />
      {/* <FAQ data={faqData} pageName={`projects/${slug}`} /> */}
      <BankingPartners />
      <Footer />
    </div>
  );
}
