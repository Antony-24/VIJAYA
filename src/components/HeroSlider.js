import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slider1 from "../assets/images/slider-2.png"
import slider2 from "../assets/images/slider1.svg"
import slider3 from "../assets/images/slider-1.jpg"


const slides = [
  {
    id: 1,
    title: "Elevate Your Events With Excellence",
    subtitle: "The Ultimate Luxury Experience",
    image: slider1,
    thumbnail: slider1,
  },
  {
    id: 2,
    title: "Host Memorable Moments",
    subtitle: "A Venue Like No Other",
    image: slider2,
    thumbnail: slider2,
  },
  {
    id: 3,
    title: "Experience Elegance & Class",
    subtitle: "Redefine Your Expectations",
    image: slider3,
    thumbnail: slider3,
  },
];

export default function EventHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <div className="relative w-full h-screen overflow-hidden mt-[-2.1rem]">
      {/* Background image transition */}
      <AnimatePresence>
        <motion.img
          key={current.id}
          src={current.image}
          alt={current.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
        />
      </AnimatePresence>

      {/* Overlay content */}
      <div className="relative z-10 w-full h-full bg-black/50 flex items-end">
        <div className="w-[1500px] mx-auto py-6 md:py-12 flex flex-col md:flex-row justify-between items-end md:items-end">
          {/* Content */}
          <div className="text-white max-w-xl md:mb-0 mb-8">
            <p className="uppercase text-xs md:text-sm tracking-widest">{current.subtitle}</p>
            <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-4 md:mb-6">
              {current.title}
            </h1>
            <button className="bg-yellow-500 text-black px-5 py-2.5 text-sm md:text-base rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-400 transition">
              Plan Your Event
              <span className="text-lg">↗</span>
            </button>
          </div>

          {/* Thumbnails - below on mobile, right on desktop */}
          <div className="flex md:flex-row flex-wrap gap-3 md:gap-3 md:ml-6">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setIndex(i)}
                className={`relative w-24 h-16 md:w-28 md:h-20 rounded-md overflow-hidden border-2 ${
                  i === index ? "border-yellow-500" : "border-transparent"
                } hover:border-yellow-400 transition-all`}
              >
                <img
                  src={slide.thumbnail}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
                {i === index && (
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
