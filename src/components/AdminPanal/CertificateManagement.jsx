import React from "react";
import { FaSearch, FaDownload, FaEye, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import CertificateGenerator from "../Certificate/CertificateGenerator";
import CertificatePdfPreview from "../Certificate/CertificatePreview";

const CertificateManagement = () => {
  const certificateData = [
    {
      id: "#CERT001",
      student: "John Smith",
      course: "Advanced Web Development",
      date: "2024-01-15",
      status: "Issued",
    },
    {
      id: "#CERT002",
      student: "Emma Wilson",
      course: "Digital Marketing",
      date: "2024-01-14",
      status: "Pending",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Certificate Management</h2>
          <button className="bg-[#047670] text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            <FaDownload /> Export Data
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 shadow mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="flex flex-1 gap-2 items-center w-full">
            <div className="relative w-full md:w-[260px]">
              <input
                type="text"
                placeholder="Search certificates..."
                className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
            </div>

            <select className="border rounded-lg px-2 py-2 text-sm w-full md:w-auto">
              <option>All Courses</option>
              <option>Web Development</option>
              <option>Digital Marketing</option>
            </select>

            <select className="border rounded-lg px-2 py-2 text-sm w-full md:w-auto">
              <option>All Status</option>
              <option>Issued</option>
              <option>Pending</option>
            </select>

            <input
              type="date"
              className="border rounded-lg px-2 py-2 text-sm w-full md:w-auto"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Certificate ID",
                  "Student Name",
                  "Course Name",
                  "Issue Date",
                  "Status",
                  "Actions",
                ].map((head) => (
                  <th key={head} className="px-4 py-3">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {certificateData.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">{item.student}</td>
                  <td className="px-4 py-3">{item.course}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "Issued"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-3 items-center">
                    {/* <FaEye className="text-blue-600 cursor-pointer" /> */}
                    <CertificatePdfPreview studentName={item.student} courseTitle={item.course}/>
                    {/* <FaDownload className="text-gray-600 cursor-pointer" /> */}
                    <CertificateGenerator studentName={item.student} courseTitle={item.course} />
                    <FaTrash className="text-red-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="p-4 text-sm flex justify-between items-center">
            <span>Showing 1 to 2 of 50 results</span>
            <div className="flex gap-2">
              <button className="border px-3 py-1 rounded text-sm">
                Previous
              </button>
              <button className="border px-3 py-1 rounded bg-[#047670] text-white text-sm">
                1
              </button>
              <button className="border px-3 py-1 rounded text-sm">2</button>
              <button className="border px-3 py-1 rounded text-sm">3</button>
              <button className="border px-3 py-1 rounded text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CertificateManagement;
