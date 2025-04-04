import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/Images/VTS About us image.png";

const About = () => {
  return (
    <section className="pt-[12rem] md:pt-[7rem] lg:pt-[6rem] px-6 lg:px-20 text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl lg:text-5xl font-bold text-[#EB40DA] mb-4"
      >
        About Us
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl lg:text-2xl font-bold text-black mb-2"
      >
        VTS BUILD THE SKILLS TO DRIVE YOUR
      </motion.h3>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl lg:text-2xl font-bold text-[#EB40DA]"
      >
        IT CAREER!!
      </motion.h3>

      <div className="flex flex-col mb-6 lg:flex-row items-center gap-10 mt-6">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full max-w-md rounded-xl lg:max-w-lg "
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-black text-xl lg:text-xl leading-relaxed"
        >
          <p className="mb-4 text-start">
            VTS is the No.1 Software Training Institute in Tamilnadu - Based out
            of Tenkasi & Tirunelveli providing 100% placement in our own IT
            Startup <span className="text-[#EB40DA] font-bold">Vetri IT Systems</span>{" "}
            to the graduated students from IT and Non-IT streams.
          </p>
          <p className="text-start">
            VTS has a team of highly experienced trainers who have worked on a
            wide range of projects and have a deep understanding of the
            development and testing process. We believe in providing hands-on
            training to our trainees, which helps them to gain practical
            experience and prepare them for real-world scenarios.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
