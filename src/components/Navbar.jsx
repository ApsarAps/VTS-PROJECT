import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Images/logo1.png";
import ContactForm from "./ContactForm"; 

const Navbar = () => {
  const [showForm, setShowForm] = useState(false); 

  return (
    <>
      <nav className="bg-white shadow-md px-6 md:px-12 py-4 w-full fixed top-0 left-0 z-50">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex items-center space-x-2 md:space-x-4">
            <img src={Logo} alt="Vetri Technology Solutions" className="h-20 mr-5 md:h-24" />
            <div className="flex flex-col items-start">
              <span className="text-green-600 text-lg md:text-2xl font-bold">Vetri</span>
              <span className="text-blue-900 text-lg md:text-2xl font-bold">Technology Solutions</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-center text-2xl md:text-3xl font-bold space-y-4 md:space-y-0 md:space-x-8 items-center mt-4 md:mt-0 w-full md:w-auto">
            <Link to="/trainings" className="text-gray-800 hover:text-green-600">IT Trainings</Link>
            <Link to="/about" className="text-gray-800 hover:text-green-600">About Us</Link>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl font-medium hover:opacity-80 w-full md:w-auto"
              onClick={() => setShowForm(true)} 
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
      {showForm &&  <ContactForm isOpen={showForm} onClose={() => setShowForm(false)} />}
    </>
  );
};

export default Navbar;
