import { faEnvelope, faPhone, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-gradient-to-r from-[#4D1AB1] to-[#EB40DA] text-white py-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* Footer Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold">
            <span className="text-green-500">Vetri</span> Technology Solutions
          </h2>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <h3 className="text-xl text-black font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <motion.li
              whileHover={{ scale: 1.05, color: "#EB40DA" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:underline cursor-pointer"
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05, color: "#EB40DA" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:underline cursor-pointer"
            >
              About Us
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05, color: "#EB40DA" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:underline cursor-pointer"
            >
              Courses
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05, color: "#EB40DA" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:underline cursor-pointer"
            >
              Contact Us
            </motion.li>
          </ul>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          <h3 className="text-xl text-black font-bold mb-3">Contact Details</h3>
          <p className="flex items-center mb-3 justify-center md:justify-start gap-2">
            <FontAwesomeIcon
              icon={faPhone}
              className="mr-2 p-1 rounded-full bg-[#EB40DA] text-[#4D1AB1] text-xs"
            />
            8438164827
          </p>
          <p className="flex items-center mb-3 justify-center md:justify-start gap-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2 p-1 rounded-full bg-[#EB40DA] text-[#4D1AB1] text-xs"
            />
            joinvts@vetriit.com
          </p>
          <p className="flex items-center mb-3 justify-center md:justify-start gap-2">
            <FontAwesomeIcon
              icon={faLocationPin}
              className="mr-2 p-1 rounded-full bg-[#EB40DA] text-[#4D1AB1] text-xs"
            />
            VTS & VIS, April’s Complex, <br />
            Shanthi Complex, Surandai.
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          <h3 className="text-xl font-bold text-black mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer p-1 rounded-lg bg-gradient-to-r from-red-600 to-yellow-200"
            >
              <FaInstagram />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer p-1 rounded-lg bg-indigo-700"
            >
              <FaLinkedinIn />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer p-1 rounded-lg bg-indigo-700"
            >
              <FaFacebookF />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
        className="text-center mt-6 text-sm"
      >
        © 2025 Vetri Technology Solutions. All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
