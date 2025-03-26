import React from "react";
import { Link } from "react-router-dom";
import CommonCard from "./CommonCard";
import image1 from "../assets/Images/VTS Python fullstack img.png";
import image2 from  "../assets/Images/VTS home page img.png";
import image3 from  "../assets/Images/VTS Java Fullstack Img.png";
import image4 from  "../assets/Images/VTS UI UX Image.png";    
import image5 from  "../assets/Images/Mern fullstack.jpg";    
import image6 from  "../assets/Images/Data Analytics image.png";    
import image7 from  "../assets/Images/Data Science Image.png";    
import image8 from  "../assets/Images/Business Analytics image.png";    
import image9 from  "../assets/Images/Mobile App development image.png";    
import image10 from  "../assets/Images/Software testing image.png";    
import image11 from  "../assets/Images/AWS images.png";    
import image12 from  "../assets/Images/Digital Marketing image.png";    


const HomePage = () => {
  return (
    <div className="w-full pt-18">
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
         <h2 className="text-center text-2xl font-bold mb-8">Python Fullstack Devolopment & Training</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        <Link to="/course/python-fullstack">
          <CommonCard 
            title="Python Fullstack Development"
            duration="45 Days"
            price="3,000"
            image={image1}
          />
        </Link>
        <Link to="/course/python-internship">
          <CommonCard 
            title="Python Fullstack Internship"
            duration="60 Days"
            price="15,000"
            image={image1}
          />
        </Link>
        <Link to="/course/python-internship-wfm">
          <CommonCard 
            title="Python Fullstack Development & WFH Job Offer"
            duration="90 Days"
            price="30,000"
            image={image1}
          />
        </Link>
        </div>
         <h2 className="text-center text-2xl font-bold mt-12 mb-8">Java Fullstack Devolopment & Training</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        <Link to="/course/java-fullstack">
          <CommonCard 
            title="Java Fullstack Development"
            duration="45 Days"
            price="3,000"
            image={image3}
          />
        </Link>
        <Link to="/course/java-fullstack-intern">
          <CommonCard 
            title="Java Fullstack Development & Internship"
            duration="60 Days"
            price="15,000"
            image={image3}
          />
        </Link>
        <Link to="/course/java-fullstack-wfh">
          <CommonCard 
            title="Java Fullstack Advanced"
            duration="90 Days"
            price="36,000"
            image={image3}
          />
        </Link>
        </div>
         <h2 className="text-center text-2xl font-bold mt-12 mb-8">UI/UX Designing & Training</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        <Link to="/course/ui-ux-design">
          <CommonCard 
            title="UI/UX Designing & Internship"
            duration="45 Days"
            price="3,000"
            image={image4}
          />
        </Link>
        <Link to="/course/ui-ux-design-intern">
          <CommonCard 
            title="UI/UX Designing & Internship"
            duration="60 Days"
            price="10,000"
            image={image4}
          />
        </Link>
        <Link to="/course/ui-ux-design-wfh">
          <CommonCard 
            title="UI/UX Designing & Work From Home Job Offer"
            duration="90 Days"
            price="25,000"
            image={image4}
          />
        </Link>
        </div>
         <h2 className="text-center text-2xl font-bold mt-12 mb-8">MERN STACK Devolopment & Training</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2  place-items-center">
        <Link to="/course/mern-stack">
          <CommonCard 
            title="MERN STACK DEVELOPMENT & INTERNSHIP"
            duration="60 Days"
            price="15,000"
            image={image5}
          
          />
          </Link>
          <Link to="/course/mern-stack-internship">
          <CommonCard 
            title="MERN STACK DEVELOPMENT & WORK FROM HOME INTERNSHIP"
            duration="90 Days"
            price="30,000"
            image={image5}
            
          />
          </Link>
        </div>
         <h2 className="text-center text-2xl font-bold mt-12 mb-8">Data Analytics & Training</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 place-items-center">
        <Link to="/course/data-analytics">
          <CommonCard 
            title="DATA ANALYTICS & INTERNSHIP"
            duration="45 Days"
            price="3,000"
            image={image6}
          
          />
          </Link>
          <Link to="/course/data-analytics-internship">
          <CommonCard 
            title="DATA ANALYTICS & WORK FROM HOME INTERNSHIP"
            duration="90 Days"
            price="20,000"
            image={image6}
            
          />
          </Link>
        </div>
         <h2 className="text-center text-2xl font-bold mt-12 mb-8">Data Science & Training</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2  place-items-center">
        <Link to="/course/data-science">
          <CommonCard 
            title="DATA SCIENCE & INTERNSHIP"
            duration="45 Days"
            price="3,000"
            image={image7}
          
          />
          </Link>
          <Link to="/course/data-science-job">
          <CommonCard 
            title="DATA SCIENCE & WORK FROM HOME INTERNSHIP"
            duration="90 Days"
            price="36,000"
            image={image7}
            
          />
          </Link>
        </div>
         <h2 className="text-center text-2xl font-bold mt-12 mb-8">Business Analytics & Training</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2  place-items-center">
        <Link to="/course/business-analytics">
          <CommonCard 
            title="BUSINESS ANALYTICS & INTERNSHIP"
            duration="45 Days"
            price="3,000"
            image={image8}
          
          />
          </Link>
          <Link to="/course/business-analytics-job">
          <CommonCard 
            title="BUSINESS ANALYTICS & WORK FROM HOME INTERNSHIP"
            duration="90 Days"
            price="10,000"
            image={image8}
            
          />
          </Link>
        </div>
         <h2 className="text-center text-2xl font-bold mt-12 mb-8">Mobile App Devolopment & Training</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2  place-items-center">
        <Link to="/course/mobile-app-development">
          <CommonCard 
            title="MOBILE APP DEVOLOPMENT & INTERNSHIP"
            duration="45 Days"
            price="3,000"
            image={image9}
          
          />
          </Link>
          <Link to="/course/mobile-app-devolopment-job">
          <CommonCard 
            title="MOBILE APP DEVOLOPMENT & WORK FROM HOME INTERNSHIP"
            duration="120 Days"
            price="36,000"
            image={image9}
            
          />
          </Link>
        </div>
         <h2 className="text-center text-2xl font-bold mt-12 mb-8">Software Testing & Training</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2  place-items-center">
        <Link to="/course/software-testing">
          <CommonCard 
            title="SOFTWARE TESTING & INTERNSHIP"
            duration="45 Days"
            price="3,000"
            image={image10}
          
          />
          </Link>
          <Link to="/course/software-testing-job">
          <CommonCard 
            title="SOFTWARE TESTING & WORK FROM HOME INTERNSHIP"
            duration="90 Days"
            price="15,000"
            image={image10}
            
          />
          </Link>
        </div>
        <h2 className="text-center text-2xl font-bold mt-12 mb-8">Amazon Web Services(AWS) & Training</h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-1 place-items-center">
        <Link to="/course/aws-training">
          <CommonCard 
            title="AMAZON WEB SERVICES & INTERNSHIP"
            duration="90 Days"
            price="3,000"
            image={image11}
            
          />
          </Link>
        </div>
        <h2 className="text-center text-2xl font-bold mt-12 mb-8">Digital Marketing & Training</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 place-items-center mb-6">
        <Link to="/course/digital-marketing">
          <CommonCard 
            title="DIGITAL MARKETING & INTERNSHIP"
            duration="45 Days"
            price="3,000"
            image={image12}
          
          />
          </Link>
          <Link to="/course/digital-marketing-job">
          <CommonCard 
            title="DIGITAL MARKETING & WORK FROM HOME INTERNSHIP"
            duration="90 Days"
            price="10,000"
            image={image12}
            
          />
          </Link>
        </div>
    </div>
  );
};

export default HomePage;
