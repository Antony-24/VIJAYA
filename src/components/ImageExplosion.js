import React, { useState, useEffect } from 'react';
import anime1 from '../assets/images/anime1.svg';
import anime2 from '../assets/images/anime2.svg';
import anime3 from '../assets/images/anime3.svg';
import anime4 from '../assets/images/anime4.svg';
import anime5 from '../assets/images/anime5.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  { src: anime1, x: '-600px', y: '-300px', marginX: -20, marginY: 40 },
  { src: anime2, x: '600px', y: '-300px', marginX: 40, marginY: 30 },
  { src: anime3, x: '-600px', y: '200px', marginX: -30, marginY: -10 },
  { src: anime4, x: '600px', y: '200px', marginX: 50, marginY: 20 },
  { src: anime5, x: '0px', y: '-300px', marginX: 0, marginY: 60 },
];

const ImageExplosion = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => setShowText(true), 1000 + images.length * 1000);
      return () => clearTimeout(timeout);
    } else {
      setShowText(false);
    }
  }, [inView]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#FFFDF8] overflow-hidden">
      <div ref={ref} className="relative w-[200px] h-[200px]">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt={`Image ${index + 1}`}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              rotate: Math.random() * 20 - 10,
              scale: 1.2,
            }}
            animate={
              inView
                ? {
                    x: `calc(${img.x} + ${img.marginX}px)`,
                    y: `calc(${img.y} + ${img.marginY}px)`,
                    opacity: 1,
                    rotate: 0,
                    scale: 1.4,
                  }
                : {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: Math.random() * 20 - 10,
                    scale: 1.2,
                  }
            }
            transition={{
              duration: inView ? 1.2 : 0.6,
              delay: inView ? index * 1 : 0,
              ease: inView ? 'easeOut' : 'easeIn',
            }}
            className="absolute w-[300px] rounded-xl shadow-xl"
          />
        ))}

        {/* Text and button */}
        <AnimatePresence>
          {showText && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-md text-center text-gray-800 mb-4 w-full">
                Book Now For Unforgettable Memories And Vijaya
              </h2>
              <button className="px-6 py-2 bg-[#CBA135] text-white rounded-full shadow-md hover:bg-gray-800 transition">
                Enquire Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageExplosion;
