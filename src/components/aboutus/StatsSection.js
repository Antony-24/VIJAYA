import React from "react";
import { Divider } from "../core/Divider";

export const StatsSection = () => {
  return (
    <section className=" mx-4 md:mx-24 bg-black py-12 flex flex-col items-center">
      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-x-12 text-left">
        <div className="opacity-80 hover:opacity-100 transition-opacity duration-300">
          <span className="text-3xl md:text-4xl font-bold text-[#CBA135]">
            25+
          </span>
          <Divider color="#FFFFFF" className="opacity-50" />
          <p className="text-white text-base">Years of Experience</p>
        </div>
        <div className="opacity-80 hover:opacity-100 transition-opacity duration-300">
          <span className="text-3xl md:text-4xl font-bold text-[#CBA135]">
            200+
          </span>
          <Divider color="#FFFFFF" className="opacity-50" />
          <p className="text-white text-base">Events Hosted</p>
        </div>
        <div className="opacity-80 hover:opacity-100 transition-opacity duration-300">
          <span className="text-3xl md:text-4xl font-bold text-[#CBA135]">
            1000+
          </span>
          <Divider color="#FFFFFF" className="opacity-50" />
          <p className="text-white text-base">Happy Clients</p>
        </div>
        <div className="opacity-80 hover:opacity-100 transition-opacity duration-300">
          <span className="text-3xl md:text-4xl font-bold text-[#CBA135]">
            5000+
          </span>
          <Divider color="#FFFFFF" className="opacity-50" />
          <p className="text-white text-base">Guest Capacity</p>
        </div>
      </div>
    </section>
  );
};
