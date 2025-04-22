import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
  FaDownload,
  FaShareAlt,
} from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";

const CertificatesPage = () => {
    
  return (
    <DashboardLayout>
      <div className="bg-gray-50 min-h-screen p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          My Certificates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-base font-semibold text-gray-900">
                  {item === 1
                    ? "Advanced Web Development"
                    : item === 2
                    ? "Data Science Fundamentals"
                    : "UI/UX Design Essentials"}
                </h2>
                <span className="bg-green-100 text-[#047670] text-xs font-medium px-2 py-1 rounded-full">
                  Verified
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-2">
                Completed:{" "}
                {item === 1
                  ? "Jan 15, 2024"
                  : item === 2
                  ? "Dec 20, 2023"
                  : "Nov 30, 2023"}
              </p>

              <div className="w-full h-36 bg-gray-200 mb-3 flex items-center justify-center text-gray-400 text-sm">
                Image
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Certificate ID:{" "}
                {item === 1
                  ? "#WD2024-1234"
                  : item === 2
                  ? "#DS2023-5678"
                  : "#UX2023-9012"}
              </p>

              <div className="flex justify-between items-center">
                <button className="bg-[#047670] text-white text-sm px-4 py-2 rounded flex items-center gap-2">
                  <FaDownload /> Download PDF
                </button>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaShareAlt className="cursor-pointer text-xl text-teal-700 hover:text-teal-800" />
                  <FaLinkedin className="cursor-pointer text-xl text-teal-700 hover:text-teal-800" />
                  <FaTwitter className="cursor-pointer text-xl text-teal-700 hover:text-teal-800" />
                  <FaFacebookF className="cursor-pointer text-xl text-teal-700 hover:text-teal-800" />
                  <FaEnvelope className="cursor-pointer text-xl text-teal-700 hover:text-teal-800" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Verification */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Certificate Verification
          </h3>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter Certificate ID"
              className="flex-1 border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-teal-200"
            />
            <button className="bg-[#047670] text-white px-6 py-2 rounded text-sm hover:bg-gray-800">
              Verify Certificate
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CertificatesPage;
