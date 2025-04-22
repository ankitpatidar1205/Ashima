import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaArrowLeft } from "react-icons/fa";

const InstructorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Static Data (you can make dynamic using API)
  const instructor = {
    name: "John Smith",
    expertise: "Web Development Expert",
    email: "john.smith@example.com",
    phone: "+1 234 567 8900",
    accountNo: "****6789",
    ifsc: "ABCD0001234",
    courses: [
      { name: "Advanced Web Development", date: "Jan 15, 2024" },
      { name: "JavaScript Masterclass", date: "Dec 20, 2023" },
    ],
    activity: [
      { action: "Updated course content", time: "2 hours ago" },
      { action: "Responded to student query", time: "5 hours ago" },
    ],
  };

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-3">
          <h3 className="fw-bold">Instructor Details</h3>
          <button
            className="d-flex p-2 rounded align-items-center font-semibold
                             text-white bg-teal-700"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="me-1" /> Back
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Profile Card */}
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="bg-gray-200 w-24 h-24 mx-auto rounded-full mb-3 flex justify-center items-center">
              Image
            </div>
            <h3 className="font-bold text-lg">{instructor.name}</h3>
            <p className="text-sm text-gray-500">{instructor.expertise}</p>
            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded inline-block mt-2">
              Active
            </span>

            <div className="flex justify-around mt-4">
              <div>
                <p className="text-sm text-gray-500">Courses</p>
                <p className="font-bold">24</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Students</p>
                <p className="font-bold">2.4k</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="font-bold">$48k</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-3">Contact Information</h4>
            <p className="text-sm mb-1">Email</p>
            <p className="font-bold mb-2">{instructor.email}</p>
            <p className="text-sm mb-1">Phone</p>
            <p className="font-bold">{instructor.phone}</p>
          </div>

          {/* Bank Details */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-3">Bank Details</h4>
            <p className="text-sm mb-1">Account Number</p>
            <p className="font-bold mb-2">{instructor.accountNo}</p>
            <p className="text-sm mb-1">IFSC Code</p>
            <p className="font-bold">{instructor.ifsc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Courses */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-3">Courses Created</h4>
            {instructor.courses.map((course, index) => (
              <div
                key={index}
                className="border p-2 mb-2 rounded flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{course.name}</p>
                  <p className="text-xs text-gray-500">
                    Created on {course.date}
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                  Active
                </span>
              </div>
            ))}
          </div>

          {/* Activity */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-3">Recent Activity</h4>
            <ul className="space-y-2">
              {instructor.activity.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-sm"
                >
                  <div className="flex gap-2 items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <div>
                      <p className="font-medium">{item.action}</p>
                      <p className="text-gray-500 text-xs">{item.time}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => navigate("/instructors")}
            className="border px-4 py-2 rounded text-sm"
          >
            Edit Profile
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded text-sm">
            Block Instructor
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded text-sm">
            Delete Account
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InstructorDetails;
