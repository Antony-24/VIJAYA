import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const ContactInfo = () => {
  return (
    <div className="space-y-8 flex flex-col justify-center">
      <div>
        <h2 className="font-serif text-2xl md:text-3xl mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <div className="space-y-4 text-base">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-yellow-600" />
            <span className="font-medium text-yellow-600">Reservation</span>
            <span className="ml-2 text-black">855 100 4444</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-yellow-600" />
            <span className="font-medium text-yellow-600">Email info</span>
            <span className="ml-2 text-black">info@vicc.in</span>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-yellow-600 mt-1" />
            <div>
              <span className="font-medium text-yellow-600 block">Address</span>
              <span className="text-black">
                Ezhinjillam, Thiruvalla
                <br />
                Pathanamthitta, Kerala, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
