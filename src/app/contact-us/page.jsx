import Footer from '@/components2/Footer'
import Header from '@/components2/Header'
import React from 'react'
import HeroSection from './HeroSection'
import ContactInfoCards from './ContactInfo'
import FAQ from '../(home)/FAQ'
import WhatsAppCTA from './WhatsappCTA'
import { FaqFetch, SeoById} from '@/services/api'


export async function generateMetadata() {
  const seo = await SeoById("contact-us");

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
      url: "https://aurex.accoladesweb.com",
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

async function page() {
  const faqData = await FaqFetch()
  return (
    <div>
      <Header />
      <HeroSection />
      <ContactInfoCards />
      <WhatsAppCTA />
      <FAQ data={faqData} />
      <Footer />
    </div>
  )
}

export default page
