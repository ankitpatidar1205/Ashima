import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaSearch, FaPaperPlane } from "react-icons/fa";

const Messages = () => {
  return (
    <DashboardLayout>
      <div className="bg-gray-50 font-sans min-h-screen flex">
        <div className="flex-1 ">
          <main className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
              <button
                className="!rounded-button bg-custom text-white px-4 py-2 flex items-center space-x-2 hover:bg-custom/90"
                style={{ display: "none" }}
              >
                <i className="fas fa-plus"></i>
                <span>Create New Course</span>
              </button>
            </div>
            <div className="flex space-x-4 mb-6">
          
            </div>

            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex h-[calc(100vh-220px)]">
                <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
                  <div className="space-y-2">
                    <div className="flex items-center p-2 bg-teal-700 rounded-lg cursor-pointer">
                      <img
                        src="https://creatie.ai/ai/api/search-image?query=student1&width=40&height=40&flag=f38e02cc-c6cd-4d7c-8220-13f55a56dc8b"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-white">
                          Sarah Johnson
                        </h3>
                        <p className="text-white/80 text-sm">
                          Thanks for the feedback!
                        </p>
                      </div>
                      <span className="text-xs text-white/80">2m</span>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                      <img
                        src="https://creatie.ai/ai/api/search-image?query=student2&width=40&height=40&flag=88a31799-cb0a-477e-86fc-ee1984cc41c9"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          Mike Thompson
                        </h3>
                        <p className="text-gray-500 text-sm">
                          When is the next live session?
                        </p>
                      </div>
                      <span className="text-xs text-gray-500">1h</span>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                      <img
                        src="https://creatie.ai/ai/api/search-image?query=student3&width=40&height=40&flag=3763d7c3-25ac-4dd9-bc78-b0e7319f94e7"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          Emma Davis
                        </h3>
                        <p className="text-gray-500 text-sm">
                          I've completed module 3
                        </p>
                      </div>
                      <span className="text-xs text-gray-500">3h</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex-1 p-6 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <img
                          src="https://creatie.ai/ai/api/search-image?query=student1&width=40&height=40&flag=2e117f64-49e0-4690-8110-ac2385ef957c"
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div className="bg-gray-100 rounded-lg p-2 max-w-md">
                          <p className="text-gray-800">
                            Hi Professor, I had a question about the latest
                            assignment.
                          </p>
                          <span className="text-xs text-gray-500 mt-1">
                            10:30 AM
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start justify-end">
                        <div className="bg-teal-700 text-white rounded-lg p-2 max-w-md">
                          <p>Sure, what would you like to know?</p>
                          <span className="text-xs text-white/80 mt-1">
                            10:32 AM
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <img
                          src="https://creatie.ai/ai/api/search-image?query=student1&width=40&height=40&flag=09caf103-cb60-4bda-bb9d-a283d9903725"
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div className="bg-gray-100 rounded-lg p-2 max-w-md">
                          <p className="text-gray-800">
                            Thanks for the feedback on my project!
                          </p>
                          <span className="text-xs text-gray-500 mt-1">
                            10:35 AM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500/20"
                      />
                      <button className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800">
                        <FaPaperPlane />
                      </button>
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

export default Messages;
