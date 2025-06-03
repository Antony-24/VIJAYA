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
    <section className="w-full bg-[#F5F5F5] py-8 md:py-16 px-4 md:px-24">
      <h6 className="font-['Poppins'] font-medium text-sm md:text-base tracking-[4px] uppercase text-[#CBA135] text-center">
        Our Experts
      </h6>
      <h2 className="font-['Gilda_Display'] text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6 md:mb-8">
        Meet The Team
      </h2>
      {/* slider section */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1.1,
            spaceBetween: 50,
          },
        }}
        className="mb-8 md:mb-12"
      >
        {[1, 2].map((i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full flex flex-col md:flex-row items-center justify-center min-h-[400px] md:min-h-[450px] py-6 md:py-8 px-2 md:px-0"
              style={{
                backgroundColor: "#CBA135",
                backgroundImage: `url(${textureImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "repeat",
              }}
            >
              <div className="flex-shrink-0 flex justify-center items-center w-full md:w-[300px] lg:w-[350px] h-[300px] md:h-[350px] md:ml-8 lg:ml-12 mb-6 md:mb-0">
                <img
                  src={teamMemberImage}
                  alt="Director"
                  className="w-56 md:w-63 h-72 md:h-80 object-contain border-l-4 border-b-4 border-white"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start md:ml-8 lg:ml-12 relative w-full max-w-3xl">
                <div
                  className="bg-white/20 p-6 md:p-10 lg:p-16 w-full relative"
                  style={{ minHeight: "280px", height: "100%" }}
                >
                  <span className="absolute top-4 md:top-6 right-4 md:right-8 text-white text-4xl md:text-6xl font-bold opacity-80">
                    "
                  </span>
                  <h3 className="font-['Gilda_Display'] text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 text-white">
                    Message From Our Director
                  </h3>
                  <p className="font-['Poppins'] text-xs md:text-sm lg:text-md text-white leading-relaxed">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
