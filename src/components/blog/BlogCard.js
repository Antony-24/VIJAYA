import React from "react";
import { Link } from "react-router-dom";

export function BlogCard({ id, tag, image, date, description }) {
  return (
    <Link to={`/blog/${id}`} className="block">
      <div className="bg-white hover:shadow-lg transition overflow-hidden flex flex-col h-full">
        <div className="relative">
          <img
            src={image}
            alt={tag}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="font-['Gilda_Display'] text-white absolute top-0 left-0 px-4 py-2 text-sm font-semibold bg-[#CBA135]">
            {tag} <span className="ml-1">→</span>
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <p className="font-['Poppins'] font-semibold text-xs mb-1 text-gray-500">
            {date}
          </p>
          <p className="font-['Gilda_Display'] text-base text-gray-800 mb-2 flex-1">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
