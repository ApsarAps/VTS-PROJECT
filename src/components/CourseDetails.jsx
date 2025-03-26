import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import coursesData from "./CourseData";

const CourseDetails = () => {
    const { courseName } = useParams();
    const course = coursesData[courseName];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    if (!course) {
        return <div className="text-center text-red-600 font-bold text-lg">Course not found!</div>;
    }

    return (
        <div className="flex flex-col mt-8 md:flex-row items-center md:items-start gap-6 p-6 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                    <span className='text-[#4D1AB1]'>{course.title}</span>
                    Development & Work From Home Internship
                </h2> 
                <p className="text-lg">
                    {course.description}
                </p>
                <button className="bg-[#4D1AB1] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#4D1AB1] transition">
                    Download Syllabus
                </button>
            </div>

            <div className="w-full max-w-[100] md:max-w-[45%] bg-green-100 p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                    <img src={course.image} alt={course.title} className="w-full md:w-[90%] rounded-lg shadow-lg" />
                </div>

                <ul className="space-y-2 text-gray-800">
                    <li><strong>Duration:</strong> <span className="text-blue-600">{course.duration}</span></li>
                    <li><strong>Training Mode:</strong> <span className="text-blue-600">{course.trainingMode}</span></li>
                    <li><strong>Skill Level:</strong> <span className="text-blue-600">{course.skillLevel}</span></li>
                    <li><strong>Certification:</strong> {course.certification}</li>
                    <li><strong>Live Classes:</strong> {course.liveClasses}</li>
                    <li><strong>Live Project Training:</strong> {course.liveProjectTraining}</li>
                    <li><strong>Internship Offer:</strong> {course.internshipOffer}</li>
                    <li><strong>Job Offer:</strong> {course.jobOffer}</li>
                    <li><strong>Work From Home:</strong> {course.workFromHome}</li>
                    <li><strong>Placement Assistance:</strong><span className="text-blue-600">{course.placementAssistance}</span></li>
                    <li><strong>Training Material:</strong> {course.trainingMaterial}</li>
                </ul>
            </div>
        </div>
    );
};

export default CourseDetails;
