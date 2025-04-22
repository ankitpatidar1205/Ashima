import { useState } from "react";
import { FaPlus, FaRedo, FaHistory, FaExclamationCircle } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import ReportIssueModal from "./ReportIssueModal";

const AssignmentPage = () => {
     const [showModal, setShowModal] = useState(false);
  return (
    <DashboardLayout>
      <div className="bg-gray-50 min-h-screen p-8">
        {/* Page Heading */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Advanced Web Development - Final Project
          </h1>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-red-600 font-medium">
              Time Remaining: 2d 4h 30m
            </span>
            <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs">
              Not Submitted
            </span>
          </div>
        </div>

        {/* Assignment Description */}
        <div className="bg-white rounded-lg  p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Assignment Description
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            Create a fully responsive website using modern web development
            techniques. The website should demonstrate your understanding of
            HTML5, CSS3, and JavaScript ES6+.
          </p>

          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Instructions
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Implement responsive design using CSS Grid and Flexbox</li>
            <li>Include form validation using JavaScript</li>
            <li>Optimize for performance and accessibility</li>
            <li>Submit both source code and deployed URL</li>
          </ul>
        </div>

        {/* Submission Section */}
        <div className="bg-white rounded-lg  p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Submission
          </h2>

          <div className="border-2 border-dashed border-gray-400 rounded-lg h-40 flex items-center justify-center mb-4 text-sm text-gray-500">
            Drop files here or click to upload <br /> PDF, DOC, ZIP (Max. 50MB)
          </div>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Add submission URL"
              className="flex-1 border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-teal-200"
            />
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300 flex items-center gap-1">
              <FaPlus /> Add Link
            </button>
          </div>

          <div className="flex gap-3">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300">
              Save Draft
            </button>
            <button className="bg-[#047670] text-white px-4 py-2 rounded text-sm hover:bg-gray-800">
              Submit Assignment
            </button>
          </div>
        </div>

        {/* Bottom Options */}
        <div className="flex flex-wrap items-center gap-4 text-sm mb-8">
          <button className="flex items-center gap-1 text-teal-700 hover:underline">
            <FaRedo /> Reattempt Assignment
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:underline">
            <FaHistory /> View History
          </button>
          {/* <button className="flex items-center gap-1 text-red-600 hover:underline">
          <FaExclamationCircle /> Report Issue
        </button> */}
         
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1 text-red-600 hover:underline"
          >
            <FaExclamationCircle /> Report Issue
          </button>
          {showModal && (
            <ReportIssueModal onClose={() => setShowModal(false)} />
          )}
        </div>

        {/* Previous Submissions */}
        <div className="bg-white rounded-lg  p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Previous Submissions
          </h2>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700 font-medium mb-1">
              Submission #1
              <span className="text-gray-500 font-normal">
                &nbsp; Submitted on Oct 15, 2023
              </span>
            </p>

            <p className="text-sm text-gray-600 mb-2">
              Instructor Feedback: Good work overall. Consider improving mobile
              responsiveness and adding more interactive features.
            </p>

            <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-full">
              Graded: 85/100
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AssignmentPage;
