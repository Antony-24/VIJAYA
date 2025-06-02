import React from "react";
import headerImage from "../../assets/images/blog-1.jpg";

export const HeaderSection = () => {
  return (
    <section className="w-full aspect-[1920/500] relative">
      <img
        src={headerImage}
        alt="about us"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center">
        <h1 className="text-white font-['Gilda_Display'] font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-[0px] text-center capitalize px-4">
          News & Blogs
        </h1>
      </div>
    </section>
  );
};
