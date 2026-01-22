import React from 'react'
import BlogInner from './BlogInner'
import Header from '@/components2/Header'
import { BlogsById, BlogsFetch } from '@/services/api';


/* 🔹 SEO META GENERATION */
export async function generateMetadata({ params }) {
  const slug = params.slug;
  const blog = await BlogsById(slug);

  if (!blog) {
    return {
      title: "Blog | Aurex Builders",
      description: "Read latest updates and insights from Aurex Builders",
    };
  }

  const title = blog.meta_title || blog.title;
  const description =
    blog.meta_description ||
    blog.content?.replace(/<[^>]+>/g, "").slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: blog.image
        ? [
            {
              url: blog.image, // must be absolute URL
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
  };
}


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
