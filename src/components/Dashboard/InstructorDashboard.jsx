import { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";

const InstructorDashboard = () => {
  const [monthlyRevenue] = useState(8900);

  const data = [
    { month: "Jan", revenue: 4500 },
    { month: "Feb", revenue: 5500 },
    { month: "Mar", revenue: 6700 },
    { month: "Apr", revenue: 6900 },
    { month: "May", revenue: 8100 },
    { month: "Jun", revenue: 8900 },
  ];

  const filteredCourses = [1, 2, 3]; 
  const totalStudents = 120; 
  const avgRating = 4.7;

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 p-8">
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Active Courses</h3>
            <p className="text-2xl font-bold text-gray-900">
              {filteredCourses.length}
            </p>
            <p className="text-green-600 text-sm">+00.0%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Total Students</h3>
            <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
            <p className="text-green-600 text-sm">+0.0%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Average Rating</h3>
            <p className="text-2xl font-bold text-gray-900">{avgRating}</p>
            <p className="text-green-600 text-sm">+0.0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Monthly Revenue</h3>
            <p className="text-2xl font-bold text-gray-900">
              ${monthlyRevenue}
            </p>
            <p className="text-green-600 text-sm">+0.0%</p>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-[16px] font-jost font-normal mb-4">
            Revenue Overview
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#6366F1" barSize={50} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InstructorDashboard;
