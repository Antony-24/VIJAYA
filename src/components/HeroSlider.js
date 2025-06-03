import React, { useState, useEffect } from 'react';
import slide1 from '../assets/images/slider-1.jpg';
import slide2 from '../assets/images/slider-2.png';


const slidesData = [
  {
    id: 1,
    image: slide1, // Replace with actual image paths or URLs
    title: 'Elevate Your Events With Excellence',
    subtitle: 'The Ultimate Luxury Experience',
    buttonText: 'Plan Your Event',
    buttonHref: '#',
    thumbnail: slide1, // Replace with actual thumbnail paths or URLs
    thumbnailAlt: 'Slide 1 Thumbnail',
  },
  {
    id: 2,
    image: slide2,
    title: 'Unforgettable Moments Await',
    subtitle: 'Discover Sophistication & Style',
    buttonText: 'Explore Now',
    buttonHref: '#',
    thumbnail: slide2,
    thumbnailAlt: 'Slide 2 Thumbnail',
  },
  {
    id: 3,
    image: slide1,
    title: 'Host Your Dream Gala Here',
    subtitle: 'World-Class Facilities',
    buttonText: 'Book a Tour',
    buttonHref: '#',
    thumbnail: slide1,
    thumbnailAlt: 'Slide 3 Thumbnail',
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[50vh] lg:h-[90vh] overflow-hidden py-12">
      {/* Main Slides */}
      <div className="absolute inset-0">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000
              ${index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'}
            `}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Overlay (dark gradient to improve text visibility) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />

      {/* Slide Content */}
      <div className="relative z-30 flex flex-col justify-start md:justify-center lg:justify-end h-full px-6 md:px-12 lg:px-24 text-white">
        <p className="text-sm tracking-widest uppercase mb-2">
          {slidesData[currentIndex].subtitle}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6 max-w-3xl">
          {slidesData[currentIndex].title}
        </h1>
        <a
          href={slidesData[currentIndex].buttonHref}
          className="inline-block bg-yellow-500 hover:bg-yellow-600 transition-colors text-black font-medium py-3 px-6 rounded-md w-full md:w-[20%]"
        >
          {slidesData[currentIndex].buttonText}
        </a>
      </div>

      {/* Thumbnails / Pagination (aligned to right) */}
      <div className="absolute bottom-6 right-6 z-40 w-auto px-4">
        <div className="flex space-x-4">
          {slidesData.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-md transition-transform duration-300 focus:outline-none
                ${index === currentIndex
                  ? 'scale-110 ring-2 ring-yellow-500 w-[20%]'
                  : 'opacity-70 hover:opacity-100'}
              `}
            >
              <img
                src={slide.thumbnail}
                alt={slide.thumbnailAlt}
                className="w-24 h-16 object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.586 2.664A1 1 0 019 12.84V7.16a1 1 0 011.166-.986l4.586 2.664a1 1 0 010 1.768z" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
