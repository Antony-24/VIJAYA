import React from "react";
import { HeaderSection } from "../components/gallery/HeaderSection";
import { GalleryFilterBar } from "../components/gallery/GalleryFilterBar";
import { GalleryGrid } from "../components/gallery/GalleryGrid";
import { Button } from "../components/core/Button";

function Gallery() {
  return (
    <div>
      <div className="top-[100px]"></div>
      {/* Header Section */}
      <HeaderSection />

      {/* Gallery Filter Bar */}
      <GalleryFilterBar />

      {/* Gallery Grid */}
      <GalleryGrid />

      {/* Load More Button */}
      <div className="flex justify-center py-12">
        <Button>Load More</Button>
      </div>
    </div>
  );
}

export default Gallery;
