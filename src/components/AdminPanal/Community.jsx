import React from "react";
import { FaSearch, FaDownload, FaEye, FaTrash, FaBan } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Link } from "react-router-dom";

const ManageComm_Discu = () => {
  const discussionData = [
    {
      id: "#DSC-001",
      topic: "Getting Started with EdTech",
      createdBy: "Sarah Johnson",
      communityType: "General",
      totalComments: 24,
      createdDate: "Mar 15, 2024",
      status: "Active",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">
              Manage Community & Discussions
            </h2>
            <p className="text-xs text-gray-500">
              View and manage discussion threads and community interactions
            </p>
          </div>
          <button className="bg-[#047670] text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            <FaDownload /> Export Data
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="flex flex-1 gap-2 items-center w-full flex-wrap">
            <div className="relative w-full md:w-[260px]">
              <input
                type="text"
                placeholder="Search discussions..."
                className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
            </div>

            <select className="border rounded-lg px-2 py-2 text-sm w-full md:w-auto">
              <option>Date Range</option>
              <option>Last 7 days</option>
              <option>Last 14 days</option>
            </select>

            <select className="border rounded-lg px-2 py-2 text-sm w-full md:w-auto">
              <option>Community Type</option>
              <option>General</option>
              <option>Technical</option>
            </select>

            <select className="border rounded-lg px-2 py-2 text-sm w-full md:w-auto">
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg">
          <table className="w-full text-sm text-center text-nowrap">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Discussion ID",
                  "Topic Title",
                  "Created By",
                  "Community Type",
                  "Total Comments",
                  "Created Date",
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
              {discussionData.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-2 py-2">{item.id}</td>
                  <td className="px-2 py-2">{item.topic}</td>
                  <td className="px-2 py-2">{item.createdBy}</td>
                  <td className="px-2 py-2">{item.communityType}</td>
                  <td className="px-2 py-2">{item.totalComments}</td>
                  <td className="px-2 py-2">{item.createdDate}</td>
                  <td className="px-2 py-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-2 py-2 flex gap-3 items-center">
                    <Link
                      to={`/discussion-details/${item.id.replace("#", "")}`}
                    >
                      <FaEye className="text-blue-600 cursor-pointer" />
                    </Link>
                    {/* <FaBan className="text-yellow-500 cursor-pointer" /> */}
                    <FaTrash className="text-red-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="p-4 text-sm flex justify-between items-center">
            <span>Showing 1 to 10 of 50 results</span>
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

export default ManageComm_Discu;
