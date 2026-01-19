import React from 'react'
import BlogInner from './BlogInner'
import Header from '@/components2/Header'
import { BlogsById } from '@/services/api';

export default async function page({ params }) {
  const slug = params.slug;
  const data = await BlogsById(slug);  
  return (
    <div>
        <Header />
        <BlogInner data={data}/>
    </div>
  )
}
