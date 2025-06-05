import React from 'react';
import Slider from 'react-slick';
import { FaShuttleVan, FaTree, FaLandmark, FaParking, FaChild, FaBuilding } from 'react-icons/fa';
import { MdOutlineArchitecture } from 'react-icons/md';

// Facilities data
const facilities = [
  {
    id: 1,
    icon: <FaShuttleVan className="w-8 h-8" />,
    title: 'Pick Up & Drop',
    description:
      'We’ll pick up from the airport while you relax on your ride, ensuring a comfortable journey.',
  },
  {
    id: 2,
    icon: <FaTree className="w-8 h-8" />,
    title: 'Scenic Outdoor Event Lawns',
    description:
      'Experience our beautifully landscaped lawns, perfect for outdoor events and gatherings.',
  },
  {
    id: 3,
    icon: <FaLandmark className="w-8 h-8" />,
    title: 'Spacious Grand Ballroom',
    description:
      'Our grand ballroom offers ample space and elegance for your special occasions.',
  },
  {
    id: 4,
    icon: <FaParking className="w-8 h-8" />,
    title: 'Ample Guest Parking',
    description:
      'Convenient and spacious parking facilities are available for all your guests.',
  },
  {
    id: 5,
    icon: <FaChild className="w-8 h-8" />,
    title: 'Dedicated Kids Play Zone',
    description:
      'A safe and fun-filled play area designed exclusively for children to enjoy.',
  },
  {
    id: 6,
    icon: <FaLandmark className="w-8 h-8" />,
    title: 'Spacious Grand Ballroom',
    description:
      'Our grand ballroom offers ample space and elegance for your special occasions.',
  },
  {
    id: 7,
    icon: <FaChild className="w-8 h-8" />,
    title: 'Dedicated Kids Play Zone',
    description:
      'A safe and fun-filled play area designed exclusively for children to enjoy.',
  },
  {
    id: 8,
    icon: <MdOutlineArchitecture className="w-8 h-8" />,
    title: 'Iconic Architecture & Interiors',
    description:
      'Marvel at our iconic architecture and thoughtfully designed interiors that blend tradition with modernity.',
  },
];

const AmenityCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="w-full px-6 py-12 lg:px-24 lg:py-24">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span
          className="text-sm tracking-widest uppercase"
          style={{ color: '#C4A04B' }}
        >
          Facilities
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-gray-900">
          World‐Class Amenities For Every Occasion
        </h2>
      </div>

      {/* Facilities Slider on Mobile and Grid on Larger Screens */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile Slider */}
        <div className="block lg:hidden">
          <Slider {...settings}>
            {facilities.map((item) => (
              <div
                key={item.id}
                className="group relative border border-[#C4A04B] bg-white p-6 transition-colors duration-300 hover:bg-[#C4A04B] hover:border-transparent"
              >
                {/* Icon */}
                <div className="text-[#C4A04B] transition-colors duration-300 group-hover:text-white">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 transition-colors duration-300 group-hover:text-white">
                  {item.description}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid Layout on Larger Screens */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {facilities.map((item) => (
            <div
              key={item.id}
              className="group relative border border-[#C4A04B] bg-white p-6 transition-colors duration-300 hover:bg-[#C4A04B] hover:border-transparent"
            >
              {/* Icon */}
              <div className="text-[#C4A04B] transition-colors duration-300 group-hover:text-white">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 transition-colors duration-300 group-hover:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenityCard;
