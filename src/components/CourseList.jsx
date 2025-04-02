import { Link } from "react-router-dom";
import CommonCard from "./CommonCard";
import image1 from "../assets/Images/VTS Python fullstack img.png";
import image3 from  "../assets/Images/VTS Java Fullstack Img.png";
import image4 from  "../assets/Images/VTS UI UX Image.png";    
import image5 from  "../assets/Images/Mernstack Img.png";    
import image6 from  "../assets/Images/Data Analytics image.png";    
import image7 from  "../assets/Images/Data Science Image.png";    
import image8 from  "../assets/Images/Business Analytics image.png";    
import image9 from  "../assets/Images/Mobile App development image.png";    
import image10 from  "../assets/Images/Software testing image.png";    
import image11 from  "../assets/Images/AWS images.png";    
import image12 from  "../assets/Images/Digital Marketing image.png";   

const courses = [
  {
    category: "Python Fullstack Development & Training",
    items: [
      { title: "Python Fullstack Development", duration: "45 Days", price: "3,000", image: image1, link: "/course/python-fullstack" },
      { title: "Python Fullstack Development & Internship", duration: "60 Days", price: "15,000", image: image1, link: "/course/python-internship" },
      { title: "Python Fullstack Development & Work From Home Internship", duration: "90 Days", price: "30,000", image: image1, link: "/course/python-internship-wfm" }
    ]
  },
  {
    category: "Java Fullstack Development & Training",
    items: [
      { title: "JAVA FULLSATACK DEVELOPMENT", duration: "45 Days", price: "3,000", image: image3, link: "/course/java-fullstack" },
      { title: "JAVA FULLSATACK DEVELOPMENT & INTERNSHIP", duration: "60 Days", price: "15,000", image: image3, link: "/course/java-fullstack-intern" },
      { title: "JAVA FULLSATACK DEVELOPMENT & WFH JOB OFFER ", duration: "90 Days", price: "36,000", image: image3, link: "/course/java-fullstack-wfh" }
    ]
  },
  {
    category: "UI/UX Designing & Training",
    items: [
      { title: "UI/UX Designing & Internship", duration: "45 Days", price: "3,000", image: image4, link: "/course/ui-ux-design" },
      { title: "UI/UX Designing & Internship", duration: "60 Days", price: "10,000", image: image4, link: "/course/ui-ux-design-intern" },
      { title: "UI/UX Designing & Work From Home Job Offer", duration: "90 Days", price: "25,000", image: image4, link: "/course/ui-ux-design-wfh" }
    ]
  },
  {
  category: "MERN Stack Development & Training",
    items: [
      { title: "MERN Stack Development", duration: "45 Days", price: "3,000", image: image5, link: "/course/mern-stack" },
      { title: "MERN Stack Development & Internship", duration: "60 Days", price: "15,000", image: image5, link: "/course/mern-stack-intern" },
    ]
  },  
  {
    category: "Data Analytics & Training",
    items: [
      { title: "Data Analytics & Internship", duration: "45 Days", price: "3,000", image: image6, link: "/course/data-analytics" },
      { title: "Data Analytics & Work From Home Internship", duration: "90 Days", price: "20,000", image: image6, link: "/course/data-analytics-internship" }
    ]
  },
  {
    category: "Data Science & Training",
    items: [
      { title: "Data Science & Internship", duration: "45 Days", price: "3,000", image: image7, link: "/course/data-science" },
      { title: "Data Science & Work From Home Internship", duration: "90 Days", price: "36,000", image: image7, link: "/course/data-science-job" }
    ]
  },
  {
    category: "Business Analytics & Training",
    items: [
      { title: "Business Analytics & Internship", duration: "45 Days", price: "3,000", image: image8, link: "/course/business-analytics" },
      { title: "Business Analytics & Work From Home Internship", duration: "90 Days", price: "10,000", image: image8, link: "/course/business-analytics-job" }
    ]
  },
  {
  category: "Software Testing & Training",
  items: [
    { title: "Software Testing & Internship", duration: "45 Days", price: "3,000", image: image10, link: "/course/software-testing" },
    { title: "Software Testing & Work From Home Internship", duration: "90 Days", price: "15,000", image: image10, link: "/course/software-testing-job" }
  ]
},
  {
    category: "Digital Marketing & Training",
    items: [
      { title: "Digital Marketing & Internship", duration: "45 Days", price: "3,000", image: image12, link: "/course/digital-marketing" },
      { title: "Digital Marketing & Work From Home Internship", duration: "90 Days", price: "10,000", image: image12, link: "/course/digital-marketing-job" }
    ]
  },
  {
    category: "Amazon Web Services (AWS) & Training",
    items: [
      { title: "Amazon Web Services & Internship", duration: "90 Days", price: "3,000", image: image11, link: "/course/aws-training" },
      { title: "Mobile App Development & Work From Home Internship", duration: "120 Days", price: "36,000", image: image9, link: "/course/mobile-app-development-job" }
    ]
  },
];

const CourseList = () => {
  return (
    <div className="container mx-auto px-4">
      {courses.map((course, index) => (
        <div key={index}>
          <h2 className="text-center text-2xl font-bold mt-12 mb-8">{course.category}</h2>
          <div className="flex flex-wrap justify-center mb-6 gap-6">
  {course.items.map((item, idx) => (
    <CommonCard 
      key={idx} 
      title={item.title} 
      duration={item.duration} 
      price={item.price} 
      image={item.image} 
      link={item.link} 
    />
  ))}
</div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
