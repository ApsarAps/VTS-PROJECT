import { Link, useNavigate } from "react-router-dom";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const CommonCard = ({ title, duration, price, image, link }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link
        to={link}
        className="block w-full max-w-[400px] transition duration-300 flex-none"
      >
        <motion.div
          className="px-4 md:px-6 lg:px-10 h-full flex flex-col"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-full bg-[#C2FED2] text-black text-xs sm:text-sm font-semibold px-6 py-3 rounded-br-full rounded-bl-lg shadow-md mb-3"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg flex items-center gap-2">
              <FontAwesomeIcon
                icon={faHandshake}
                className="text-[#4D1AB1]"
              />
              100% Job Assistance
            </p>
            <p className="text-lg flex items-center gap-2">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-[#4D1AB1]"
              />
              Live Classes
            </p>
          </motion.div>
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full flex flex-col h-full"
            whileHover={{ boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <motion.div
              className="p-4 flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={image}
                alt={title}
                className="w-full h-[200px] rounded-lg object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            <div className="p-4 flex flex-col flex-grow text-center">
              <h3 className="text-base font-bold h-14 uppercase">{title}</h3>

              <div className="mt-auto">
                <div className="flex justify-between px-4 py-4">
                  <motion.p
                    className="text-lg font-bold flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className="text-[#EB40DA] text-xl bi bi-stopwatch"></i>{" "}
                    {duration}
                  </motion.p>
                  <motion.p
                    className="text-lg font-bold flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-[#EB40DA]">
                      <i className="bi bi-currency-rupee text-lg"></i>
                    </span>
                    {price}
                  </motion.p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-between gap-3">
                  <motion.button
                    className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Download Brochure
                  </motion.button>

                  <motion.button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link);
                    }}
                    className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default CommonCard;
