import React from "react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
  "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1",
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
];

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto gap-6 pb-8">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="overflow-hidden shadow-lg bg-white flex items-center justify-center min-h-[220px]"
        >
          <img
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-[220px] object-cover"
          />
        </div>
      ))}
    </div>
  );
}
