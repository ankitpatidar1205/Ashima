import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import EarningsChart from "./EarningsChart"; // Import Chart Component



const EarningsOverview = () => {
  return (
    <DashboardLayout>
      <div className="bg-gray-50 font-sans min-h-screen flex">
        <div className="flex-1">
          <main className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Earnings Overview
              </h1>
              <button
                className="!rounded-button bg-custom text-white px-4 py-2 flex items-center space-x-2 hover:bg-custom/90"
                style={{ display: "none" }}
              >
                <i className="fas fa-plus"></i>
                <span>Create New Course</span>
              </button>
            </div>

            <div className="flex space-x-4 mb-6">
              <div className="flex items-center space-x-4 w-full">
                <div className="w-64">
                  <select className="w-full px-4 py-2 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-custom/20">
                    <option value="">Last 30 days</option>
                    <option value="3months">Last 3 months</option>
                    <option value="6months">Last 6 months</option>
                    <option value="1year">Last year</option>
                  </select>
                </div>
                <div className="w-64">
                  <select className="w-full px-4 py-2 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-custom/20">
                    <option value="">All Courses</option>
                    <option value="web-dev">Web Development</option>
                    <option value="python">Python Basics</option>
                    <option value="design">UI/UX Design</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg ">
              <div className="grid grid-cols-3 gap-6 p-6 mb-8">
                {/* Total Earnings */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-gray-500 text-sm mb-2">Total Earnings</h3>
                  <p className="text-3xl font-bold text-gray-900">$24,850.00</p>
                  <p className="text-green-600 text-sm mt-2">
                    <i className="fas fa-arrow-up"></i> 12% from last month
                  </p>
                </div>

                {/* This Month */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-gray-500 text-sm mb-2">This Month</h3>
                  <p className="text-3xl font-bold text-gray-900">$3,240.00</p>
                  <p className="text-green-600 text-sm mt-2">
                    <i className="fas fa-arrow-up"></i> 8% from last month
                  </p>
                </div>

                {/* Pending Payouts */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-gray-500 text-sm mb-2">
                    Pending Payouts
                  </h3>
                  <p className="text-3xl font-bold text-gray-900">$1,200.00</p>
                  <button className="bg-teal-700 text-white px-4 py-2 rounded-lg mt-2 hover:bg-teal-800 w-full">
                    Withdraw
                  </button>
                </div>
              </div>

              {/* Earnings Over Time */}
              <div className="bg-white p-6 rounded-lg shadow mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Earnings Over Time
                  </h3>
                  <select className="bg-gray-100 border-0 rounded-lg px-3 py-2">
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Last year</option>
                  </select>
                </div>

                <div className="h-64">
                  <EarningsChart /> {/* Chart Inserted Here */}
                </div>
              </div>

              {/* Recent Payouts */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Payouts
                  </h3>
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 border-b">
                        <th className="pb-3">Date</th>
                        <th className="pb-3">Amount</th>
                        <th className="pb-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Aug 1, 2023</td>
                        <td>$2,450.00</td>
                        <td>
                          <span className="text-green-600">Completed</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">July 1, 2023</td>
                        <td>$1,890.00</td>
                        <td>
                          <span className="text-green-600">Completed</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3">June 1, 2023</td>
                        <td>$2,100.00</td>
                        <td>
                          <span className="text-green-600">Completed</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EarningsOverview;




