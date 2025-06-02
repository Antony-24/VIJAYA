import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// components
import { TeamCard } from "./TeamCard";
// images
import teamMemberImage from "../../assets/images/team_member.png";
import textureImage from "../../assets/images/texture-1.png";

export const TeamSection = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 px-4 md:px-24">
      <h6 className="font-['Poppins'] font-medium text-base tracking-[4px] uppercase text-[#CBA135] text-center">
        Our Experts
      </h6>
      <h2 className="font-['Gilda_Display'] text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8">
        Meet The Team
      </h2>
      {/* slider section */}
      <Swiper spaceBetween={50} slidesPerView={1.1} className="mb-12">
        {[1, 2].map((i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full flex flex-col md:flex-row items-center justify-center min-h-[450px] py-8 px-2 md:px-0"
              style={{
                backgroundColor: "#CBA135",
                backgroundImage: `url(${textureImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "repeat",
              }}
            >
              <div className="flex-shrink-0 flex justify-center items-center w-full md:w-[350px] h-[350px] md:ml-12 mb-8 md:mb-0">
                <img
                  src={teamMemberImage}
                  alt="Director"
                  className="w-63 h-80 object-contain border-l-4 border-b-4 border-white"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start md:ml-12 relative w-full max-w-3xl">
                <div
                  className="bg-white/20 p-10 md:p-16 w-full relative"
                  style={{ minHeight: 320 }}
                >
                  <span className="absolute top-6 right-8 text-white text-6xl font-bold opacity-80">
                    "
                  </span>
                  <h3 className="font-['Gilda_Display'] text-3xl md:text-4xl font-semibold mb-6 text-white">
                    Message From Our Director
                  </h3>
                  <p className="font-['Poppins'] text-sm md:text-md text-white leading-relaxed">
                    "Dear Patrons,
                    <br />
                    May we extend our most cordial welcome and sincere wishes
                    for a pleasant stay while you are with us. With our mission,
                    "Atithi Devo Bhava" (Visitor is God); we will do our best to
                    maintain comfort, convenience, and class in every service
                    area at VICC. We consistently look forward to establishing
                    partnerships and following emerging global trends. The
                    possibility exists that our guests may have needs that go
                    above and beyond what we anticipate, and we kindly ask them
                    to notify us right away. The competent personnel at VICC
                    ensure that every service is readily available and that
                    guests have a pleasant memory of their time. We appreciate
                    your support. We hope that "Once Is Not Enough," the
                    continuation of your voyage, and your return from it, bring
                    us only success and happiness."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, idx) => (
          <TeamCard
            key={idx}
            name="Jessica Mercedes"
            title="Chairman"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
            image={teamMemberImage}
          />
        ))}
      </div>
    </section>
  );
};
