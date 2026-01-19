import Header from "@/components2/Header";
import React from "react";
import HeroSection from "./HeroSection";
import Footer from "@/components2/Footer";
import { BlogsFetch } from "@/services/api";

export default async function page (){
  const data = await BlogsFetch();
  
  return (
    <>
      <Header />
      <HeroSection data={data} />
      <Footer />
    </>
  );
};


