import React, { useState, useEffect, useRef } from "react";
import anime1 from "../assets/images/anime1.svg";
import anime2 from "../assets/images/anime2.svg";
import anime3 from "../assets/images/anime3.svg";
import anime4 from "../assets/images/anime4.svg";
import anime5 from "../assets/images/anime5.svg";
import { Button } from "./core/Button";

const AnimatedCollage = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const containerRef = useRef(null);

  // 1) Detect "large screen" (≥1024px) vs. smaller
  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 2) On large screens, observe container → trigger animation once when ≥50% visible
  useEffect(() => {
    if (!isLargeScreen || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTriggerAnimation(true);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isLargeScreen, hasAnimated]);

  // 4) If small screen, render a static grid (no animation)
  if (!isLargeScreen) {
    return (
      <section className="w-full bg-[#f9f7f0] py-12 px-4">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
          <img
            src={anime1}
            alt="anime 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={anime2}
            alt="anime 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={anime3}
            alt="anime 3"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={anime4}
            alt="anime 4"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={anime5}
            alt="anime 5"
            className="w-2/3 h-auto object-cover rounded-lg"
          />
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
      {/* Image 1: top-left */}
      <img
        src={anime1}
        alt="anime 1"
        className={`
          absolute
          w-56 h-auto object-cover shadow-lg
          transition-all duration-700 ease-in-out
          ${
            triggerAnimation
              ? "top-8 left-8 opacity-100 scale-100 rotate-0"
              : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 -rotate-12"
          }
        `}
        style={{ transitionDelay: triggerAnimation ? "200ms" : "0ms" }}
      />

      {/* Image 2: top-right */}
      <img
        src={anime2}
        alt="anime 2"
        className={`
          absolute
          w-56 h-auto object-cover shadow-lg
          transition-all duration-700 ease-in-out
          ${
            triggerAnimation
              ? "top-8 right-8 opacity-100 scale-100 rotate-0"
              : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 rotate-12"
          }
        `}
        style={{ transitionDelay: triggerAnimation ? "400ms" : "0ms" }}
      />

      {/* Image 3: bottom-left */}
      <img
        src={anime3}
        alt="anime 3"
        className={`
          absolute
          w-56 h-auto object-cover shadow-lg
          transition-all duration-700 ease-in-out
          ${
            triggerAnimation
              ? "bottom-8 left-8 opacity-100 scale-100 rotate-0"
              : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 rotate-12"
          }
        `}
        style={{ transitionDelay: triggerAnimation ? "600ms" : "0ms" }}
      />

      {/* Image 4: bottom-right */}
      <img
        src={anime4}
        alt="anime 4"
        className={`
          absolute
          w-56 h-auto object-cover shadow-lg
          transition-all duration-700 ease-in-out
          ${
            triggerAnimation
              ? "bottom-8 right-8 opacity-100 scale-100 rotate-0"
              : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 -rotate-12"
          }
        `}
        style={{ transitionDelay: triggerAnimation ? "800ms" : "0ms" }}
      />

      {/* Center Image */}
      <img
        src={anime5}
        alt="anime 5"
        className={`
          absolute
          w-32 h-auto object-cover shadow-lg
          transition-all duration-700 ease-in-out
          ${
            triggerAnimation
              ? "top-8 left-1/2 -translate-x-1/2 opacity-100 scale-100 rotate-0"
              : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 rotate-12"
          }
        `}
        style={{ transitionDelay: triggerAnimation ? "1000ms" : "0ms" }}
      />

      {/* Central Text */}
      <div
        className={`
          absolute inset-0 flex max-w-[75%] mx-auto flex-col items-center justify-center
          transition-all duration-700 ease-in-out
          ${triggerAnimation ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
        style={{ transitionDelay: triggerAnimation ? "1200ms" : "0ms" }}
      >
        <h2 className="text-4xl md:text-5xl font-medium text-gray-800 text-center leading-tight mb-2 font-['Gilda_Display']">
          Book Now For Unforgettable Memories
          <br />
          <span className="block">And Vijaya</span>
        </h2>
        <p className="text-base md:text-md text-gray-600 text-center max-w-xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique
        </p>
        <Button
          className={`mt-2 px-8 py-3 rounded-full bg-[#CBA135] text-white font-medium self-center text-md transition-all duration-700 ${
            triggerAnimation
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: triggerAnimation ? "1600ms" : "0ms" }}
        >
          Enquiry Now
        </Button>
      </div>
    </section>
  );
};

export default AnimatedCollage;
