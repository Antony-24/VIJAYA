import React from 'react'
import HeroSlider from '../components/Facilities/HeroSlider'
import TestimonialsSlider from '../../src/components/TestimonialsSlider'
import FacilitiesSection from '../components/Facilities/FacilitiesSection'
import EnquirySection from '../components/Facilities/EnquirySection'

function Facilities() {
  return (
    <div>
      <HeroSlider />
      <FacilitiesSection />
      <EnquirySection />
    <TestimonialsSlider />
    </div>
  )
}

export default Facilities