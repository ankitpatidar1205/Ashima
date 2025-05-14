import React from "react";
import { FaLinkedin, FaTwitter, FaGithub,  FaPlus,  FaEdit,} from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";

const ProfileLayout = () => {
  return (
    <DashboardLayout>
      <div className="bg-gray-50 font-sans min-h-screen flex">
        {/* Sidebar Space */}
        <div className="flex-1">
          {/* Main Content */}
          <main className="p-8">
            {/* Top Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
              <button className="rounded-lg bg-[#047670] text-white px-4 py-2 flex items-center space-x-2 hover:bg-teal-800">
                <FaEdit />
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Filters */}
            <div className="flex space-x-4 mb-6">
              <button className="px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800">
                Month
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">
                Week
              </button>
              <button className="px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800 flex items-center space-x-2">
                <FaPlus />
                <span>Add Session</span>
              </button>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-lg  grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Side - Profile Card */}
              <div className="col-span-1">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200" />
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    John Smith
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Senior Web Development Instructor
                  </p>
                  <div className="flex justify-center space-x-4 mb-6">
                    <FaLinkedin className="text-2xl text-teal-700 hover:text-teal-800" />
                    <FaTwitter className="text-2xl text-teal-700 hover:text-teal-800" />
                    <FaGithub className="text-2xl text-teal-700 hover:text-teal-800" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-700">12</div>
                      <div className="text-sm text-gray-600">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-700">
                        1.2k
                      </div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-700">
                        4.9
                      </div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Details */}
              <div className="col-span-2">
                <div className="bg-white rounded-lg shadow p-6">
                  {/* Contact Info */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600">
                          Email
                        </label>
                        <p className="text-gray-800">john.smith@eduteach.com</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600">
                          Phone
                        </label>
                        <p className="text-gray-800">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  {/* About Me */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">
                      About Me
                    </h3>
                    <p className="text-gray-800">
                      Passionate web development instructor with over 10 years
                      of industry experience. Specializing in modern JavaScript
                      frameworks and full-stack development. Committed to
                      helping students master the latest web technologies and
                      build real-world applications.
                    </p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">
                      Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
                        React
                      </span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
                        MongoDB
                      </span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
                        AWS
                      </span>
                    </div>
                  </div>

                  {/* Teaching Schedule */}
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">
                      Teaching Schedule
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Web Development Basics</p>
                          <p className="text-sm text-gray-600">
                            Monday, Wednesday - 9:00 AM
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-teal-700 text-white rounded-full text-sm">
                          Active
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Advanced React Course</p>
                          <p className="text-sm text-gray-600">
                            Tuesday, Thursday - 2:00 PM
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-teal-700 text-white rounded-full text-sm">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileLayout;
