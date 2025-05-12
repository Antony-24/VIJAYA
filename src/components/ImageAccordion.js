import { useState } from 'react';
import acc1 from '../assets/images/slider-1.jpg';
import acc2 from '../assets/images/slider-2.png';

const accordionItems = [
  {
    title: 'Corporate Events',
    description: 'Nestled in the heart of elegance, Vijaya Convention Center is more than just a venue...',
    image: acc1,
  },
  {
    title: 'Weddings & Celebrations',
    description: 'Celebrate life’s most beautiful moments...',
    image: acc2,
  },
  {
    title: 'Exhibitions & Conferences',
    description: 'Host groundbreaking showcases...',
    image: acc1,
  },
  {
    title: 'Dining Area',
    description: 'Dine in elegance and class...',
    image: acc2,
  },
];

export default function ImageAccordion() {
  const [active, setActive] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="w-full max-w-[1500px] mx-auto">
      <div className="flex h-[600px] w-full overflow-hidden">
        {accordionItems.map((item, index) => {
          const isActive = active === index;

          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              onMouseMove={isActive ? handleMouseMove : undefined}
              className={`relative group transition-all duration-700 ease-in-out cursor-pointer ${
                isActive ? 'md:flex-[5] flex-[3]' : 'md:flex-[0.5] flex-[0.75]'
              }`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 z-0" />

              {/* Active Content */}
              {isActive ? (
                <div className="absolute bottom-6 left-6 text-white z-10 transition-all duration-700 ease-in-out opacity-100 translate-y-0">
                  <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
                  <p className="text-sm md:text-base mt-2 max-w-md">{item.description}</p>
                </div>
              ) : (
                // Inactive Content at Bottom
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white z-10 flex flex-col items-center">
                  <div className="mb-2 bg-[#cfa349] w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold">
                    {`0${index + 1}`}
                  </div>
                  <span className="text-sm tracking-wider mt-1 rotate-[-90deg] whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              )}

              {/* Cursor-following "View More" circle */}
              {isActive && (
                <div
                  className="absolute z-20 pointer-events-none transition-transform duration-200 ease-out"
                  style={{
                    transform: `translate(${cursorPos.x - 48}px, ${cursorPos.y - 48}px)`,
                  }}
                >
                  <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center text-white text-sm font-medium backdrop-blur-md bg-white/10">
                    View More
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
