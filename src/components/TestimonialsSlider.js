// components/TestimonialsSlider.js

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../assets/images/anime3.svg"; // Replace with actual image path

const testimonials = [
  {
    name: "Amanda Smith",
    title: "Founder of Mangcoding",
    content:
      "Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving.",
    image: avatar,
  },
  {
    name: "Amanda Smith",
    title: "Founder of Mangcoding",
    content:
      "Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving.",
    image: avatar,
  },
  {
    name: "Amanda Smith",
    title: "Founder of Mangcoding",
    content:
      "Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving.",
    image: avatar,
  },
  {
    name: "Amanda Smith",
    title: "Founder of Mangcoding",
    content:
      "Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving.",
    image: avatar,
  },
];

const TestimonialsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "15%", // medium spacing to show partial sides
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    beforeChange: (_, next) => setActiveSlide(next),
    dots: true,
    customPaging: (i) => (
      <div className="mt-12 w-full flex items-center justify-center">
        <div
          className={`h-2 transition-all duration-300 ${
            i === activeSlide ? "bg-[#CBA135] w-14" : "bg-gray-300 w-2"
          }`}
        />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "12%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "8%",
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-white w-full overflow-hidden">
      <div className="text-center mb-12 px-4">
        <p className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
          Testimonial
        </p>
        <h2 className="text-4xl font-serif font-semibold text-gray-800 mt-2">
          True Stories Of Our Clients
        </h2>
      </div>

      <div className="-mx-2">
        <Slider {...settings}>
          {testimonials.map((item, index) => {
            const isActive = index === activeSlide;
            return (
              <div key={index} className="px-2">
                <div
                  className={`transition-all duration-500 w-full mx-auto p-8 shadow-lg relative
                    ${
                      isActive
                        ? "bg-[#CBA135] text-white z-10"
                        : "bg-[#f3ede3] text-gray-700 opacity-90 z-0 border border-yellow-100"
                    }
                  `}
                  style={{ minHeight: 320 }}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover mr-5"
                    />
                    <div>
                      <h4
                        className={`font-bold text-lg ${
                          isActive ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.name}
                      </h4>
                      <p
                        className={`text-sm mt-1 ${
                          isActive ? "text-yellow-100" : "text-gray-800"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-6 right-8 text-6xl font-bold opacity-30 text-white pointer-events-none select-none">
                    “
                  </div>
                  <p
                    className={`text-base leading-relaxed mt-2 ${
                      isActive ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
