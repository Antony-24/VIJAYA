import React from "react";
import HeroSlider from "../components/HeroSlider";
import AboutGrid from "../components/AboutGrid";
import ImageAccordion from "../components/ImageAccordion";
import AmenityCard from "../components/AmenityCard";
import GallerySlider from "../components/GallerySlider";
import ClientSlider from "../components/ClientSlider";
import TestimonialsSlider from "../components/TestimonialsSlider";
import NewsAndBlogs from "../components/NewsAndBlogs";
import AnimatedCollage from "../components/AnimatedCollage";

function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutGrid />
      <ImageAccordion />
      <AmenityCard />
      <GallerySlider />
      <ClientSlider />
      <AnimatedCollage />
      <TestimonialsSlider />
      <NewsAndBlogs />
    </div>
  );
}

export default Home;
