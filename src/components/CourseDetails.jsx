import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import coursesData from './CourseData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCertificate,
  faLayerGroup,
  faPeopleGroup,
  faStopwatch,
  faVideoCamera,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons';
import { faFilePdf, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';

const CourseDetails = () => {
  const { courseName } = useParams();
  const course = coursesData[courseName];
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen text-center text-red-600 font-bold text-lg">
        Course not found!
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-[12rem] md:pt-[7rem] lg:pt-[6rem] max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center md:items-start justify-between"
      >
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-[#EB40DA]">{course.title}</span> Development & Work From Home Internship
          </h2>
          <p className="text-lg">{course.description}</p>
          <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white px-5 py-2 rounded-lg shadow-md cursor-pointer w-full md:w-auto"
            >
              Download Syllabus
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/enroll/${courseName}`)}
              className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1]  text-white px-4 py-2 rounded-md text-sm cursor-pointer w-full sm:w-auto"
            >
              Enroll Now
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 max-w-sm bg-[#C2FED2] p-6 md:p-8 mt-4 rounded-lg shadow-lg"
        >
          <div className="flex justify-center mb-5">
            <img
              src={course.image}
              alt={course.title}
              className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <ul className="space-y-3 text-black text-base">
            {[  
              { icon: faStopwatch, label: " Duration", value: course.duration},
              { icon: faPeopleGroup, label: "Training Mode", value: course.trainingMode },
              { icon: faLayerGroup, label: "Skill Level", value: course.skillLevel },
              { icon: faCertificate, label: "Certification", value: course.certification },
              { icon: faVideoCamera, label: "Live Classes", value: course.liveClasses },
              { icon: faProjectDiagram, label: "Live Project Training", value: course.liveProjectTraining },
              { icon: faBriefcase, label: "Internship Offer", value: course.internshipOffer },
              { icon: faBriefcase, label: "Job Offer", value: course.jobOffer },
              { icon: faBriefcase, label: "Work From Home", value: course.workFromHome },
              { icon: faBriefcase, label: "Placement Assistance", value: course.placementAssistance },
              { icon: faFilePdf, label: "Training Material", value: course.trainingMaterial },
              { icon: faPlayCircle, label: "Training Recordings", value: course.trainingRecordings }
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center justify-between border-b border-gray-300 pb-2"
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={item.icon} className="text-[#4D1AB1] text-xl mr-2" />
                  <strong>{item.label}:</strong>
                </div>
                <span className="text-[#4D1AB1] text-sm md:text-base">{item.value}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='flex flex-col items-center text-center gap-4 text-2xl mt-8 mb-8 font-bold'
      >
        <h1>VTS <span className="text-[#EB40DA]">{course.roadmaptitle}</span> Placement Assistance Roadmap</h1>
        <img src={course.roadmapImage} alt="Roadmap" className='w-full max-w-lg rounded-lg shadow-md' />
      </motion.div>

      {course.faq && course.faq.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Frequently <span className="text-[#EB40DA]">Asked</span> Questions
          </h2>
          <div className="mt-6 space-y-4">
            {course.faq.map((faqItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-[#EB40DA] p-4 rounded-lg shadow-md"
              >
                <h3 className="font-bold text-lg text-[#4D1AB1]">{faqItem.question}</h3>
                <p className="text-gray-700">{faqItem.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CourseDetails;
