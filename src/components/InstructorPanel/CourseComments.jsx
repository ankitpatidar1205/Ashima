import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaSearch } from "react-icons/fa";

const CourseComments = () => {
  return (
    <DashboardLayout>
      <div className="bg-gray-50 font-sans min-h-screen flex">
        <div className="flex-1">
          <main className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Course Comments
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
                    <option value="">All Courses</option>
                    <option value="web-dev">Web Development</option>
                    <option value="python">Python Basics</option>
                    <option value="design">UI/UX Design</option>
                  </select>
                </div>
                <div className="w-96 relative">
                  <input
                    type="text"
                    placeholder="Search comments..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-custom/20"
                  />
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg">
              <div className="grid gap-4 p-6">
                {/* Web Development Comment */}
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Web Development Basics
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <img
                          src="https://creatie.ai/ai/api/search-image?query=student1&width=24&height=24&flag=b20bd90d-cff4-46c6-8061-5a1048d6c2ef"
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-600">
                          Sarah Johnson
                        </span>
                        <span className="text-sm text-gray-400">
                          • 2 hours ago
                        </span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800">
                      Reply
                    </button>
                  </div>
                  <p className="text-gray-800">
                    Great explanation of CSS Grid! The examples really helped me
                    understand the concept better.
                  </p>
                </div>

                {/* Python Basics Comment */}
                <div className="bg-white p-4 rounded-lg ">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Python Basics
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <img
                          src="https://creatie.ai/ai/api/search-image?query=student2&width=24&height=24&flag=4010f2a2-0020-42a4-b56b-3cb523260423"
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-600">
                          Mike Thompson
                        </span>
                        <span className="text-sm text-gray-400">
                          • 5 hours ago
                        </span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800">
                      Reply
                    </button>
                  </div>
                  <p className="text-gray-800">
                    The section on loops was a bit confusing. Could you provide
                    more examples?
                  </p>
                </div>

                {/* UI/UX Design Comment */}
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        UI/UX Design
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <img
                          src="https://creatie.ai/ai/api/search-image?query=student3&width=24&height=24&flag=06e7b9b9-9d35-4581-adce-8ca8f00c3946"
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-600">
                          Emma Davis
                        </span>
                        <span className="text-sm text-gray-400">
                          • 1 day ago
                        </span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800">
                      Reply
                    </button>
                  </div>
                  <p className="text-gray-800">
                    Loved the practical exercises on user research. Really
                    helped me understand the importance of user feedback.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CourseComments;
