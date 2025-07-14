



import React from "react";
import { FaBook, FaListUl, FaCertificate, FaChartLine } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";

const StudentDashboard = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen w-full bg-gray-100 p-4 md:p-6">
        <h2 className="text-2xl font-semibold mb-6">Welcome back, Sarah!</h2>

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
            <div
              key={idx}
              className="bg-white p-5 rounded-md shadow border flex items-center justify-between"
            >
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Course Recommendations */}
          <div className="bg-white p-5 rounded-md shadow border">
            <h3 className="font-medium mb-4">Course Recommendations</h3>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
                  alt="course"
                  className="w-12 h-12 rounded"
                />
                <div>
                  <p className="font-medium text-sm">
                    Machine Learning Fundamentals
                  </p>
                  <p className="text-xs text-gray-500">
                    Based on your interests
                  </p>
                </div>
              </div>
              <button className="bg-[#047670] text-white px-4 py-1 text-sm rounded">
                Enroll
              </button>
            </div>
          </div>

          {/* Recent Announcements */}
          <div className="bg-white p-5 rounded-md shadow border">
            <h3 className="font-medium mb-4">Recent Announcements</h3>
            {[
              {
                title: "New Course Materials Available",
                detail:
                  "Updated resources for Advanced Web Development course are now available.",
                time: "2 hours ago",
              },
              {
                title: "Platform Maintenance Notice",
                detail: "Scheduled maintenance on Sunday, 2AM - 4AM EST.",
                time: "1 day ago",
              },
            ].map((note, idx) => (
              <div key={idx} className="py-3 border-b last:border-0">
                <p className="font-medium text-sm">{note.title}</p>
                <p className="text-xs text-gray-500">{note.detail}</p>
                <p className="text-[10px] text-gray-400 mt-1">{note.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Discussions */}
        <div className="bg-white p-5 rounded-md shadow border">
          <h3 className="font-medium mb-4">Community & Discussions</h3>
          {[
            {
              name: "John Smith",
              group: "Web Development Group",
              action: "Shared a resource on React Hooks best practices",
              time: "30 mins ago",
              replies: 5,
              image: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Emma Wilson",
              group: "Data Science Study Group",
              action:
                "Started a discussion on Python data visualization libraries",
              time: "2 hours ago",
              replies: 8,
              image: "https://randomuser.me/api/portraits/women/44.jpg",
            },
          ].map((post, idx) => (
            <div
              key={idx}
              className="flex justify-between items-start py-4 border-b last:border-0"
            >
              <div className="flex items-start gap-3">
                <img
                  src={post.image}
                  alt={post.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    {post.name}
                  </p>
                  <p className="text-xs text-gray-500">{post.group}</p>
                  <p className="text-sm text-gray-700">{post.action}</p>
                </div>
              </div>

              <div className="text-right text-xs text-gray-500 whitespace-nowrap">
                <p>{post.time}</p>
                <p className="font-medium">{post.replies} replies</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
