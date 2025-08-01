
import { FaBook, FaListUl, FaCertificate, FaChartLine } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { useEffect, useState } from "react";
const StudentDashboard = () => {
    const [userData, setUserData] = useState("");
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      // console.log("user", user)
      if (user) setUserData(user)
    }, []);
  return (
    <DashboardLayout>
      <div className="min-h-screen w-full bg-gray-100 p-4 md:p-6">
        <h2 className="text-2xl font-semibold mb-6">Welcome back, {userData?.name}!</h2>
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { icon: <FaBook />, label: "Active Courses", count: 0 },
            { icon: <FaListUl />, label: "Pending Assignments", count: 0 },
            {
              icon: <FaCertificate />,
              label: "Certificates Earned",
              count: 0,
            },
            { icon: <FaChartLine />, label: "Learning Progress", count: "0%" },
          ].map((item, idx) => (
            <div key={idx}
              className="bg-white p-5 rounded-md shadow border flex items-center justify-between">
              <div>
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
              <p className="text-2xl font-semibold">{item.count}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Recent Courses */}
          <div className="bg-white p-5 rounded-md shadow border">
            <h3 className="font-medium mb-4">Recent Courses</h3>
            {[
              { name: "Advanced Web Development", progress: "75%" },
              { name: "Data Visualization", progress: "45%" },
            ].map((course, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center py-3 border-b last:border-0"
              >
                <div>
                  <p className="font-medium text-sm">{course.name}</p>
                  <p className="text-xs text-gray-500">
                    Progress: {course.progress}
                  </p>
                </div>
                <button className="bg-[#047670] text-white px-4 py-1 text-sm rounded">
                  Continue
                </button>
              </div>
            ))}
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white p-5 rounded-md shadow border">
            <h3 className="font-medium mb-4">Upcoming Deadlines</h3>
            {[
              {
                title: "Final Project Submission",
                subject: "Web Development",
                due: "Due in 2 days",
              },
              {
                title: "Quiz: Data Structures",
                subject: "Algorithms",
                due: "Due in 5 days",
              },
            ].map((deadline, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center py-3 border-b last:border-0"
              >
                <div>
                  <p className="font-medium text-sm">{deadline.title}</p>
                  <p className="text-xs text-gray-500">{deadline.subject}</p>
                </div>
                <p className="text-xs text-red-500">{deadline.due}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
