import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faMapMarkedAlt, faLocationPin, faFilePdf, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
    <div className="flex pt-[12rem] md:pt-[7rem] lg:pt-[1rem] justify-center items-center min-h-screen bg-none p-4">
      <div className=" gap-5 rounded-lg flex flex-col md:flex-row w-full max-w-4xl">
        <div className="w-full md:w-1/2 p-6 border-2 border-transparent bg-white" style={{ borderImage: 'linear-gradient(to right, #EB40DA, #4D1AB1) 1' }}>
          <h2 className="text-2xl font-bold text-[#4D1AB1] mb-4">Contact Us</h2>
          <p className="text-gray-700 text-sm mb-4">
            Let us know your queries, feedback, and enquiries. We are here to support you from 10:00 AM to 07:00 PM (Monday to Saturday, excluding public holidays).
          </p>

          <p className="text-[#4D1AB1] font-bold flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2 p-1 rounded-full text-xs bg-[#EB40DA] text-[#4D1AB1]" />
            Give us a call
          </p>
          <p className="text-gray-800 mb-3">8438164827 / 8438781327</p>

          <p className="text-[#4D1AB1] font-bold flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 p-1 text-xs rounded-full bg-[#EB40DA] text-[#4D1AB1]" />
            Write to us
          </p>
          <p className="text-gray-800 mb-3">joinvts@vetriit.com</p>

          <p className="text-[#4D1AB1] font-bold flex items-center">
            <FontAwesomeIcon icon={faLocationPin} className="mr-2 p-1 text-xs rounded-full bg-[#EB40DA] text-[#4D1AB1]" />
            Visit us in Surandai
          </p>
          <p className="text-gray-800">
            VETRI TECHNOLOGY SOLUTIONS & VETRI IT SYSTEMS PRIVATE LIMITED,<br /> Shanthi Complex, Surandai, Tenkasi District.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-6 border-2 border-transparent bg-white" style={{ borderImage: 'linear-gradient(to right, #EB40DA, #4D1AB1) 1' }}>
          <h2 className="text-xl font-semibold text-[#4D1AB1] mb-4">
            Say Hello!
          </h2>
          <p className="text-gray-700 text-sm mb-4">Feel free to stop by and say hi!</p>
          
          <div className="mb-3 relative">
            <label htmlFor="name" className="text-gray-700 font-medium mb-1 flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-[#4D1AB1]" />
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded-md pl-4 pr-4 py-2 focus:ring-2 focus:ring-[#4D1AB1]"
            />
          </div>

          <div className="mb-3 relative">
            <label htmlFor="email" className="text-gray-700 font-medium mb-1 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#4D1AB1]" />
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 rounded-md pl-4 pr-4 py-2 focus:ring-2 focus:ring-[#4D1AB1]"
            />
          </div>

          <div className="mb-3 relative">
            <label htmlFor="phone" className="text-gray-700 font-medium mb-1 flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#4D1AB1]" />
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter Your WhatsApp Number"
              className="w-full border border-gray-300 rounded-md pl-4 pr-4 py-2 focus:ring-2 focus:ring-[#4D1AB1]"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="text-gray-700 font-medium mb-1 flex items-center">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-[#4D1AB1]" />
              Select the Enquiry You Required
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#4D1AB1]">
              <option>Select the Enquiry You Required</option>
              <option>UI/UX Designing</option>
              <option>Java Fullstack Development</option>
              <option>Python Fullstack Development</option>
              <option>Data Analytics Development</option>
              <option>Data Science</option>
              <option>Business Analytics</option>
              <option>Mobile App Development</option>
              <option>Software Testing</option>
              <option>Amazon Web Services (AWS)</option>
              <option>Digital Marketing</option>
            </select>
          </div>

          <button className="w-full bg-[#4D1AB1] text-white font-semibold py-2 rounded-md hover:bg-[#4D1AB1] transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
