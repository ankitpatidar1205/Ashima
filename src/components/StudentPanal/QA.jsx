import React from "react";
import {
  FaThumbsUp,
  FaRegBookmark,
  FaReply,
  FaPaperclip,
  FaImage,
} from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";

const QADiscussions = () => {
  
  return (
    <DashboardLayout>
      <div className="bg-gray-100 min-h-screen w-full py-8 px-4 md:px-8">
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">
              Q&A & Discussions
            </h2>

            <div className="flex gap-3">
              <button className="bg-[#047670] text-white px-4 py-2 rounded text-sm">
                Ask a Question
              </button>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>Sort by: Newest</option>
                <option>Sort by: Oldest</option>
              </select>
            </div>
          </div>

          {/* Bookmark Info */}
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded text-sm flex justify-between items-center">
            <div>
              <span className="font-semibold">
                ✅📚 Bookmark Important Discussions for Later
              </span>
              <p className="mt-1">
                Click the bookmark icon next to any discussion to save it for
                quick access. Your bookmarked discussions will be highlighted
                and easily accessible.
              </p>
            </div>
            <FaRegBookmark className="text-gray-500" />
          </div>

          {/* Discussion */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-900 font-semibold">
                    John Smith{" "}
                    <span className="text-xs text-gray-500 ml-1">
                      2 hours ago
                    </span>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    How do we implement responsive design using CSS Grid and
                    Flexbox together?
                  </p>
                  <div className="flex gap-3 text-gray-500 text-xs mt-2 items-center">
                    <FaThumbsUp /> 12
                    <FaReply className="ml-2" /> Reply
                  </div>
                </div>
              </div>

              {/* Reply */}
              <div className="ml-6 mt-4 border-l border-gray-300 pl-4">
                <p className="text-gray-900 font-semibold">
                  Dr. Sarah Wilson
                  <span className="bg-gray-200 text-gray-800 text-xs px-2 py-0.5 rounded ml-2">
                    Instructor
                  </span>
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Great question! Here's a detailed explanation...
                </p>
                <div className="flex gap-3 text-gray-500 text-xs mt-2 items-center">
                  <FaThumbsUp /> 8
                  <FaReply className="ml-2" /> Reply
                </div>
              </div>
            </div>
          </div>

          {/* Ask Question Input */}
          <div className="space-y-3 pt-4">
            <textarea
              placeholder="Write your question here..."
              className="border border-gray-300 rounded w-full px-3 py-2 text-sm"
            ></textarea>

            <div className="flex justify-between items-center">
              <div className="flex gap-3 text-gray-500 text-sm">
                <FaImage className="cursor-pointer" />
                <FaPaperclip className="cursor-pointer" />
              </div>
              <button className="bg-[#047670] text-white px-4 py-2 rounded text-sm">
                Post Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default QADiscussions;
