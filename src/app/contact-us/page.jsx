import Footer from '@/components2/Footer'
import Header from '@/components2/Header'
import React from 'react'
import HeroSection from './HeroSection'
import ContactInfoCards from './ContactInfo'
import FAQ from '../(home)/FAQ'
import WhatsAppCTA from './WhatsappCTA'
import { FaqFetch } from '@/services/api'

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
