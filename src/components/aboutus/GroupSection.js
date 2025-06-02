import React from "react";
import { Button } from "../core/Button";
import kpvGroupImage from "../../assets/images/kpv_group.png";
export const GroupSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white py-16 px-4 md:px-24 gap-8">
      <div className="md:w-1/2 flex flex-col gap-4">
        <h6 className="font-['Poppins'] font-medium text-base tracking-[4px] uppercase text-[#CBA135]">
          Our Group Of
        </h6>
        <h2 className="font-['Gilda_Display'] text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
          KPV GROUPS
        </h2>
        <p className="font-['Poppins'] text-base text-gray-700 mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. <br /> <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Button>View More</Button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={kpvGroupImage}
          alt="KPV Group"
          className="w-full max-w-md h-64 object-cover rounded-lg"
        />
      </div>
    </section>
  );
};
