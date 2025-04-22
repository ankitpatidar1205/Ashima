import DashboardLayout from "../../Layout/DashboardLayout";
  import React from "react";

const AdminDashboard = () => {
 
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Total Students</p>
            <h3 className="text-2xl font-semibold mt-1">4</h3>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Active Instructors</p>
            <h3 className="text-2xl font-semibold mt-1">5</h3>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Total Courses</p>
            <h3 className="text-2xl font-semibold mt-1">8</h3>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Revenue (MTD)</p>
            <h3 className="text-2xl font-semibold mt-1">$124,563</h3>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Pending Approvals</p>
            <h3 className="text-2xl font-semibold mt-1">28</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-4">Latest Enrollments</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>John Doe</strong> <br /> Web Development Basics
              </li>
              <li>
                <strong>Jane Smith</strong> <br /> UI/UX Design Masterclass
              </li>
              <li>
                <strong>Mike Johnson</strong> <br /> Digital Marketing 101
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-4">Notifications</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-blue-500">
                New course approval request from Sarah Wilson
              </li>
              <li className="text-green-500">
                Monthly revenue report is ready
              </li>
              <li className="text-yellow-500">
                5 new student enrollments need review
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-4">Recent Transactions</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td>#1234</td>
                  <td>John Smith</td>
                  <td>$299</td>
                  <td>2024-02-20</td>
                </tr>
                <tr>
                  <td>#1235</td>
                  <td>Emily Brown</td>
                  <td>$199</td>
                  <td>2024-02-19</td>
                </tr>
                <tr>
                  <td>#1236</td>
                  <td>Michael Davis</td>
                  <td>$399</td>
                  <td>2024-02-18</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-4">Revenue Analytics</h4>
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              {/* Add your Chart component here */}
              Chart Here
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};




export default AdminDashboard;
