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
import { ProjectBySlugFetch } from "@/services/api";


export default async function Page({ params }) {
  const { slug } = await params; // ✅ REQUIRED

  const project = await ProjectBySlugFetch(slug);



  return (
    <div>
      <Header />
      <ProjectHero project={project}/>
      <ProjectOverviewSection />
      <AmenitiesSection />
      <CommonFacilities />
      <FloorPlansSection />
      <PrecisionBuiltSection />
      {/* <MapSection /> */}
      <NearbyConnectivity />
      <YoutubeEmbedSection />
      <ConstructionUpdates />
      <BankingPartners />
      <Footer />
      
    </div>
  );
}

