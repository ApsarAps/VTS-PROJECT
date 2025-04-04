import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Images/logo1.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white shadow-md px-6 md:px-12 py-4 w-full fixed top-0 left-0 z-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center space-x-2 md:space-x-4"
        >
          <Link to="/" className="flex items-center space-x-2 md:space-x-4">
  <img
    src={Logo}
    alt="Vetri Technology Solutions"
    className="h-20 md:h-24 drop-shadow-lg hover:scale-105 transition duration-500 ease-in-out"
  />
  </Link>
          <div className="flex flex-col items-start">
            <span className="text-green-600 text-lg md:text-2xl font-bold">Vetri</span>
            <span className="text-blue-900 text-lg md:text-2xl font-bold">Technology Solutions</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col md:flex-row text-center text-2xl md:text-3xl font-bold space-y-4 md:space-y-0 md:space-x-8 items-center mt-4 md:mt-0 w-full md:w-auto"
        >
          {["/trainings", "/about"].map((path, index) => (
            <Link
              key={path}
              to={path}
              className="relative text-gray-800 hover:text-green-600 transition duration-300 group"
            >
              {path === "/trainings" ? "IT Trainings" : "About Us"}
              <span className="block h-1 w-0 bg-green-600 group-hover:w-full transition-all duration-300 mt-1 rounded-full"></span>
            </Link>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-4 md:mt-0"
        >
          <button
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] cursor-pointer text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
