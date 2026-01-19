import React from 'react'

import HeroSection from './HeroSection'
import BlogContentSection from './BlogContentSection'

export default function BlogInner({data}) {
    return (
    <div>
        <HeroSection data={data}/>
        <BlogContentSection data={data} />
    </div>
    )
}
