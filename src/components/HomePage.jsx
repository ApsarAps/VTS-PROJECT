import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CourseList from "./CourseList";
import image2 from "../assets/Images/VTS home page img.png";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="w-full pt-[6rem] md:pt-[7rem] lg:pt-15"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.section
        className="bg-white py-12 px-4 flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="text-4xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            VTS is the India's <span className="text-[#EB40DA]">No.1</span> Software Training Institute.
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-600 mt-4"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Unlock the power of technology. Learn, build, and grow with industry-leading
            <span className="text-[#EB40DA]"> IT training.</span> Join the leading IT institute Surandai,
            offering expert trainers and 100% placement support. Gain industry-relevant
            skills and launch your dream career with confidence.
          </motion.p>
          <motion.button
            className="mt-6 bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white px-6 py-3 cursor-pointer rounded-tl-2xl rounded-br-2xl text-lg font-medium transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Enroll Now →
          </motion.button>
        </div>

        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={image2} alt="Training" className="w-full max-w-md lg:max-w-lg" />
        </motion.div>
      </motion.section>
      <motion.section
        className="container mx-auto px-2"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-[#EB40DA]">IT Trainings</span>
        </motion.h2>
        <motion.p
          className="text-center text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Choosing the best course in the IT sector will allow you to grow more professionally
          and increase your social network.
        </motion.p>
      </motion.section>

      <CourseList />
    </motion.div>
  );
};

export default HomePage;
