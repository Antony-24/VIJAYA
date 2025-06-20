import React from "react";
import aboutImg from "../assets/images/about-image.svg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Button } from "./core/Button";

const AboutGrid = () => {
  const [sectionRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className={`w-full px-6 py-12 lg:px-24 lg:py-24 transition-colors duration-500 ${
        isIntersecting ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col space-y-6">
          <span className="text-sm tracking-widest uppercase text-yellow-500">
            About Us
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold leading-tight transition-colors duration-500 ${
              isIntersecting ? "text-white" : "text-black"
            }`}
          >
            A Venue Where Every Event <br className="hidden lg:block" />
            Becomes A Masterpiece.
          </h2>
          <p
            className={`transition-colors duration-500 ${
              isIntersecting ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Nestled in the heart of elegance, Vijaya Convention Center is more
            than just a venue—it's where dreams are brought to life. A proud
            endeavor of the esteemed KPV Group, Vijaya has been designed to host
            the most prestigious events with unmatched sophistication. For
            decades, Vijaya has been synonymous with luxury, grandeur, and
            unforgettable experiences. From opulent weddings and corporate galas
            to world-class exhibitions and cultural celebrations, our venue
            stands as a testament to architectural brilliance and impeccable
            service.
          </p>

          <Button>Discover More</Button>
        </div>

        {/* Right Column: Image with Decorative Bar */}
        <div className="relative w-full">
          {/* Main Image */}
          <img
            src={aboutImg} // Replace with actual image path
            alt="Vijaya Convention Center Exterior"
            className="w-full rounded-md object-cover"
          />

          {/* Gold bar underneath (only on large screens) */}
          <div className="hidden lg:block absolute bottom-0 right-0 w-3/4 h-2 bg-yellow-500" />
        </div>
      </div>
    </section>
  );
};

export default AboutGrid;
