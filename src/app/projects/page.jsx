import Header from '@/components2/Header'
import React from 'react'
import HeroSection from './HeroSection'
import Footer from '@/components2/Footer'
import ProjectListing from './ProjectListing'
import WhyChooseUs from '../(home)/WhyChoose'
import HomeBuyingJourney from './HomeBuyingJourney'
import BankingPartners from './BankingPartners'
import SignatureProjects from './SignatureProjects'

import { ProjectsFetch, SeoById } from '@/services/api';

async function fetchSeoData(path) {
  let data = {};
  try {
    const res = await SeoById(path);
    console.log("Raw SEO API response:", res);
    if (res?.data) {
      data = res.data;
    }
  } catch (error) {
    console.log(error);
  }
  return data;
}


export default async function page() {
  const projectsData = await ProjectsFetch();
  // const branchDetails = await BranchDetailsFetch();
  return (
    <div>
      <Header />
      <HeroSection />
      <SignatureProjects data={projectsData}  />
      <ProjectListing data={projectsData}/>
      <HomeBuyingJourney />
      <WhyChooseUs />
      <BankingPartners />
      <Footer />
    </div>
  )
}


