import React, { useState, useRef } from "react";
import Slider from "react-slick";
import downarrow from '../../assets/images/down.svg'
import slide from '../../assets/images/facilitiesh.svg'

const slides = [
  {
    id: 0,
    title: "Facilities",
    bg: slide
  },
  {
    id: 1,
    title: "Facilities",
    bg: slide
  },
  {
    id: 2,
    title: "Facilities",
    bg: slide
  },
 
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Scroll handler for down arrow click — customize as needed
  const handleDownArrowClick = () => {
    // Example: smooth scroll to element with id="next-section"
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const settings = {
    dots: false, // custom dots already
    infinite: true,
    fade: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map(({ id, title, subtitle, bg }) => (
          <div key={id}>
            <div
              className="w-full h-[50vh] lg:h-screen lg:mt-0 mt-24 bg-center bg-cover flex flex-col justify-center items-start text-white px-8 sm:px-12 relative"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <h1 className="text-5xl font-bold drop-shadow-lg mb-3 sm:text-4xl">{title}</h1>

              {/* Custom dots right below title */}
              <div className="flex space-x-3 mb-8">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                      currentSlide === index
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white"
                    }`}
                    onClick={() => sliderRef.current.slickGoTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <p className="text-xl drop-shadow-md max-w-xl mb-8 sm:text-lg">{subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Down arrow button */}
      {/* <button
        onClick={handleDownArrowClick}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-70 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button> */}

      <img className="absolute bottom-6 w-12 left-1/2 transform -translate-x-1/2 text-white rounded-full p-2 hover:bg-opacity-70 transition" src={downarrow}  />
    </div>
  );
};

export default HeroSlider;
