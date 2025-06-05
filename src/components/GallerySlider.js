import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider_1 from '../assets/images/slider-1.jpg';
import slider_2 from '../assets/images/slider-2.png';
import { FaArrowRight } from 'react-icons/fa';

// Reusable rotating circle component
const RotatingExploreCircle = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
    <svg width="180" height="180" viewBox="0 0 180 180" className="animate-[spin_12s_linear_infinite]">
      <defs>
        <path
          id="circlePath"
          d="M90,90 m-80,0 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0"
        />
      </defs>
      <text fill="white" fontSize="10" letterSpacing="3">
        <textPath xlinkHref="#circlePath" startOffset="0%">
          • EXPLORE NOW • EXPLORE NOW • EXPLORE NOW • EXPLORE NOW •
        </textPath>
      </text>
    </svg>
    <FaArrowRight className="absolute text-white text-xl" />
  </div>
);

// Gallery Items
const galleryItems = [
  {
    image: slider_1,
    type: 'image',
    caption: ''
  },
  {
    image: slider_2,
    type: 'image',
    caption: ''
  },
  {
    image: 'https://www.w3schools.com/html/mov_bbb.mp4',
    type: 'video',
    caption: ''
  },
  {
    image: slider_1,
    type: 'image',
    caption: ''
  },
  {
    image: 'https://www.w3schools.com/html/movie.mp4',
    type: 'video',
    caption: ''
  }
];

const GallerySlider = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeSlide, setActiveSlide] = useState(0);

  const filteredItems =
    activeTab === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.type === activeTab);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    afterChange: index => setActiveSlide(index),
    appendDots: dots => (
      <div className="flex justify-center mt-6">
        <ul className="flex space-x-2 items-center justify-center">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={`h-2 w-5 rounded-sm transition-all duration-300 ${
          i === activeSlide ? 'bg-white' : 'bg-white/30 hover:bg-white'
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  };

  const tabs = ['all', 'image', 'video'];

  return (
    <section
      className="w-full bg-repeat text-white py-16 bg-black"
      style={{ backgroundImage: `url('/bg-pattern.png')` }}
    >
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header + Tabs */}
        <div className="grid md:flex gap items-center justify-between mb-12 w-[90%] mx-auto">
          <div>
            <p className="uppercase tracking-widest text-sm text-white/70">Gallery</p>
            <h2 className="text-4xl font-serif">Memorable Moments</h2>
          </div>
          <div className="flex space-x-4">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveSlide(0);
                }}
                className={`px-4 py-1 text-sm rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-yellow-500 text-black'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Slider */}
        <Slider key={activeTab} {...settings}>
          {filteredItems.map((item, index) => (
            <div key={index} className="px-2 relative">
              <div className="relative">
                {item.type === 'video' ? (
                  <video
                    src={item.image}
                    controls
                    className="w-full h-[300px] lg:h-[500px] object-cover rounded"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={`Slide ${index}`}
                    className="w-full h-[300px] lg:h-[500px] object-cover rounded"
                  />
                )}

                {/* Caption */}
                {item.caption && (
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white text-black p-6 max-w-xs shadow-xl text-sm leading-relaxed z-20">
                    {item.caption}
                  </div>
                )}

                {/* Rotating Text – Only for images and if current */}
                {item.type === 'image' && index === activeSlide && <RotatingExploreCircle />}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GallerySlider;
