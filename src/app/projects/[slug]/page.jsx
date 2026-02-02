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
  ProjectAmenitiesBySlugFetch,
  ProjectBySlugFetch,
  ProjectCommonFacilitiesBySlugFetch,
  ProjectFloorPlansBySlugFetch,
  ProjectLocationAdvantagesBySlugFetch,
  ProjectSpecificationsBySlugFetch,
  ProjectUpdatesBySlugFetch,
  ProjectYoutubeVideosBySlugFetch,
} from "@/services/api";

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

  const title = project?.name || "Project Details";
  return (
    <div>
      <Header />
      <ProjectHero project={project} />
      <ProjectOverviewSection p={project} />
      <div id="amenities">
        <AmenitiesSection amenities={amenities} title={title} projectVideos={projectVideos} />
      </div>
      <CommonFacilities facilities={facilities} />
      <div id="floor-plans">
        <FloorPlansSection floorplan={floorplan} />
      </div>

      <div id="specifications">
        <PrecisionBuiltSection specs={specifications} />
      </div>

      <div id="location-map">
        <NearbyConnectivity data={locationSpec} project={project} />
      </div>
      <YoutubeEmbedSection projectVideos={projectVideos} />
      <ConstructionUpdates updates={updates} />
      <BankingPartners />
      <Footer />
    </div>
  );
}
