import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import bg from '../../assets/images/slide1.svg'



const EnquirySection = () => {
  return (
    
    <section className="relative w-full bg-cover bg-center text-white py-16 px-4 lg:px-24" style={{ backgroundImage: `url(${bg})` }}
>
      {/* Overlay */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 z-50">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-yellow-400 text-5xl font-serif font-bold border border-yellow-400 px-4 py-2">V</div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Lorem Ipsum Is Simply Dummy <br /> Text Of The Printing<span className="text-yellow-400"> .</span></h2>
          </div>
          <p className="text-gray-200 max-w-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span className="text-yellow-400 font-medium">Reservation</span>
              <span className="ml-2 text-white">855 100 4444</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <span className="text-yellow-400 font-medium">Email Info</span>
              <span className="ml-2 text-white">info@vicc.in</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <div>
                <span className="text-yellow-400 font-medium block">Address</span>
                <span className="text-white">Ezhinjillam, Thiruvalla<br />Pathanamthitta, Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 bg-black bg-opacity-90 p-8 rounded-md">
          <h3 className="text-yellow-400 uppercase text-sm tracking-widest font-semibold mb-2">Luxury Experience</h3>
          <h2 className="text-3xl font-serif font-semibold mb-6">Enquiry Now</h2>

          <form className="space-y-5">
            <div className="flex flex-col md:flex-row gap-5">
              <input type="text" placeholder="Your Name" className="bg-transparent border-b border-gray-500 focus:outline-none py-2 w-full text-white placeholder-gray-400" />
              <input type="email" placeholder="Your Email" className="bg-transparent border-b border-gray-500 focus:outline-none py-2 w-full text-white placeholder-gray-400" />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <input type="text" placeholder="Your Number" className="bg-transparent border-b border-gray-500 focus:outline-none py-2 w-full text-white placeholder-gray-400" />
              <input type="text" placeholder="Subject" className="bg-transparent border-b border-gray-500 focus:outline-none py-2 w-full text-white placeholder-gray-400" />
            </div>
            <textarea placeholder="Message" rows="4" className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 text-white placeholder-gray-400"></textarea>

            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 transition text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2">
              Send Message <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
