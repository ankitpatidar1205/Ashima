import React from "react";
import { FaSearch, FaDownload, FaEye, FaTimes } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Link } from "react-router-dom";

const RefundProcess = () => {
  const refundData = [
    {
      id: "#RF001",
      student: "John Smith",
      course: "Advanced Web Dev",
      payment: "$199",
      refund: "$199",
      reason: "Course not as described",
      date: "2024-01-15",
      status: "Pending",
    },
    {
      id: "#RF002",
      student: "Sarah Johnson",
      course: "UI/UX Design",
      payment: "$299",
      refund: "$299",
      reason: "Technical issues",
      date: "2024-01-14",
      status: "Approved",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6">Refund Requests</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-4 items-center justify-between">
          <div className="flex flex-1 items-center gap-2">
            <div className="relative w-full md:w-[300px]">
              <input
                type="text"
                placeholder="Search by ID, student or course..."
                className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
              <FaDownload /> Export
            </button>
          </div>

          <div className="flex gap-2">
            <input
              type="date"
              className="border rounded-lg px-2 py-2 text-sm"
            />
            <input
              type="date"
              className="border rounded-lg px-2 py-2 text-sm"
            />
            <select className="border rounded-lg px-2 py-2 text-sm">
              <option>All Status</option>
              <option>Pending</option>
              <option>Approved</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm text-center text-nowrap">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Request ID",
                  "Student Name",
                  "Course Name",
                  "Payment Amount",
                  "Refund Amount",
                  "Reason",
                  "Request Date",
                  "Status",
                  "Actions",
                ].map((head) => (
                  <th key={head} className="px-2 py-2">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {refundData.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-2 py-2">{item.id}</td>
                  <td className="px-2 py-2">{item.student}</td>
                  <td className="px-2 py-2">{item.course}</td>
                  <td className="px-2 py-2">{item.payment}</td>
                  <td className="px-2 py-2">{item.refund}</td>
                  <td className="px-2 py-2">{item.reason}</td>
                  <td className="px-2 py-2">{item.date}</td>
                  <td className="px-2 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-2 py-2 flex gap-2 items-center">
                    <Link to={`/refund-details/${item.id.replace("#", "")}`}>
                      <FaEye className="text-gray-600 cursor-pointer" />
                    </Link>
                    <FaTimes className="text-gray-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 text-sm flex justify-between items-center">
            <span>Showing 1 to 2 of 50 entries</span>
            <div className="flex gap-2">
              <button className="border px-3 py-1 rounded text-sm">
                Previous
              </button>
              <button className="border px-3 py-1 rounded text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RefundProcess;
