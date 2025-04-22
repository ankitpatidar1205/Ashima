import React from "react";
import {
  FaDollarSign,
  FaCreditCard,
  FaUndoAlt,
  FaUserTie,
} from "react-icons/fa";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import DashboardLayout from "../../Layout/DashboardLayout";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const PaymentAnalytics = () => {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [35000, 42000, 44000, 41000, 46000, 50000],
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.4,
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Credit Card", "PayPal", "Bank Transfer", "Other"],
    datasets: [
      {
        data: [55, 25, 15, 5],
        backgroundColor: ["#6366F1", "#10B981", "#F59E0B", "#9CA3AF"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <DashboardLayout>
      {" "}
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6">Payment Analytics</h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: "Total Revenue",
              value: "$524,890",
              change: "↑ 12.5% from last month",
              color: "text-green-600",
              icon: <FaDollarSign />,
            },
            {
              label: "Total Payments",
              value: "2,841",
              change: "↑ 8.1% from last month",
              color: "text-green-600",
              icon: <FaCreditCard />,
            },
            {
              label: "Total Refunds",
              value: "$12,490",
              change: "↓ 2.4% from last month",
              color: "text-red-500",
              icon: <FaUndoAlt />,
            },
            {
              label: "Instructor Earnings",
              value: "$298,150",
              change: "↑ 15.2% from last month",
              color: "text-green-600",
              icon: <FaUserTie />,
            },
          ].map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">{card.label}</p>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mt-2">{card.value}</h3>
              <p className={`text-sm mt-1 ${card.color}`}>{card.change}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-semibold mb-3">Revenue Trends</h4>
            <div className="h-[300px]">
              <Line data={lineChartData} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-semibold mb-3">Payment Methods</h4>
            <div className="h-[300px]">
              <Doughnut data={doughnutChartData} />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-semibold mb-3">Top Earning Courses</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Advanced Web Development</p>
                  <p className="text-gray-500 text-xs">John Smith</p>
                </div>
                <span>$45,290</span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-medium">UI/UX Design Masterclass</p>
                  <p className="text-gray-500 text-xs">Sarah johnson</p>
                </div>
                <span>$38,450</span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Data Science Fundamentals</p>
                  <p className="text-gray-500 text-xs">Mike wilson</p>
                </div>
                <span>$32,780</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-semibold mb-3">Recent Payments</h4>
            <ul className="text-sm space-y-3">
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Alex Brown</p>
                  <p className="text-gray-500 text-xs">2 minutes ago</p>
                </div>
                <span>$199</span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Emma Wilson</p>
                  <p className="text-gray-500 text-xs">15 minutes ago</p>
                </div>
                <span>$299</span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-medium">David Chen</p>
                  <p className="text-gray-500 text-xs">1 hour ago</p>
                </div>
                <span>$149</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PaymentAnalytics;
