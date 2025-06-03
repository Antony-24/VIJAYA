import React, { useState, useEffect, useRef } from 'react';
import anime1 from '../assets/images/anime1.svg';
import anime2 from '../assets/images/anime2.svg';
import anime3 from '../assets/images/anime3.svg';
import anime4 from '../assets/images/anime4.svg';
import anime5 from '../assets/images/anime5.svg';

const AnimatedCollage = () => {
  const [inView, setInView] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const containerRef = useRef(null);

  // 1) Detect “large screen” (≥1024px) vs. smaller
  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // 2) On large screens, observe container → set inView when ≥50% visible
  useEffect(() => {
    if (!isLargeScreen) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [isLargeScreen]);

  // 3) When inView flips to true on large screens, wait 2 s, then start staggered animation
  useEffect(() => {
    if (!isLargeScreen) return;

    let timer;
    if (inView) {
      timer = setTimeout(() => setTriggerAnimation(true), 2000);
    } else {
      setTriggerAnimation(false);
    }
    return () => clearTimeout(timer);
  }, [inView, isLargeScreen]);

  // 4) If small screen, render a static grid (no animation)
  if (!isLargeScreen) {
    return (
      <section className="w-full bg-[#f9f7f0] py-12 px-4">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
          <img
            src={anime1}
            alt="Image 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={anime2}
            alt="Image 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={anime3}
            alt="Image 3"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={anime4}
            alt="Image 4"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="col-span-2 flex justify-center">
            <img
              src={anime5}
              alt="Center Image"
              className="w-2/3 h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    );
  }

  // 5) Large‐screen animated version
  return (
    <section
      ref={containerRef}
      className="relative w-full h-[80vh] bg-[#f9f7f0] overflow-hidden"
    >
      {/* ───────────────────────────────────────────────────────────
        IMAGE 1: top-left on trigger, stagger delay‐200ms
      ─────────────────────────────────────────────────────────── */}
      <img
        src={anime1}
        alt="Image 1"
        className={`
          absolute
          w-48 h-auto object-cover
          transition-all duration-1000 ease-in-out
          ${triggerAnimation
            ? 'delay-200 top-4 left-4 transform-none'
            : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
        `}
      />

      {/* ───────────────────────────────────────────────────────────
        IMAGE 2: top-right on trigger, stagger delay‐400ms
      ─────────────────────────────────────────────────────────── */}
      <img
        src={anime2}
        alt="Image 2"
        className={`
          absolute
          w-56 h-auto object-cover
          transition-all duration-1000 ease-in-out
          ${triggerAnimation
            ? 'delay-400 top-4 right-4 transform-none'
            : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
        `}
      />

      {/* ───────────────────────────────────────────────────────────
        IMAGE 3: bottom-left on trigger, stagger delay‐600ms
      ─────────────────────────────────────────────────────────── */}
      <img
        src={anime3}
        alt="Image 3"
        className={`
          absolute
          w-48 h-auto object-cover
          transition-all duration-1000 ease-in-out
          ${triggerAnimation
            ? 'delay-600 bottom-4 left-4 transform-none'
            : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
        `}
      />

      {/* ───────────────────────────────────────────────────────────
        IMAGE 4: bottom-right on trigger, stagger delay‐800ms
      ─────────────────────────────────────────────────────────── */}
      <img
        src={anime4}
        alt="Image 4"
        className={`
          absolute
          w-52 h-auto object-cover
          transition-all duration-1000 ease-in-out
          ${triggerAnimation
            ? 'delay-800 bottom-4 right-4 transform-none'
            : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
        `}
      />

      {/* ───────────────────────────────────────────────────────────
        CENTER IMAGE: fades out on trigger, stagger delay‐1000ms
      ─────────────────────────────────────────────────────────── */}
      <img
        src={anime5}
        alt="Center Image"
        className={`
          absolute
          w-24 h-auto object-cover
          transition-all duration-1000 ease-in-out
          ${triggerAnimation
            ? 'delay-1000 opacity-0'
            : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100'}
        `}
      />

      {/* ───────────────────────────────────────────────────────────
        CENTRAL TEXT: zooms in on trigger, stagger delay‐1200ms
      ─────────────────────────────────────────────────────────── */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          transition-all duration-1000 ease-in-out
          ${triggerAnimation
            ? 'delay-1200 opacity-100 scale-100'
            : 'opacity-0 scale-50'}
        `}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-gray-800">
          Your Central Text Here
        </h2>
      </div>
    </section>
  );
};

export default AnimatedCollage;
