import React, { useState } from "react";

const AddInstructorModal = ({ isOpen, onClose }) => {
  const [selectedCourse, setSelectedCourse] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-xl text-gray-500" >
          
        </button>

        <h2 className="text-xl font-semibold mb-4">Add New Instructor</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter full name"
            className="border px-3 py-2 rounded w-full"
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="border px-3 py-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Enter mobile number"
            className="border px-3 py-2 rounded w-full"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="border px-3 py-2 rounded w-full"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="border px-3 py-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Enter area of expertise"
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div className="mt-4">
          <p className="mb-2 font-medium text-gray-600">Profile Image</p>
          <div className="border border-dashed border-gray-400 p-6 rounded text-center">
            <div className="text-3xl text-gray-400 mb-2">📤</div>
            <p className="font-semibold mb-1">Upload a file or drag and drop</p>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            placeholder="Enter account number"
            className="border px-3 py-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Enter IFSC code"
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div className="mt-4">
          <p className="mb-2 font-medium text-gray-600">Course Categories</p>
          <select
            className="w-full border px-3 py-2 rounded"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select Courses</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Science">Data Science</option>
            <option value="Machine Learning">Machine Learning</option>
          </select>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" />
          <span>Active</span>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button onClick={onClose} className="border px-4 py-2 rounded">
            Cancel
          </button>
          <button className="bg-[#047670] text-white px-4 py-2 rounded">
            Save Instructor
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddInstructorModal;
