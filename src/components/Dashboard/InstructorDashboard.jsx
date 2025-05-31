import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../Layout/DashboardLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";
import { useDispatch, useSelector } from "react-redux";

const InstructorDashboard = () => {
  const [topic, setTopic] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [activeCourses, setActiveCourses] = useState();
  const [totalStudents, setTotalStudents] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [recentActivity, setRecentActivity] = useState([
    {
      name: 'Sarah Johnson enrolled in "Advanced Web Development"',
      time: "2 minutes ago",
    },
    {
      name: 'Michael Chen completed "UI/UX Fundamentals"',
      time: "15 minutes ago",
    },
    { name: "Emily Davis left a 5-star review", time: "1 hour ago" },
  ]);
  const [latestComments, setLatestComments] = useState([
    {
      user: "Alex Thompson",
      course: "Advanced Web Development",
      comment:
        "Great course! The practical examples really helped me understand the concepts better.",
    },
    {
      user: "Rachel Kim",
      course: "UI/UX Fundamentals",
      comment:
        "The content is well-structured and easy to follow. Looking forward to the advanced course!",
    },
    {
      user: "David Martinez",
      course: "React Native Basics",
      comment:
        "Excellent introduction to React Native. The instructor explains everything clearly.",
    },
  ]);

  const data = [
    { month: "Jan", revenue: 4500 },
    { month: "Feb", revenue: 5500 },
    { month: "Mar", revenue: 6700 },
    { month: "Apr", revenue: 6900 },
    { month: "May", revenue: 8100 },
    { month: "Jun", revenue: 8900 },
  ];

  const accessToken = "YOUR_ZOOM_OAUTH_ACCESS_TOKEN";

    const handleScheduleMeeting = async () => {
      const meetingData = {
        topic: topic,
        type: 2, // Scheduled meeting
        start_time: startTime, // ISO format date-time string
        duration: duration, // Duration in minutes
        timezone: "America/New_York",
        agenda: "Zoom meeting for course discussion",
      };

      try {
        const response = await axios.post(
          "https://api.zoom.us/v2/users/me/meetings",
          meetingData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        const meetingUrl = response.data.join_url;
        setMeetingLink(meetingUrl);
        alert("Meeting created successfully!");
      } catch (error) {
        console.error("Error creating Zoom meeting:", error);
        alert("Error creating meeting");
      }
    };

  const [schedule, setSchedule] = useState([
    {
      course: "Advanced JavaScript Workshop",
      time: "Today, 2:00 PM - 4:00 PM",
    },
    { course: "React Native Basics", time: "Tomorrow, 10:00 AM - 12:00 PM" },
    { course: "Design Systems Workshop", time: "Thursday, 3:00 PM - 5:00 PM" },
  ]);

  // Example of using a chart library for the Revenue Overview graph (e.g., Chart.js, Recharts, etc.)
  useEffect(() => {
    // Fetch the revenue data (could be an API call)
  }, []);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchCourses());
    }, [dispatch]);
    const { courses } = useSelector((state) => state.courses);
    console.log("courses",courses)
    
const filteredCourses = courses
  
  ?.filter((course) => course?.status == "1");
  return (
    <DashboardLayout>
      {" "}
      <div className="min-h-screen bg-gray-50 p-8">
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Active Courses</h3>
            <p className="text-2xl font-bold text-gray-900">{filteredCourses.length}</p>
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

        {/* Revenue Overview */}
        {/* <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue Overview
          </h3>
          <div className="h-64 bg-gray-50">[Revenue Chart Placeholder]</div>
        </div> */}

        <div className="bg-[#ffffff] p-6 rounded shadow">
          <h3 className="text-[16px] font-jost font-normal mb-4">
            Revenue Overview
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#6366F1"
                fillOpacity={1}
                fill="url(#colorRevenue)"
                strokeWidth={2}
                dot={{ r: 4, fill: "#6366F1" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h3>
          <ul>
            {recentActivity.map((activity, index) => (
              <li key={index} className="flex items-center mb-3">
                <p className="font-medium text-gray-900">{activity.name}</p>
                <p className="text-sm text-gray-500 ml-2">{activity.time}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Schedule Zoom Meeting
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meeting Topic
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Time
              </label>
              <input
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (minutes)
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              onClick={handleScheduleMeeting}
              className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800"
            >
              Create Meeting
            </button>
          </div>

          {meetingLink && (
            <div className="mt-4">
              <p className="text-gray-700">Meeting Link: </p>
              <a href={meetingLink} target="_blank" className="text-teal-700">
                {meetingLink}
              </a>
            </div>
          )}
        </div>

        {/* Upcoming Schedule */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Upcoming Schedule
          </h3>
          <ul>
            {schedule.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-3"
              >
                <div>
                  <p className="font-medium text-gray-900">{item.course}</p>
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
                <button className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800">
                  Join
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Comments */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Latest Comments
          </h3>
          <ul>
            {latestComments.map((comment, index) => (
              <li key={index} className="mb-4">
                <p className="font-medium text-gray-900">
                  {comment.user} on {comment.course}
                </p>
                <p className="text-sm text-gray-600">{comment.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InstructorDashboard;
