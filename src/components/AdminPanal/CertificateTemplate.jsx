import React from "react";
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { useState } from "react";
import AddTemplateModal from "./AddTemplate";


const CertificateTemplates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Top Heading Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Certificate Templates</h2>

          {/* <button className="bg-[#047670] text-white px-4 py-2 rounded">
            + Add New Template
          </button> */}
          <button
            className="bg-[#047670] text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            + Add New Template
          </button>

          <AddTemplateModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>

        {/* Search & Filter */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <div className="flex flex-wrap gap-2 mb-6">
            <input
              type="text"
              placeholder="Search templates..."
              className="border px-3 py-2 rounded w-full md:w-[40%]"
            />
            <select className="border px-3 py-2 rounded">
              <option>All Categories</option>
            </select>
            <button className="border px-3 py-2 rounded flex items-center gap-2">
              Export
            </button>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item, i) => (
              <div key={i} className="border rounded overflow-hidden">
                <div className="bg-gray-200 flex items-center justify-center h-[200px] text-3xl text-gray-400">
                  600 × 400
                </div>
                <div className="p-3">
                  <h3 className="font-semibold mb-1">
                    {i === 0
                      ? "Professional Certificate"
                      : i === 1
                      ? "Course Completion"
                      : "Achievement Award"}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">
                    Category:{" "}
                    {i === 0
                      ? "Business"
                      : i === 1
                      ? "Education"
                      : "Recognition"}
                  </p>
                  <button className="border px-4 py-2 w-full flex justify-center items-center gap-2 text-sm rounded">
                    <FaDownload /> Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <div>Showing 1-3 of 12 templates</div>
            <div className="flex gap-2">
              <button className="border px-2 py-1 rounded">Previous</button>
              <button className="bg-[#047670] text-white px-2 py-1 rounded">
                1
              </button>
              <button className="border px-2 py-1 rounded">2</button>
              <button className="border px-2 py-1 rounded">3</button>
              <button className="border px-2 py-1 rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CertificateTemplates;
