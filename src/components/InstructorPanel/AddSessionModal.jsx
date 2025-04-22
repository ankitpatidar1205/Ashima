import React, { useState } from "react";

const AddSessionModal = ({ isOpen, onClose, onAddSession }) => {
  const [sessionTitle, setSessionTitle] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");

  if (!isOpen) return null; // Don't render modal if it's not open

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSession({
      title: sessionTitle,
      time: sessionTime,
      date: sessionDate,
      description: sessionDescription,
    });
    onClose(); // Close the modal after adding the session
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 z-50 bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md w-1/3 max-h-[550px] overflow-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-xl font-semibold mb-4">Add New Session</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Session Title</label>
            <input
              type="text"
              value={sessionTitle}
              onChange={(e) => setSessionTitle(e.target.value)}
              placeholder="Enter session title"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Session Time</label>
            <input
              type="time"
              value={sessionTime}
              onChange={(e) => setSessionTime(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Session Date</label>
            <input
              type="date"
              value={sessionDate}
              onChange={(e) => setSessionDate(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Session Description</label>
            <textarea
              value={sessionDescription}
              onChange={(e) => setSessionDescription(e.target.value)}
              placeholder="Add a detailed description"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-400 text-sm rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-700 text-white text-sm rounded-md"
            >
              Add Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSessionModal;
