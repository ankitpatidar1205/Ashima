// import DashboardLayout from "../../Layout/DashboardLayout";
// import Instructordash1 from "../../assets/Instructordash1.png";
// import Instructordash2 from "../../assets/Instructordash2.png";
// import Instructordash3 from "../../assets/Instructordash3.png";
// import Instructordash4 from "../../assets/Instructordash4.png";
// import Instructordash5 from "../../assets/Instructordash5.png";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";

// const InstructorDashboard = () => {
//   const data = [
//     { month: "Jan", revenue: 4500 },
//     { month: "Feb", revenue: 5500 },
//     { month: "Mar", revenue: 6700 },
//     { month: "Apr", revenue: 6900 },
//     { month: "May", revenue: 8100 },
//     { month: "Jun", revenue: 8900 },
//   ];

//   return (
//     <DashboardLayout>
//       <div className="bg-[#F9FAFB] min-h-screen p-6">
//         <h1 className="text-[22px] font-medium font-jost text-[#333946] mb-6">
//           Instructor Dashboard
//         </h1>

//         {/* Stats Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
//             <img
//               src={Instructordash1}
//               alt="Total Students"
//               className="w-[49px] h-[52px] rounded-[8px]"
//             />
//             <div className="flex flex-col justify-center">
//               <p className="text-[#9DA1AA] text-[15px] font-[Jost] font-normal ">
//                 Total Students
//               </p>
//               <h2 className="text-[22px] font-medium text-[#363C49]">1,234</h2>
//             </div>
//           </div>

//           <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
//             <img
//               src={Instructordash2}
//               alt="Total Students"
//               className="w-[49px] h-[52px] rounded-[8px]"
//             />
//             <div className="flex flex-col justify-center">
//               <p className="text-[#9DA1AA] text-[15px] font-[Jost] font-normal leading-[18px]">
//                 Active Courses
//               </p>
//               <h2 className="text-[22px] font-medium text-[#363C49] leading-[26px]">
//                 12
//               </h2>
//             </div>
//           </div>

//           <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
//             <img
//               src={Instructordash3}
//               alt="Total Students"
//               className="w-[49px] h-[52px] rounded-[8px]"
//             />
//             <div className="flex flex-col justify-center">
//               <p className="text-[#9DA1AA] text-[15px] font-[Jost] font-normal leading-[18px]">
//                 Average Rating
//               </p>
//               <h2 className="text-[22px] font-medium text-[#363C49] leading-[26px]">
//                 4.8
//               </h2>
//             </div>
//           </div>

//           <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
//             <img
//               src={Instructordash3}
//               alt="Total Students"
//               className="w-[49px] h-[52px] rounded-[8px]"
//             />
//             <div className="flex flex-col justify-center">
//               <p className="text-[#9DA1AA] text-[15px] font-[Jost] font-normal leading-[18px]">
//                 Total Revenue
//               </p>
//               <h2 className="text-[22px] font-medium text-[#363C49] leading-[26px]">
//                 $8,945
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
//           {/* Live Classes */}
//           <div className="bg-[#ffffff] p-4 rounded shadow w-[554px] h-[300px]">
//             <h3 className="text-[17px] text-[#545964] font-jost font-normal mb-4">
//               Upcoming Live Classes
//             </h3>
//             <div className="mb-3">
//               <div className="flex justify-between">
//                 <div>
//                   <p className="font-medium font-jost text-[15px] text-[#4C4C4C]">
//                     Advanced JavaScript Concepts
//                   </p>
//                   <p className="text-[13px] text-[#A0A4AD] font-jost font-normal">
//                     Today at 2:00 PM
//                   </p>
//                 </div>
//                 <button className="mt-2 w-[114px] h-[48px] bg-[#047670] text-[#ffffff] px-2">
//                   Join Class
//                 </button>
//               </div>

//               <div className="flex justify-between mt-5">
//                 <div>
//                   <p className="font-medium text-[#4C4C4C] font-jost text-[15px]">
//                     UI Design Workshop
//                   </p>
//                   <p className="text-[13px] text-[#A0A4AD] font-jost font-normal">
//                     Tomorrow at 10:00 AM
//                   </p>
//                 </div>
//                 <button className="mt-2 w-[114px] h-[48px] bg-[#047670] text-[#ffffff] px-2">
//                   Join Class
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Revenue Graph Placeholder */}

//           <div className="bg-[#ffffff] p-6 rounded shadow">
//             <h3 className="text-[16px] font-jost font-normal mb-4">
//               Revenue Overview
//             </h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={data}>
//                 <defs>
//                   <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#6366F1" stopOpacity={0.3} />
//                     <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Area
//                   type="monotone"
//                   dataKey="revenue"
//                   stroke="#6366F1"
//                   fillOpacity={1}
//                   fill="url(#colorRevenue)"
//                   strokeWidth={2}
//                   dot={{ r: 4, fill: "#6366F1" }}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Course Reviews and Products */}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//           <div className="bg-[#ffffff] p-4 rounded shadow">
//             <h3 className="text-[18px] font-normal text-[#525762] font-jost mb-4">
//               Recent Course Reviews
//             </h3>

//             {/* Review 1 */}
//             <div className="flex gap-3 mb-4 items-center">
//               <img
//                 src={Instructordash5}
//                 alt="user"
//                 className="w-[48px] h-[48px] rounded-[20px] object-cover"
//               />
//               <div>
//                 <div className="flex gap-2 items-center">
//                   <p className="text-[18px] font-normal text-[#464646] mb-0">
//                     Sarah Johnson
//                   </p>
//                   <div className="flex items-center">
//                     {Array(5)
//                       .fill()
//                       .map((_, i) => (
//                         <span
//                           key={i}
//                           className="text-yellow-400 text-2xl leading-none"
//                         >
//                           ★
//                         </span>
//                       ))}
//                   </div>
//                 </div>
//                 <p className="text-sm text-[#6B7280] mt-1">
//                   Great course content and delivery! Very helpful.
//                 </p>
//               </div>
//             </div>

//             {/* Review 2 */}
//             <div className="flex gap-3 items-center">
//               <img
//                 src={Instructordash5}
//                 alt="user"
//                 className="w-[48px] h-[48px] rounded-[20px] object-cover"
//               />
//               <div>
//                 <div className="flex gap-2 items-center">
//                   <p className="text-[18px] font-normal text-[#464646] mb-0">
//                     Sarah Johnson
//                   </p>
//                   <div className="flex items-center">
//                     {Array(5)
//                       .fill()
//                       .map((_, i) => (
//                         <span
//                           key={i}
//                           className="text-yellow-400 text-2xl leading-none"
//                         >
//                           ★
//                         </span>
//                       ))}
//                   </div>
//                 </div>
//                 <p className="text-sm text-[#6B7280] mt-1">
//                   Great course content and delivery! Very helpful.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//           <div className="bg-[#ffffff] p-4 rounded shadow">
//             <h3 className="text-[18px] font-normal text-[#525762] font-jost mb-4">
//               Digital Products
//             </h3>

//             {/* Review 1 */}
//             <div className="flex gap-3 mb-4 items-center">
//               <img
//                 src={Instructordash5}
//                 alt="user"
//                 className="w-[48px] h-[48px] rounded-[20px] object-cover"
//               />
//               <div>
//                 <div className="flex gap-2 items-center">
//                   <p className="text-[18px] font-normal text-[#464646] mb-0">
//                     premium glow up akedemi metodu (% 50 Ozel indrim
//                   </p>
//                 </div>
//                 <p className="text-sm text-[#6B7280] mt-1">e Book</p>
//               </div>
//             </div>

//             {/* Review 2 */}
//             <div className="flex gap-3 items-center">
//               <img
//                 src={Instructordash5}
//                 alt="user"
//                 className="w-[48px] h-[48px] rounded-[20px] object-cover"
//               />
//               <div>
//                 <div className="flex gap-2 items-center">
//                   <p className="text-[18px] font-normal text-[#464646] mb-0">
//                     premium glow up akedemi metodu (% 50 Ozel indrim
//                   </p>
//                 </div>
//                 <p className="text-sm text-[#6B7280] mt-1">e Book</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Community Discussions */}
//         <div className="bg-[#ffffff] p-4 rounded shadow">
//           <h3 className="text-[16px] font-normal text-[#5555A65] font-jost  mb-4">
//             Community Discussions
//           </h3>
//           <div className="mb-3">
//             <p className="font-normal text-[#4F4F4F] font-jost text-[25px]">
//               Teaching Tips & Tricks
//             </p>
//             <p className="text-sm text-[#6B7280]">
//               15 new posts - 3 unread messages
//             </p>
//           </div>
//           <div>
//             <p className="font-jost font-normal text-[15px] text-[#4E4E4E]">
//               Course Creation Support
//             </p>
//             <p className="text-[13px] font-jost font-normal text-[#A3A7B0]">
//               8 new posts - 1 unread message
//             </p>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default InstructorDashboard;

// import React, { useState } from "react";
// import axios from "axios";
// import DashboardLayout from "../../Layout/DashboardLayout";

// const InstructorDashboard = () => {
//   const [topic, setTopic] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [duration, setDuration] = useState("");
//   const [meetingLink, setMeetingLink] = useState("");

//   // Zoom API access token (replace with actual token obtained from OAuth)
//   const accessToken = "YOUR_ZOOM_OAUTH_ACCESS_TOKEN";

//   const handleScheduleMeeting = async () => {
//     const meetingData = {
//       topic: topic,
//       type: 2, // Scheduled meeting
//       start_time: startTime, // ISO format date-time string
//       duration: duration, // Duration in minutes
//       timezone: "America/New_York",
//       agenda: "Zoom meeting for course discussion",
//     };

//     try {
//       const response = await axios.post(
//         "https://api.zoom.us/v2/users/me/meetings",
//         meetingData,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const meetingUrl = response.data.join_url;
//       setMeetingLink(meetingUrl);
//       alert("Meeting created successfully!");
//     } catch (error) {
//       console.error("Error creating Zoom meeting:", error);
//       alert("Error creating meeting");
//     }
//   };

//   return (
//     <DashboardLayout>
//       {" "}
//       <div className="min-h-screen bg-gray-50 flex">
//         <div className="flex-1 p-8">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-2xl font-bold text-gray-900">
//               Instructor Dashboard
//             </h1>
//           </div>

//           {/* Profile Info */}
//           <div className="bg-white rounded-lg shadow p-6 mb-8">
//             <div className="flex gap-8">
//               <div className="w-1/3 text-center">
//                 <img
//                   src="https://creatie.ai/ai/api/search-image?query=A%20professional%20headshot%20of%20a%20person%20with%20a%20friendly%20smile%20in%20business%20casual%20attire"
//                   alt="Instructor"
//                   className="w-32 h-32 rounded-full mx-auto mb-4"
//                 />
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                   John Smith
//                 </h2>
//                 <p className="text-gray-600 mb-4">
//                   Senior Web Development Instructor
//                 </p>
//               </div>
//               <div className="w-2/3">
//                 <h3 className="text-lg font-semibold text-teal-700 mb-4">
//                   Expertise
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
//                     JavaScript
//                   </span>
//                   <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
//                     React
//                   </span>
//                   <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
//                     Node.js
//                   </span>
//                   <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
//                     Python
//                   </span>
//                   <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
//                     MongoDB
//                   </span>
//                   <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
//                     AWS
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Zoom Meeting Scheduler */}
//           <div className="bg-white rounded-lg shadow p-6 mb-8">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">
//               Schedule Zoom Meeting
//             </h3>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Meeting Topic
//                 </label>
//                 <input
//                   type="text"
//                   value={topic}
//                   onChange={(e) => setTopic(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Start Time
//                 </label>
//                 <input
//                   type="datetime-local"
//                   value={startTime}
//                   onChange={(e) => setStartTime(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Duration (minutes)
//                 </label>
//                 <input
//                   type="number"
//                   value={duration}
//                   onChange={(e) => setDuration(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <button
//                 onClick={handleScheduleMeeting}
//                 className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800"
//               >
//                 Create Meeting
//               </button>
//             </div>

//             {meetingLink && (
//               <div className="mt-4">
//                 <p className="text-gray-700">Meeting Link: </p>
//                 <a href={meetingLink} target="_blank" className="text-teal-700">
//                   {meetingLink}
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default InstructorDashboard;

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

const InstructorDashboard = () => {
  const [topic, setTopic] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [activeCourses, setActiveCourses] = useState(24);
  const [totalStudents, setTotalStudents] = useState(2845);
  const [avgRating, setAvgRating] = useState(4.8);
  const [monthlyRevenue, setMonthlyRevenue] = useState(8492);
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

  return (
    <DashboardLayout>
      {" "}
      <div className="min-h-screen bg-gray-50 p-8">
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Active Courses</h3>
            <p className="text-2xl font-bold text-gray-900">{activeCourses}</p>
            <p className="text-green-600 text-sm">+12.5%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Total Students</h3>
            <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
            <p className="text-green-600 text-sm">+8.1%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Average Rating</h3>
            <p className="text-2xl font-bold text-gray-900">{avgRating}</p>
            <p className="text-green-600 text-sm">+0.8</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Monthly Revenue</h3>
            <p className="text-2xl font-bold text-gray-900">
              ${monthlyRevenue}
            </p>
            <p className="text-green-600 text-sm">+15.2%</p>
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
