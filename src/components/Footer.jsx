import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4D1AB1] to-[#EB40DA] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-green-500">Vetri</span> Technology Solutions
          </h2>
        </div>

        <div>
          <h3 className="text-xl text-black font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Courses</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl text-black font-bold mb-3">Contact Details</h3>
          <p className="flex items-center mb-3 justify-center md:justify-start gap-2">
            📞 8438164827
          </p>
          <p className="flex items-center mb-3 justify-center md:justify-start gap-2">
            📧 joinvts@vetriit.com
          </p>
          <p className="flex items-center mb-3 justify-center md:justify-start gap-2">
            📍 VTS & VIS, April’s Complex,<br />Shanthi Complex, Surandai.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-black mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <FaInstagram className="cursor-pointer hover:text-gray-300 transition-all" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-300 transition-all" />
            <FaFacebookF className="cursor-pointer hover:text-gray-300 transition-all" />
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">
        © 2025 Vetri Technology Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
