import React from "react";
import { FaSearch, FaEye,  FaKey, FaEdit, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Link } from "react-router-dom";

const AdminRolesManagement = () => {
  const adminData = [
    {
      id: "#ADM001",
      name: "John Anderson",
      email: "john.anderson@example.com",
      role: "Super Admin",
      createdDate: "Mar 15, 2024",
      status: "Active",
    },
  ];

  return (
    
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Admin Roles Management</h2>
            <p className="text-xs text-gray-500">
              Manage and configure administrator roles and permissions
            </p>
          </div>
          <button className="bg-[#047670] text-white px-4 py-2 rounded-lg text-sm">
            + Add New Admin
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 shadow mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="flex flex-1 gap-2 items-center w-full flex-wrap">
            <div className="relative w-full md:w-[300px]">
              <input
                type="text"
                placeholder="Search admins..."
                className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
            </div>

            <select className="border rounded-lg px-2 py-2 text-sm w-full md:w-auto">
              <option>All Roles</option>
              <option>Super Admin</option>
              <option>Moderator</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Admin ID",
                  "Name",
                  "Email",
                  "Role",
                  "Created Date",
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
              {adminData.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <img
                      src="https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_1280.png"
                      alt="profile"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    {item.name}
                  </td>
                  <td className="px-4 py-3">{item.email}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                      {item.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">{item.createdDate}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                      {item.status}
                    </span>
                  </td>
                  {/* <td className="px-4 py-3 flex gap-3 items-center">
                    <FaEye className="text-blue-600 cursor-pointer" />
                    <FaEdit className="text-green-600 cursor-pointer" />
                    <FaTrash className="text-red-600 cursor-pointer" />
                  </td> */}

                  <td className="px-4 py-3 flex gap-3 items-center">
                    <FaEye className="text-gray-600 cursor-pointer" />
                    <FaEdit className="text-blue-600 cursor-pointer" />
                    {/* <FaKey className="text-green-600 cursor-pointer" /> */}
                    <Link to="/RolePermission">
                      <FaKey className="text-green-600 cursor-pointer" />
                    </Link>
                    <FaTrash className="text-red-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="p-4 text-sm flex justify-between items-center">
            <span>Showing 1 to 10 of 20 results</span>
            <div className="flex gap-2">
              <button className="border px-3 py-1 rounded text-sm">
                Previous
              </button>
              <button className="border px-3 py-1 rounded bg-[#047670] text-white text-sm">
                1
              </button>
              <button className="border px-3 py-1 rounded text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminRolesManagement;