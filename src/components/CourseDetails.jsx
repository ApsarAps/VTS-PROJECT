import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import coursesData from './CourseData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase,faCertificate,faPeopleGroup,faProjectDiagram,faVideo,} from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

const CourseDetails = () => {
  const { courseName } = useParams();
  const course = coursesData[courseName];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="text-center text-red-600 font-bold text-lg">
        Course not found!
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-15 md:flex-row items-center justify-around md:items-start gap-6 p-6 max-w-6xl mx-auto">
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-[#EB40DA]">{course.title}</span> Development & Work From Home Internship
        </h2>
        <p className="text-lg">{course.description}</p>
        <button className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#4D1AB1] transition">
          Download Syllabus
        </button>
      </div>

      <div className="w-full md:w-1/2 max-w-[400px] bg-[#C2FED2] p-6 md:p-8 rounded-[10px] shadow-lg">
        <div className="flex justify-center mb-5">
          <img
            src={course.image}
            alt={course.title}
            className="w-full md:w-[90%] rounded-lg shadow-lg"
          />
        </div>

        <ul className="space-y-3 text-black text-base">
    {[
        { icon: "bi-stopwatch", label: "Duration", value: course.duration },
        { icon: faPeopleGroup, label: "Training Mode", value: course.trainingMode },
        { icon: "bi-laptop", label: "Skill Level", value: course.skillLevel },
        { icon: faCertificate, label: "Certification", value: course.certification },
        { icon: "bi-webcam", label: "Live Classes", value: course.liveClasses },
        { icon: faProjectDiagram, label: "Live Project Training", value: course.liveProjectTraining },
        { icon: faBriefcase, label: "Internship Offer", value: course.internshipOffer },
        { icon: faBriefcase, label: "Job Offer", value: course.jobOffer },
        { icon: faBriefcase, label: "Work From Home", value: course.workFromHome },
        { icon: faBriefcase, label: "Placement Assistance", value: course.placementAssistance },
        { icon: faFilePdf, label: "Training Material", value: course.trainingMaterial },
        { icon: faVideo, label: "Training Recordings", value: course.trainingRecordings }
    ].map((item, index) => (
        <li key={index} className="flex items-center justify-between border-b border-gray-300 pb-2">
            <div className="flex items-center">
                {typeof item.icon === "string" ? (
                    <i className={`bi text-[#4D1AB1] text-xl mr-2 ${item.icon}`}></i>
                ) : (
                    <FontAwesomeIcon icon={item.icon} className="text-[#4D1AB1] text-xl mr-2" />
                )}
                <strong>{item.label}:</strong>
            </div>
            <span className="text-[#4D1AB1]">{item.value}</span>
        </li>
    ))}
</ul>

      </div>
    </div>
  );
};

export default CourseDetails;
