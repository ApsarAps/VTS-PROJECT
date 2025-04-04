import { useParams, useNavigate } from "react-router-dom";
import coursesData from "./CourseData";
import { useState } from "react";
import { motion } from "framer-motion";

const EnrollPage = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const course = coursesData[courseName];

  if (!course) {
    return (
      <div className="text-center text-red-600 font-bold">Course not found!</div>
    );
  }

  const originalPrice = parseInt(course.price.replace(/,/g, ""), 10);
  const discountPrice = 5000;
  const total = originalPrice - discountPrice;

  const formattedPrice = originalPrice.toLocaleString("en-IN");
  const formattedDiscount = discountPrice.toLocaleString("en-IN");
  const formattedTotal = total.toLocaleString("en-IN");

  const [userDetails] = useState({
    enrolledId: "23",
    name: "Priya",
    phone: "8900278569",
    email: "Priya123@gmail.com",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment-success", { state: userDetails });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-start w-full max-w-5xl justify-around mx-auto pt-[11rem] md:pt-[7rem] lg:pt-15 gap-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full md:w-1/3 bg-white shadow-lg rounded-xl p-6 flex flex-col h-full"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h2>
        <div className="flex items-center space-x-3 mb-4">
          <input
            type="radio"
            id="credit-debit"
            name="payment"
            defaultChecked
            className="accent-[#EB40DA]"
          />
          <label
            htmlFor="credit-debit"
            className="flex items-center gap-2 text-gray-700"
          >
            Credit or Debit Card
            <img src="/card-icon.png" alt="Card Icons" className="w-6 h-6" />
          </label>
        </div>
        <form className="space-y-4 flex-grow" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="cardHolder"
              className="block text-gray-700 text-sm font-semibold"
            >
              Card Holder Name*
            </label>
            <input
              id="cardHolder"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-[#EB40DA]"
              required
              placeholder="Enter cardholder name"
              title="Card Holder Name"
            />
          </div>
          <div>
            <label
              htmlFor="cardNumber"
              className="block text-gray-700 text-sm font-semibold"
            >
              Card Number*
            </label>
            <input
              id="cardNumber"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-[#EB40DA]"
              required
              placeholder="Enter card number"
              title="Card Number"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="expiryDate"
                className="block text-gray-700 text-sm font-semibold"
              >
                Expiry Date*
              </label>
              <input
                id="expiryDate"
                type="text"
                className="w-full p-2 border rounded-md focus:outline-[#EB40DA]"
                required
                placeholder="MM/YY"
                title="Expiry Date"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="cvv"
                className="block text-gray-700 text-sm font-semibold"
              >
                CVV Number*
              </label>
              <input
                id="cvv"
                type="text"
                className="w-full p-2 border rounded-md focus:outline-[#EB40DA]"
                required
                placeholder="Enter CVV"
                title="CVV Number"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] cursor-pointer text-white font-semibold py-2 rounded-md hover:opacity-90"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col items-center w-full md:w-2/3 max-w-[400px] justify-center p-6 h-full"
      >
        <div className="relative bg-white rounded-2xl shadow-lg w-full flex flex-col h-full">
          <div className="p-4 flex justify-center">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[200px] rounded-lg object-cover"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow text-center">
            <h3 className="text-base font-bold uppercase">
              {course.cardtitle}
            </h3>
            <div className="mt-auto">
              <div className="flex justify-between px-4 py-4">
                <p className="text-lg font-bold flex items-center gap-2">
                  <i className="text-[#EB40DA] text-xl bi bi-stopwatch"></i>{" "}
                  {course.duration}
                </p>
                <p className="text-lg font-bold flex items-center gap-2">
                  <span className="text-[#EB40DA]">
                    <i className="bi bi-currency-rupee text-lg"></i>
                  </span>
                  {formattedPrice}
                </p>
              </div>
              <div className="flex flex-wrap justify-between gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] cursor-pointer text-white px-4 py-2 rounded-md text-sm hover:opacity-80 w-full sm:w-auto"
                >
                  Download Brochure
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/checkout");
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] cursor-pointer text-white px-4 py-2 rounded-md text-sm hover:opacity-80 w-full sm:w-auto"
                >
                  Enroll Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md mt-4">
          <div className="flex justify-between text-lg font-medium">
            <p className="text-gray-500">Price</p>
            <p className="font-semibold">₹ {formattedPrice}</p>
          </div>
          <div className="flex justify-between text-lg font-medium mt-2">
            <p className="text-gray-500">Discount</p>
            <p className="font-semibold text-[#EB40DA]">₹ {formattedDiscount}</p>
          </div>
          <hr className="my-3 border-gray-300" />
          <div className="flex justify-between text-lg font-medium mt-2">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-semibold">₹ {formattedTotal}</p>
          </div>
          <hr className="my-3 border-gray-300" />
          <div className="flex justify-between text-xl font-bold">
            <p>Total</p>
            <p>₹ {formattedTotal}</p>
          </div>
        </div>
        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          animate={{ y: [0, -5, 0], transition: { repeat: Infinity, duration: 2 } }}
          className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white text-lg font-semibold px-6 py-3 cursor-pointer rounded-xl mt-4 w-full max-w-md shadow-lg hover:opacity-90 transition"
        >
          Complete Checkout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default EnrollPage;
