import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Optional for the arrow icon
import aboutImage from '../assets/images/about-image.svg'; // Replace with actual image path

const AboutGrid = () => {
  return (
    <section className="py-16 max-w-[1500px] mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <p className="text-sm uppercase text-[#b89b63] font-semibold tracking-wider mb-3">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug mb-6">
            A Venue Where Every Event<br />Becomes A Masterpiece.
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Nestled in the heart of elegance, Vijaya Convention Center is more than just a venue — it’s where dreams are brought to life.
            A proud endeavor of the esteemed KPV Group, Vijaya has been designed to host the most prestigious events with unmatched sophistication.
            <br /><br />
            For decades, Vijaya has been synonymous with luxury, grandeur, and unforgettable experiences.
            From opulent weddings and corporate galas to world-class exhibitions and cultural celebrations,
            our venue stands as a testament to architectural brilliance and impeccable service.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#b89b63] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#a88b53] transition">
            Discover More <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={aboutImage}
            alt="Vijaya Convention Center"
            className="rounded-md shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutGrid;
