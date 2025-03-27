import { faUser, faEnvelope, faPhone, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const ContactForm = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50 min-h-screen "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="bg-white text-center p-6 rounded-lg shadow-2xl w-full max-w-md relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2 } }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl"
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>

            <h2 className="text-center text-3xl font-bold mb-4">
              Quick <span className="text-[#4D1AB1]">Enquiry</span>
            </h2>

            <div className="relative mb-3">
              <FontAwesomeIcon icon={faUser} className="absolute left-4 top-3 text-[#4D1AB1]" />
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border text-lg font-semibold border-purple-300 rounded-md pl-10 pr-4 py-2"
              />
            </div>

            <div className="relative mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="absolute left-4 top-3 text-[#4D1AB1]" />
              <input
                type="email"
                placeholder="Enter Mail ID"
                className="w-full border text-lg font-semibold border-purple-300 rounded-md pl-10 pr-4 py-2"
              />
            </div>

            <div className="relative mb-3">
              <FontAwesomeIcon icon={faPhone} className="absolute left-4 top-3 text-[#4D1AB1]" />
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full border text-lg font-semibold border-purple-300 rounded-md pl-10 pr-4 py-2"
              />
            </div>

            <select className="w-full border text-lg font-semibold border-purple-300 rounded-md px-4 py-2 mb-3">
              <option>Choose Your Course</option>
              <option>UI/UX Designing</option>
              <option>Java Fullstack Development</option>
              <option>Python Fullstack Development</option>
              <option>Data Analytics Development</option>
              <option>Data Science</option>
              <option>Business Analytics</option>
              <option>Mobile App Development</option>
              <option>Software Testing</option>
              <option>Amazon Web Service (AWS)</option>
              <option>Digital Marketing</option>
            </select>

            <button className="bg-[#EB40DA] text-xl font-semibold text-white px-8 py-2 rounded-md hover:bg-[#4D1AB1]">
              Submit
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
