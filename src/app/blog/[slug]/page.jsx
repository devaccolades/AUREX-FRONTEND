import React from 'react'
import BlogInner from './BlogInner'
import Header from '@/components2/Header'
import { BlogsById, BlogsFetch } from '@/services/api';

export default async function page({ params }) {
  const slug = params.slug;
  const data = await BlogsById(slug); 
  const type=data?.type || null; 
  
  const fulldata = await BlogsFetch();
  const relatedBlogs = type
  ? fulldata.filter(
      item => item.type === type && item.slug !== slug
    )
  : [];

  return (
    <div>
        <Header />
        <BlogInner data={data} rel={relatedBlogs}/>
    </div>
  )
}
