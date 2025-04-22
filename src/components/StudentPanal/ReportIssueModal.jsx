import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const ReportIssueModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        {/* Cross Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 text-lg"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Report an Issue
        </h2>

        {/* Issue Type */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Issue Type
        </label>
        <select className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
          <option>Technical Problem</option>
          <option>Payment Issue</option>
          <option>Other</option>
        </select>

        {/* Description */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          placeholder="Please describe the issue in detail..."
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 h-24 resize-none"
        ></textarea>

        {/* Attachment */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Attachments (Optional)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-sm text-gray-500 mb-4">
          <FaCloudUploadAlt className="mx-auto mb-2 text-2xl text-gray-400" />
          Drop files here or click to upload
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 text-sm"
          >
            Cancel
          </button>
          <button className="bg-[#047670] text-white px-4 py-2 rounded hover:bg-gray-800 text-sm">
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportIssueModal;
