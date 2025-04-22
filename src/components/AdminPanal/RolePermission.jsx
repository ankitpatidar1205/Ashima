import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import  { useState } from "react";
import AddRoleModal from "./AddRoleModal";

const RolePermission = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Role Permissions</h2>
            <p className="text-sm text-gray-500">
              Manage permissions and access controls for different admin roles
            </p>
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search roles..."
              className="border border-gray-300 p-2 rounded w-64"
            />
            <select className="border border-gray-300 p-2 rounded">
              <option>All Roles</option>
            </select>
            {/* <button className="bg-[#047670] text-white px-4 py-2 rounded text-sm">
              + Create New Role
            </button> */}

            <button
              className="bg-[#047670] text-white px-4 py-2 rounded text-sm"
              onClick={() => setIsModalOpen(true)}
            >
              + Create New Role
            </button>

            <AddRoleModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>

        <div className="bg-white rounded p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Super Admin Role</h3>
            <button className="bg-[#047670] text-white px-4 py-2 rounded text-sm">
              Edit Role
            </button>
          </div>

          {/* Student Management */}
          <div className="border border-gray-200 rounded p-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium">Student Management</h4>
              <div className="flex items-center gap-2">
                <span>Select All</span>
                <input type="checkbox" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <label>
                <input type="checkbox" className="mr-2" /> View Students
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Add Students
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Edit Students
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Delete Students
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Manage Enrollments
              </label>
            </div>
          </div>

          {/* Course Management */}
          <div className="border border-gray-200 rounded p-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium">Course Management</h4>
              <div className="flex items-center gap-2">
                <span>Select All</span>
                <input type="checkbox" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <label>
                <input type="checkbox" className="mr-2" /> View Courses
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Create Courses
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Edit Courses
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Delete Courses
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Manage Content
              </label>
            </div>
          </div>

          {/* Financial Management */}
          <div className="border border-gray-200 rounded p-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium">Financial Management</h4>
              <div className="flex items-center gap-2">
                <span>Select All</span>
                <input type="checkbox" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <label>
                <input type="checkbox" className="mr-2" /> View Transactions
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Process Refunds
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Manage Pricing
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="bg-gray-200 px-4 py-2 rounded text-sm">
              Cancel
            </button>
            <button className="bg-[#047670] text-white px-4 py-2 rounded text-sm">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RolePermission;
