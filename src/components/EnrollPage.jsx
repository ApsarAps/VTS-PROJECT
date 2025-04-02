import { useParams } from "react-router-dom";
import coursesData from "./CourseData";

const EnrollPage = () => {
  const { courseName } = useParams();
  const course = coursesData[courseName];

  if (!course) {
    return <div className="text-center text-red-600 font-bold">Course not found!</div>;
  }

  return (
    <div className="flex flex-col mt-15 lg:flex-row items-center lg:items-start justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white gap-4 p-6 shadow-lg rounded-lg w-full max-w-lg lg:mr-8">
        <h2 className="text-xl font-bold mb-4">Payment Method</h2>
        <div className="flex items-center  space-x-2 mb-4">
          <input type="radio" id="creditCard" name="paymentMethod" className="form-radio text-purple-600" defaultChecked />
          <label htmlFor="creditCard" className="text-gray-800">Credit or Debit card</label>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Card Icons" className="w-8 h-5" />
        </div>

        <input type="text" placeholder="Card Holder Name" className="input-field mb-3" />
        <input type="text" placeholder="Card Number" className="input-field mb-3" />
        
        <div className="flex space-x-2">
          <input type="text" placeholder="Expiry Date" className="input-field w-1/2 mb-3" />
          <input type="text" placeholder="CVV Number" className="input-field w-1/2 mb-3" />
        </div>

        <button className="bg-[#4D1AB1] text-white py-2 w-full rounded-md hover:opacity-90 mt-4">
          Complete Checkout
        </button>
      </div>
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm">
        <img src={course.image} alt={course.title} className="rounded-lg shadow-md w-full mb-4" />

        <h3 className="text-lg font-semibold">{course.title} - Work From Home Job Offer</h3>

        <div className="flex justify-between items-center mt-3">
          <span className="text-gray-500 text-sm"><i className="fas fa-clock"></i> {course.duration}</span>
          <span className="text-gray-700 font-semibold">₹ {course.discountedPrice}</span>
        </div>

        <div className="border-t my-3"></div>

        <div className="text-sm">
          <p><strong>Price:</strong> ₹ {course.originalPrice}</p>
          <p><strong>Discount:</strong> - ₹ {course.originalPrice - course.discountedPrice}</p>
          <p><strong>Subtotal:</strong> ₹ {course.discountedPrice}</p>
          <p className="font-bold text-lg mt-2">Total: ₹ {course.discountedPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default EnrollPage;
