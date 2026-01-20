import Footer from '@/components2/Footer'
import Header from '@/components2/Header'
import React from 'react'
import JobApplySection from './JobApplySection'
import { CareersById } from '@/services/api';

export default async function page({ params }) {
  const slug = params.slug;
  const data = await CareersById(slug);  
  
  return (
    <div>
      <Header />
      <JobApplySection data={data} />
      <Footer />
    </div>
  )
}

