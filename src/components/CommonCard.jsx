import { Link, useNavigate, } from "react-router-dom";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CommonCard = ({ title, duration, price, image, link }) => {
  const navigate = useNavigate();
  return (
    <Link to={link} className="block w-full max-w-[400px] transition duration-300 transform hover:scale-105 flex-none">
      <div className="px-4 md:px-6 lg:px-10 h-full flex flex-col">
        <div className="w-full bg-[#C2FED2] text-black text-xs sm:text-sm font-semibold px-6 py-3 rounded-br-full rounded-bl-lg shadow-md mb-3">
          <p className="text-lg flex items-center gap-2">
            <FontAwesomeIcon icon={faHandshake} className="text-[#4D1AB1]" />
            100% Job Assistance
          </p>
          <p className="text-lg flex items-center gap-2">
            <FontAwesomeIcon icon={faLayerGroup} className="text-[#4D1AB1]" />
            Live Classes
          </p>
        </div>
        <div className="relative bg-white rounded-2xl shadow-2xl w-full flex flex-col h-full">
          <div className="p-4 flex justify-center">
            <img src={image} alt={title} className="w-full h-[200px] rounded-lg object-cover" />
          </div>
          <div className="p-4 flex flex-col flex-grow text-center">
            <h3 className="text-base font-bold uppercase">{title}</h3>
            <div className="mt-auto">
              <div className="flex justify-between px-4 py-4">
                <p className="text-lg font-bold flex items-center gap-2">
                  <i className="text-[#EB40DA] text-xl bi bi-stopwatch"></i> {duration}
                </p>
                <p className="text-lg font-bold flex items-center gap-2">
                  <span className="text-[#EB40DA]">
                    <i className="bi bi-currency-rupee text-lg"></i>
                  </span>
                  {price}
                </p>
              </div>
              <div className=" flex flex-wrap justify-between gap-3 ">
              <button className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] cursor-pointer text-white px-4 py-2 rounded-md text-sm hover:opacity-80 w-full sm:w-auto">
                Download Brochure
              </button>
              <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link);
                  }}
                  className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] cursor-pointer text-white px-4 py-2 rounded-md text-sm hover:opacity-80 w-full sm:w-auto"
                >
                  Enroll Now
                </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CommonCard;
