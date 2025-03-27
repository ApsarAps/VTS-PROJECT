import React from "react";
import aboutImage from "../assets//Images/VTS About us image.png"; 

const About = () => {
  return (
    <section className="pt-45  lg:pt-18 px-6 lg:px-20  text-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-[#EB40DA] mb-4">About Us</h2>
      <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
        VTS BUILD THE SKILLS TO DRIVE YOUR
      </h3>
      <h3 className="text-xl lg:text-2xl  font-bold text-[#EB40DA]">IT CAREER!!</h3>

      <div className="flex flex-col mb-6 lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full max-w-md rounded-xl lg:max-w-lg"
          />
        </div>
        <div className="w-full lg:w-1/2  text-black text-xl lg:text-xl leading-relaxed">
          <p className="mb-4  text-start">
            VTS is the No.1 Software Training Institute in Tamilnadu - Based out
            of Tenkasi & Tirunelveli providing 100% placement in our own IT
            Startup <span className="text-[#EB40DA] font-bold">Vetri IT Systems</span>{" "}
            to the graduated students from IT and Non-IT streams.
          </p>
          <p className="text-start  ">
            VTS has a team of highly experienced trainers who have worked on a
            wide range of projects and have a deep understanding of the
            development and testing process. We believe in providing hands-on
            training to our trainees, which helps them to gain practical
            experience and prepare them for real-world scenarios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
