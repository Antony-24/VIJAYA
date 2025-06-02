import React, { useState } from "react";

export const TeamCard = ({ image, name, title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[400px] overflow-hidden shadow-lg group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ maxWidth: 380 }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className={`absolute left-0 right-0 bottom-0 transition-all duration-300 bg-[#CBA135] overflow-hidden ${
          hovered && description ? "h-3/5" : "h-[90px]"
        } flex flex-col justify-end p-6`}
        style={{
          height: hovered && description ? "60%" : "90px",
          opacity: 0.97,
        }}
      >
        <div>
          <div className="text-white font-bold text-2xl mb-1">{name}</div>
          <div className="text-white text-sm mb-2 opacity-80">{title}</div>
          {hovered && description && (
            <div className="text-white text-sm opacity-90 mt-2">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
