import React, { useState } from "react";
import { Button } from "../core/Button";

const categories = [
  "All Categories",
  "Weddings",
  "Corporate Events",
  "Celebrations",
  "Conferences",
];

export function GalleryFilterBar() {
  const [activeFilter, setActiveFilter] = useState("Image");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-8">
        {/* Filter Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={() => setActiveFilter("Image")}
            showIcon={false}
            className={`px-6 py-2.5 rounded-full transition-all ${
              activeFilter === "Image"
                ? "bg-[#C6A14B] text-white font-semibold shadow-md"
                : "bg-[#f5f5f5] text-[#333] font-semibold hover:bg-[#e5e5e5]"
            }`}
          >
            Image
          </Button>
          <Button
            onClick={() => setActiveFilter("Video")}
            showIcon={false}
            className={`px-6 py-2.5 rounded-full transition-all ${
              activeFilter === "Video"
                ? "bg-[#C6A14B] text-white font-semibold shadow-md"
                : "bg-[#f5f5f5] text-[#333] font-semibold hover:bg-[#e5e5e5]"
            }`}
          >
            Video
          </Button>
        </div>
        {/* Category Select */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
          <span className="text-sm text-gray-600 whitespace-nowrap">
            Select Categories :
          </span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-gray-300 text-sm text-gray-700 bg-white outline-none cursor-pointer focus:border-[#C6A14B] transition-colors"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
