import React from "react";
import aboutUsImage1 from "../../assets/images/about_us-2.png";
import aboutUsImage2 from "../../assets/images/about_us-3.png";

export const AboutUsSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row bg-white py-16 px-4 md:px-24 gap-8">
      <div className="md:w-1/2 flex flex-col gap-4">
        <h6 className="text-[#CBA135] font-['Poppins'] font-medium text-base tracking-[4px] uppercase">
          About us
        </h6>
        <h2 className="font-['Gilda_Display'] text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
          A Venue Where Every Event Becomes A Masterpiece.
        </h2>
        <p className="font-['Poppins'] text-base text-gray-700 mb-2">
          Nestled in the heart of elegance, Vijaya Convention Center is more
          than just a venue. It's where dreams are brought to life. A proud
          endeavor of the esteemed KPV Group, Vijaya has been designed to host
          the most prestigious events with unmatched sophistication. For
          decades, Vijaya has been synonymous with luxury, grandeur, and
          unforgettable experiences. From opulent weddings and corporate galas
          to world-class exhibitions and cultural celebrations, our venue stands
          as a testament to architectural brilliance and exceptional service.
        </p>
        <p className="font-['Poppins'] text-base text-gray-700">
          Nestled in the heart of elegance, Vijaya Convention Center is more
          than just a venue. It's where dreams are brought to life. A proud
          endeavor of the esteemed KPV Group, Vijaya has been designed to host
          the most prestigious events with unmatched sophistication. For
          decades, Vijaya has been synonymous with luxury, grandeur, and
          unforgettable experiences.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-row gap-6 justify-center items-end">
        <img
          src={aboutUsImage1}
          alt="about us"
          className="w-64 h-80 object-cover"
        />
        <img
          src={aboutUsImage2}
          alt="about us"
          className="w-64 h-80 translate-y-[-60px] object-cover"
        />
      </div>
    </section>
  );
};
