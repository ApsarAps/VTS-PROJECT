import React from "react";

const ContactForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0  bg-opacity-100 flex justify-center items-center z-50 min-h-screen">
      <div className="bg-white text-center  p-6 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-center text-3xl font-bold mb-4">
          Quick <span className="text-purple-500">Enquiry</span>
        </h2>

        <input type="text" placeholder="Enter Name" className="w-full border text-lg font-semi-bold border-purple-300 rounded-md px-4 py-2 mb-3" />
        <input type="email" placeholder="Enter Mail Id" className="w-full border text-lg font-semi-bold border-purple-300 rounded-md px-4 py-2 mb-3" />
        <input type="tel" placeholder="Enter Mobile Number" className="w-full border text-lg font-semi-bold border-purple-300 rounded-md px-4 py-2 mb-3" />
        
        <select className="w-full border text-lg font-semi-bold border-purple-300 rounded-md px-4 py-2 mb-3">
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

        <button className=" bg-purple-500 text-xl font-semi-bold text-white px-8 py-2 rounded-md hover:bg-purple-700">
          Submit
        </button>

        <button onClick={onClose} className="w-full mt-2 text-xl font-semi-bold text-gray-600 hover:underline">
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactForm;