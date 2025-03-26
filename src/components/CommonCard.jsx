import React from "react";

const CommonCard = ({ title, duration, price, image }) => {
  return (
    <div className="px-4 md:px-6 lg:px-10 w-full max-w-[400px]">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 h-full flex flex-col">
        <div className="absolute top-0 left-0 w-full bg-[#C2FED2] text-black text-xs sm:text-sm font-semibold px-4 py-2 rounded-br-full rounded-bl-lg flex flex-col gap-1 shadow-md">
          <p className="text-lg">🤝 100% Job Assistance</p>
          <p className="text-lg">📚 Live Classes</p> 
        </div>

        <img src={image} alt={title} className="w-full  mt-22 rounded-lg object-cover" />

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg text-center font-bold mt-2">{title}</h3>

          <div className="mt-2 flex justify-between mb-4">
            <p className="text-lg font-bold">
              <i className="text-[#EB40DA] text-xl mr-2 bi bi-stopwatch"></i>
              {duration}
            </p>
            <p className="text-lg font-bold mt-2">
              <span className="text-[#EB40DA]">
                <i className="bi bi-currency-rupee text-lg"></i>
              </span>
              {price}
            </p>
          </div>

          <div className="mt-auto flex justify-between">
            <button className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white px-4 py-2 rounded-md text-sm hover:opacity-80">
              Download Brochure
            </button>
            <button className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white px-4 py-2 rounded-md text-sm hover:opacity-80">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
