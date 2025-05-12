import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AboutGrid from '../components/AboutGrid';
import ImageAccordion from '../components/ImageAccordion';
import AmenitiesSection from '../components/AmenitiesSection';
import GallerySlider from '../components/GallerySlider';
import ClientSlider from '../components/ClientSlider';
import ImageExplosion from '../components/ImageExplosion';
import TestimonialsSlider from '../components/TestimonialsSlider';
import NewsAndBlogs from '../components/NewsAndBlogs';

const Home = () => {
  return (
 <div>
  <HeroSlider />
  <AboutGrid />
  <ImageAccordion />


<div className='text-center my-5'>
    <p className='text-[#AA8453] font-[16px] font-poppins'>FACILITIES</p>
    <h2 className='text-black text-[42px]'>World-Class Amenities for Every Occasion</h2>
</div>
<AmenitiesSection />
<GallerySlider />
<ClientSlider />
<ImageExplosion />
<TestimonialsSlider />
<NewsAndBlogs />

 </div>
  );
};

export default Home;
