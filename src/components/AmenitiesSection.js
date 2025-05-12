import React from 'react';
import AmenityCard from './AmenityCard';
import { FaShuttleVan, FaTree, FaParking, FaChild, FaHotel, FaBuilding } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: <FaShuttleVan className="h-6 w-6" />,
      title: 'Pick Up & Drop',
      description: 'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
    },
    {
      icon: <FaTree className="h-6 w-6" />,
      title: 'Scenic Outdoor Event Lawns',
      description: 'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
    },
    {
      icon: <MdEvent className="h-6 w-6" />,
      title: 'Spacious Grand Ballroom',
      description: 'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
    },
    {
      icon: <FaParking className="h-6 w-6" />,
      title: 'Ample Guest Parking',
      description: 'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
    },
    {
      icon: <FaChild className="h-6 w-6" />,
      title: 'Dedicated Kids Play Zone',
      description: 'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
    },
    {
      icon: <FaHotel className="h-6 w-6" />,
      title: 'Spacious Grand Ballroom',
      description: 'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
    },
    {
      icon: <FaChild className="h-6 w-6" />,
      title: 'Dedicated Kids Play Zone',
      description: 'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
    },
    {
      icon: <FaBuilding className="h-6 w-6" />,
      title: 'Iconic Architecture & Interiors',
      description: 'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6 mx-auto w-full lg:w-[1500px]">
      {amenities.map((amenity, index) => (
        <AmenityCard key={index} {...amenity} />
      ))}
    </div>
  );
};

export default AmenitiesSection;
