import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Contact */}
        <div>
          <div className="mb-6">
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          <p className="text-sm mb-2">
            Perumthuruthy P. O. Ezhinjillam, Thiruvalla, Pathanamthitta, Kerala,
            India
          </p>
          <div className="flex items-center space-x-2 text-sm my-2">
            <FaPhoneAlt />
            <span>+91 8078882200</span>
          </div>
          <div className="border-t border-yellow-600 w-1/2 my-3"></div>
          <p className="text-sm">convention.vicc@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Facilities</li>
            <li>MKV Group</li>
            <li>Gallery</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Corporate Event</li>
            <li>Wedding and Celebration</li>
            <li>Facilities</li>
            <li>Dining Area</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h4 className="font-serif text-lg mb-4">Other Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>FAQ</li>
          </ul>
          <h4 className="mt-6 mb-2 font-serif text-sm">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* VIJAYA Text Banner (just above the copyright) */}
      <div className="text-center text-[28px] md:text-[36px] lg:text-[44px] font-bold text-white/5 tracking-widest select-none z-0 pb-4">
        VIJAYA INTERNATIONAL CONVENTION CENTER
      </div>

      {/* Final Footer Bar */}
      <div className="relative z-10 text-sm border-t border-gray-800 text-gray-400 py-4 px-6 flex justify-between items-center">
        <span>© 2025 VICC. All Rights Reserved</span>
        <span>Designed By : Script N Pixel</span>
      </div>
    </footer>
  );
}
