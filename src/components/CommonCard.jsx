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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-[400px] flex-none"
    >
      <Link to={link} className="block transition duration-300 transform">
        <div className="px-4 md:px-6 lg:px-10 h-full flex flex-col">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full bg-[#C2FED2] text-black text-xs sm:text-sm font-semibold px-6 py-3 rounded-br-full rounded-bl-lg shadow-md mb-3"
          >
            <p className="text-lg flex items-center gap-2">
              <FontAwesomeIcon
                icon={faHandshake}
                className="text-[#4D1AB1] animate-pulse transition-all duration-1500 ease-in-out hover:scale-125 hover:rotate-3"
              />
              100% Job Assistance
            </p>
            <p className="text-lg flex items-center gap-2">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-[#4D1AB1] animate-pulse transition-all duration-1500 ease-in-out hover:scale-125 hover:rotate-3"
              />
              Live Classes
            </p>
          </motion.div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full flex flex-col h-full">
            <motion.div
              className="p-4 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={image}
                alt={title}
                className="w-full h-[200px] rounded-lg object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
              />
            </motion.div>

            <div className="p-4 flex flex-col flex-grow text-center">
              <h3 className="text-base font-bold h-10 uppercase">{title}</h3>
              <div className="mt-auto">
                <div className="flex justify-between px-4 py-4">
                  <p className="text-lg font-bold flex items-center gap-2">
                    <i className="text-[#EB40DA] text-xl animate-spin duration-1000 ease-in-out bi bi-stopwatch"></i>{" "}
                    {duration}
                  </p>
                  <p className="text-lg font-bold flex items-center gap-2">
                    <span className="text-[#EB40DA] animate-pulse duration-1000 ease-in-out">
                      <i className="bi bi-currency-rupee text-lg"></i>
                    </span>
                    {price}
                  </p>
                </div>
                <div className="flex flex-wrap justify-between gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto hover:shadow-lg transition-all duration-300"
                  >
                    Download Brochure
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link);
                    }}
                    className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto hover:shadow-lg transition-all duration-300"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CommonCard;
