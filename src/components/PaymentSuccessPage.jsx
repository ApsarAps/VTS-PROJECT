import { useLocation } from "react-router-dom";

const PaymentSuccessPage = () => {
  const location = useLocation();
  const { enrolledId, name, phone, email } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-[8rem] md:pt-[7rem] lg:pt-12">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-2xl text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-md">
            <svg
              className="text-white w-10 h-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Congratulations</h2>
        <p className="text-gray-600 mt-3 text-lg">
          You have successfully Enrolled in UI/UX Training
        </p>

        <div className="bg-gradient-to-r from-[#EB40DA] to-[#4D1AB1] rounded-lg p-5 mt-6 text-white text-sm w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center font-semibold text-lg">
            <div>
              <p>Enrolled ID</p>
              <p className="font-medium text-sm break-words">{enrolledId || "-"}</p>
            </div>
            <div>
              <p>Name</p>
              <p className="font-medium text-sm break-words">{name || "-"}</p>
            </div>
            <div>
              <p>Phone Number</p>
              <p className="font-medium text-sm break-words">{phone || "-"}</p>
            </div>
            <div>
              <p>Email ID</p>
              <p className="font-medium text-sm break-words">{email || "-"}</p>
            </div>
          </div>
        </div>
        <button className="mt-6 bg-[#EB40DA] text-white px-6 py-3 cursor-pointer rounded-full font-semibold shadow-md hover:bg-[#4D1AB1] transition-all">
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
