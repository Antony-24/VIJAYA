import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import accordian1 from '../assets/images/accordian.svg';
import accordian2 from '../assets/images/accordian1.svg';

const accordionItems = [
  {
    id: 1,
    title: 'Corporate Events',
    description:
      'Nestled in the heart of elegance, Vijaya Convention Center is more than just a venue—it’s where dreams are brought to life. A proud endeavor of the esteemed ',
    image: accordian1,
  },
  {
    id: 2,
    title: 'Weddings & Celebrations',
    description:
      'Our exquisite wedding spaces blend timeless elegance with modern luxury. From grand ballrooms to intimate courtyards, we curate every detail to make your special day unforgettable—complete with personalized décor, gourmet catering, and world-class hospitality.',
    image: accordian2,
  },
  {
    id: 3,
    title: 'Exhibitions & Conferences',
    description:
      'With state-of-the-art AV systems and sprawling exhibit halls, Vijaya is the perfect setting for large-scale exhibitions, trade shows, and international conferences. Our dedicated event team ensures seamless logistics and unparalleled technical support.',
    image: accordian2,
  },
  {
    id: 4,
    title: 'Dining Area',
    description:
      'Indulge in gourmet cuisine in our elegant dining spaces. From plated fine dining to lavish buffet spreads, our chefs use the freshest ingredients to craft menus that satisfy every palate—whether it’s a corporate luncheon or a black-tie gala.',
    image: accordian1,
  },
];

const ImageAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mobileSliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="w-full px-6 py-12 lg:px-24 lg:py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <span className="text-sm tracking-widest uppercase text-yellow-500">
            Services
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold leading-snug">
            A Venue Where Every Event <br className="hidden lg:block" />
            Becomes A Masterpiece.
          </h2>
        </div>
        <div className="text-gray-700">
          <p>
            Nestled in the heart of elegance, Vijaya Convention Center is more than just a venue—it’s where dreams are brought to life. A proud endeavor of the esteemed KPV Group, Vijaya has been designed to host the most prestigious events with unmatched sophistication. For decades, Vijaya has been.
          </p>
        </div>
      </div>

      {/* MOBILE SLIDER VERSION */}
      <div className="mt-12 block lg:hidden">
        <Slider {...mobileSliderSettings}>
          {accordionItems.map((item) => (
            <div key={item.id} className="px-2">
              <div
                className="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat overflow-hidden rounded-xl"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
                  <div>
                    <h3 className="text-xl font-serif font-semibold leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                  <button className="self-start bg-yellow-500 hover:bg-yellow-600 transition-colors text-black font-medium py-2 px-4 rounded-full mt-4">
                    View More
                  </button>
                </div>
                {/* Number */}
                <span className="absolute top-4 right-4 inline-flex items-center justify-center w-8 h-8 bg-yellow-500 text-black font-medium rounded-full">
                  0{item.id}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* DESKTOP ACCORDION VERSION */}
      <div className="mt-12 hidden lg:flex lg:h-[60vh]">
        {accordionItems.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative bg-cover bg-center bg-no-repeat mx-1 overflow-hidden transition-all duration-500 ease-in-out ${
                isActive ? 'flex-[5]' : 'flex-[0.5]'
              }`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out ${
                  isActive ? 'opacity-50' : 'opacity-30'
                }`}
              />
              {isActive && (
                <div className="absolute inset-0 z-10 flex flex-col justify-end px-8 lg:px-16 text-white pb-12">
                  <h3 className="text-2xl font-serif font-semibold leading-snug mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base max-w-lg mb-6">{item.description}</p>
                </div>
              )}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500">
                <span
                  className={`text-white text-xs sm:text-sm font-medium tracking-wider transform -rotate-90 origin-center mb-24 whitespace-nowrap ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {item.title}
                </span>
                {!isActive && (
                  <span className="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-black bg-yellow-500 rounded-full">
                    0{item.id}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImageAccordion;
