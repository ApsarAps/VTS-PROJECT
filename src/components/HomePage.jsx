import React from "react";
import CourseList from "./CourseList";
import image2 from  "../assets/Images/VTS home page img.png";
 


const HomePage = () => {
  return (
    <div className="w-full pt-40  lg:pt-15">
     <section className="bg-white py-12 px-4 flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto">
  <div className="lg:w-1/2 text-center lg:text-left">
    <h1 className="text-4xl md:text-4xl font-bold text-gray-900">
      VTS is the India's <span className="text-[#EB40DA]">No.1</span> Software Training Institute.
    </h1>
    <p className="text-2xl text-gray-600 mt-4">
      Unlock the power of technology. Learn, build, and grow with industry-leading 
      <span className="text-[#EB40DA]"> IT training.</span> Join the leading IT institute Surandai, 
      offering expert trainers and 100% placement support. Gain industry-relevant 
      skills and launch your dream career with confidence.
    </p>
    <button className="mt-6 bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white px-6 py-3 rounded-tl-2xl rounded-br-2xl text-lg font-medium hover:scale-105 transition-transform">
  Enroll Now →
</button>

  </div>
  <div className="lg:w-1/2 flex justify-center">
    <img 
      src={image2}
      alt="Training" 
      className="w-full max-w-md lg:max-w-lg"
    />
  </div>
</section>
<section className="container mx-auto px-2">
        <h2 className="text-4xl font-bold text-center mb-4">Our <span className="text-[#EB40DA]">IT Trainings</span></h2>
        <p className="text-center text-xl text-gray-600 mb-8">
          Choosing the best course in IT sector will allow you to grow more professionally <br /> and will make increase your social network.
        </p>
      </section>
      <CourseList />        
    </div>
  );
};

export default HomePage;
