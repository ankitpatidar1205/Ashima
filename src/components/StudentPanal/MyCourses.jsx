import React from "react";
import { FaBook, FaListUl, FaCertificate } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";

const Mc_Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen w-full bg-gray-100 p-4 md:p-8">
        <h2 className="text-xl font-semibold mb-6">Welcome back, Sarah!</h2>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Active Courses */}
          <div className="bg-white p-5 rounded-lg shadow border flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Active Courses</p>
              <FaBook className="text-3xl mb-2" />
            </div>
            <p className="text-2xl font-semibold">4</p>
          </div>

          {/* Pending Assignments */}
          <div className="bg-white p-5 rounded-lg shadow border flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Pending Assignments</p>
              <FaListUl className="text-3xl mb-2" />
            </div>
            <p className="text-2xl font-semibold">7</p>
          </div>

          {/* Certificates Earned */}
          <div className="bg-white p-5 rounded-lg shadow border flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Certificates Earned</p>
              <FaCertificate className="text-3xl mb-2" />
            </div>
            <p className="text-2xl font-semibold">12</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Courses */}
          <div className="bg-white p-5 rounded-md shadow border">
            <h3 className="font-medium mb-4 text-gray-900">Recent Courses</h3>

            {/* Course 1 */}
            <div className="flex justify-between items-center py-3 border-b">
              <div className="flex gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1642502093512-5b6c81aeef1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29yZCUyMGRvY3VtZW50fGVufDB8fDB8fHww"
                  alt="course"
                  className="w-10 h-10"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Advanced Web Development
                  </p>
                  <p className="text-xs text-gray-500">Progress: 75%</p>
                </div>
              </div>
              <button className="bg-[#047670] text-white px-4 py-1 text-sm rounded">
                Continue
              </button>
            </div>

            {/* Course 2 */}
            <div className="flex justify-between items-center py-3">
              <div className="flex gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8REFUQSUyMFZJU1VBTElaQVRJT58ZW58MHx8MHx8fDA%3D"
                  alt="course"
                  className="w-10 h-10"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Data Visualization
                  </p>
                  <p className="text-xs text-gray-500">Progress: 45%</p>
                </div>
              </div>
              <button className="bg-[#047670] text-white px-4 py-1 text-sm rounded">
                Continue
              </button>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white p-5 rounded-md shadow border">
            <h3 className="font-medium mb-4 text-gray-900">
              Upcoming Deadlines
            </h3>

            {/* Deadline 1 */}
            <div className="flex justify-between items-center py-3 border-b">
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Final Project Submission
                </p>
                <p className="text-xs text-gray-500">Web Development</p>
              </div>
              <p className="text-xs text-red-500">Due in 2 days</p>
            </div>

            {/* Deadline 2 */}
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Quiz: Data Structures
                </p>
                <p className="text-xs text-gray-500">Algorithms</p>
              </div>
              <p className="text-xs text-red-500">Due in 5 days</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Mc_Dashboard;
