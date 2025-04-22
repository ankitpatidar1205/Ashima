import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Link } from "react-router-dom";

const ViewAssessments = () => {
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-1">View Assessments</h2>
        <p className="text-sm text-gray-500 mb-6">
          Monitor and manage student assessment results
        </p>

        {/* Filters */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <input
              type="text"
              placeholder="Search assessments..."
              className="border px-3 py-2 rounded w-full md:w-auto"
            />
            <select className="border px-3 py-2 rounded">
              <option>Course Name</option>
            </select>
            <select className="border px-3 py-2 rounded">
              <option>Student Name</option>
            </select>
            <input
              type="text"
              placeholder="-/-"
              className="border px-3 py-2 rounded w-full md:w-auto"
            />
            <select className="border px-3 py-2 rounded">
              <option>Score Range</option>
            </select>
            <button className="border px-3 py-2 rounded flex items-center gap-2">
              Export
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-nowrap">
              <thead className="bg-gray-50">
                <tr className="text-gray-500">
                  <th className="p-3">Assessment ID</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Course Name</th>
                  <th className="p-3">Total Score</th>
                  <th className="p-3">Attempted On</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    id: "#ASM001",
                    student: "John Doe",
                    course: "Web Development Basics",
                    score: "85/100",
                    date: "2024-01-20 14:30",
                    status: "Passed",
                  },
                  {
                    id: "#ASM002",
                    student: "Amit Sharma",
                    course: "React Mastery",
                    score: "78/100",
                    date: "2024-02-10 12:15",
                    status: "Passed",
                  },
                  {
                    id: "#ASM003",
                    student: "Priya Verma",
                    course: "Python Essentials",
                    score: "65/100",
                    date: "2024-03-05 16:00",
                    status: "Passed",
                  },
                ].map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3">{item.id}</td>
                    <td className="p-3">{item.student}</td>
                    <td className="p-3">{item.course}</td>
                    <td className="p-3">{item.score}</td>
                    <td className="p-3">{item.date}</td>
                    <td className="p-3">
                      <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 flex gap-2 text-gray-600 text-base">
                      <Link
                        to={`/assessment-details/${item.id.replace("#", "")}`}
                        className="text-gray-600"
                      >
                        <FaEye className="cursor-pointer" />
                      </Link>

                      <FaTrash />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <div>Showing 1-10 of 50 results</div>
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

export default ViewAssessments;
