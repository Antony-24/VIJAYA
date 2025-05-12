import React from 'react';

const AmenityCard = ({ icon, title, description }) => {
  return (
 <div className="group border border-yellow-700 bg-neutral-50 p-6 transition-all duration-300 hover:bg-yellow-700 hover:text-white">
      <div className="mb-4 text-yellow-700 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
   
  );
};

export default AmenityCard;
